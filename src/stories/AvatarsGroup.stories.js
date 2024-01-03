import avatar1 from '@/stories/assets/avatars/avatar-1.jpg'
import avatar2 from '@/stories/assets/avatars/avatar-2.jpg'
import avatar3 from '@/stories/assets/avatars/avatar-3.jpg'
import avatar4 from '@/stories/assets/avatars/avatar-4.jpg'
import avatar5 from '@/stories/assets/avatars/avatar-5.jpg'
import avatar6 from '@/stories/assets/avatars/avatar-6.jpg'
import avatar7 from '@/stories/assets/avatars/avatar-7.jpg'
import avatar8 from '@/stories/assets/avatars/avatar-8.jpg'
import avatar9 from '@/stories/assets/avatars/avatar-9.jpg'
import avatar10 from '@/stories/assets/avatars/avatar-10.jpg'
import avatar11 from '@/stories/assets/avatars/avatar-11.jpg'
import avatar12 from '@/stories/assets/avatars/avatar-12.jpg'
import avatar13 from '@/stories/assets/avatars/avatar-13.jpg'
import avatar14 from '@/stories/assets/avatars/avatar-14.jpg'
import avatar15 from '@/stories/assets/avatars/avatar-15.jpg'
import avatar16 from '@/stories/assets/avatars/avatar-16.jpg'
import avatar17 from '@/stories/assets/avatars/avatar-17.jpg'
import avatar18 from '@/stories/assets/avatars/avatar-18.jpg'
import avatar19 from '@/stories/assets/avatars/avatar-19.jpg'
import avatar20 from '@/stories/assets/avatars/avatar-20.jpg'
import { getAvatarColor } from '@/utils/stringUtils.js'
import AvatarsGroup from '@/components/ui/AvatarsGroup.vue'

const users = [
  {
    label: 'ИИ',
    color: getAvatarColor('Иванова Ирина'),
    image: avatar1,
    title: 'АА',
    onClick: () => alert('Нажат аватар 1')
  },
  {
    label: 'АА',
    color: 'orange',
    title: 'АА',
    image: avatar2,
    onClick: () => alert('Нажат аватар 2')
  },
  {
    label: 'АА',
    color: 'amber',
    title: 'АА',
    image: avatar3,
    onClick: () => alert('Нажат аватар 3')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar4,
    onClick: () => alert('Нажат аватар 4')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar5,
    onClick: () => alert('Нажат аватар 5')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar6,
    onClick: () => alert('Нажат аватар 6')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar7,
    onClick: () => alert('Нажат аватар 7')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar8,
    onClick: () => alert('Нажат аватар 8')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar9,
    onClick: () => alert('Нажат аватар 9')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar10,
    onClick: () => alert('Нажат аватар 10')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar11,
    onClick: () => alert('Нажат аватар 11')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar12,
    onClick: () => alert('Нажат аватар 12')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar13,
    onClick: () => alert('Нажат аватар 13')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar14,
    onClick: () => alert('Нажат аватар 14')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar15,
    onClick: () => alert('Нажат аватар 15')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar16,
    onClick: () => alert('Нажат аватар 16')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar17,
    onClick: () => alert('Нажат аватар 17')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar18,
    onClick: () => alert('Нажат аватар 18')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar19,
    onClick: () => alert('Нажат аватар 19')
  },
  {
    label: 'АА',
    color: 'red',
    title: 'АА',
    image: avatar20,
    onClick: () => alert('Нажат аватар 20')
  }
]

export default {
  title: 'Компоненты/Аватары/Группа аватаров',
  component: AvatarsGroup,
  argTypes: {
    isLoading: {
      control: 'boolean'
    },
    size: {
      control: {
        type: 'select'
      },
      options: AvatarsGroup.props.size.array
    }
  },
  parameters: {
    layout: 'centered'
  }
}

const Template = (args) => ({
  components: { AvatarsGroup },

  setup() {
    return { args, users }
  },
  template: `
      <AvatarsGroup v-bind="args" :avatars="users.slice(0, 5)" :maxCol="2" @plusOnClick="() => alert('Нажат аватар +')"/>`
})

export const _AvatarsGroup = Template.bind({})
_AvatarsGroup.storyName = 'Аватар'
_AvatarsGroup.args = {
  size: '10'
}
