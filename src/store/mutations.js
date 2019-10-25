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
    state.postList = JSON.stringify(postList)
    try {
      localStorage.postList = state.postList
    } catch (error) {
    }
  },
  changePostDetails (state, PostDetails) {
    // console.log(PostDetails)
    state.PostContent = PostDetails.content.rendered.replace(/(<\/?a.*?>)/g, '')
    state.PostTitle = PostDetails.title.rendered
    state.PostID = PostDetails.id
    // console.log(state.PostContent)
    try {
      localStorage.PostContent = state.PostContent
      localStorage.PostTitle = state.PostTitle
      localStorage.PostID = state.PostID
    } catch (error) {
    }
  },
  handlePageNext (state, PageSize) {
    state.PageSize = parseInt(state.PageSize) + parseInt(PageSize)
    console.log(state.PageSize)
    try {
      localStorage.PageSize = state.PageSize
    } catch (error) {
    }
  },
  commitRefresh (state, PageSize) {
    state.PageSize = PageSize
    try {
      localStorage.PageSize = state.PageSize
    } catch (error) {
    }
  }
}
