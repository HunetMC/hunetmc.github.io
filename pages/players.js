// Bootstrap
import Card from 'react-bootstrap/Card';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.text())

// React
import React, { useState, Fragment } from 'react';

// Next.js
import { useRouter } from 'next/router'

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

// Components
import Layout from './components/Layout'
import { Router } from 'next/dist/client/router';

function App () {
    const { data, error } = useSwr(
        `https://api.skura.tech/players/list`,
        fetcher
    )
    const router = useRouter()
    const [field, setField] = useState([]);
    
    if (error) {
        return (
          <p>API サーバーがダウンしています。しばらくお待ちください。</p>
        )
      } else {
        if (!data) {
          return (
            <>読み込み中...</>
          )
        } else {
            var array = JSON.parse(data);
            
            return (
                <Fragment>
                <Layout title="プレイヤー検索">
                  <Container style={{ 'marginTop': '100px' }} className="mx-auto">
                     <h1 className="text-center">プレイヤー検索</h1>
                     <Form className="mx-auto" style={{ 'max-width' : '600px' }}>
                      <Row className="align-items-center">
                        <Col className="my-1">
                            <Typeahead
                              size="lg"
                              id="basic-typeahead-single"
                              labelKey="name"
                              onChange={setField}
                              options={array}
                              placeholder="プレイヤー名を入力してください。"
                              selected={field}
                            />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button
                                size="lg"
                                type="submit"
                                onClick={(e) => {
                                    console.log(field)
                                    router.push("/players/" + field)
                                }}
                            >
                                検索
                            </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </Layout>
                </Fragment>
            )
        }
      }
}
  
export default App;