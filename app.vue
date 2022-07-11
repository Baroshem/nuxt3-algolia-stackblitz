<template>
  <div>
    <h1>Algolia Search Results for query: 'Samsung' with optional filters</h1>
    {{ result }}
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { result, search } = useAlgoliaSearch('test_index'); // pass your index as param
onMounted(async () => {
  await search({
    query: 'Samsung',
    requestOptions: { filters: 'objectID:ecommerce-sample-data-99' },
  });
});
</script>
