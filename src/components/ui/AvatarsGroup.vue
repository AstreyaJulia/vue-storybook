<script>
import { reactive, computed } from 'vue'
import AvatarBasic from '@/components/ui/AvatarBasic.vue'

const avatarsSpace = {
  6: '-space-x-1.5',
  8: '-space-x-2',
  10: '-space-x-2.5',
  12: '-space-x-3'
}

export default {
  name: 'Avatars-Group',
  components: { AvatarBasic },

  props: {
    /** **Массив аватаров**
     *
     */
    avatars: {
      type: Array,
      required: true
    },
    /** **Максимальное количество отображаемых аватаров** */
    maxCol: {
      type: Number,
      required: true
    },
    /** **Размер аватара**  */
    size: {
      type: String,
      array: Object.keys(avatarsSpace),
      validator: function (value) {
        return Object.keys(avatarsSpace).indexOf(value) !== -1
      },
      default: avatarsSpace[1]
    },
    /** **Состояние загрузки** */
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  emits: ['plusOnClick'],

  setup(props, { emit }) {
    props = reactive(props)

    const avatarsSplit =
      props.avatars.length <= props.maxCol ? props.avatars : props.avatars.slice(0, props.maxCol)

    return {
      containerClass: computed(() => ({
        'isolate flex': true,
        [avatarsSpace[props.size]]: true
      })),
      avatarZIndex: computed((key) => avatarsSplit.length - key),
      avatarsSplit,
      plusOnClick: () => emit('plusOnClick')
    }
  }
}
</script>

<template>
  <div :class="containerClass">
    <AvatarBasic
      v-for="(avatar, key) in avatarsSplit"
      :key="key"
      :label="avatar.label"
      :size="size"
      :image="avatar.image || null"
      :shape="'default'"
      :class="'ring-2 ring-white'"
      :color="avatar.color"
      :is-loading="isLoading"
      :icon="avatar.icon || null"
      :title="avatar.title"
      :style="{ zIndex: avatarsSplit.length - key }"
      @click="avatar.onClick"
    />
    <AvatarBasic
      v-if="avatars.length > maxCol"
      :label="'+' + (avatars.length - maxCol)"
      :size="size"
      :shape="'default'"
      :class="'ring-2 ring-white z-0'"
      :color="'brand'"
      :is-loading="isLoading"
      :title="'еще ' + (avatars.length - maxCol)"
      :disabled="!plusOnClick"
      @click="plusOnClick"
    />
  </div>
</template>
