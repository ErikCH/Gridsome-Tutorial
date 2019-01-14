<template>
    <Layout>
        <h2>Title</h2>
        {{$page.post.title}}
        <h3>Body</h3>
        {{$page.post.body}}

    </Layout>
</template>

<page-query>
query BlogPost ($path:String!) {
     post: blogPost (path: $path){
      title
      body
  }
}
</page-query>
<script>
export default {
    metaInfo() {
        return {
            title: "Title"
        }
    }
}
</script>
