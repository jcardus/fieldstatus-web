import {firestoreAction, vuexfireMutations} from 'vuexfire'
export const state = () => ({
  counter: 0,
  jobs: []
})

export const mutations = {
  ...vuexfireMutations,
  increment(state) {
    state.counter++
  }
}

export const actions = {
  bindJobs: firestoreAction(async function({ bindFirestoreRef }) {
    const ref = this.$fire.firestore.collection('jobs')
    await bindFirestoreRef('jobs', ref, {wait: true})
  })
}

export const getters = {
  jobs: (state) => {
    return state.jobs
  }
}
