const flags = [
    {country: 'South Korea', capitals: 'Seoul', image: 'https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png'}, 
    {country: 'India', capitals: 'New Delhi', image: 'https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png'}, 
    {country: 'China', capitals: 'Beijing', image: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png'},
    {country: 'US', capitals: 'Washington DC', image: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png'}, 
    {country: 'Indonesia', capitals: 'Jakarta', image: 'https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png'},
    {country: 'Brazil', capitals: 'Brasilia', image: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png'}, 
    {country: 'Pakistan', capitals: 'Islamabad', image: 'https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-large.png'}, 
    {country: 'Nigeria', capitals: 'Abuja', image: 'https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-large.png'}, 
    {country: 'Bangladesh', capitals: 'Dhaka', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-14-2048x1229.jpg'}, 
    {country: 'Russia', capitals: 'Moscow', image :'https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png'}, 
    {country: 'Japan', capitals: 'Tokyo', image: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png'}, 
    {country: 'Mexico', capitals: 'Mexico City', image: 'https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png'}, 
    {country: 'Ethiopia', capitals: 'Addis Ababa', image: 'https://www.countryflags.com/wp-content/uploads/ethiopia-flag-png-large.png'}, 
    {country: 'Philippines', capitals: 'Manila', image: 'https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png'}, 
    {country: 'Egypt', capitals: 'Cairo', image: 'https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png'}, 
    {country: 'Vietnam', capitals: 'Hanoi', image: 'https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png'}, 
    {country: 'DRC', capitals: 'Kinshasa', image: 'https://www.countryflags.com/wp-content/uploads/congo-democratic-republic-of-the-flag-png-large.png'}, 
    {country: 'Iran', capitals: 'Tehran', image: 'https://www.countryflags.com/wp-content/uploads/iran-flag-png-large.png'}, 
    {country: 'Turkey', capitals: 'Ankara', image: 'https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png'}, 
    {country: 'Germany', capitals: 'Berlin', image: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png'}, 
    {country: 'Thailand', capitals: 'Bangkok', image: 'https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png'}, 
    {country: 'UK', capitals: 'London', image: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png'}, 
    {country: 'France', capitals: 'Paris', image: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png'},
    {country: 'Italy', capitals: 'Rome', image: 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png'},
    {country: 'Myanmar', capitals: 'Naypyidaw', image: 'https://www.countryflags.com/wp-content/uploads/myanmar-flag-png-large.png'},
    {country: 'South Africa', capitals: 'Pretoria', image: 'https://www.countryflags.com/wp-content/uploads/south-africa-flag-png-large.png'},
    {country: 'Tanzania', capitals: 'Dodoma', image: 'https://www.countryflags.com/wp-content/uploads/tanzania-flag-png-large.png'},
    {country: 'Spain', capitals: 'Madrid', image: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'},
    {country: 'Colombia', capitals: 'Bogota', image: 'https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png'},
    {country: 'Kenya', capitals: 'Nairobi', image: 'https://www.countryflags.com/wp-content/uploads/kenya-flag-png-large.png'},
    {country: 'Argentina', capitals: 'Buenos Aires', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-2048x1283.jpg'},
    {country: 'Ukraine', capitals: 'Kiev', image: 'https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png'},
    {country: 'Algeria', capitals: 'Algiers', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-3-2048x1365.jpg'},
    {country: 'Uganda', capitals: 'Kampala', image: 'https://www.countryflags.com/wp-content/uploads/uganda-flag-png-large.png'},
    {country: 'Iraq', capitals: 'Baghdad', image: 'https://www.countryflags.com/wp-content/uploads/iraq-flag-png-large.png'},
    {country: 'Poland', capitals: 'Warsaw', image: 'https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png'},
    {country: 'Sudan', capitals: 'Khartoum', image: 'https://www.countryflags.com/wp-content/uploads/sudan-flag-png-large.png'},
    {country: 'Canada', capitals: 'Ottawa', image: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png'},
    {country: 'Afghanistan', capitals: 'Kabul', image: 'https://www.countryflags.com/wp-content/uploads/afghanistan-flag-png-large.png'},
    {country: 'Morocco', capitals: 'Rabat', image: 'https://www.countryflags.com/wp-content/uploads/morocco-flag-png-large.png'},
    {country: 'Malaysia', capitals: 'Kuala Lumpur', image: 'https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png'},
    {country: 'Venezuela', capitals: 'Caracas', image: 'https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-large.png'},
    {country: 'Peru', capitals: 'Lima', image: 'https://www.countryflags.com/wp-content/uploads/peru-flag-png-large.png'},
    {country: 'Uzbekistan', capitals: 'Tashkent', image: 'https://www.countryflags.com/wp-content/uploads/uzbekistan-flag-png-large.png'},
    {country: 'Nepal', capitals: 'Kathmandu', image: 'https://www.montana.edu/everest/facts/images/ff03_01.png'},
    {country: 'Angola', capitals: 'Luanda', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-5-2048x1365.jpg'},
    {country: 'Saudi Arabia', capitals: 'Riyadh', image: 'https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png'},
    {country: 'Yemen', capitals: 'Sana\'a', image: 'https://www.countryflags.com/wp-content/uploads/yemen-flag-png-large.png'},
    {country: 'Ghana', capitals: 'Accra', image: 'https://www.countryflags.com/wp-content/uploads/ghana-flag-png-large.png'},
    {country: 'Mozambique', capitals: 'Maputo', image: 'https://www.countryflags.com/wp-content/uploads/mozambique-flag-png-large.png'},
    {country: 'North Korea', capitals: 'Pyongyang', image: 'https://www.countryflags.com/wp-content/uploads/north-korea-flag-png-large.png'},
    {country: 'Madagascar', capitals: 'Antananarivo', image: 'https://www.countryflags.com/wp-content/uploads/madagascar-flag-png-large.png'},
    {country: 'Cameroon', capitals: 'Yaounde', image: 'https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png'},
    {country: 'Ivory Coast', capitals: 'Yamoussoukro', image: 'https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png'},
    {country: 'Taiwan', capitals: 'Taipei', image: 'https://www.countryflags.com/wp-content/uploads/taiwan-flag-png-large.png'},
    {country: 'Australia', capitals: 'Canberra', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg'},
    {country: 'Sri Lanka', capitals: 'Sri Jayawardenepura Kotte', image: 'https://www.countryflags.com/wp-content/uploads/sri-lanka-flag-png-large.png'},
    {country: 'Romania', capitals: 'Bucharest', image: 'https://www.countryflags.com/wp-content/uploads/romania-flag-png-large.png'},
    {country: 'Burkina Faso', capitals: 'Ouagadougou', image: 'https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png'},
    {country: 'Syria', capitals: 'Damascus', image: 'https://www.countryflags.com/wp-content/uploads/syria-flag-png-large.png'},
    {country: 'Niger', capitals: 'Niamey', image: 'https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png'},
    {country: 'Malawi', capitals: 'Lilongwe', image: 'https://www.countryflags.com/wp-content/uploads/malawi-flag-png-large.png'},
    {country: 'Kazakhstan', capitals: 'Astana', image: 'https://www.countryflags.com/wp-content/uploads/kazakhstan-flag-png-large.png'},
    {country: 'Mali', capitals: 'Bamako', image: 'https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png'},
    {country: 'Chile', capitals: 'Santiago', image: 'https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png'},
    {country: 'Netherlands', capitals: 'Amsterdam', image: 'https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png'},
    {country: 'Ecuador', capitals: 'Quito', image: 'https://www.countryflags.com/wp-content/uploads/ecuador-flag-png-large.png'},
    {country: 'Cambodia', capitals: 'Phnom Penh', image: 'https://www.countryflags.com/wp-content/uploads/cambodia-flag-png-large.png'},
    {country: 'Zambia', capitals: 'Lusaka', image: 'https://www.countryflags.com/wp-content/uploads/zambia-flag-png-large.png'},
    {country: 'Guatemala', capitals: 'Guatemala City', image: 'https://www.countryflags.com/wp-content/uploads/guatemala-flag-png-large.png'},
    {country: 'Senegal', capitals: 'Dakar', image: 'https://www.countryflags.com/wp-content/uploads/senegal-flag-png-large.png'},
    {country: 'Zimbabwe', capitals: 'Harare', image: 'https://www.countryflags.com/wp-content/uploads/zimbabwe-flag-png-large.png'},
    {country: 'South Sudan', capitals: 'Juba', image: 'https://www.countryflags.com/wp-content/uploads/south-sudan-flag-png-large.png'},
    {country: 'Guinea', capitals: 'Conakry', image: 'https://www.countryflags.com/wp-content/uploads/guinea-flag-png-xl.png'},
    {country: 'Chad', capitals: 'N\'Djamena', image: 'https://www.countryflags.com/wp-content/uploads/chad-flag-png-large.png'},
    {country: 'Rwanda', capitals: 'Kigali', image: 'https://www.countryflags.com/wp-content/uploads/rwanda-flag-png-large.png'},
    {country: 'Belgium', capitals: 'Brussels', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-18-2048x1775.jpg'},
    {country: 'Burundi', capitals: 'Gitega', image: 'https://www.countryflags.com/wp-content/uploads/burundi-flag-png-large.png'}, 
    {country: 'Tunisia', capitals: 'Tunis', image: 'https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png'}, 
    {country: 'Cuba', capitals: 'Havana', image: 'https://www.countryflags.com/wp-content/uploads/cuba-flag-png-large.png'}, 
    {country: 'Bolivia', capitals: 'La Paz', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-2048x1399.jpg'}, 
    {country: 'Benin', capitals: 'Porto Novo', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-20-2048x1365.jpg'}, 
    {country: 'Somalia', capitals: 'Mogadishu', image: 'https://www.countryflags.com/wp-content/uploads/somalia-flag-png-large.png'}, 
    {country: 'Portugal', capitals: 'Lisbon', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg'}, 
    {country: 'Greece', capitals: 'Athens', image: 'https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png'}, 
    {country: 'Dominican Republic', capitals: 'Santo Domingo', image: 'https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-large.png'}, 
    {country: 'Czech Republic', capitals: 'Prague', image: 'https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png'}, 
    {country: 'Haiti', capitals: 'Port-au-Prince', image: 'https://www.countryflags.com/wp-content/uploads/haiti-flag-png-large.png'}, 
    {country: 'Jordan', capitals: 'Amman', image: 'https://www.countryflags.com/wp-content/uploads/jordan-flag-png-large.png'}, 
    {country: 'Azerbaijan', capitals: 'Baku', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-11-2048x1024.jpg'}, 
    {country: 'Sweden', capitals: 'Stockholm', image: 'https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png'}, 
    {country: 'Hungary', capitals: 'Budapest', image: 'https://www.countryflags.com/wp-content/uploads/hungary-flag-png-large.png'}, 
    {country: 'Belarus', capitals: 'Minsk', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-16-2048x1024.jpg'}, 
    {country: 'Israel', capitals: 'Jerusalem', image: 'https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png'}, 
    {country: 'Honduras', capitals: 'Tegucigalpa', image: 'https://www.countryflags.com/wp-content/uploads/honduras-flag-png-large.png'}, 
    {country: 'Austria', capitals: 'Vienna', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-10-2048x1365.jpg'}, 
    {country: 'Tajikistan', capitals: 'Dushanbe', image: 'https://www.countryflags.com/wp-content/uploads/tajikistan-flag-png-large.png'}, 
    {country: 'Switzerland', capitals: 'Bern', image: 'https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png'}, 
    {country: 'Togo', capitals: 'Lome', image: 'https://www.countryflags.com/wp-content/uploads/togo-flag-png-large.png'}, 
    {country: 'Laos', capitals: 'Vientiane', image: 'https://www.countryflags.com/wp-content/uploads/laos-flag-png-large.png'}, 
    {country: 'Serbia', capitals: 'Belgrade', image: 'https://www.countryflags.com/wp-content/uploads/serbia-flag-png-large.png'}, 
    {country: 'Bulgaria', capitals: 'Sofia', image: 'https://www.countryflags.com/wp-content/uploads/bulgaria-flag-png-large.png'}, 
    {country: 'Paraguay', capitals: 'Asuncion', image: 'https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png'}, 
    {country: 'Papua New Guinea', capitals: 'Port Moresby', image: 'https://www.countryflags.com/wp-content/uploads/papua-new-guinea-flag-png-large.png'}, 
    {country: 'Libya', capitals: 'Tripoli', image: 'https://www.countryflags.com/wp-content/uploads/libya-flag-png-large.png'}, 
    {country: 'Lebanon', capitals: 'Beirut', image: 'https://www.countryflags.com/wp-content/uploads/lebanon-flag-png-large.png'}, 
    {country: 'El Salvador', capitals: 'San Salvador', image: 'https://www.countryflags.com/wp-content/uploads/el-salvador-flag-png-large.png'}, 
    {country: 'Sierra Leone', capitals: 'Freetown', image: 'https://www.countryflags.com/wp-content/uploads/sierra-leone-flag-png-large.png'}, 
    {country: 'UAE', capitals: 'Abu Dhabi', image: 'https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png'}, 
    {country: 'Nicaragua', capitals: 'Managua', image: 'https://www.countryflags.com/wp-content/uploads/nicaragua-flag-png-large.png'}, 
    {country: 'Eritrea', capitals: 'Asmara', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-large.jpg'}, 
    {country: 'Singapore', capitals: 'Singapore', image: 'https://www.countryflags.com/wp-content/uploads/singapore-flag-png-large.png'}, 
    {country: 'Kyrgyzstan', capitals: 'Bishkek', image: 'https://www.countryflags.com/wp-content/uploads/kyrgyzstan-flag-png-large.png'}, 
    {country: 'Central African Republic', capitals: 'Bangui', image: 'https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png'}, 
    {country: 'Denmark', capitals: 'Copenhagen', image: 'https://www.countryflags.com/wp-content/uploads/denmark-flag-png-large.png'}, 
    {country: 'Finland', capitals: 'Helsinki', image: 'https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png'}, 
    {country: 'Slovakia', capitals: 'Bratislava', image: 'https://www.countryflags.com/wp-content/uploads/slovakia-flag-png-large.png'}, 
    {country: 'Turkmenistan', capitals: 'Ashgabat', image: 'https://www.countryflags.com/wp-content/uploads/turkmenistan-flag-png-large.png'}, 
    {country: 'Norway', capitals: 'Oslo', image: 'https://www.countryflags.com/wp-content/uploads/norway-flag-png-large.png'}, 
    {country: 'Ireland', capitals: 'Dublin', image: 'https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png'}, 
    {country: 'Republic of Congo', capitals: 'Brazzaville', image: 'https://www.countryflags.com/wp-content/uploads/congo-republic-of-the-flag-png-large.png'}, 
    {country: 'Costa Rica', capitals:'San Jose', image: 'https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png'}, 
    {country: 'Georgia', capitals: 'Tbilisi', image: 'https://www.countryflags.com/wp-content/uploads/georgia-flag-jpg-xl.jpg'}, 
    {country: 'Liberia', capitals: 'Monrovia', image: 'https://www.countryflags.com/wp-content/uploads/liberia-flag-png-large.png'}, 
    {country: 'Palestine', capitals: 'Ramallah', image: 'https://www.countryflags.com/wp-content/uploads/palestina-flag-jpg-xl.jpg'},
    {country: 'New Zealand', capitals: 'Wellington', image: 'https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png'}, 
    {country: 'Croatia', capitals: 'Zagreb', image: 'https://www.countryflags.com/wp-content/uploads/croatia-flag-png-large.png'}, 
    {country: 'Mauritania', capitals: 'Nouakchott', image: 'https://www.countryflags.com/wp-content/uploads/mauritania-flag-jpg-xl.jpg'}, 
    {country: 'Panama', capitals: 'Panama City', image: 'https://www.countryflags.com/wp-content/uploads/panama-flag-png-large.png'}, 
    {country: 'Bosnia and Herzegovina', capitals: 'Sarajevo', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-22-2048x1024.jpg'}, 
    {country: 'Moldova', capitals: 'Chisinau', image: 'https://www.countryflags.com/wp-content/uploads/moldova-flag-png-large.png'}, 
    {country: 'Oman', capitals: 'Muscat', image: 'https://www.countryflags.com/wp-content/uploads/oman-flag-png-large.png'}, 
    {country: 'Uruguay', capitals: 'Montevideo', image: 'https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png'}, 
    {country: 'Mongolia', capitals: 'Ulaanbaatar', image: 'https://www.countryflags.com/wp-content/uploads/mongolia-flag-png-large.png'}, 
    {country: 'Albania', capitals: 'Tirana', image: 'https://www.countryflags.com/wp-content/uploads/albania-flag-png-large.png'}, 
    {country: 'Armenia', capitals: 'Yerevan', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-8-2048x1024.jpg'}, 
    {country: 'Jamaica', capitals: 'Kingston', image: 'https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png'}, 
    {country: 'Kuwait', capitals: 'Kuwait City', image: 'https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-large.png'}, 
    {country: 'Lithuania', capitals: 'Vilnius', image: 'https://www.countryflags.com/wp-content/uploads/lithuania-flag-png-large.png'}, 
    {country: 'Namibia', capitals: 'Windhoek', image: 'https://www.countryflags.com/wp-content/uploads/namibia-flag-png-large.png'}, 
    {country: 'Qatar', capitals: 'Doha', image: 'https://www.countryflags.com/wp-content/uploads/qatar-flag-png-large.png'}, 
    {country: 'Botswana', capitals: 'Gaborone', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-23-2048x1365.jpg'}, 
    {country: 'North Macedonia', capitals: 'Skopje', image: 'https://www.countryflags.com/wp-content/uploads/macedonia-flag-png-large.png'}, 
    {country: 'Gambia', capitals: 'Banjul', image: 'https://www.countryflags.com/wp-content/uploads/gambia-flag-png-large.png'}, 
    {country: 'Slovenia', capitals: 'Ljubljana', image: 'https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-large.png'}, 
    {country: 'Lesotho', capitals: 'Maseru', image: 'https://www.countryflags.com/wp-content/uploads/lesotho-flag-png-large.png'}, 
    {country: 'Latvia', capitals: 'Riga', image: 'https://www.countryflags.com/wp-content/uploads/latvia-flag-png-large.png'}, 
    {country: 'Kosovo', capitals: 'Pristina', image: 'https://www.countryflags.com/wp-content/uploads/kosovo-flag-png-large.png'}, 
    {country: 'Guinea Bissau', capitals: 'Bissau', image: 'https://www.countryflags.com/wp-content/uploads/guinea-bissau-flag-png-large.png'}, 
    {country: 'Gabon', capitals: 'Libreville', image: 'https://www.countryflags.com/wp-content/uploads/gabon-flag-png-large.png'}, 
    {country: 'Eswatini', capitals: 'Mbabane', image: 'https://www.countryflags.com/wp-content/uploads/swaziland-flag-png-large.png'}, 
    {country: 'Bahrain', capitals: 'Manama', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-13-2048x1229.jpg'}, 
    {country: 'Mauritius', capitals: 'Port Louis', image: 'https://www.countryflags.com/wp-content/uploads/mauritius-flag-png-large.png'}, 
    {country: 'Timor Leste', capitals: 'Dili', image: 'https://www.countryflags.com/wp-content/uploads/east-timor-flag-png-large.png'}, 
    {country: 'Estonia', capitals: 'Tallinn', image: 'https://www.countryflags.com/wp-content/uploads/estonia-flag-png-large.png'}, 
    {country: 'Cyprus', capitals: 'Nicosia', image: 'https://www.countryflags.com/wp-content/uploads/cyprus-flag-png-large.png'}, 
    {country: 'Trinidad and Tobago', capitals: 'Port of Spain', image: 'https://www.countryflags.com/wp-content/uploads/trinidad-and-tobago-flag-png-large.png'}, 
    {country: 'Fiji', capitals: 'Suva', image: 'https://www.countryflags.com/wp-content/uploads/fiji-flag-png-large.png'}, 
    {country: 'Djibouti', capitals: 'Djibouti', image: 'https://www.countryflags.com/wp-content/uploads/djibouti-flag-png-large.png'}, 
    {country: 'Comoros', capitals: 'Moroni', image: 'https://www.countryflags.com/wp-content/uploads/comoros-flag-png-large.png'}, 
    {country: 'Equatorial Guinea', capitals: 'Malabo', image: 'https://www.countryflags.com/wp-content/uploads/equatorial-guinea-flag-png-large.png'}, 
    {country: 'Bhutan', capitals: 'Thimphu', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-21-2048x1365.jpg'}, 
    {country: 'Guyana', capitals: 'Georgetown', image: 'https://www.countryflags.com/wp-content/uploads/guyana-flag-png-large.png'}, 
    {country: 'Solomon Islands', capitals: 'Honiara', image: 'https://www.countryflags.com/wp-content/uploads/solomon-islands-flag-png-large.png'}, 
    {country: 'Montenegro', capitals: 'Podgorica', image: 'https://www.countryflags.com/wp-content/uploads/montenegro-flag-png-large.png'}, 
    {country: 'Luxembourg', capitals: 'Luxembourg', image: 'https://www.countryflags.com/wp-content/uploads/luxembourg-flag-png-large.png'}, 
    {country: 'Suriname', capitals: 'Paramaribo', image: 'https://www.countryflags.com/wp-content/uploads/suriname-flag-png-large.png'}, 
    {country: 'Cape Verde', capitals: 'Praia', image: 'https://www.countryflags.com/wp-content/uploads/cape-verde-flag-png-large.png'}, 
    {country: 'Brunei', capitals: 'Bandar Seri Begawan', image: 'https://www.countryflags.com/wp-content/uploads/brunei-flag-png-large.png'}, 
    {country: 'Malta', capitals: 'Valletta', image: 'https://www.countryflags.com/wp-content/uploads/malta-flag-png-large.png'}, 
    {country: 'Maldives', capitals:'Male', image: 'https://www.countryflags.com/wp-content/uploads/maldives-flag-png-large.png'}, 
    {country: 'Belize', capitals: 'Belmopan', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-19-2048x1365.jpg'}, 
    {country: 'Iceland', capitals: 'Reykjavik', image: 'https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png'}, 
    {country: 'Bahamas', capitals: 'Nassau', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-12-2048x1024.jpg'}, 
    {country: 'Barbados', capitals: 'Bridgetown', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-15-2048x1365.jpg'}, 
    {country: 'Vanuatu', capitals: 'Port Vila', image: 'https://www.countryflags.com/wp-content/uploads/vanuatu-flag-jpg-xl.jpg'}, 
    {country: 'Sao Tome Principe', capitals: 'Sao Tome', image: 'https://www.countryflags.com/wp-content/uploads/sao-tome-and-principe-flag-png-large.png'}, 
    {country: 'Samoa', capitals: 'Apia', image: 'https://www.countryflags.com/wp-content/uploads/samoa-flag-png-large.png'}, 
    {country: 'Saint Lucia', capitals: 'Castries', image: 'https://www.countryflags.com/wp-content/uploads/saint-lucia-flag-png-large.png'}, 
    {country: 'Grenada', capitals: 'St. George\'s', image: 'https://www.countryflags.com/wp-content/uploads/grenada-flag-png-large.png'}, 
    {country: 'Kiribati', capitals: 'Tarawa', image: 'https://www.countryflags.com/wp-content/uploads/kiribati-flag-png-large.png'}, 
    {country: 'Tonga', capitals: 'Nuku\'alofa', image: 'https://www.countryflags.com/wp-content/uploads/tonga-flag-png-large.png'}, 
    {country: 'Micronesia', capitals: 'Palikir', image: 'https://www.countryflags.com/wp-content/uploads/micronesia-flag-png-large.png'}, 
    {country: 'St Vincent', capitals: 'Kingstown', image: 'https://www.countryflags.com/wp-content/uploads/saint-vincent-and-the-grenadines-flag-png-large.png'}, 
    {country: 'Antigua and Barbuda', capitals: 'St. John\'s', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-6-2048x1365.jpg'}, 
    {country: 'Seychelles', capitals: 'Victoria', image: 'https://www.countryflags.com/wp-content/uploads/seychelles-flag-png-large.png'}, 
    {country: 'Andorra', capitals: 'Andorra la Vella', image: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-4-2048x1434.jpg'}, 
    {country: 'Marshall Islands', capitals: 'Majuro', image: 'https://www.countryflags.com/wp-content/uploads/marshall-islands-flag-png-large.png'}, 
    {country: 'Dominica', capitals: 'Roseau', image: 'https://www.countryflags.com/wp-content/uploads/dominica-flag-png-large.png'}, 
    {country: 'St Kitts and Nevis', capitals: 'Basseterre', image: 'https://www.countryflags.com/wp-content/uploads/saint-kitts-and-nevis-flag-png-large.png'}, 
    {country: 'Liechtenstein', capitals: 'Vaduz', image: 'https://www.countryflags.com/wp-content/uploads/liechtenstein-flag-png-large.png'}, 
    {country: 'San Marino', capitals: 'San Marino', image: 'https://www.countryflags.com/wp-content/uploads/san-marino-flag-png-large.png'}, 
    {country: 'Monaco', capitals: 'Monaco', image: 'https://www.countryflags.com/wp-content/uploads/monaco-flag-png-large.png'}, 
    {country: 'Palau', capitals: 'Ngerulmud', image: 'https://www.countryflags.com/wp-content/uploads/palau-flag-png-large.png'}, 
    {country: 'Tuvalu', capitals: 'Funafuti', image: 'https://www.countryflags.com/wp-content/uploads/tuvalu-flag-png-large.png'}, 
    {country: 'Nauru', capitals: 'Yaren', image: 'https://www.countryflags.com/wp-content/uploads/nauru-flag-png-large.png'}, 
    {country: 'Vatican City', capitals: 'Vatican City', image: 'https://www.countryflags.com/wp-content/uploads/vatican-city-flag-png-large.png'}]

let chosenCountry = '';
let result = 0;
let finishGame = false;
let randomNumArr = [];
let currentNum = 0;
let tempflags = flags.slice();
let forward = false;
let counter = 0;

let randomCapitalArr = [];
let chosenCapital = '';
let tempcountries = flags.slice();
let numCurrent = 0;
let gameFinish = false;
let counter1 = 0;
    
window.onload = function () {
    randImg();
    randCountry();
}

function clearAll() {
    document.querySelector('.input-answer').value = "";
    document.querySelector('.input-answer1').value = "";
}

function randImg() {
    let count = 0;
    let randomNum = Math.floor(Math.random() * flags.length);
    
    for (let i = 0; i < tempflags.length; ++i) {
        if (tempflags[i] == null) {
            count += 1;
        }
    }

    if (count == flags.length) {
        document.getElementById("flag").src = flags[randomNumArr[0]].image;
        chosenCountry = flags[randomNumArr[0]].country;
        return;
    }

    if (tempflags[randomNum] == null) {
        randImg();
    } else {
        document.getElementById("flag").src = flags[randomNum].image;
        chosenCountry = flags[randomNum].country;
        randomNumArr.push(randomNum);
    }

    tempflags[randomNum] = null;
    randImg();
}

function chooseImg() {
    currentNum += 1;
    let currentNum1 = currentNum % randomNumArr.length;
    document.getElementById("flag").src = flags[randomNumArr.slice(currentNum1)[0]].image;
    chosenCountry = flags[randomNumArr.slice(currentNum1)[0]].country;

    if (counter == flags.length - 1) {
        finishGame = true;
        return;
    }
}

function scoreInc() {
    let score = document.querySelector('#number');
    result += 1;
    score.textContent = result;
}


function scoreInc1() {
    let score = document.querySelector('#number1');
    result += 1;
    score.textContent = result;
}

function answer() {
    let inputAnswer = document.querySelector('.input-answer').value;
    if (inputAnswer.toLowerCase() == chosenCountry.toLowerCase()) {
        clearAll();
        scoreInc();
        counter += 1;
        let currentNum1 = currentNum % randomNumArr.length;
        randomNumArr.splice(currentNum1, 1);
        if (finishGame == true) {
            popup1.classList.add('active');
            overlay.classList.add('active');
            let score = document.querySelector('.final-score');
            score.textContent = result;
        }
        chooseImg();
    }

    let inputAnswer1 = document.querySelector('.input-answer1').value;
    if (inputAnswer1.toLowerCase() == chosenCapital.toLowerCase()) {
        clearAll();
        scoreInc1();
        counter1 += 1;
        let numCurrent1 = numCurrent % randomCapitalArr.length;
        randomCapitalArr.splice(numCurrent1, 1);
        if (gameFinish == true) {
            popup1.classList.add('active');
            overlay.classList.add('active');
            let score = document.querySelector('.final-score');
            score.textContent = result;
        }
        chooseCountry();
    }
}

const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        openPopup(popup);
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopup(popup);
    })
})

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

function worldFlags() {
    const container = document.getElementById('container');
    const start = document.getElementById('start');
    container.classList.add('active');
    start.classList.add('active');
}

function goMenu() {
    const menu = document.getElementById('start');
    const container = document.getElementById('container');
    const popup = document.getElementById('popup');
    const popup1 = document.getElementById('popup1');
    const overlay = document.getElementById('overlay');
    menu.classList.remove('active');
    container.classList.remove('active');
    popup.classList.remove('active');
    popup1.classList.remove('active');
    overlay.classList.remove('active');
    let score = document.querySelector('#number');
    result = 0;
    score.textContent = result;
    location.reload();
}

function goBack() {
    clearAll();
    currentNum -= 1;
    let currentNum1 = currentNum % randomNumArr.length;
    document.getElementById("flag").src = flags[randomNumArr.slice(currentNum1)[0]].image;
    chosenCountry = flags[randomNumArr.slice(currentNum1)[0]].country;
    numCurrent -= 1;
    let numCurrent1 = numCurrent % randomCapitalArr.length;
    document.getElementById("name-country").textContent = flags[randomCapitalArr.slice(numCurrent1)[0]].country;
    document.getElementById("flag1").src = flags[randomCapitalArr.slice(numCurrent1)[0]].image;
    chosenCapital = flags[randomCapitalArr.slice(numCurrent1)[0]].capitals;
}

function goForth() {
    clearAll();
    currentNum += 1;
    let currentNum1 = currentNum % randomNumArr.length;
    document.getElementById("flag").src = flags[randomNumArr.slice(currentNum1)[0]].image;
    chosenCountry = flags[randomNumArr.slice(currentNum1)[0]].country;
    numCurrent += 1;
    let numCurrent1 = numCurrent % randomCapitalArr.length;
    document.getElementById("name-country").textContent = flags[randomCapitalArr.slice(numCurrent1)[0]].country;
    document.getElementById("flag1").src = flags[randomCapitalArr.slice(numCurrent1)[0]].image;
    chosenCapital = flags[randomCapitalArr.slice(numCurrent1)[0]].capitals;
}

function endGame() {
    popup1.classList.add('active');
    overlay.classList.add('active');
    popup.classList.remove('active');
    let score = document.querySelector('.final-score');
    score.textContent = result;
}

function randCountry() {
    let count1 = 0;
    let randomNum = Math.floor(Math.random() * flags.length);
    
    for (let i = 0; i < tempcountries.length; ++i) {
        if (tempcountries[i] == null) {
            count1 += 1;
        }
    }

    if (count1 == flags.length) {
        document.getElementById("name-country").textContent = flags[randomCapitalArr[0]].country;
        document.getElementById("flag1").src = flags[randomCapitalArr[0]].image;
        chosenCapital = flags[randomCapitalArr[0]].capitals;
        return;
    }

    if (tempcountries[randomNum] == null) {
        randCountry();
    } else {
        document.getElementById("name-country").textContent = flags[randomNum].country;
        document.getElementById("flag1").src = flags[randomNum].image;
        chosenCapital = flags[randomNum].capitals;
        randomCapitalArr.push(randomNum);
    }

    tempcountries[randomNum] = null;
    randCountry();
}

function worldCapitals() {
    const container1 = document.getElementById('container1');
    const start = document.getElementById('start');
    container1.classList.add('active');
    start.classList.add('active');
}

function chooseCountry() {
    numCurrent += 1;
    let numCurrent1 = numCurrent % randomCapitalArr.length;
    document.getElementById("name-country").textContent = flags[randomCapitalArr.slice(numCurrent1)[0]].country;
    document.getElementById("flag1").src = flags[randomCapitalArr.slice(numCurrent1)[0]].image;
    chosenCapital = flags[randomCapitalArr.slice(numCurrent1)[0]].capitals;

    if (counter == flags.length - 1) {
        gameFinish = true;
        return;
    }
}
