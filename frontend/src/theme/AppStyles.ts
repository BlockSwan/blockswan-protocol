import { createGlobalStyle } from 'styled-components'

export const AppStyles = createGlobalStyle`
::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }
 
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  
	  @keyframes bouncing-loader {
      to {
         opacity: 0.1;
         transform: translate3d(0, -1rem, 0);
      }
   }
.privacy-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: red;
  z-index: 2;
}

	//Web3AUTH MODAL
	#w3a-container {
		#w3a-modal {
			z-index:1000000;
			background:rgb(0 0 0 / 86%);
			
			button, input {
				border-radius:1rem;
			}
		}	

 	 	#w3a-modal .w3a-modal__inner.w3a-modal__inner--active {
			border-radius: 1rem;
			opacity: 1;
				transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);
				transform-origin: center center;
			border: 1px solid ${({ theme }) => theme.palette.divider};
				::-webkit-scrollbar {
				width:0px !important;
		
			}
			.w3a-modal__content {
				padding: 30px 34px;
			}

		}
	}
`
