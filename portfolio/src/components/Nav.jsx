import React from 'react'
import { useState } from 'react'
import Button from './Button'



const Nav = () => {
  let [open,setOpen]=useState(false);
  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 '>
        <div className='cursor-pointer flex items-center'>
          <svg id="logo-80" width="84" height="40" viewBox="0 0 84 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" d="M76.0619 38.9452V39.04C76.0385 39.0936 76.0103 39.1452 75.9776 39.1939C75.9776 39.1939 75.9776 39.1939 75.9776 39.1939L75.8572 39.336L75.7368 39.4426C75.6112 39.5476 75.4688 39.6316 75.3154 39.6912H75.2552C75.1057 39.7499 74.9467 39.782 74.7857 39.786H69.9702C69.8417 39.7901 69.7139 39.7668 69.5954 39.7178C69.477 39.6687 69.3707 39.595 69.284 39.5018L64.023 34.1497L60.5678 39.3123L60.4956 39.407L60.3752 39.5491H60.315H60.2548H60.1705C60.074 39.6301 59.9641 39.6942 59.8455 39.7386L59.7251 39.7978C59.5741 39.8519 59.416 39.8838 59.2556 39.8925H54.44C54.3116 39.8966 54.1837 39.8734 54.0653 39.8243C53.9468 39.7753 53.8406 39.7016 53.7538 39.6083L51.96 37.5836L45.6516 39.7978C45.5041 39.8631 45.3438 39.8954 45.1821 39.8925C44.9635 39.8984 44.7499 39.8269 44.5802 39.6912L44.4838 39.5965L41.4741 36.21C41.3537 36.6126 41.2574 37.0152 41.125 37.3941L41.0528 37.5599C41.032 37.6147 41.0036 37.6665 40.9685 37.7138L40.8963 37.8085L40.7638 37.9506L40.5953 38.1046C40.5022 38.1748 40.4012 38.2344 40.2943 38.2822L39.9452 38.7084C39.7796 38.7695 39.6044 38.8015 39.4275 38.8032H35.4788C35.3511 38.8096 35.2236 38.7885 35.1051 38.7415C34.9866 38.6944 34.8799 38.6226 34.7926 38.5308L33.4924 37.0626L32.9265 38.9097C32.9131 38.9726 32.8886 39.0327 32.8543 39.0874L32.782 39.2413L32.7098 39.336L32.5895 39.4781C32.5393 39.5354 32.4827 39.587 32.4209 39.632C32.3208 39.6982 32.2162 39.7575 32.1079 39.8096L31.9514 39.8925C31.7902 39.956 31.6192 39.9921 31.4457 39.9991H24.2946C24.1642 40.0049 24.034 39.9825 23.9134 39.9334C23.7927 39.8843 23.6845 39.8097 23.5964 39.7149L22.549 38.5308H18.7568L18.6725 38.815C18.6579 38.8759 18.6377 38.9353 18.6123 38.9926C18.5796 39.0414 18.5514 39.0929 18.528 39.1465L18.4558 39.2413L18.3354 39.3834C18.2852 39.4407 18.2287 39.4923 18.1669 39.5373C18.0668 39.6034 17.9622 39.6628 17.8538 39.7149L17.6973 39.7978C17.5362 39.8613 17.3652 39.8973 17.1917 39.9044H12.7253C12.5968 39.9085 12.469 39.8852 12.3505 39.8362C12.2321 39.7871 12.1258 39.7134 12.0391 39.6202L10.6546 38.069H6.52524C6.3976 38.0754 6.27011 38.0544 6.1516 38.0074C6.03308 37.9603 5.92642 37.8884 5.83905 37.7967L0.216875 31.8052C0.261898 31.8499 0.314969 31.8861 0.373386 31.9118C0.26926 31.851 0.182335 31.7655 0.12058 31.6631C0.0413462 31.511 0 31.3426 0 31.1717C0 31.0008 0.0413462 30.8324 0.12058 30.6803C3.30029 24.2563 5.90647 17.5726 7.90974 10.7048V10.6219L7.51244 10.1719C7.51244 10.1719 7.57265 10.1719 7.60877 10.2548C7.47556 10.1345 7.38159 9.97806 7.33873 9.80525C7.29588 9.63243 7.30605 9.45099 7.36798 9.28387L8.68021 4.95012C8.78974 4.62307 8.99609 4.33564 9.27279 4.12468C9.54948 3.91372 9.88391 3.78884 10.2332 3.76603H15.0488L15.8313 1.18471C15.9423 0.858504 16.149 0.571948 16.4254 0.361205C16.7018 0.150462 17.0355 0.0249814 17.3843 0.00062735H21.8869C22.0207 -0.00449731 22.1539 0.0218341 22.2753 0.0774333C22.3968 0.133032 22.5029 0.216303 22.5851 0.320336L24.1261 2.06095L24.2465 1.74124C24.3553 1.41155 24.5631 1.12199 24.8424 0.910645C25.1218 0.699298 25.4597 0.576061 25.8116 0.55715H41.7149C41.8483 0.554799 41.9806 0.582374 42.1016 0.637768C42.2225 0.693161 42.3291 0.774924 42.4132 0.876858L47.2287 6.3355L47.1445 1.78861C47.1512 1.58831 47.1995 1.39147 47.2864 1.21023C47.3734 1.02899 47.4971 0.867174 47.6501 0.734756C47.941 0.437424 48.3383 0.263297 48.7577 0.249294H53.5732C53.7275 0.244624 53.8803 0.280577 54.0158 0.353436C54.1512 0.426295 54.2644 0.533405 54.3437 0.663713V0.663713C54.3228 0.616153 54.2944 0.57218 54.2594 0.533463L57.8711 4.5712L58.4851 2.54643C58.5917 2.21767 58.7973 1.92848 59.0746 1.71706C59.3519 1.50565 59.6878 1.38196 60.0381 1.36234H77.6149C77.7493 1.35674 77.8833 1.38158 78.0065 1.43495C78.1296 1.48833 78.2386 1.56881 78.3252 1.67019V1.67019L83.8149 7.86296L83.8871 7.94586C83.946 8.03496 83.9831 8.13629 83.9955 8.24188C83.9955 8.24188 83.9955 8.24188 83.9955 8.30109C84.0015 8.38782 84.0015 8.47484 83.9955 8.56157C83.9997 8.6286 83.9997 8.69585 83.9955 8.76288L78.4696 26.8676L78.3974 27.0452L78.3131 27.1991C78.3131 27.1991 78.3131 27.2583 78.2409 27.2938L78.1205 27.4359L77.9399 27.5899C77.8436 27.6609 77.7353 27.7083 77.6389 27.7675C77.5426 27.8267 77.5306 27.8385 77.4824 27.8504C77.3192 27.9207 77.143 27.957 76.9648 27.9569H74.557L75.5081 29.0226V29.1055C75.5692 29.2151 75.6061 29.3361 75.6164 29.4607L76.1461 38.3887V38.7084C76.1461 38.7084 76.1461 38.7084 76.1461 38.7913C76.1461 38.8742 76.0619 38.9097 76.0619 38.9452Z" fill="black"></path><path d="M1.30035 30.9053C4.51517 24.4076 7.15348 17.649 9.18585 10.7048H12.9299C10.9514 17.6322 8.3986 24.3883 5.29727 30.9053H1.30035ZM25.4985 1.71758L24.1863 6.00399H40.0656L41.3778 1.71758H25.4985ZM13.3152 31.3198H17.7936C20.6025 26.6667 22.8298 21.697 24.427 16.5187H20.4422C18.7876 21.7437 16.3793 26.7083 13.2911 31.2606L13.3152 31.3198ZM21.1284 10.2904L19.8041 14.6478H27.4006L23.1991 28.4424H20.4542L19.1299 32.7643H26.281L31.7949 14.6478H39.1747L40.511 10.2904H21.1284ZM17.7575 13.7361L19.1059 9.31941H21.8869L23.2111 4.98567H20.4542L21.6581 1.23212H17.0713L15.8674 4.98567H9.90815L8.5839 9.31941H14.6033L7.50037 32.788H11.9668L16.1563 19.0289L17.7334 20.5564L19.3346 15.2991L17.7575 13.7361ZM32.4449 16.6608C32.5602 21.6753 31.8612 26.6758 30.3743 31.4737H34.3351C35.8305 26.6694 36.6409 21.6842 36.7428 16.6608H32.4449ZM53.3083 1.39789H48.4326L48.565 8.9642H53.4528L53.3083 1.39789ZM43.1114 11.3324L41.7028 15.974H45.0617L39.9452 32.788L48.5771 29.7568L50.1542 24.5586L46.711 25.7427L51.1052 11.3205L43.1114 11.3324ZM54.0548 32.7643L60.014 23.8482H55.1985L49.179 32.7643H54.0548ZM59.7612 2.52277L54.2113 20.7103H71.788L77.3259 2.52277H59.7612ZM68.5736 16.1753H60.2066L62.9756 7.04597H71.4028L68.6218 16.1753M64.0229 23.8126L64.5527 32.7288H69.3682L68.8265 23.8126H64.0229Z" fill="white"></path></svg>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in font-mono ${open ? 'top-15 opacity-100':'top-[-350px]'}`}>
          <li className='md:ml-8 text-xl md:my-0 my-7 font-bold'>
          <a href="https://www.linkedin.com/in/samael-musgrove-47957a207/"><i class="fa-brands fa-linkedin-in text-white rounded-full shadow-lg bg-sky-500 shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300"></i> </a> 
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7 font-bold'>
          <a href="https://github.com/DevSamael"><i class="fa-brands fa-github text-white rounded-full shadow-lg bg-sky-500 shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300"></i></a>
          </li>
          <Button>
            <a href="/">
            Get In Touch!
            </a>
          </Button>
        </ul>
      </div>
    </div>
  )
}
export default Nav