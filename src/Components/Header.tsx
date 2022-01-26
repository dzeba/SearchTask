import React from "react";
import '../App.css';

const Header = (props: any) => {
    return <div className='header'>
        <div className='header_logo'>
            <svg width="165" height="30" viewBox="0 0 165 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.785 12.6716C44.9271 12.6607 43.1218 13.288 41.671 14.4486V6.78159C41.6709 6.70881 41.6564 6.63677 41.6282 6.56965C41.6001 6.50253 41.5589 6.44167 41.507 6.39059C41.4004 6.28579 41.2565 6.22754 41.107 6.22859C41.0116 6.23004 40.9177 6.25258 40.832 6.29459L37.795 7.63959C37.6845 7.67114 37.5875 7.73828 37.519 7.83059C37.4511 7.92243 37.4159 8.03439 37.419 8.14859V21.3186C37.4201 22.4614 37.6484 23.5925 38.0906 24.6463C38.5329 25.7 39.1802 26.6553 39.995 27.4566C41.6569 29.0864 43.8918 29.9993 46.2195 29.9993C48.5472 29.9993 50.7821 29.0864 52.444 27.4566C53.2592 26.6555 53.9069 25.7003 54.3495 24.6465C54.7921 23.5928 55.0207 22.4615 55.022 21.3186C55.0663 20.2056 54.8865 19.0951 54.4934 18.053C54.1003 17.0108 53.5019 16.0582 52.7336 15.2518C51.9654 14.4453 51.043 13.8013 50.0211 13.3581C48.9993 12.9149 47.8988 12.6814 46.785 12.6716ZM46.224 25.9916C45.6139 26.002 45.0081 25.8871 44.4441 25.6542C43.88 25.4214 43.3697 25.0753 42.9447 24.6375C42.5196 24.1997 42.1888 23.6794 41.9726 23.1087C41.7565 22.5381 41.6596 21.9291 41.688 21.3196C41.674 20.713 41.7815 20.1097 42.0043 19.5453C42.227 18.9809 42.5606 18.4668 42.9851 18.0333C43.4097 17.5998 43.9168 17.2558 44.4764 17.0213C45.0361 16.7869 45.637 16.6669 46.2438 16.6684C46.8506 16.6698 47.4509 16.7927 48.0094 17.0299C48.5679 17.267 49.0733 17.6136 49.4958 18.0491C49.9183 18.4846 50.2493 19.0003 50.4694 19.5658C50.6894 20.1313 50.794 20.7351 50.777 21.3416C50.8054 21.9501 50.7084 22.558 50.492 23.1274C50.2755 23.6969 49.9444 24.2157 49.519 24.6518C49.0936 25.0879 48.5831 25.4318 48.0192 25.6623C47.4553 25.8928 46.8501 26.0049 46.241 25.9916H46.224Z" fill="#FF1744"/>
                <path d="M83.804 6.24463C83.7086 6.24611 83.6147 6.26865 83.529 6.31063L80.491 7.65663C80.3805 7.68818 80.2835 7.75531 80.215 7.84763C80.1471 7.93947 80.1119 8.05143 80.115 8.16563V29.0856C80.1151 29.1584 80.1297 29.2304 80.1578 29.2976C80.186 29.3647 80.2272 29.4255 80.279 29.4766C80.3857 29.5813 80.5295 29.6396 80.679 29.6386H83.744C83.8222 29.6465 83.9011 29.638 83.9758 29.6137C84.0505 29.5894 84.1194 29.5499 84.178 29.4976C84.2361 29.4459 84.2825 29.3824 84.3142 29.3114C84.3459 29.2403 84.3622 29.1634 84.362 29.0856V6.78163C84.3575 6.63824 84.2972 6.50227 84.194 6.40263C84.0891 6.3018 83.9495 6.24522 83.804 6.24463Z" fill="#FF1744"/>
                <path d="M74.592 13.2756H71.454C71.3045 13.2745 71.1606 13.3328 71.054 13.4376C71.0022 13.4887 70.961 13.5495 70.9328 13.6166C70.9047 13.6838 70.8901 13.7558 70.89 13.8286V22.1986C70.8893 22.6993 70.789 23.1949 70.595 23.6566C70.401 24.1182 70.1172 24.5367 69.76 24.8876C69.0312 25.6004 68.0524 25.9995 67.033 25.9995C66.0136 25.9995 65.0347 25.6004 64.306 24.8876C63.9488 24.5367 63.6649 24.1182 63.471 23.6566C63.277 23.1949 63.1767 22.6993 63.176 22.1986V13.8176C63.1758 13.672 63.1179 13.5325 63.015 13.4296C62.9084 13.3248 62.7645 13.2665 62.615 13.2676H59.547C59.4693 13.2607 59.391 13.2699 59.317 13.2946C59.243 13.319 59.1749 13.3585 59.117 13.4106C59.0596 13.4623 59.0137 13.5255 58.9823 13.5962C58.9509 13.6668 58.9348 13.7433 58.935 13.8206V22.1996C58.9361 23.2456 59.1486 24.2806 59.5596 25.2425C59.9707 26.2044 60.5718 27.0733 61.327 27.7971C62.0822 28.5209 62.9758 29.0847 63.9543 29.4546C64.9328 29.8245 65.9759 29.9928 67.021 29.9496C68.0651 29.9892 69.1066 29.8183 70.0833 29.447C71.06 29.0758 71.9521 28.5119 72.7063 27.7888C73.4606 27.0657 74.0617 26.1982 74.4738 25.238C74.8858 24.2778 75.1005 23.2445 75.105 22.1996V13.8996C75.1146 13.8255 75.1088 13.7503 75.088 13.6786C75.0687 13.6058 75.0347 13.5377 74.988 13.4786C74.9401 13.4203 74.8809 13.3724 74.814 13.3376C74.745 13.3019 74.6695 13.2808 74.592 13.2756Z" fill="#FF1744"/>
                <path d="M135.79 13.2756H132.549C132.42 13.263 132.291 13.2925 132.18 13.3596C132.07 13.4261 131.984 13.5269 131.937 13.6466L127.446 25.1836L122.871 13.6466C122.833 13.5406 122.763 13.4489 122.671 13.3836C122.579 13.3174 122.47 13.2802 122.357 13.2766H118.879C118.812 13.2701 118.744 13.2769 118.679 13.2966C118.613 13.3175 118.552 13.3515 118.5 13.3966C118.448 13.4401 118.405 13.4939 118.374 13.5546C118.343 13.6153 118.325 13.6817 118.321 13.7496C118.334 13.8872 118.368 14.022 118.421 14.1496L124.49 29.2576C124.525 29.3749 124.6 29.4762 124.702 29.5436C124.805 29.6114 124.928 29.6414 125.051 29.6286H129.63C129.739 29.6275 129.846 29.5948 129.937 29.5346C130.026 29.4743 130.095 29.3896 130.137 29.2906L136.237 14.1496C136.295 14.0233 136.331 13.8881 136.344 13.7496C136.34 13.6817 136.322 13.6153 136.291 13.5546C136.26 13.4936 136.217 13.4396 136.165 13.3956C136.112 13.3517 136.051 13.3187 135.986 13.2986C135.92 13.2785 135.851 13.2717 135.783 13.2786L135.79 13.2756Z" fill="#FF1744"/>
                <path d="M163.925 6.24464C163.83 6.24606 163.736 6.2686 163.65 6.31064L160.613 7.65664C160.502 7.68757 160.404 7.75481 160.336 7.84764C160.268 7.93937 160.233 8.05141 160.236 8.16564V29.0196C160.229 29.0969 160.237 29.1748 160.261 29.2486C160.286 29.3229 160.326 29.3911 160.379 29.4486C160.432 29.5065 160.497 29.5522 160.569 29.5826C160.641 29.6139 160.718 29.6299 160.796 29.6296H163.924C164.074 29.6308 164.217 29.5725 164.324 29.4676C164.376 29.4167 164.417 29.3559 164.446 29.2887C164.474 29.2216 164.488 29.1495 164.488 29.0766V6.78164C164.483 6.63726 164.422 6.50045 164.318 6.40064C164.212 6.29973 164.071 6.24381 163.925 6.24464Z" fill="#FF1744"/>
                <path d="M147.083 12.6726C145.935 12.6655 144.797 12.885 143.734 13.3186C142.675 13.7503 141.712 14.3884 140.902 15.1956C140.096 15.9988 139.46 16.9557 139.031 18.0096C138.604 19.0597 138.395 20.1853 138.415 21.3186C138.415 26.1956 142.373 29.9606 147.594 29.9606C148.838 29.9774 150.074 29.7512 151.231 29.2946C152.385 28.8402 153.438 28.1634 154.331 27.3026C154.417 27.1977 154.464 27.067 154.466 26.9316C154.458 26.7928 154.398 26.6622 154.297 26.5666L152.389 24.6456C152.283 24.544 152.142 24.4872 151.995 24.4872C151.849 24.4872 151.708 24.544 151.602 24.6456C150.497 25.549 149.099 26.0158 147.673 25.9576C146.634 26.0207 145.601 25.7522 144.724 25.191C143.847 24.6298 143.171 23.8047 142.793 22.8346H155.146C155.316 22.8369 155.48 22.776 155.607 22.6636C155.732 22.5521 155.811 22.3975 155.827 22.2306V21.3226C155.843 20.1815 155.628 19.049 155.195 17.9932C154.762 16.9375 154.119 15.9804 153.306 15.1796C152.487 14.3697 151.515 13.7318 150.446 13.3036C149.377 12.8739 148.235 12.6594 147.083 12.6726V12.6726ZM142.746 19.6346C143.015 18.7114 143.591 17.9078 144.38 17.3571C145.168 16.8064 146.121 16.5416 147.08 16.6066C148.035 16.5583 148.98 16.8312 149.762 17.3816C150.54 17.9276 151.108 18.7222 151.374 19.6346H142.746Z" fill="#FF1744"/>
                <path d="M89.771 21.2466L95.385 14.2176C95.5046 14.1026 95.5761 13.9464 95.585 13.7806C95.5849 13.7078 95.5703 13.6358 95.5422 13.5687C95.514 13.5016 95.4728 13.4407 95.421 13.3896C95.3143 13.2848 95.1705 13.2266 95.021 13.2276H91.501C91.3749 13.2285 91.2513 13.263 91.143 13.3276C91.0357 13.3929 90.948 13.4858 90.889 13.5966L85.129 20.9816C85.0763 21.0283 85.034 21.0855 85.005 21.1496C84.976 21.2134 84.9611 21.2826 84.9611 21.3526C84.9611 21.4226 84.976 21.4919 85.005 21.5556C85.034 21.6197 85.0763 21.677 85.129 21.7236L91.096 29.2916C91.1572 29.3871 91.2397 29.4672 91.337 29.5256C91.435 29.5828 91.5448 29.617 91.658 29.6256H95.414C95.5635 29.6267 95.7073 29.5684 95.814 29.4636C95.8658 29.4125 95.907 29.3517 95.9352 29.2846C95.9633 29.2174 95.9779 29.1454 95.978 29.0726C95.9721 28.9948 95.9507 28.919 95.915 28.8496C95.8791 28.7803 95.8298 28.7188 95.77 28.6686L89.771 21.2466Z" fill="#FF1744"/>
                <path d="M107.221 12.6726C105.529 12.7502 103.897 13.3228 102.528 14.3195C101.159 15.3162 100.112 16.693 99.5181 18.2792C98.9242 19.8653 98.8091 21.5909 99.1872 23.2419C99.5652 24.8928 100.42 26.3964 101.645 27.5661C102.87 28.7357 104.411 29.52 106.078 29.8214C107.744 30.1229 109.463 29.9284 111.02 29.262C112.577 28.5956 113.904 27.4866 114.836 26.0727C115.769 24.6589 116.266 23.0023 116.265 21.3086C116.254 20.143 116.009 18.9915 115.545 17.9221C115.082 16.8526 114.409 15.8869 113.566 15.0819C112.723 14.2769 111.727 13.649 110.637 13.2352C109.547 12.8214 108.386 12.6301 107.221 12.6726ZM107.221 25.9926C106.287 25.9799 105.378 25.6945 104.604 25.1716C103.835 24.6523 103.238 23.9166 102.887 23.0576C102.539 22.201 102.455 21.2598 102.647 20.3551C102.838 19.4505 103.296 18.6239 103.961 17.9816C104.462 17.4963 105.062 17.1264 105.721 16.8979C106.38 16.6693 107.081 16.5877 107.774 16.6587C108.468 16.7297 109.138 16.9516 109.737 17.3088C110.336 17.666 110.849 18.15 111.241 18.7266C111.758 19.4926 112.033 20.3956 112.033 21.3196C112.046 21.9432 111.931 22.5629 111.693 23.1396C111.454 23.7187 111.099 24.2425 110.649 24.6786C110.197 25.1169 109.661 25.4588 109.073 25.6836C108.483 25.9098 107.853 26.0146 107.221 25.9916V25.9926Z" fill="#FF1744"/>
                <path d="M20.21 10.0196C20.2205 7.62415 19.3605 5.30644 17.79 3.49761C16.2016 1.67542 14.0176 0.476586 11.6275 0.114864C9.23739 -0.246858 6.79649 0.25204 4.74 1.52261C2.69356 2.78208 1.17001 4.73737 0.449 7.02961H10.1C10.4983 7.02882 10.893 7.10558 11.262 7.25561C11.6295 7.40514 11.9642 7.6253 12.247 7.90361C12.5287 8.18052 12.7527 8.51055 12.906 8.87461C13.0584 9.23709 13.137 9.62637 13.137 10.0196V17.0196C14.613 17.0196 18.459 16.9916 20.237 16.9916C20.635 16.993 21.029 17.0718 21.397 17.2236C21.7638 17.3747 22.0974 17.5962 22.379 17.8756C22.6591 18.1536 22.8813 18.4843 23.033 18.8486C23.1841 19.2117 23.2611 19.6013 23.2595 19.9945C23.258 20.3878 23.1779 20.7767 23.024 21.1386C22.8697 21.5017 22.645 21.8307 22.363 22.1066C21.7886 22.6673 21.0167 22.9794 20.214 22.9756H7.073V13.0086L0 12.9976V29.9486H20.21C22.8825 29.9514 25.4489 28.9029 27.355 27.0296C28.2921 26.111 29.0365 25.0146 29.5447 23.8048C30.0529 22.5949 30.3146 21.2959 30.3146 19.9836C30.3146 18.6714 30.0529 17.3723 29.5447 16.1624C29.0365 14.9526 28.2921 13.8562 27.355 12.9376C25.4488 11.0646 22.8824 10.0165 20.21 10.0196V10.0196Z" fill="#FF1744"/>
            </svg>

        </div>
        <div className='header_centerText'>
            <div>ЗИМА</div>
            <div>ЛІТО</div>
        </div>
        <div className='header_rightText'>
            <div>SKY-ПАСИ</div>
            <div>ГОТЕЛІ</div>
            <div>РОЗВАГИ</div>
        </div>
        <div className='header_infoText'>
            <div>UK</div>
            <div><svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.22363C8.92546 8.22429 9.82251 7.90403 10.5383 7.31742C11.2541 6.73081 11.7443 5.91414 11.9255 5.00659C12.1066 4.09903 11.9675 3.15675 11.5317 2.34029C11.096 1.52383 10.3906 0.883727 9.53584 0.529049C8.68104 0.174371 7.72971 0.127067 6.84395 0.395196C5.95818 0.663326 5.1928 1.2303 4.67821 1.9995C4.16363 2.7687 3.93169 3.69254 4.02191 4.61359C4.11213 5.53464 4.51893 6.39591 5.173 7.05063C5.92256 7.80095 6.93942 8.22288 8 8.22363ZM8 2.22363C8.46276 2.2233 8.91131 2.38345 9.26922 2.6768C9.62713 2.97014 9.87223 3.37851 9.96277 3.83233C10.0533 4.28614 9.98368 4.75731 9.76574 5.16554C9.54781 5.57377 9.19505 5.89378 8.76759 6.07106C8.34014 6.24834 7.86443 6.27189 7.42155 6.13772C6.97867 6.00355 6.59602 5.71995 6.33881 5.33526C6.08161 4.95056 5.96576 4.48858 6.01101 4.02804C6.05627 3.5675 6.25983 3.1369 6.587 2.80963C6.96174 2.43478 7.46996 2.22401 8 2.22363ZM15.707 13.4236C13.6613 11.3827 10.8897 10.2365 8 10.2365C5.11034 10.2365 2.33867 11.3827 0.293 13.4236L0 13.7236V19.2236H16V13.7236L15.707 13.4236ZM14 17.2236H2V14.5616C3.64148 13.0683 5.78086 12.2407 8 12.2407C10.2191 12.2407 12.3585 13.0683 14 14.5616V17.2236Z" fill="#091E42"/>
            </svg></div>
            <div><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.0958 4.79435C5.0958 2.20489 7.19497 0.105713 9.78443 0.105713C11.1208 0.105713 12.3265 0.664761 13.1805 1.56174C12.5843 1.75921 12.008 2.01941 11.4616 2.33959C11.3696 2.39165 11.2787 2.44557 11.189 2.50134C10.7803 2.25041 10.2992 2.10571 9.78443 2.10571C8.29954 2.10571 7.0958 3.30946 7.0958 4.79435V8.82245C7.07814 8.94963 7.06343 9.0773 7.05169 9.20535C7.04561 9.25481 7.04007 9.30434 7.03506 9.35392C6.89482 9.73674 6.52721 10.0099 6.0958 10.0099C5.54352 10.0099 5.0958 9.56221 5.0958 9.00992V7.90204L2.8007 7.90204L2.00372 17.4657C1.95514 18.0488 2.41523 18.5488 3.00027 18.5488H12.9159C13.4743 18.7519 14.055 18.9003 14.6502 18.9899C15.0787 19.0678 15.5133 19.1065 15.9488 19.1056H16.0002C16.4091 19.1081 16.8175 19.0779 17.2216 19.0155C17.9904 18.9102 18.7364 18.7068 19.4429 18.4143C19.0732 19.6409 17.9347 20.5488 16.5693 20.5488H3.00027C1.24515 20.5488 -0.135124 19.0487 0.010631 17.2996L0.807606 7.73595C0.893988 6.69937 1.76052 5.90204 2.8007 5.90204H5.0958V4.79435Z" fill="#091E42"/>
                <path d="M23.0002 10.1054C22.999 11.7965 22.3856 13.4299 21.2734 14.7038C20.1613 15.9777 18.6257 16.8059 16.9503 17.0354C16.6359 17.0839 16.3183 17.1074 16.0002 17.1054H15.9603C15.6216 17.1061 15.2835 17.076 14.9503 17.0155C13.2956 16.7665 11.7852 15.9322 10.6934 14.6643C9.60153 13.3963 9.00076 11.7787 9.00024 10.1054C8.99834 9.87147 9.01168 9.63756 9.04022 9.40535C9.09587 8.79847 9.23732 8.20264 9.46026 7.63545C9.58279 7.28879 9.73673 6.95407 9.92022 6.63545C10.1002 6.31791 10.3076 6.01673 10.5402 5.73543C10.5612 5.69791 10.5882 5.66415 10.6202 5.63545C10.8962 5.29952 11.2043 4.99134 11.5402 4.71541C11.8289 4.46973 12.1403 4.25205 12.4702 4.06538C13.5332 3.44251 14.7418 3.1115 15.9738 3.10579C17.2058 3.10008 18.4175 3.41991 19.4861 4.03291C20.5548 4.64591 21.4426 5.5303 22.0597 6.59663C22.6768 7.66297 23.0012 8.87341 23.0002 10.1054Z" fill="#FF0000"/>
                <path d="M16.3455 8.89965C16.7817 8.89625 17.2118 9.00214 17.5965 9.20765C17.9813 9.41248 18.3029 9.71848 18.5265 10.0926C18.7652 10.4932 18.8871 10.9525 18.8785 11.4186C18.8869 11.9061 18.7632 12.3868 18.5205 12.8096C18.2863 13.2127 17.9459 13.5438 17.5365 13.7666C17.1038 14.0018 16.6179 14.1213 16.1255 14.1136C15.5216 14.1325 14.927 13.9615 14.4255 13.6247C13.9463 13.2807 13.5776 12.8047 13.3645 12.2546C13.1087 11.592 12.9854 10.8857 13.0015 10.1756C12.9787 9.4019 13.1173 8.63189 13.4085 7.91465C13.6328 7.36035 14.0176 6.88571 14.5135 6.55165C14.9961 6.24962 15.5563 6.09465 16.1255 6.10565C16.57 6.09721 17.0105 6.19167 17.4125 6.38165C17.7719 6.5501 18.0838 6.80504 18.3205 7.12365C18.5389 7.41877 18.6842 7.76148 18.7445 8.12365H17.4445C17.3649 7.87732 17.2077 7.66333 16.9965 7.51365C16.7407 7.33511 16.4331 7.24616 16.1215 7.26065C15.8536 7.25365 15.5883 7.31575 15.3514 7.44098C15.1144 7.56621 14.9137 7.75034 14.7685 7.97565C14.3858 8.65861 14.212 9.43884 14.2685 10.2196V10.8136L13.9495 11.0556C13.9767 10.6267 14.1171 10.2126 14.3565 9.85565C14.5734 9.5417 14.8718 9.29278 15.2195 9.13565C15.5733 8.97628 15.9575 8.89575 16.3455 8.89965ZM16.0815 12.9586C16.3451 12.9625 16.605 12.8963 16.8345 12.7666C17.0551 12.6417 17.2375 12.4592 17.3625 12.2386C17.4944 12.0016 17.561 11.7338 17.5555 11.4626C17.5595 11.1945 17.4903 10.9304 17.3555 10.6986C17.2296 10.4806 17.0458 10.3017 16.8245 10.1816C16.5924 10.0587 16.3331 9.99647 16.0705 10.0006C15.8064 9.997 15.5455 10.0592 15.3115 10.1816C15.0869 10.3 14.9001 10.4792 14.7725 10.6986C14.6377 10.9304 14.5685 11.1945 14.5725 11.4626C14.5689 11.7326 14.638 11.9986 14.7725 12.2326C14.9015 12.4569 15.0897 12.6412 15.3165 12.7656C15.5505 12.895 15.8141 12.9615 16.0815 12.9586Z" fill="white"/>
            </svg>
            </div>
        </div>


    </div>
}
export default Header;