const initState = {
    memes: [
        { id: '1', title: `Blyatkatchu isn't real`, meme_path: '/images/blyatkachu.jpg' },
        { id: '2', title: `Is ThIs LoSs`, meme_path: '/images/isthisloss.jpg' },
        { id: '3', title: `Protection from angular`, meme_path: '/images/reactgloves.png' },
        { id: '4', title: `Show me da wae`, meme_path: '/images/uknuckles.png' },
    ]
}

const memeReducer = (state = initState, action) => {
    return state;
}

export default memeReducer;