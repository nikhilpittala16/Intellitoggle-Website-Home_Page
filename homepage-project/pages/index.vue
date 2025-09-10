<script setup lang="ts">
import ControlPanel from "~/components/ControlPanel.vue";
import ControlPower from "~/components/ControlPower.vue";
import DartCodeAI from "~/components/DartCodeAI.vue";
import DartNative from "~/components/DartNative.vue";
import FeatureFlag from "~/components/FeatureFlag.vue";
import LaunchFeatures from "~/components/launchFeatures.vue";
import LogoCloud from "~/components/LogoCloud.vue";
import OpenFeature from "~/components/OpenFeature.vue";
import Reasons from "~/components/Reasons.vue";
import Subscription from "~/components/Subscription.vue";
</script>

<template>
  <div>
    <DartNative />
    <LogoCloud />
    <ControlPanel />
    <OpenFeature />
    <ControlPower />
    <FeatureFlag />
    <DartCodeAI />
    <Subscription />
    <Reasons />
    <LaunchFeatures />
    <Footer />
  </div>
</template>
