import React, { memo, useEffect, useCallback, useState } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { ProductList } from "./productSection"
import ProductItem from "./productItem"
import { getDummyDataRandomly } from "../data/data"
import styled from "styled-components"

const SubPage = memo(({ title, description, bannerBackground }) => {
  const [dummyData, setDummyData] = useState(getDummyDataRandomly(20))

  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      setTimeout(() => {
        setDummyData([...dummyData].concat(getDummyDataRandomly(20)))
      }, 500)
    }
  }, [dummyData])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [onScroll])

  return (
    <Wrap>
      <Header
        title={title}
        description={description}
        bannerBackground={bannerBackground}
      />
      <div className="center">
        <ProductList>
          {dummyData.map((v, i) => {
            return <ProductItem data={v} key={`${i}.${v.id}`} />
          })}
        </ProductList>
      </div>
    </Wrap>
  )
})

const Wrap = styled.div`
  padding-bottom: 50px;
`

SubPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bannerBackground: PropTypes.object,
}

export default SubPage
