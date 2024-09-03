<script setup lang="ts">
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'

import type { ICreatorOptions } from 'survey-creator-core'
import { SurveyCreatorModel } from 'survey-creator-core'

const creatorOptions: ICreatorOptions = {
  showLogicTab: true,
  isAutoSave: true
}
const creator = new SurveyCreatorModel(creatorOptions)
</script>

<template>
  <div>
    <SurveyCreatorComponent :model="creator" />
  </div>
</template>
