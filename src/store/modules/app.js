const app = {
    state: {
        loading: false,
        menu: [],
        openNames: '1',
        activeName: '',
        conTabs: [
            {title: '首页', name: 'Home'}
        ]
    },
    mutations: {
        loadingStatus: (state, flag) => { state.loading = flag },
        setConTabs: (state, data) => { state.conTabs.push(data) },
        removeConTabs: (state, index) => { state.conTabs.splice(index, 1) },
        setOpenName: (state, name) => { state.openNames = name },
        setActiveName: (state, name) => { state.activeName = name }
    },
    actions: {

    }
}
export default app