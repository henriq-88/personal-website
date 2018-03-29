<script>
export default {
  head () {
    let routeName = this.$route.name
    if (routeName === 'index') routeName = 'home'
    routeName = this.$options.filters.titlecase(routeName)
    return {
      title: `${routeName} - ${process.env.DESCRIPTION}`
    }
  }
}
</script>