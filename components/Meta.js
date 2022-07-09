import Head from 'next/head'


const Meta = ({ title, subTitle, keywords, description }) => {

  return (
    <Head>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <link rel="icon" href="/favicon.ico" />

      {/* {subTitle
        ? <title>{`${subTitle} - `}{title}</title>
        : <title>{title}</title>
      } */}

      {subTitle
        ? <title>{`${subTitle} - ${title}`}</title>
        : <title>{title}</title>
      }
    </Head>
  )
}


Meta.defaultProps = {
  title: "Stella Ebam Consulting",
  // description: `We are a real estate firm committed to helping you make the best investment and marketing decisions.`,
  description: `
    A registered property development, estate surveying and valuation 
    company providing consulting services to the real estate industry, 
    financial institutions and the public sector in Nigeria.
    `,
  keywords: "Real Estate, Development, investment, Marketing, Consulting"
}

export default Meta