<template>
  <nav class="card-bg pb-5 mobile-box text-xs">
    <ul class="flex font-bold w-full ">
      <li class="flex-1 w-full flex justify-center">
        <button class=" w-full p-5 px-2 "
          :class="buttonWidthClass(locale)"
          ><RouterLink to="/" class="nav-link">
          {{ t('home') }}
        </RouterLink>
      </button>
      </li>
      <li class="flex-1 w-full flex justify-center">
        <button class=" w-full p-5 px-2 "
          :class="buttonWidthClass(locale)"
          ><RouterLink to="/report" class="nav-link">
          {{ t('my_report') }}
        </RouterLink>
      </button>
      </li>
      <li class="flex-1 w-full flex justify-center">
        <button class=" w-full p-5 px-2 "
          :class="buttonWidthClass(locale)"
          ><RouterLink to="/machines" class="nav-link">
          {{ t('machines') }}
        </RouterLink>
      </button>
      </li>
      <li class="flex-1 w-full flex justify-center">
        <button class=" w-full p-5 px-2 "
          :class="buttonWidthClass(locale)"
          ><RouterLink to="/shop" class="nav-link">
          {{ t('my_order') }}
        </RouterLink>
      </button>
      </li>
      <li class="flex-1 w-full flex justify-center">
        <button class=" w-full p-5 px-2 "
          :class="buttonWidthClass(locale)"
          ><RouterLink to="/profile" class="nav-link">
          {{ t('profile') }}
        </RouterLink>
      </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t,locale  } = useI18n()

const buttonWidthClass = (lang) => {
  switch (lang) {
    case 'en':
      return 'min-w-[70px] max-w-[100px] '
    case 'de':
      return 'min-w-[40px] max-w-[90px] px-2.5'
    case 'it':
      return 'min-w-[70px] max-w-[90px]'
    default:
      return 'min-w-[60px] max-w-[90px]'
  }
}

</script>












