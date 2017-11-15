const store = new Vuex.Store({
  state: {
    hide: true,
    content: {},
    history: '',
    gagarin: '',
    hideTheContent: true
  },
  mutations: {
    hideFirstScreen(state) {
      state.hide = !state.hide
    },
    hideTheContent(state) {
      state.hideTheContent = false
    },
    setJSON(state, newJson) {
      state.content = newJson
    },
    setHtmlHistory(state, newHtml) {
      state.history = newHtml
    },
    setHtmlGagarin(state, newHtml) {
      state.gagarin = newHtml
    },
  },
  actions: {
    getData({commit}) {
      let sourceUrl = [
        {
          url:'https://trevadim.github.io/vue/data/data.json',
          set: 'setJSON'
        },
        {
          url:'https://trevadim.github.io/vue/data/History.html',
          set: 'setHtmlHistory'
        },
        {
          url:'https://trevadim.github.io/vue/data/Gagarin.html',
          set: 'setHtmlGagarin'
        }
      ]
      function Data(source, setData) {
        return new Promise((resolve, reject) => {
          this.Vue.http.get(source).then (response => {
            commit(setData, response.body)
          }, response => {
            console.log ("Ошибка доступа к файлу")
          })
        })
      }
      sourceUrl.forEach(function (item) {
        Data(item.url, item.set)
      })
    }
  }
})

//---------------Menu---------------

const theMenu= ('the-menu', {
  template: `
    <div>
      <transition name='goDown'>
        <nav v-if="!trigger" @click='Hide'>
          <router-link to="/planets">Planets</router-link>
          <router-link to="/history">History</router-link>
          <router-link to="/gagarin">Gagarin</router-link>
          <router-link to="/contacts">Contacts</router-link>
        </nav>
      </transition>
    </div>
  `,
  computed: {
    trigger: () =>
      store.state.hide
  },
  methods: {
    Hide: function () {
      store.commit('hideTheContent')
    }
  }
})

//---------------Links---------------

const thePlanets = ('the-planets',{
  template: `
    <section class="planets">
      <h1>Планеты Солнечной системы</h1>
      <h2>Выберите интересующую Вас планету</h2>
      <ul>
        <li><router-link :to="{name: 'mercury'}">Меркурий</router-link></li>
        <li><router-link :to="{name: 'venus'}">Венера</router-link></li>
        <li><router-link :to="{name: 'earth'}">Земля</router-link></li>
        <li><router-link :to="{name: 'mars'}">Марс</router-link></li>
        <li><router-link :to="{name: 'jupiter'}">Юпитер</router-link></li>
        <li><router-link :to="{name: 'saturn'}">Сатурн</router-link></li>
        <li><router-link :to="{name: 'uran'}">Уран</router-link></li>
        <li><router-link :to="{name: 'neptun'}">Нептун</router-link></li>
      </ul>
      <router-view></router-view>
    </section>
  `
})

const TheMercury = {
  template: `
    <section>
      <h1>{{content.planets.mercury.title}}</h1>
      <img :src="content.planets.mercury.url" alt="">
      <p v-for="item in content.planets.mercury.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheVenus = {
  template: `
    <section>
      <h1>{{content.planets.venus.title}}</h1>
      <img :src="content.planets.venus.url" alt="">
      <p v-for="item in content.planets.venus.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheEarth = {
  template: `
    <section>
      <h1>{{content.planets.earth.title}}</h1>
      <img :src="content.planets.earth.url" alt="">
      <p v-for="item in content.planets.earth.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheMars = {
  template: `
    <section>
      <h1>{{content.planets.mars.title}}</h1>
      <img :src="content.planets.mars.url" alt="">
      <p v-for="item in content.planets.mars.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheJupiter = {
  template: `
    <section>
      <h1>{{content.planets.jupiter.title}}</h1>
      <img :src="content.planets.jupiter.url" alt="">
      <p v-for="item in content.planets.jupiter.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheSaturn = {
  template: `
    <section>
      <h1>{{content.planets.saturn.title}}</h1>
      <img :src="content.planets.saturn.url" alt="">
      <p v-for="item in content.planets.saturn.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheUran = {
  template: `
    <section>
      <h1>{{content.planets.uran.title}}</h1>
      <img :src="content.planets.uran.url" alt="">
      <p v-for="item in content.planets.uran.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}

const TheNeptun = {
  template: `
    <section>
      <h1>{{content.planets.neptun.title}}</h1>
      <img :src="content.planets.neptun.url" alt="">
      <p v-for="item in content.planets.neptun.info">{{item}}</p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
}



const theHistory = ('the-history', {
  template: `
    <div>
      <div v-html='history'></div>
    </div>
  `,
  computed: {
    history: () =>
      store.state.history
  }
})

const theGagarin = ('the-gagarin', {
  template: `
    <div v-html='gagarin'></div>
  `,
  computed: {
    gagarin: () =>
      store.state.gagarin
  }
})

const theContacts = ('the-contacts', {
  template: `
    <section class='contacts'>
      <h1>Контакты</h1>
      <img :src="content.contacts.urlImgSun" alt="солнце">
      <p>Автор: <span>{{content.contacts.author}}</span></p>
      <p>E-mail: <span>{{content.contacts.email}}</span></p>
      <p>Skype: <span>{{content.contacts.skype}}</span></p>
    </section>
  `,
  computed: {
    content: () =>
      store.state.content
  }
})


//---------------Main Page---------------

const theContent = ('the-content', {
  template: `
    <transition name='show'>
      <section v-if='!trigger' class="main-content">
        <h1>{{content.main.cosmos}}</h1>
        <p>{{content.main.infoFly}}</p>
        <p>{{content.main.infoCosmos}}</p>
        <img src='data/yuri-gagarin.jpg' alt="Юрий Гагарин">
      </section>
    </transition>
  `,
  computed: {
    trigger: () =>
      store.state.hide,
    content: () =>
      store.state.content
  }
})


let thePage = ('the-page', {
  template: `
    <div>
      <the-menu></the-menu>
      <the-content v-if='hideTheContent'></the-content>
      <transition name='goTop'>
        <div v-if='trigger' class='first-screen'>
          <p>Как сказал Великий Герой Юрий Гагарин:</p>
          <button class="main-btn" @click='loadData'>Поехали!</button>
        </div>
      </transition>
    </div>
  `,
  computed: {
    trigger: () =>
      store.state.hide,
    hideTheContent: () =>
      store.state.hideTheContent
  },
  methods: {
    loadData: function() {
      store.dispatch('getData')
      store.commit('hideFirstScreen')
    }
  },
  components: {
    'the-menu': theMenu,
    'the-content': theContent
  }
})


//---------------Router---------------
const router = new VueRouter({
  routes: [
    {
      path: '/planets',
      component: thePlanets,
      name: 'planets',
      children: [
        {
          path: 'mercury',
          component: TheMercury,
          name: 'mercury'
        },
        {
          path: 'venus',
          component: TheVenus,
          name: 'venus'
        },
        {
          path: 'earth',
          component: TheEarth,
          name: 'earth'
        },
        {
          path: 'mars',
          component: TheMars,
          name: 'mars'
        },
        {
          path: 'jupiter',
          component: TheJupiter,
          name: 'jupiter'
        },
        {
          path: 'saturn',
          component: TheSaturn,
          name: 'saturn'
        },
        {
          path: 'uran',
          component: TheUran,
          name: 'uran'
        },
        {
          path: 'neptun',
          component: TheNeptun,
          name: 'neptun'
        }
      ]
    },
    {
      path: '/history',
      component: theHistory,
      name: 'history'
    },
    {
      path: '/contacts',
      component: theContacts,
      name: 'contacts'
    },
    {
      path: '/gagarin',
      component: theGagarin,
      name: 'gagarin'
    }
  ]
})


const app = new Vue({
  el: '#app',
  components: {
    'the-page': thePage
  },
  router: router
})