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
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155258262-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-155258262-1');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WHC7BKH');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHC7BKH" height="0" width="0" style="display:none;visibility:hidden;"></iframe>
            `,
          }}
        />
      </Helmet>
    </>
  )
}

export default Meta
