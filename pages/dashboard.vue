<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-facebook"
            title="100+"
            sub-title="Curtidas"
            color="indigo"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-google"
            title="150+"
            sub-title="Conexões"
            color="red"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-twitter"
            title="200+"
            sub-title="Seguidores"
            color="light-blue"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-instagram"
            title="50+"
            sub-title="Impressões"
            color="purple"
          >
          </mini-statistic>
        </v-flex>
        <!-- mini statistic  end -->
        <v-flex lg8 sm12 xs12>
          <v-widget title="Tráfego do Site" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', siteTrafficData],
                  ['color', [color.lightBlue.base, color.green.lighten1]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}],
                ]"
                height="400px"
                width="85%"
              >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-widget title="Setores Das Vagas Mais Visitadas" content-bg="white">
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', locationData],
                  ['legend.bottom', '0'],
                  ['color', [color.lightBlue.base, color.indigo.base, color.pink.base, color.green.base, color.cyan.base, color.teal.base]],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],
                  ['series[0].radius', ['50%', '70%']],
                ]"
                height="400px"
                width="100%"
              >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <!-- social/weather card start -->
        <v-flex lg4 sm12 xs12>
          <profile-card>
          </profile-card>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            card-color="indigo"
            title="Visitas (Hoje)"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.indigo.lighten1]"
            type="line"
          >
          </box-chart>
          <box-chart class="mt-4"
                     card-color="pink"
                     title="Currículos Recebidos (Hoje)"
                     sub-title="17%"
                     icon="trending_up"
                     :data="siteTrafficData"
                     :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
                     gradient
                     type="area"
          >
          </box-chart>
        </v-flex>
        <!-- statistic section -->
        <v-flex lg4 sm12 xs12>
          <linear-statistic
            title="Vagas"
            sub-title="Crescimento de vagas"
            icon="trending_up"
            color="success"
            :value="15"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
                            title="Currículos Recebidos"
                            sub-title="Crescimento de Currículos"
                            icon="trending_up"
                            color="pink"
                            :value="30"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
                            title="Entrevistas"
                            sub-title="Aumento de Entrevistas Marcadas"
                            icon="trending_up"
                            color="primary"
                            :value="50"
          >
          </linear-statistic>
          <linear-statistic class="mt-4"
                            title="Gastos"
                            sub-title="Gasto Reduzido"
                            icon="trending_down"
                            color="orange"
                            :value="25"
          >
          </linear-statistic>
        </v-flex>
        <!-- Circle statistic -->
        <v-flex lg4 sm12 xs12 v-for="(item,index) in trending" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>
        </v-flex>               
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import API from '@/api';
  import EChart from '@/components/chart/echart';
  import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
  import PostListCard from '@/components/widgets/card/PostListCard';
  import ProfileCard from '@/components/widgets/card/ProfileCard';
  import PostSingleCard from '@/components/widgets/card/PostSingleCard';
  import WeatherCard from '@/components/widgets/card/WeatherCard';
  import PlainTable from '@/components/widgets/list/PlainTable';
  import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
  import VWidget from '@/components/VWidget';
  import Material from 'vuetify/es5/util/colors';
  import VCircle from '@/components/circle/VCircle';
  import BoxChart from '@/components/widgets/chart/BoxChart';
  import ChatWindow from '@/components/chat/ChatWindow';
  import CircleStatistic from '@/components/widgets/statistic/CircleStatistic';
  import LinearStatistic from '@/components/widgets/statistic/LinearStatistic';

  export default {
    layout: 'dashboard',
    components: {
      VWidget,
      MiniStatistic,
      ChatWindow,
      VCircle,
      WeatherCard,
      PostSingleCard,
      PostListCard,
      ProfileCard,
      EChart,
      BoxChart,
      CircleStatistic,
      LinearStatistic,
      PlainTable,
      PlainTableOrder
    },
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      linearTrending: [
        {
          subheading: 'Sales',
          headline: '2,55',
          caption: 'increase',
          percent: 15,
          icon: {
            label: 'trending_up',
            color: 'success'
          },
          linear: {
            value: 15,
            color: 'success'
          }
        },
        {
          subheading: 'Revenue',
          headline: '6,553',
          caption: 'increase',
          percent: 10,
          icon: {
            label: 'trending_down',
            color: 'error'
          },
          linear: {
            value: 15,
            color: 'error'
          }
        },
        {
          subheading: 'Orders',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'arrow_upward',
            color: 'info'
          },
          linear: {
            value: 50,
            color: 'info'
          }
        }
      ],
      trending: [
        {
          subheading: 'Currículos',
          headline: '15+',
          caption: 'Currículos Recebidos',
          percent: 15,
          icon: {
            label: 'email',
            color: 'info'
          },
          linear: {
            value: 15,
            color: 'info'
          }
        },
        {
          subheading: 'Candidaturas',
          headline: '90%',
          caption: 'Candidaturas Respondidas',
          percent: 90,
          icon: {
            label: 'list',
            color: 'primary'
          },
          linear: {
            value: 90,
            color: 'success'
          }
        },
        {
          subheading: 'Candidaturas',
          headline: '100%',
          caption: 'Candidaturas Visualizadas',
          percent: 100,
          icon: {
            label: 'bug_report',
            color: 'primary'
          },
          linear: {
            value: 100,
            color: 'error'
          }
        },
      ]
    }),
    computed: {
      activity () {
        return API.getActivity();
      },
      posts () {
        return API.getPost(3);
      },
      siteTrafficData () {
        return API.getMonthVisit;
      },
      locationData () {
        return API.getLocation;
      }
    },

  };
</script>
