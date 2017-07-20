<template lang="html">
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ cat.comment }}</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-media>
      <img :src="cat.url" :alt="cat.comment">
    </md-card-media>

    <md-card-content>
      {{ cat.detail }}
    </md-card-content>
  </md-card>
</template>

<script>
import {firebaseApp} from '@/firebase'
export default {
  data () {
    return {
      cat: {}
    }
  },
  props: ['id'],
  firebase: {
    cat: {
      asObject: true,
      source: firebaseApp.database().ref('cats').child(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
