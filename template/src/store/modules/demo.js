const state = {
    list: [],
    str: 'test'
}

const getters = {
    list: state => state.list,
    str: state => state.str
}

const mutations = {
    setList (state, list) {
        state.list = list
    },

    getStr (state) {
        return state.str
    },

    setStr (state, str) {
        state.str = str
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
