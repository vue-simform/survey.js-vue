<template>
  <div>
    <h1 class="green">Change themes:</h1>
    <input
      type="radio"
      id="dark_panels"
      name="themes"
      value="LayeredDarkPanelless"
      v-model="selectedTheme"
    />
    <label for="dark_panels">Dark Panels</label><br />
    <input
      type="radio"
      id="contrast_dark"
      name="themes"
      value="ContrastDark"
      v-model="selectedTheme"
    />
    <label for="contrast_dark">Contrast Dark</label><br />
    <input
      type="radio"
      id="contrast_light"
      name="themes"
      value="ContrastLight"
      v-model="selectedTheme"
    />
    <label for="contrast_light">Contrast Light</label>
    <br />
    <survey v-if="surveyModel" :model="surveyModel" style="height: auto" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Model } from 'survey-core'
import 'survey-core/defaultV2.min.css'
import { ContrastDark, ContrastLight, LayeredDarkPanelless } from 'survey-core/themes'

// Define your survey JSON here or you can get it from API
const surveyJson = {
  title: 'Personal Details',
  pages: [
    {
      elements: [
        {
          type: 'text',
          name: 'Name',
          title: 'Full name'
        },
        {
          type: 'radiogroup',
          name: 'gender',
          title: 'Gender',
          choices: ['Male', 'Female', 'Transgender']
        },
        {
          type: 'panel',
          name: 'Contacts',
          state: 'collapsed',
          title: 'Contacts (optional)',
          elements: [
            {
              type: 'text',
              name: 'Phone',
              title: 'Phone'
            },
            {
              type: 'text',
              name: 'Address',
              title: 'Address'
            }
          ]
        }
      ]
    }
  ]
}

const selectedTheme = ref('')

// Create a ref to hold the survey model
const surveyModel = ref<Model | null>(null)

onMounted(() => {
  // Initialize the survey model when the component is mounted
  surveyModel.value = new Model(surveyJson)
  surveyModel.value.onComplete.add(alertResults)
})

const alertResults = (sender: any) => {
  const results = JSON.stringify(sender.data)
  alert(results)
}

watch(
  () => selectedTheme.value,
  (newTheme) => {
    if (surveyModel.value) {
      if (newTheme === 'LayeredDarkPanelless') {
        surveyModel.value.applyTheme(LayeredDarkPanelless)
      } else if (newTheme === 'ContrastDark') {
        surveyModel.value.applyTheme(ContrastDark)
      } else if (newTheme === 'ContrastLight') {
        surveyModel.value.applyTheme(ContrastLight)
      }
    }
  },
  { immediate: true }
)
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3,
input,
label {
  font-size: 1.2rem;
}

label {
  margin-left: 10px;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
