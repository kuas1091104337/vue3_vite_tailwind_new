<script setup>
  import { useTestStore } from '@/stores/test.js';
  const store = useTestStore();
</script>

<template>
  <div class="item">
    {{ store.num }}
    <i class="item_i"><slot name="icon"></slot></i>
    <div class="item_details">
      <h3 class="item_details_h"><slot name="heading"></slot></h3>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.item{
  margin-top: 2rem;
  display: flex;
  &_i{
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
  }
  &_details{
    flex: 1;
    margin-left: 1rem;
    &_h{
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
      color: var(--color-heading);
    }
  }
}
@media (min-width: 1024px) {
  .item {
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    margin-top: 0;
    &_i {
      width: 50px;
      height: 50px;
      background: var(--color-background);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      position: absolute;
      top: calc(50% - 25px);
      left: -26px;
    }
    &:before, &:after {
      content:'';
      height: calc(50% - 25px);
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
    }
    &:before {bottom: calc(50% + 25px)}
    &:after {top: calc(50% + 25px)}
    &:first-of-type:before { display: none; }
    &:last-of-type:after { display: none; }
  }
}
</style>
