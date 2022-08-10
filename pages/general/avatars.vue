<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>        
        <v-flex lg12>
          <v-widget title="Ultimos Currículos">
            <div slot="widget-content">
              <v-layout justify-center column class="ma-0">
                <v-subheader>Today</v-subheader>
                <v-expansion-panel popout>
                  <v-expansion-panel-content
                    hide-actions
                    v-for="(message, i) in messages"
                    :key="i"
                  >
                    <v-layout align-center row spacer slot="header">
                      <v-flex xs4 sm2 md1>
                        <v-avatar
                          size="36px"
                          slot="activator"
                        >
                          <img
                            src="@/static/avatar/me.jpeg"
                            alt=""
                            v-if="message.avatar"
                          >
                          <v-icon :color="message.color" v-else>{{ message.icon }}</v-icon>
                        </v-avatar>
                      </v-flex>
                      <v-flex sm5 md3 hidden-xs-only>
                        <strong v-html="message.name"/>
                        <span class="grey--text" v-if="message.total">&nbsp;({{ message.total }})</span>
                      </v-flex>
                      <v-flex no-wrap xs5 sm3>
                        <v-chip
                          label
                          small
                          :color="`${message.color} lighten-4`"
                          class="ml-0"
                          v-if="message.new"
                        >{{ message.new }} new</v-chip>
                        <strong v-html="message.title"/>
                      </v-flex>
                      <v-flex
                        class="grey--text"
                        ellipsis
                        hidden-sm-and-down
                        v-if="message.excerpt"
                      >
                        &mdash;
                        {{ message.excerpt }}
                      </v-flex>
                    </v-layout>
                    <v-card>
                      <v-divider></v-divider>
                      <v-card-text v-text="lorem"></v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-layout>
            </div>
          </v-widget>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import VWidget from '@/components/VWidget';
  export default {
    components: {
      VWidget
    },
    data: () => ({
      messages: [
        {
          color: 'blue',
          icon: 'people',          
          name: 'Roberto De Oliveira',
          title: 'robertooliveira@gmail.com',
          excerpt: 'Desenvolvedor Front-End'
        },
        {
          color: 'red',
          icon: 'people',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter'
        },
        
      ],
      slider: 56,
      tile: false,
      lorem: 'Sla'
    }),
    computed: {
      avatarSize () {
        return `${this.slider}px`;
      }
    },
    methods: {

    }
  };
</script>
