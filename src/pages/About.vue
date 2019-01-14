<template>
  <Layout>
    <h1>Email Information</h1>
    <ul>
      <li v-for="(item, index) in $page.allFaker.edges" :key="index"> {{item.node.email}}
        <img :src="item.node.avatar.src">
      </li>
      
    </ul>
  </Layout>
</template>

<page-query>
{
	allFaker (perPage: 5) {
    edges {
      node {
        author
        email
        avatar
      }
    }
  }
}
</page-query>


<script>
export default {}
</script>
