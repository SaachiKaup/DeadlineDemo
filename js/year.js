const copyrightSpan = document.querySelector('#___gatsby > div > div > section > div.fourstyle__FooterSection-sc-1qfzxsa-6.hWLxcw > div > p > span')

let currentYear = new Date().getFullYear()

copyrightSpan.innerHTML = `Copyright ${currentYear} by Restaverse. All rights reserved`