import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function ChatIndex() {
  return (
    <View style={{ marginTop: 100 }}>
      <Link href={'/soporte/home/group'}>
        <Text style={{ color: 'white' }}>ChatIndex</Text>
      </Link>
    </View>
  )
}
