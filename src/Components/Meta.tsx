import React, { FC } from 'react'
import Helmet from 'react-helmet'

interface MetaProps {
  title: string
}

const Meta: FC<MetaProps> = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MC9X84N');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC9X84N" height="0" width="0" style="display:none;visibility:hidden;"></iframe>
            `,
          }}
        />
      </Helmet>
    </>
  )
}

export default Meta
