import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name='HomeScreen'
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name='Property'
        options={{
          title: 'Property',
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name='Search'
        options={{
          title: 'Search',
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name='Favourite'
        options={{
          title: 'Favourite',
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name='Profile'
        options={{
          title: 'Profile',
          headerShown: false
        }}
      />
    </Tabs>
  )
}

export default _layout