export default {
  // changeCity (state, city) {
  //   state.city = city
  //   try {
  //     localStorage.city = city
  //   } catch (error) {
  //   }
  // }
  changePostList (state, postList) {
    console.log(postList)
    state.postList = postList
    try {
      localStorage.postList = state.postList
    } catch (error) {
    }
  },
  changePostDetails (state, PostDetails) {
    state.PostContent = PostDetails.content.rendered
    state.PostTitle = PostDetails.title.rendered
    // console.log(state.PostDetails)
    try {
      localStorage.PostContent = state.PostContent
      localStorage.PostTitle = state.PostTitle
    } catch (error) {
    }
  },
  handlePageNext (state, PageSize) {
    state.PageSize = parseInt(state.PageSize) + parseInt(PageSize)
    try {
      localStorage.PageSize = state.PageSize
    } catch (error) {
    }
  },
  handleRefresh (state, a) {
    if (a === 1) {
      state.PageSize = a
      state.postList = []
      console.log(state.postList)
      try {
        localStorage.PageSize = state.PageSize
      } catch (error) {
      }
    }
  }
}
