<script setup>
const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <button v-for="locale in locales" @click="setLocale(locale.code)"
      :key="locale.code" :disabled="locale.code === $i18n.locale"
      class="btn btn-primary m-2"
    >
      {{ locale.language }}
    </button>
    <h1>{{ $t('Bienvenue') }}</h1>
  </div>
</template>
