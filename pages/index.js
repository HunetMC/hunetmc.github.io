// Components
import Layout from './components/Layout'
import News from './components/News'

export default function Home() {
  return (
    <Layout title="ホーム">
      <p>すばらしいニュース一覧</p>
      <News />
    </Layout>
  )
}
