<script setup lang="ts">
import { BarChart } from '@/components/ui/chart-bar'

const categories = ref<('total' | 'predicted' | 'name')[]>(['total', 'predicted'])

const data = ref([
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
])

function updateData() {
  // Create 2 random rows
  const newRows = [
    { name: 'Aug', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Sep', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
  ]

  // Add the new rows to the data
  data.value = [...data.value, ...newRows]
}

function updateCategories() {
  // Add if does not have 'name', or else remove it
  if (categories.value.includes('name')) {
    categories.value = categories.value.filter(cat => cat !== 'name')
  }
  else {
    categories.value = [...categories.value, 'name']
  }
}
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <!-- Alert -->
    <Alert>
      <AlertTitle>What's up?</AlertTitle>
      <AlertDescription>
        <p>- Update data works as expected, it is reactive and updates the chart.</p>
        <p>- Updating categories do change the bars but not the labels.</p>
        <p>- Labels change come out of style and change their style after click.</p>
      </AlertDescription>
    </Alert>

    <!-- Actions -->
    <div class="space-x-2">
      <Button size="sm" @click="updateData">
        -> Update Data
      </Button>
      <Button size="sm" @click="updateCategories">
        -> Update Categories
      </Button>
    </div>

    <!-- Chart -->
    <BarChart
      :data="data"
      index="name"
      :categories="categories"
      :y-formatter="(tick, i) => {
        return typeof tick === 'number'
          ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
          : ''
      }"
    />
  </div>
</template>
