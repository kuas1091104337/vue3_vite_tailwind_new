<script setup>

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">test</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  a{
    display: inline-block;
    border-left: 1px solid var(--color-border);
    padding: 0 1rem;
    &.router-link-exact-active {
      color: var(--color-text);
      &:hover{background-color: transparent;}
    }
    &:first-of-type{border: 0;}
  }
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      place-items: flex-start;
    }
  }
  .logo {margin: 0 2rem 0 0;}
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>