import React, { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'

import s from './Header.module.scss' 

// import Cart from '@/components/Cart'
// import SendRequest from '@/components/SendRequest'

export default function Header ({props}) {
  const headerRef = useRef(null)
  const router = useRouter()
  const topRef = useRef(null)
  const topMenuRef = useRef([])
  const mainMenuRef = useRef([])
  const layerRef = useRef(null)
  const logoRef = useRef(null)

  const [styleHeader, setStyleHeader] = useState({
    backgroundColor: router.pathname === '/' ? 'transparent' : 'white',
  })

  const [style, setStyle] = useState({
    color: router.pathname === '/' ? 'white' : 'black',
  })

  const [styleSvg, setStyleSvg] = useState({
    fill: router.pathname === '/' ? 'white' : 'black',
  })

  const [styleBlack, setStyleBlack] = useState({
    color: 'black',
  })

  useEffect(() => {
    const onResize = () => { 
      const { height } = headerRef.current.getBoundingClientRect()

      document.documentElement.style.setProperty('--headerHeight', height)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, []) 

  useEffect(() => {
    setStyleHeader({
      backgroundColor: router.pathname === '/' ? 'transparent' : 'white',
    })
  
    setStyle({
      color: router.pathname === '/' ? 'white' : 'black',
    })
  
    setStyleSvg({
      fill: router.pathname === '/' ? 'white' : 'black',
    })
  }, [router.pathname])

  return (
    <>
      <div className={s.topHeader}
        ref={topRef}>
        <nav>
          <ul>
          {props.props.items.items.map((elem, index) => 
            <>
              <li
              key={`top-menu-${index}`}
              ref={e => {
                topMenuRef.current[index] = e
              }}
              >{ elem.title }</li>
            </>
          )}
          </ul>
        </nav>
      </div>
      <header 
        className={s.header}
        ref={headerRef}
        style={styleHeader}
      >
        <div className={s.logo} ref={logoRef}>
        <Link href={'/'}>
          <svg width="213px" height="76px" viewBox="0 0 213 76" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <polygon id="path-1" points="0 0 99.2478882 0 99.2478882 76 0 76"></polygon>
            </defs>
            <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="TMB-1440x1024-Home" transform="translate(-36.000000, -45.000000)">
                    <g id="Group-7" transform="translate(36.000000, 45.000000)">
                        <rect id="Rectangle" fill="#FFFFFF" x="24" y="26" width="64" height="26"></rect>
                        <g id="Group-6">
                            <g id="Group-3">
                                <g id="Clip-2"></g>
                                <path d="M86.4524212,29.8287883 C85.4051766,28.3962212 83.1944763,28.3088286 82.0148988,28.2530318 L70.6282136,28.2530318 L65.2468949,47.7234394 L77.0117703,47.7234394 C78.523188,47.6656259 80.529679,47.609829 82.383013,46.1214652 C83.6371538,45.1265336 84.4929521,43.6139687 84.8933098,42.1524948 C85.1613346,41.1864701 85.3259112,39.9186045 84.5332566,38.8436751 C83.984444,38.0692419 83.3268093,37.8810116 82.6006571,37.6578242 C83.3106876,37.3526222 83.8621871,37.1354851 84.5251957,36.6044068 C85.5005639,35.8380406 86.4336124,34.6252996 86.8285962,33.1927326 C87.1731995,31.9510849 87.093934,30.6536403 86.4524212,29.8287883 L86.4524212,29.8287883 Z M62.1501679,47.7234394 L67.5294715,28.2530318 L58.8391555,28.2530318 L54.3505808,36.6044068 C53.3993952,38.4860375 53.1501793,38.9821588 52.1318196,41.3773894 C52.3494637,39.6134026 52.3890965,39.1730781 52.4898577,37.2443898 L52.6067406,28.2530318 L43.9164247,28.2530318 L38.5317472,47.7234394 L44.3060346,47.7234394 L47.61436,35.7533369 C47.9220175,34.6548787 47.980459,34.3496767 48.2323619,33.134919 C48.1316007,35.1718398 48.1450355,35.2014188 48.1235398,36.7717973 L48.0650983,47.7234394 L52.5825579,47.7234394 L58.9634276,36.1694603 C59.7325713,34.7584053 59.8675913,34.4821102 60.5991175,33.0233253 C60.0294809,34.6757185 59.907224,35.0367173 59.4806684,36.4719733 L56.3684914,47.7234394 L62.1501679,47.7234394 Z M35.7037167,33.0495431 L40.5758557,33.0495431 L41.9126207,28.2234527 L26.0877414,28.2234527 L24.7516481,33.0495431 L29.6298328,33.0495431 L25.5711724,47.7234394 L31.6470716,47.7234394 L35.7037167,33.0495431 Z M97.6926667,38.9498908 C92.7432775,55.457688 67.5052888,76.0003361 41.9126207,76.0003361 C16.3085329,76.0003361 8.10052717,62.0612102 8.10052717,49.7079246 C8.10052717,26.2335896 35.8729955,13.5206496 35.8729955,13.5206496 C0.250559469,24.4057389 0.61397146,52.4009624 0.61397146,52.4009624 C0.61397146,52.4009624 -5.58149766,30.6059105 21.3848812,11.8064094 C38.04675,0.194616684 64.2473439,-3.48057991 80.5484877,3.61099661 C95.4685316,10.1056142 102.642728,22.4454548 97.6926667,38.9498908 L97.6926667,38.9498908 Z M79.0478179,32.3598135 L75.5352831,32.3598135 L74.6183564,35.667961 L78.0032603,35.667961 C78.5735686,35.667961 79.9916143,35.667961 80.4423526,34.0471637 C80.8823431,32.4445172 79.5885696,32.3840146 79.0478179,32.3598135 L79.0478179,32.3598135 Z M78.8442803,41.6825914 C78.7112755,42.1787126 78.3854811,42.6459271 78.0032603,42.9511291 C77.396678,43.4761572 76.8183088,43.502375 76.2641223,43.534643 L72.449304,43.534643 L73.4965486,39.753903 L77.1736599,39.753903 C77.7359073,39.7781041 79.3501014,39.8628077 78.8442803,41.6825914 L78.8442803,41.6825914 Z" id="Fill-1" fill="#E20714" mask="url(#mask-2)"></path>
                            </g>
                            <path d="M202.406641,55.4732842 C202.485907,54.5818793 203.037406,54.2289475 203.885815,54.2289475 C204.675783,54.2289475 205.336105,54.372137 205.336105,55.3462288 C205.336105,56.2692295 204.06114,56.2214997 202.690116,56.428553 C201.307001,56.6194723 199.919855,57.0651747 199.919855,58.9326882 C199.919855,60.6200384 201.149813,61.4005219 202.690116,61.4005219 C203.684293,61.4005219 204.724148,61.1296047 205.428805,60.3813893 C205.447614,60.6523064 205.508742,60.9225514 205.588008,61.1773345 L207.855134,61.1773345 C207.647566,60.8432257 207.570988,60.0950103 207.570988,59.3441059 L207.570988,55.0564885 C207.570988,53.0827594 205.619579,52.7143658 203.997324,52.7143658 C202.173547,52.7143658 200.299389,53.3536766 200.171758,55.4732842 L202.406641,55.4732842 Z M205.336105,57.9908645 C205.336105,58.4842967 205.274976,59.8886292 203.527777,59.8886292 C202.801625,59.8886292 202.157425,59.6782146 202.157425,58.8345396 C202.157425,58.0069985 202.785503,57.7683494 203.478068,57.6224709 C204.171977,57.4974322 204.957243,57.4792814 205.336105,57.1445004 L205.336105,57.9908645 Z M191.046826,61.1773345 L193.281709,61.1773345 L193.281709,56.8581214 C193.281709,55.1869053 193.801636,54.4998647 195.015473,54.4998647 C196.054656,54.4998647 196.446953,55.1714435 196.446953,56.5240126 L196.446953,61.1773345 L198.679149,61.1773345 L198.679149,56.109906 C198.679149,54.069624 198.082643,52.7143658 195.708038,52.7143658 C194.760883,52.7143658 193.785515,53.1627573 193.22058,54.085758 L193.172887,54.085758 L193.172887,52.9395699 L191.046826,52.9395699 L191.046826,61.1773345 Z M185.506304,52.7143658 C182.95839,52.7143658 181.304563,54.4360008 181.304563,57.0651747 C181.304563,59.6782146 182.95839,61.4005219 185.506304,61.4005219 C188.072356,61.4005219 189.726854,59.6782146 189.726854,57.0651747 C189.726854,54.4360008 188.072356,52.7143658 185.506304,52.7143658 L185.506304,52.7143658 Z M185.506304,59.6943487 C183.997574,59.6943487 183.538774,58.3733753 183.538774,57.0651747 C183.538774,55.7442014 183.997574,54.4198668 185.506304,54.4198668 C187.033172,54.4198668 187.491971,55.7442014 187.491971,57.0651747 C187.491971,58.3733753 187.033172,59.6943487 185.506304,59.6943487 L185.506304,59.6943487 Z M177.722839,61.1773345 L179.957722,61.1773345 L179.957722,49.7981407 L177.722839,49.7981407 L177.722839,61.1773345 Z M176.482133,57.6090259 C176.641336,55.0753116 175.302555,52.7143658 172.532295,52.7143658 C170.060959,52.7143658 168.377575,54.5953243 168.377575,57.0651747 C168.377575,59.615023 169.965572,61.4005219 172.532295,61.4005219 C174.372194,61.4005219 175.710974,60.5723086 176.339052,58.6281585 L174.372194,58.6281585 C174.231128,59.1370525 173.507663,59.6943487 172.608873,59.6943487 C171.368167,59.6943487 170.673587,59.0442819 170.612458,57.6090259 L176.482133,57.6090259 Z M170.612458,56.1737698 C170.642015,55.5371481 171.052449,54.4198668 172.468479,54.4198668 C173.555357,54.4198668 174.043041,55.0275818 174.24725,56.1737698 L170.612458,56.1737698 Z M167.540586,55.839661 C167.39952,53.7361875 165.639558,52.7143658 163.717035,52.7143658 C161.071718,52.7143658 159.562987,54.6107861 159.562987,57.1794574 C159.562987,59.6493078 161.214799,61.4005219 163.669341,61.4005219 C165.811524,61.4005219 167.30682,60.206604 167.590295,58.0231325 L165.432662,58.0231325 C165.292268,59.0254589 164.693075,59.6943487 163.653891,59.6943487 C162.253983,59.6943487 161.79787,58.2779157 161.79787,57.0967705 C161.79787,55.8847019 162.270104,54.4198668 163.701585,54.4198668 C164.631946,54.4198668 165.212331,54.9159881 165.355412,55.839661 L167.540586,55.839661 Z M153.81557,61.1773345 L156.050452,61.1773345 L156.050452,57.4631474 C156.050452,56.0144463 156.620089,54.8178394 158.255779,54.8178394 C158.523804,54.8178394 158.854972,54.8527965 159.059181,54.8978373 L159.059181,52.7936915 C158.9161,52.7459616 158.728013,52.7143658 158.571497,52.7143658 C157.48462,52.7143658 156.381621,53.4330022 155.973202,54.4675966 L155.942302,54.4675966 L155.942302,52.9395699 L153.81557,52.9395699 L153.81557,61.1773345 Z M146.986648,55.4732842 C147.065914,54.5818793 147.617413,54.2289475 148.465823,54.2289475 C149.253103,54.2289475 149.913425,54.372137 149.913425,55.3462288 C149.913425,56.2692295 148.640475,56.2214997 147.270123,56.428553 C145.883649,56.6194723 144.499862,57.0651747 144.499862,58.9326882 C144.499862,60.6200384 145.729821,61.4005219 147.270123,61.4005219 C148.261613,61.4005219 149.300797,61.1296047 150.008812,60.3813893 C150.024262,60.6523064 150.088078,60.9225514 150.168015,61.1773345 L152.43447,61.1773345 C152.227573,60.8432257 152.148308,60.0950103 152.148308,59.3441059 L152.148308,55.0564885 C152.148308,53.0827594 150.199587,52.7143658 148.577332,52.7143658 C146.750196,52.7143658 144.878725,53.3536766 144.751765,55.4732842 L146.986648,55.4732842 Z M149.913425,57.9908645 C149.913425,58.4842967 149.852296,59.8886292 148.105098,59.8886292 C147.381632,59.8886292 146.734745,59.6782146 146.734745,58.8345396 C146.734745,58.0069985 147.36551,57.7683494 148.057404,57.6224709 C148.749297,57.4974322 149.536578,57.4792814 149.913425,57.1445004 L149.913425,57.9908645 Z M134.126163,61.1773345 L139.571297,61.1773345 C141.601971,61.1773345 143.537257,60.19047 143.537257,57.8792708 C143.537257,56.460821 142.845364,55.3912696 141.475012,54.9932969 C142.453067,54.5180154 143.00188,53.7361875 143.00188,52.6189062 C143.00188,50.5013153 141.554277,49.7981407 139.412766,49.7981407 L134.126163,49.7981407 L134.126163,61.1773345 Z M136.596827,51.7436353 L138.911647,51.7436353 C139.791628,51.7436353 140.610481,51.9661504 140.610481,53.0511636 C140.610481,54.0064324 139.963594,54.404405 139.099735,54.404405 L136.596827,54.404405 L136.596827,51.7436353 Z M136.596827,56.109906 L139.287822,56.109906 C140.343128,56.109906 141.066593,56.5717425 141.066593,57.7360813 C141.066593,58.9145374 140.215497,59.2325122 139.240129,59.2325122 L136.596827,59.2325122 L136.596827,56.109906 Z M128.508391,57.6090259 C128.664907,55.0753116 127.328814,52.7143658 124.558553,52.7143658 C122.087889,52.7143658 120.401819,54.5953243 120.401819,57.0651747 C120.401819,59.615023 121.992502,61.4005219 124.558553,61.4005219 C126.401139,61.4005219 127.737233,60.5723086 128.365311,58.6281585 L126.401139,58.6281585 C126.258058,59.1370525 125.533921,59.6943487 124.63849,59.6943487 C123.395097,59.6943487 122.702532,59.0442819 122.636702,57.6090259 L128.508391,57.6090259 Z M122.636702,56.1737698 C122.668273,55.5371481 123.079379,54.4198668 124.494738,54.4198668 C125.5796,54.4198668 126.069971,55.0275818 126.273508,56.1737698 L122.636702,56.1737698 Z M117.040426,61.1773345 L119.1638,61.1773345 L119.1638,49.7981407 L116.928917,49.7981407 L116.928917,53.9425685 L116.89936,53.9425685 C116.396226,53.1304892 115.449742,52.7143658 114.489824,52.7143658 C112.098426,52.7143658 110.887276,54.7701096 110.887276,56.9858491 C110.887276,59.2674692 112.082975,61.4005219 114.537518,61.4005219 C115.576701,61.4005219 116.488926,61.018011 117.008182,60.1266061 L117.040426,60.1266061 L117.040426,61.1773345 Z M115.089017,54.4198668 C116.53662,54.4198668 117.008182,55.6964716 117.008182,57.0335789 C117.008182,58.3888371 116.568192,59.6943487 115.089017,59.6943487 C113.70523,59.6943487 113.122159,58.3417795 113.122159,57.052402 C113.122159,55.6964716 113.625965,54.4198668 115.089017,54.4198668 L115.089017,54.4198668 Z M205.460377,41.2370233 C205.556436,43.4204948 207.395663,44.1364422 209.285943,44.1364422 C211.141964,44.1364422 213,43.4366288 213,41.2686191 C213,39.7379035 211.725035,39.2606052 210.417827,38.9580922 C209.146221,38.6555792 207.884019,38.5439856 207.884019,37.7298895 C207.884019,37.0609997 208.623606,36.9655401 209.127412,36.9655401 C209.930143,36.9655401 210.590464,37.2041892 210.656967,38.0821491 L212.780341,38.0821491 C212.605016,36.0580011 210.969326,35.4529752 209.190556,35.4529752 C207.443357,35.4529752 205.649136,35.9948095 205.649136,38.0982831 C205.649136,39.5469842 206.940223,40.0115096 208.231309,40.2978886 C209.834755,40.6481314 210.765117,40.8867805 210.765117,41.5711321 C210.765117,42.3670774 209.946264,42.6245495 209.302065,42.6245495 C208.419397,42.6245495 207.599872,42.2265769 207.584422,41.2370233 L205.460377,41.2370233 Z M196.635041,43.9139271 L198.869924,43.9139271 L198.869924,39.594714 C198.869924,37.9234978 199.389851,37.235785 200.601001,37.235785 C201.638169,37.235785 202.03584,37.9046748 202.03584,39.2606052 L202.03584,43.9139271 L204.270051,43.9139271 L204.270051,38.8438095 C204.270051,36.8062166 203.67153,35.4529752 201.293566,35.4529752 C200.349098,35.4529752 199.37373,35.8993499 198.80678,36.8223506 L198.759086,36.8223506 L198.759086,35.6734735 L196.635041,35.6734735 L196.635041,43.9139271 Z M189.80612,38.2098768 C189.88337,37.3157829 190.431511,36.9655401 191.285966,36.9655401 C192.070559,36.9655401 192.732896,37.1087295 192.732896,38.0821491 C192.732896,39.005822 191.457931,38.9580922 190.086908,39.1651456 C188.703121,39.3560649 187.316647,39.8044563 187.316647,41.6665918 C187.316647,43.356631 188.54459,44.1364422 190.086908,44.1364422 C191.079069,44.1364422 192.118253,43.8661973 192.825596,43.1179818 C192.839031,43.388899 192.905534,43.6591439 192.982112,43.9139271 L195.248567,43.9139271 C195.045029,43.5798183 194.965092,42.8316029 194.965092,42.0806984 L194.965092,37.7930811 C194.965092,35.819352 193.013684,35.4529752 191.394116,35.4529752 C189.567652,35.4529752 187.696181,36.0902692 187.571908,38.2098768 L189.80612,38.2098768 Z M192.732896,40.7281293 C192.732896,41.2208893 192.666394,42.6245495 190.922554,42.6245495 C190.198417,42.6245495 189.55153,42.4174962 189.55153,41.5711321 C189.55153,40.7435911 190.182967,40.5049419 190.87486,40.3617525 C191.566753,40.2340247 192.354034,40.2178907 192.732896,39.8810929 L192.732896,40.7281293 Z M184.946744,33.2063121 L182.714548,33.2063121 L182.714548,35.6734735 L181.359646,35.6734735 L181.359646,37.1887274 L182.714548,37.1887274 L182.714548,42.0517916 C182.714548,43.691412 183.90756,44.0093867 185.277912,44.0093867 C185.721261,44.0093867 186.206259,43.9932527 186.585121,43.9300611 L186.585121,42.1633853 C186.349339,42.2077539 186.129008,42.2238879 185.893227,42.2238879 C185.13819,42.2238879 184.946744,42.0329686 184.946744,41.2686191 L184.946744,37.1887274 L186.585121,37.1887274 L186.585121,35.6734735 L184.946744,35.6734735 L184.946744,33.2063121 Z M178.260904,34.3995577 L180.495787,34.3995577 L180.495787,32.5347333 L178.260904,32.5347333 L178.260904,34.3995577 Z M178.260904,43.9139271 L180.495787,43.9139271 L180.495787,35.6734735 L178.260904,35.6734735 L178.260904,43.9139271 Z M174.33995,43.9139271 L176.574833,43.9139271 L176.574833,32.5347333 L174.33995,32.5347333 L174.33995,43.9139271 Z M168.775246,35.4529752 C166.228003,35.4529752 164.576192,37.1725934 164.576192,39.8044563 C164.576192,42.4174962 166.228003,44.1364422 168.775246,44.1364422 C171.344656,44.1364422 172.995796,42.4174962 172.995796,39.8044563 C172.995796,37.1725934 171.344656,35.4529752 168.775246,35.4529752 L168.775246,35.4529752 Z M168.775246,42.4309412 C167.267187,42.4309412 166.808388,41.1092956 166.808388,39.8044563 C166.808388,38.480794 167.267187,37.1564594 168.775246,37.1564594 C170.302786,37.1564594 170.760913,38.480794 170.760913,39.8044563 C170.760913,41.1092956 170.302786,42.4309412 168.775246,42.4309412 L168.775246,42.4309412 Z M155.334376,46.8140182 L157.569259,46.8140182 L157.569259,42.8947945 L157.601503,42.8947945 C158.136881,43.7068738 159.064555,44.1364422 160.040595,44.1364422 C162.415872,44.1364422 163.613587,42.0806984 163.613587,39.8810929 C163.613587,37.540987 162.466253,35.4529752 159.915651,35.4529752 C158.90804,35.4529752 158.025372,35.848931 157.492681,36.7268909 L157.461109,36.7268909 L157.461109,35.6734735 L155.334376,35.6734735 L155.334376,46.8140182 Z M161.378704,39.8172291 C161.378704,41.1570255 160.904454,42.4309412 159.443417,42.4309412 C157.996487,42.4309412 157.492681,41.1570255 157.492681,39.8172291 C157.492681,38.480794 157.961556,37.1564594 159.427967,37.1564594 C160.859448,37.1564594 161.378704,38.5123898 161.378704,39.8172291 L161.378704,39.8172291 Z M149.796542,35.4529752 C147.243925,35.4529752 145.592114,37.1725934 145.592114,39.8044563 C145.592114,42.4174962 147.243925,44.1364422 149.796542,44.1364422 C152.359906,44.1364422 154.011718,42.4174962 154.011718,39.8044563 C154.011718,37.1725934 152.359906,35.4529752 149.796542,35.4529752 L149.796542,35.4529752 Z M149.796542,42.4309412 C148.285796,42.4309412 147.826997,41.1092956 147.826997,39.8044563 C147.826997,38.480794 148.285796,37.1564594 149.796542,37.1564594 C151.320723,37.1564594 151.776835,38.480794 151.776835,39.8044563 C151.776835,41.1092956 151.320723,42.4309412 149.796542,42.4309412 L149.796542,42.4309412 Z M139.842009,43.9139271 L142.074205,43.9139271 L142.074205,40.1997399 C142.074205,38.7510389 142.641155,37.554432 144.279531,37.554432 C144.544869,37.554432 144.878725,37.5867 145.082934,37.6344299 L145.082934,35.530284 C144.939853,35.4825542 144.751765,35.4529752 144.59525,35.4529752 C143.508372,35.4529752 142.405373,36.1695948 141.994268,37.2041892 L141.962696,37.2041892 L141.962696,35.6734735 L139.842009,35.6734735 L139.842009,43.9139271 Z M137.082496,33.2063121 L134.847613,33.2063121 L134.847613,35.6734735 L133.495398,35.6734735 L133.495398,37.1887274 L134.847613,37.1887274 L134.847613,42.0517916 C134.847613,43.691412 136.042641,44.0093867 137.413665,44.0093867 C137.853655,44.0093867 138.341339,43.9932527 138.720873,43.9300611 L138.720873,42.1633853 C138.481733,42.2077539 138.264761,42.2238879 138.025621,42.2238879 C137.270584,42.2238879 137.082496,42.0329686 137.082496,41.2686191 L137.082496,37.1887274 L138.720873,37.1887274 L138.720873,35.6734735 L137.082496,35.6734735 L137.082496,33.2063121 Z M133.129299,40.3456184 C133.285815,37.8119042 131.947035,35.4529752 129.179461,35.4529752 C126.70611,35.4529752 125.022726,37.3319169 125.022726,39.8044563 C125.022726,42.3536324 126.613409,44.1364422 129.179461,44.1364422 C131.01936,44.1364422 132.35814,43.3089011 132.986218,41.3640788 L131.01936,41.3640788 C130.876279,41.8736451 130.154829,42.4309412 129.256039,42.4309412 C128.012646,42.4309412 127.320753,41.7781855 127.257609,40.3456184 L133.129299,40.3456184 Z M127.257609,38.9103624 C127.289181,38.2737406 127.700287,37.1564594 129.112958,37.1564594 C130.202523,37.1564594 130.690207,37.7614853 130.891729,38.9103624 L127.257609,38.9103624 Z M111.470348,43.9139271 L113.781809,43.9139271 L113.781809,35.9309457 L113.814053,35.9309457 L116.568192,43.9139271 L118.474593,43.9139271 L121.226045,35.848931 L121.258289,35.848931 L121.258289,43.9139271 L123.572437,43.9139271 L123.572437,32.5347333 L120.094161,32.5347333 L117.607375,40.3617525 L117.575803,40.3617525 L114.948623,32.5347333 L111.470348,32.5347333 L111.470348,43.9139271 Z M182.759554,23.9736159 C182.854942,26.1570874 184.694841,26.873707 186.585121,26.873707 C188.441142,26.873707 190.299178,26.1732214 190.299178,24.0052117 C190.299178,22.474496 189.024213,21.9971978 187.717005,21.6946848 C186.444727,21.3921718 185.182525,21.2805781 185.182525,20.4664821 C185.182525,19.7975923 185.922112,19.7021326 186.425918,19.7021326 C187.22932,19.7021326 187.889642,19.9407818 187.956144,20.8187417 L190.079518,20.8187417 C189.904194,18.7945937 188.269176,18.1868787 186.489733,18.1868787 C184.742535,18.1868787 182.947642,18.7307298 182.947642,20.8321867 C182.947642,22.2835767 184.238729,22.74743 185.529815,23.0344812 C187.133933,23.384724 188.064295,23.6233731 188.064295,24.3077247 C188.064295,25.10367 187.245442,25.3611421 186.601242,25.3611421 C185.718574,25.3611421 184.89905,24.9631695 184.882928,23.9736159 L182.759554,23.9736159 Z M180.45078,15.9402157 L178.215897,15.9402157 L178.215897,18.4127551 L176.863682,18.4127551 L176.863682,19.9246477 L178.215897,19.9246477 L178.215897,24.787712 C178.215897,26.4273323 179.411596,26.7459793 180.781948,26.7459793 C181.221939,26.7459793 181.71231,26.7298453 182.089157,26.6659814 L182.089157,24.8966166 C181.850689,24.9443465 181.633044,24.9631695 181.397263,24.9631695 C180.638868,24.9631695 180.45078,24.7695612 180.45078,24.0052117 L180.45078,19.9246477 L182.089157,19.9246477 L182.089157,18.4127551 L180.45078,18.4127551 L180.45078,15.9402157 Z M171.182767,26.6505197 L173.41765,26.6505197 L173.41765,22.9363325 C173.41765,21.4876315 173.981912,20.2910246 175.620289,20.2910246 C175.888314,20.2910246 176.216795,20.3253094 176.421004,20.3703502 L176.421004,18.2668766 C176.280611,18.2191468 176.092523,18.1895677 175.936007,18.1895677 C174.84913,18.1895677 173.746131,18.9061874 173.337712,19.9407818 L173.306141,19.9407818 L173.306141,18.4127551 L171.182767,18.4127551 L171.182767,26.6505197 Z M165.639558,18.1868787 C163.088957,18.1868787 161.437145,19.909186 161.437145,22.5383599 C161.437145,25.1513998 163.088957,26.873707 165.639558,26.873707 C168.20561,26.873707 169.857421,25.1513998 169.857421,22.5383599 C169.857421,19.909186 168.20561,18.1868787 165.639558,18.1868787 L165.639558,18.1868787 Z M165.639558,25.1675338 C164.12814,25.1675338 163.672028,23.8458882 163.672028,22.5383599 C163.672028,21.2167143 164.12814,19.8930519 165.639558,19.8930519 C167.166426,19.8930519 167.622538,21.2167143 167.622538,22.5383599 C167.622538,23.8458882 167.166426,25.1675338 165.639558,25.1675338 L165.639558,25.1675338 Z M152.196001,29.5526275 L154.430884,29.5526275 L154.430884,25.631387 L154.462456,25.631387 C154.997834,26.4434663 155.925509,26.873707 156.901549,26.873707 C159.279512,26.873707 160.475212,24.817291 160.475212,22.6176855 C160.475212,20.2775795 159.324519,18.1895677 156.776605,18.1895677 C155.769665,18.1895677 154.886325,18.5875404 154.350947,19.4634835 L154.322062,19.4634835 L154.322062,18.4127551 L152.196001,18.4127551 L152.196001,29.5526275 Z M158.240329,22.5538217 C158.240329,23.893618 157.768095,25.1675338 156.302355,25.1675338 C154.854753,25.1675338 154.350947,23.893618 154.350947,22.5538217 C154.350947,21.2167143 154.823181,19.8930519 156.288921,19.8930519 C157.720401,19.8930519 158.240329,21.2489823 158.240329,22.5538217 L158.240329,22.5538217 Z M143.386116,23.9736159 C143.481503,26.1570874 145.321402,26.873707 147.208995,26.873707 C149.067703,26.873707 150.925739,26.1732214 150.925739,24.0052117 C150.925739,22.474496 149.650774,21.9971978 148.343566,21.6946848 C147.068601,21.3921718 145.809086,21.2805781 145.809086,20.4664821 C145.809086,19.7975923 146.549345,19.7021326 147.052479,19.7021326 C147.855882,19.7021326 148.516203,19.9407818 148.580019,20.8187417 L150.703393,20.8187417 C150.530755,18.7945937 148.895065,18.1868787 147.116294,18.1868787 C145.369096,18.1868787 143.574875,18.7307298 143.574875,20.8321867 C143.574875,22.2835767 144.865961,22.74743 146.156376,23.0344812 C147.760494,23.384724 148.690856,23.6233731 148.690856,24.3077247 C148.690856,25.10367 147.872003,25.3611421 147.227804,25.3611421 C146.342449,25.3611421 145.525611,24.9631695 145.512176,23.9736159 L143.386116,23.9736159 Z M134.56078,26.6505197 L136.795663,26.6505197 L136.795663,22.3313066 C136.795663,20.6574014 137.31559,19.9723776 138.527411,19.9723776 C139.565923,19.9723776 139.960907,20.6412674 139.960907,21.9971978 L139.960907,26.6505197 L142.19579,26.6505197 L142.19579,21.5830911 C142.19579,19.5428091 141.596597,18.1895677 139.218633,18.1895677 C138.274837,18.1895677 137.299469,18.6352702 136.732519,19.5589432 L136.684154,19.5589432 L136.684154,18.4127551 L134.56078,18.4127551 L134.56078,26.6505197 Z M127.731859,20.9464694 C127.808437,20.0523754 128.359937,19.7021326 129.211033,19.7021326 C129.995626,19.7021326 130.658635,19.8453221 130.658635,20.8187417 C130.658635,21.7424146 129.38367,21.6946848 128.012646,21.9017381 C126.62886,22.0926574 125.245073,22.5383599 125.245073,24.4038566 C125.245073,26.0932235 126.472344,26.873707 128.012646,26.873707 C129.004136,26.873707 130.043992,26.6027898 130.751335,25.8545744 C130.767457,26.1254916 130.831272,26.3957365 130.910538,26.6505197 L133.176993,26.6505197 C132.970096,26.3164109 132.893518,25.5681954 132.893518,24.817291 L132.893518,20.5296737 C132.893518,18.5559446 130.94211,18.1868787 129.319855,18.1868787 C127.49339,18.1868787 125.621919,18.8268617 125.496976,20.9464694 L127.731859,20.9464694 Z M130.658635,23.4640496 C130.658635,23.9574819 130.59482,25.3611421 128.847621,25.3611421 C128.124155,25.3611421 127.477269,25.1513998 127.477269,24.3077247 C127.477269,23.4801836 128.108034,23.2415345 128.800599,23.095656 C129.492492,22.9706173 130.279773,22.9517943 130.658635,22.6176855 L130.658635,23.4640496 Z M119.505716,26.6505197 L121.740599,26.6505197 L121.740599,22.9363325 C121.740599,21.4876315 122.30822,20.2910246 123.946597,20.2910246 C124.211263,20.2910246 124.542431,20.3253094 124.746641,20.3703502 L124.746641,18.2668766 C124.606247,18.2191468 124.418159,18.1895677 124.261644,18.1895677 C123.174766,18.1895677 122.071767,18.9061874 121.663349,19.9407818 L121.631777,19.9407818 L121.631777,18.4127551 L119.505716,18.4127551 L119.505716,26.6505197 Z M113.954446,26.6505197 L116.427798,26.6505197 L116.427798,17.3754717 L119.794565,17.3754717 L119.794565,15.2713258 L110.58768,15.2713258 L110.58768,17.3754717 L113.954446,17.3754717 L113.954446,26.6505197 Z" id="Fill-4" fill="#000" style={styleSvg}></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
          </Link>
        </div>
        <div className={s.menuSection}>
          <nav className={s.mainMenu}>
            <ul>
              {props.props.mainMenu.tree.map((elem, index) =>
                {
                  let arr = elem.url.replace('/web', '');
                  if(index !== 1) {
                    return (<>
                      <li
                      key={`menu-${index}`}
                      ref={e => {
                        mainMenuRef.current[index] = e
                      }} style={style}
                      ><Link href={`${ arr }`}>{ elem.title }</Link></li>
                      </>)
                  } else {
                    return (
                      <>
                        <li
                        key={`menu-${index}`}
                        ref={e => {
                          mainMenuRef.current[index] = e
                        }} style={style}
                        ><Link href={`${ arr }`}>{ elem.title }</Link>
                          <nav className={s.subMenu}>
                            <ul>
                            {props.props.mainMenu.items.map((item, index_2) => {
                              let arr_sub = item.url.replace('/web', '');
                              if(item.parent === elem.id) {
                                return(
                                  <>
                                    <li key={`submenu-${index_2}`}
                                        ref={e => {
                                          mainMenuRef.current[index_2] = e
                                        }} style={styleBlack}>
                                          <Link href={arr_sub ? arr_sub : '/'}>{item.title}</Link>
                                    </li>
                                  </>
                                )
                              }}) 
                            }
                            </ul>
                          </nav>
                        </li>
                      </>
                    )
                  }
                }
              )}
            </ul>
          </nav>
          <div className={s.search}>
            <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Group 3</title>
                <defs>
                    <polygon id="path-1" points="0 0 28 0 28 28 0 28"></polygon>
                </defs>
                <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="TMB-1440x1024-Quiénes-somos" transform="translate(-1373.000000, -58.000000)">
                        <g id="Group-3" transform="translate(1373.000000, 58.000000)">
                            <g id="Clip-2"></g>
                            <path d="M11.0832271,19.8333516 C6.25798441,19.8333516 2.33332536,15.9086484 2.33332536,11.0833516 C2.33332536,6.258 6.25798441,2.33335156 11.0832271,2.33335156 C15.9085245,2.33335156 19.8331288,6.258 19.8331288,11.0833516 C19.8331288,15.9086484 15.9085245,19.8333516 11.0832271,19.8333516 M27.6578925,26.0085 L19.6954819,18.046 C21.2377615,16.1407969 22.1664542,13.72 22.1664542,11.0833516 C22.1664542,4.97235156 17.1942132,0 11.0832271,0 C4.97229572,0 0,4.97235156 0,11.0833516 C0,17.1943516 4.97229572,22.1666484 11.0832271,22.1666484 C13.7198459,22.1666484 16.1406703,21.238 18.045852,19.6956484 L26.0082079,27.6581484 C26.23576,27.8856484 26.5344051,28 26.8330502,28 C27.1316953,28 27.4303404,27.8856484 27.6578925,27.6581484 C28.1140358,27.202 28.1140358,26.4647031 27.6578925,26.0085" id="Fill-1" fill="#000000" mask="url(#mask-2)" style={styleSvg}></path>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>
      </header> 
      <div 
        className={s.layer} 
        ref={layerRef}
      />
    </>
  )
}
