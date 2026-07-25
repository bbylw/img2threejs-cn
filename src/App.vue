<script setup>
import { useScrollReveal } from './composables/useScrollReveal'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PipelineSection from './components/PipelineSection.vue'
import DemosSection from './components/DemosSection.vue'
import CostSection from './components/CostSection.vue'
import RoadmapSection from './components/RoadmapSection.vue'
import QuickStartSection from './components/QuickStartSection.vue'
import ScriptsSection from './components/ScriptsSection.vue'
import UpgradeSection from './components/UpgradeSection.vue'
import FooterSection from './components/FooterSection.vue'

useScrollReveal()
</script>

<template>
  <NavBar />
  <HeroSection />
  <FeaturesSection />
  <PipelineSection />
  <DemosSection />
  <CostSection />
  <RoadmapSection />
  <QuickStartSection />
  <ScriptsSection />
  <UpgradeSection />
  <FooterSection />
</template>
