/* Carta de vinhos Ramón Freixa Porto — os vinhos (fonte única para o PDF, o Word e a carta digital).
   Formato (uma linha por elemento):
     = N            página de conteúdo N (número impresso no rodapé)
     # texto        título de secção        ## texto  região        ### texto  sub-região
     nome | preço | região · castas         vinho (a 3.ª coluna é opcional)
   Editar só o texto entre os dois acentos graves. */
window.CARTA_DADOS = String.raw`
= 6
# 01 — Vinho a Copo | Glass of Wine
## Espumantes | Sparkling Wine 15 cl
REAL COMPANHIA VELHA | 14 | Douro · Pinot Noir, Chardonnay
2018 · QUINTA DAS BÁGEIRAS GRANDE RESERVA ROSÉ | 19 | Bairrada · Baga
## Champanhe | Champagne 15 cl
NV · PALMER & CO RÉSERVE | 22 | Reims · Chardonnay, Pinot Noir, Pinot Meunier
NV · BRUNO PAILLARD 1ER CRU ROSÉ | 29 | Verzenay, Bouzy, Mailly · Pinot Noir, Chardonnay
## Vinho Branco | White Wine 15 cl
2015 · POEMA RESERVA | 14 | Vinho Verde · Alvarinho
2024 · VAN ZELLER VZ | 12 | Douro · Arinto, Rabigato, Viosinho, Outras
2023 · QUINTA DE SÃO JOSÉ RESERVA | 16 | Douro · Rabigato, Viosinho
DOMÍNIO DO AÇOR VILA ROMANA | 14 | Dão · Encruzado, Cerceal
2022 · CASA DE SAIMA GARRAFEIRA | 17 | Bairrada · Bical, Cercial, Maria Gomes
CABEÇAS DE REGUENGO EQUINÓCIO | 13 | Alentejo · Verdelho, Arinto e Rabigato
## Vinho Rosé | Rosé Wine 15 cl
CASAL STA MARIA MAR DE ROSAS | 12 | Lisboa · Touriga Nacional, Pinot Noir, Syrah
2024 · BIOMBO | 13 | Douro · Vinhas Velhas
## Vinho Tinto | Red Wine 15 cl
2019 · MAFARRICO MINHA VINHA | 14 | Douro · Touriga Nacional, Touriga Franca
2014 · DUAS ÁRVORES RESERVA | 18 | Douro · Vinhas Velhas
2016 · QUINTA DO ESCUDIAL | 12 | Dão · Touriga Nacional
2015 · MESSIAS CLÁSSICO | 16 | Bairrada · Baga
2022 · GERAÇÕES DE TALHA FARRABO | 13 | Alentejo · Aragonez, Trincadeira, Outras
= 7
## Colheita Tardia | Late Harvest 6 cl
2022 · QUINTA DO ARCOSSÓ | 11 | Trás-os-Montes · Sémillon
2013 · DISZNÓKŐ TOKAJI 5 PUTTONYOS | 19 | Tokaj · Furmint, Hárslevelű
## Vinho do Porto Branco | White Port 6 cl
NV · NIEPOORT DRY WHITE | 7 | Castas Tradicionais
20 YO · QUINTA DA GAIVOSA | 19 | Castas Tradicionais
## Porto Tawny | Tawny Port 6 cl
10 YO · PREGUIÇA | 8 | Castas Tradicionais
20 YO · WINE&SOUL MANOELLA | 16 | Castas Tradicionais
30 YO · QUINTA DAS CARVALHAS | 29 | Castas Tradicionais
40 YO · KOPKE | 43 | Castas Tradicionais
## Porto Ruby | Ruby Port 6 cl
2004 · RAMOS PINTO LBV BOTTLE MATURED | 13 | Castas Tradicionais
2023 · ALVES DE SOUSA VINTAGE | 20 | Castas Tradicionais
## Moscatel 6 cl
2007 · QUINTA DO PORTAL RESERVA | 10 | Douro · Moscatel Galego
2010 · HORÁCIO SIMÕES COSTA A COSTA | 14 | Setúbal · Moscatel Roxo
## Vinho da Madeira | Madeira Wine 6 cl
15 YO · H.M. BORGES MEIO SECO | 12 | Verdelho
= 9
# 02 — Espumantes | Sparkling Wine
## Vinho Verde
2018 · CORTINHA VELHA RESERVA | 80 | Monção e Melgaço · Alvarinho
2011 · QUINTA DE SAN JOANNE GRANDE RESERVA | 82 | Amarante · Arinto, Avesso
## Trás-os-Montes
2019 · QUINTA DO ARCOSSÓ RESERVA | 60 | Chaves · Chardonnay, Pinot Noir
## Douro
REAL COMPANHIA VELHA CUVÉE | 71 | Cima Corgo · Pinot Noir, Chardonnay
2017 · CORTES DE REGUENGO 60 MESES | 86 | Douro Superior · Gouveio
VÉRTICE PINOT NOIR | 114 | Cima Corgo · Pinot Noir
NV · TITAN OF DOURO EXTRA BRUTO ROSÉ | 69 | Cima Corgo · Mourisco
## Távora-Varosa
MURGANHEIRA VINTAGE | 79 | Pinot Noir
2011 · HEHN GRAND CUVÉE | 114 | Armamar · Cerceal, Malvasia Fina
## Bairrada
2022 · POÇO DO LOBO BLANC DE NOIRS | 35 | Cantanhede · Baga
2022 · SIDÓNIO DE SOUSA SPECIAL CUVÉE | 39 | Anadia · Bical, Maria Gomes, Arinto
QUINTA DOS ABIBES SUBLIME | 164 | Anadia · Arinto
2022 · LUÍS PATO VINHA PAN | 54 | Anadia · Baga
2018 · AEQUINOCTIUM HIBERNUS | 101 | Anadia · Arinto, Chardonnay, Bical, outras
NV · VÁDIO PERPETUUM | 67 | Anadia · Bical, Cercial, Baga
2017 · KOMPASSUS GRANDE RESERVA BLANC DE NOIRS | 66 | Cantanhede · Baga, Pinot Noir
= 10
2013 · KOMPASSUS EXTREME ROSÉ | 133 | Cantanhede · Pinot Noir
ANTÓNIO MARINHA RESERVA ROSÉ | 37 | Anadia · Baga, Merlot
2018 · QUINTA DAS BÁGEIRAS GRANDE RESERVA ROSÉ | 110 | Anadia · Baga
## Dão
2018 · RIBEIRO SANTO EXCELLENCE | 60 | Terras de Senhorim · Touriga Nacional
2018 · CASA DA PASSARELLA FUGITIVO | 108 | Serra da Estrela · Baga
## Lisboa
BERBERETA BLANC DE NOIRS | 62 | Óbidos · Pinot Noir
BERBERETA ROSÉ | 64 | Óbidos · Pinot Noir
2013 · QUINTA DO ROL GRANDE RESERVA ROSÉ | 61 | Estremadura · Pinot Noir
## Alentejo
2019 · PAÇO DOS INFANTES ROSÉ PROLONGADO | 76 | Vidigueira · Touriga Nacional, Baga
HERDADE DA MALHADINHA ROSÉ | 99 | Beja · Touriga Nacional, Baga, Tinta Miúda
## Açores | Azores
2019 · AZORES WINE COMPANY DE PEDRA SE FAZ ESPUMANTE | 204 | Pico · Arinto dos Açores
2020 · ÍNSULA BRUTO | 165 | Graciosa · Arinto, Verdelho dos Açores
## Espanha | Spain
### Catalunha · Penedès
2006 · GRAMONA CELLER BATLLE GRAN RESERVA | 268 | Conca del Riu Anoia · Xarel·lo, Macabeu
2021 · GRAMONA CORPINNAT ARGENT ROSÉ | 143 | Conca del Riu Anoia · Pinot Noir
2019 · RAVENTÓS BLANC DE LA FINCA | 56 | Conca del Riu Anoia · Macabeu, Xarel·lo, Parellada
2018 · RAVENTÓS TEXTURES DE PEDRA | 77 | Conca del Riu Anoia · Xarel·lo Vermell, Bastard Negre, Sumoll
= 12
# 03 — Champanhe | Champagne
## Non-Vintage
NV · VILMART & CIE GRANDE RÉSERVE 1ER CRU | 138 | Reims · Chardonnay, Pinot Noir
NV · JACQUESSON CUVÉE 742 D.T. | 272 | Avize, Ay · Chardonnay, Pinot Meunier
NV · PALMER & CO RÉSERVE | 108 | Reims · Chardonnay, Pinot Noir, Pinot Meunier
NV · BÉRÈCHE ET FILS BRUT RÉSERVE | 146 | Vallée de la Marne, Reims · Chardonnay, Pinot Noir, Pinot Meunier
NV · LAURENT-PERRIER GRAND SIÈCLE | 564 | Ambonnay, Verzenay, Mesnil · Chardonnay, Pinot Noir
NV · LOUIS ROEDERER COLLECTION | 107 | Vallée de la Marne · Chardonnay, Pinot Meunier, Pinot Noir
90-21 · HENRI GIRAUD PERPETUAL | 328 | Ay · Pinot Noir, Chardonnay
NV · LOMBARD LE MESNIL-SUR-OGER GRAND CRU | 227 | Epernay · Chardonnay
NV · PIERRE PÉTERS EXTRA BRUT GRAND CRU | 204 | Côte des Blancs · Chardonnay
NV · H. BLIN PETIT MESLIER | 180 | Vallée de la Marne · Petit Meslier
NV · ERIC RODEZ BLANC DE NOIRS | 191 | Ambonnay · Pinot Noir
NV · EGLY-OURIET BLANC DE NOIRS GRAND CRU | 603 | Ambonnay · Pinot Noir
NV · RUINART BLANC DE BLANCS | 225 | Côte des Blancs, Reims · Chardonnay
NV · BRUNO PAILLARD BLANC DE BLANCS GRAND CRU | 208 | Côte des Blancs · Chardonnay
## Millésime
2021 · CAMILLE BONVILLE MILLÉSIME GRAND CRU | 171 | Avize · Chardonnay
2009 · GONET-MÉDEVILLE GRAND CRU | 251 | Ambonnay, Le Mesnil · Pinot Noir, Chardonnay
2008 · KRUG VINTAGE | 986 | Reims · Pinot Noir, Chardonnay
2018 · DIEBOLT VALLOIS MILLÉSIME | 177 | Cramant · Chardonnay
2021 · DOMAINE VINCEY LE GRAND JARDIN GRAND CRU | 248 | Côte des Blancs · Chardonnay
= 13
2013 · AR LENOBLE BLANC DE NOIRS | 196 | Vallée de la Marne · Pinot Noir
2002 · DOM PÉRIGNON P2 | 1139 | Reims · Chardonnay, Pinot Noir
2016 · LOUIS ROEDERER CRISTAL | 489 | Reims, Marne, Mesnil · Pinot Noir, Chardonnay
2019 · PIERRE GERBAIS GRAINS DE CELLES | 123 | Côte des Bar · Pinot Noir, Pinot Blanc, Chardonnay
2016 · H. BLIN MILLÉSIME | 133 | Vallée de la Marne · Chardonnay, Pinot Noir, Pinot Meunier
2012 · BILLECART-SALMON NICOLAS FRANÇOIS | 369 | Reims, Marne, Côte des Blancs · Pinot Noir, Chardonnay
2006 · POMMERY CUVÉE LOUISE | 404 | Avize, Cramant, Ay · Pinot Noir, Chardonnay
2015 · SALON LE MESNIL | 2103 | Mesnil · Chardonnay
2013 · TAITTINGER COMTES DE CHAMPAGNE | 529 | Côte des Blancs · Chardonnay
## Rosé
NV · LOMBARD EXTRA BRUT ROSÉ 1ER CRU | 157 | Reims · Chardonnay, Pinot Noir, Pinot Meunier
NV · AR LENOBLE ROSÉ | 133 | Chouilly, Vallée de la Marne · Chardonnay, Pinot Noir
NV · PALMER & CO ROSÉ SOLERA | 161 | Marne, Reims · Pinot Noir, Pinot Meunier, Chardonnay
NV · KRUG 27ÈME ÉDITION ROSÉ | 811 | Reims · Pinot Noir, Pinot Meunier, Chardonnay
2000 · DOM PÉRIGNON P2 ROSÉ | 2996 | Reims · Pinot Noir, Chardonnay
NV · RUINART ROSÉ | 216 | Côte des Blancs, Reims · Chardonnay, Pinot Noir
NV · BILLECART-SALMON ROSÉ | 179 | Montagne de Reims · Chardonnay, Pinot Noir, Pinot Meunier
2011 · TAITTINGER COMTES DE CHAMPAGNE ROSÉ | 549 | Côte des Blancs, Reims · Chardonnay, Pinot Noir
NV · BRUNO PAILLARD 1ER CRU ROSÉ | 179 | Verzenay, Bouzy, Mailly · Pinot Noir, Chardonnay
= 15
# 04 — Vinho Branco | White Wine
## Vinho Verde
2023 · PARAPENTE | 53 | Lima · Loureiro
2022 · SEM IGUAL | 93 | Amarante · Arinto, Azal
ANSELMO MENDES PARCELA ÚNICA | 90 | Monção e Melgaço · Alvarinho
2014-2022 · REPARTIDO 14.22 | 53 | Monção e Melgaço · Alvarinho
ADN DÓCIL | 58 | Monção e Melgaço · Loureiro
2010 · ROYAL PALMEIRA | 102 | Cávado · Loureiro
2023 · SANTIAGO & NUNO MIRA DO Ó SOU | 101 | Monção e Melgaço · Alvarinho
2022 · PEQUENOS REBENTOS VINHAS VELHAS | 77 | Monção e Melgaço · Loureiro
ANTÓNIO LOPES RIBEIRO ALR | 32 | Lima · Arinto, Avesso, Loureiro
2022 · RABIANA OAKED | 68 | Ave · Arinto
2021 · PEQUENOS REBENTOS SELVAGEM | 107 | Monção e Melgaço · Azal
2015 · POEMA RESERVA | 75 | Monção e Melgaço · Alvarinho
2024 · CONEXÃO | 53 | Monção e Melgaço · Alvarinho
QUINTA DA COVELA RESERVA | 61 | Baião · Avesso, Arinto, Chardonnay
## Trás-os-Montes
2019 · QUINTA DO ARCOSSÓ | 67 | Chaves · Arinto
2021 · PALÁCIO DOS TÁVORAS VINHAS VELHAS | 94 | Planalto Mirandês · Castas Tradicionais
2019 · VALLE MADRUGA GRANDE RESERVA | 56 | Valpaços · Gouveio, Viosinho
2022 · PARAPENTE VINHAS VELHAS | 57 | Valpaços · Códega, Viosinho, Gouveio
2023 · ARRIBAS WINE COMPANY BELFO | 60 | Planalto Mirandês · Malvasia Fina, Verdelho, Bastardo Branco, Outras
VALLE PRADINHOS RESERVA | 45 | Valpaços · Gewürztraminer, Malvasia Fina, Riesling
= 16
## Douro
2024 · VAN ZELLER VZ | 61 | Cima Corgo · Viosinho, Rabigato, Arinto, Códega do Larinho
2020 · SOMNIUM GRANITO | 64 | Cima Corgo · Rabigato, Outras
QUINTA DA REDE RESERVA | 36 | Baixo Corgo · Arinto, Gouveio, Viosinho
QUINTA DA REDE VINHA DO PINHEIRO | 104 | Arinto, Gouveio, Viosinho
2022 · PAULO COUTINHO VINHA DO BORRAJO | 93 | Cima Corgo · Viosinho, Gouveio, Encruzado
2022 · QUINTA DO FOZ TORTO VINHAS VELHAS | 78 | Cima Corgo · Castas Tradicionais
2022 · QUINTA MARIA IZABEL | 42 | Cima Corgo · Folgasão, Rabigato, Viosinho
2021 · DONA GRAÇA DONZELINHO E SAMARRINHO | 55 | Douro Superior · Donzelinho, Samarrinho
2025 · WINE&SOUL MANOELLA | 33 | Cima Corgo · Gouveio, Rabigato, Viosinho, Códega do Larinho
2023 · QUINTA DE SÃO JOSÉ RESERVA | 84 | Cima Corgo · Rabigato, Viosinho
2024 · MAFARRICO | 43 | Baixo Corgo · Fernão Pires, Viosinho, Códega, Outras
QUINTA DO PORTAL GRANDE RESERVA | 103 | Cima Corgo · Gouveio, Viosinho, Rabigato
2023 · QUINTA DA PEDRA ESCRITA | 43 | Douro Superior · Alvarinho, Gouveio, Rabigato, Viognier
2024 · DUAS ÁRVORES SETEMBRO | 41 | Cima Corgo · Viosinho, Rabigato, Gouveio
LEGADO DO ZECA M DE MOINA | 52 | Baixo Corgo · Viosinho, Rabigato, Alvarinho
LEGADO DO ZECA CURTIMENTA | 101 | Baixo Corgo · Castas Tradicionais
2022 · QUINTA DE CEIS GOIVAENS | 154 | Cima Corgo · Viosinho, Rabigato, Códega do Larinho, Outras
2021 · CORTES DO TUA SOULMATE | 91 | Douro Superior · Alvarinho
CORTES DO TUA SOULMATE CURTIMENTA | 181 | Douro Superior · Vinhas Velhas
2023 · NIEPOORT REDOMA RESERVA | 82 | Cima Corgo · Rabigato, Códega do Larinho, Arinto, Outras
2023 · QUINTA D’AZINHEIRA GRANDE RESERVA | 64 | Baixo Corgo · Vinhas Velhas
= 17
2014 · QUINTA DE MARITÁVORA Nº1 GRANDE RESERVA | 108 | Douro Superior · Códega do Larinho, Rabigato, Viosinho
2023 · PORMENOR RESERVA | 69 | Cima Corgo · Rabigato, Códega do Larinho, Malvasia Fina
QUINTA DO CIDRÔ GOUVEIO | 56 | Cima Corgo · Gouveio
## Bairrada
2021 · KOMPASSUS VERDELHO | 62 | Cantanhede · Verdelho
2022 · CASA DE SAIMA GARRAFEIRA | 78 | Anadia · Bical, Cercial, Maria Gomes
2018 · CAMPOLARGO SAUVIGNON BLANC LONG AGEING | 66 | Anadia · Sauvignon Blanc
2022 · QUINTA DAS BÁGEIRAS AVÔ FAUSTO | 73 | Anadia · Maria Gomes
2019 · QUINTA DOS ABIBES BICAL | 69 | Anadia · Bical
2024 · FOZ DE AROUCE | 49 | Beira Atlântico · Cercial
2020 · FREI JOÃO CLÁSSICO | 66 | Anadia · Bical, Cercial
2024 · GIZ VINHAS VELHAS | 55 | Anadia · Bical, Maria Gomes
2022 · GIZ CURTIMENTA | 57 | Anadia · Maria Gomes, Bical
2022 · PURO DORAVANTE | 52 | Anadia · Arinto, Bical, Cercial
SÉRIE ÍMPAR | 197 | Anadia · Sercialinho
2022 · GRANDE BIRRA TRANSMISSION | 163 | Anadia · Cercial, Bical, Maria Gomes, Outras
2025 · FILIPA PATO NOSSA CALCÁRIO | 60 | Anadia · Bical
## Dão
DOMÍNIO DO AÇOR VILA ROMANA | 72 | Terras de Senhorim · Encruzado, Cerceal
DOMÍNIO DO AÇOR VINHA CELTA | 151 | Terras de Senhorim · Bical
2024 · LUSUS NATURAE | 104 | Silgueiros · Encruzado
1995 · PORTA DOS CAVALEIROS | 125 | Besteiros · Encruzado, Malvasia Fina
= 18
2022 · TEXTURA DA ESTRELA | 46 | Serra da Estrela · Encruzado, Cerceal, Bical
MARCADO A FERROS | 59 | Castas Tradicionais
2022 · QUINTA DAS MARIAS EX-CRUDUS | 131 | Castendo · Encruzado
2023 · QUINTA DA PELLADA LATE RELEASE | 89 | Serra da Estrela · Encruzado
DONA SANCHA | 91 | Silgueiros · Cerceal
2023 · BELLA ELEGANCE | 42 | Silgueiros · Sauvignon Blanc
2020 · QUINTA DA PERDONDA BRANCO DA ESTRELA | 129 | Serra da Estrela · Barcelo, Bical, Dona Branca, Outras
2024 · CM WINES ALLGO | 53 | Silgueiros · Encruzado
2022 · QUINTA DO SOBRAL DE SANTAR RESERVA | 39 | Alva · Encruzado, Malvasia Fina
2015 · NIEPOORT ROLF & COLLECTORS | 73 | Serra da Estrela · Malvasia Fina, Encruzado
2022 · RIBEIRO SANTO ENCRUZADO DOURADO | 119 | Terras de Senhorim · Encruzado
## Beira Interior
CASAS ALTAS RESERVA DO DOUTOR | 43 | Cova da Beira · Verdelho
CASAS ALTAS | 36 | Cova da Beira · Chardonnay
QUINTA DO CARDO VINHA DO LOMEDO | 72 | Castelo Rodrigo · Síria
ROSA MATA | 66 | Pinhel · Fernão Pires
QUINTA DA BIAIA FONTE DA VILA | 104 | Castelo Rodrigo · Síria
2023 · MARTIN BOUTIQUE WINES 70/30 | 59 | Cova da Beira · Fernão Pires, Síria
## Lisboa
2019 · RUBIGO | 57 | Bucelas · Arinto de Bucelas
2022 · MONTE BLUNA RESERVA | 66 | Arruda · Arinto, Vital
= 19
2022 · CHOCAPALHA CH | 79 | Alenquer · Arinto
RAMILO | 84 | Colares · Galego Dourado
2021 · RAMILO | 157 | Colares · Malvasia
BAÍAS ENSEADAS PESSOAL | 90 | Colares · Fernão Pires
PÁGINA ALVARINHO | 46 | Óbidos · Alvarinho
CASAL STA MARIA | 64 | Colares · Chardonnay
2021 · MADAME PILAR ENCRUZADO | 38 | Torres Vedras · Encruzado
QUINTA DO MONTE D’OIRO | 136 | Alenquer · Arinto
QUINTA DE NOGUEIRA | 59 | Óbidos · Encruzado, Sauvignon Blanc
2020 · CASAL DA MANTEIGA GARRAFEIRA | 81 | Carcavelos · Galego Dourado, Ratinho
2022 · QUINTA DE SAN MICHEL MALVARINTO DO JANAS | 78 | Colares · Malvasia, Arinto
QUINTA DO PINTO GRANDE ESCOLHA | 53 | Alenquer · Viognier, Marsanne, Roussanne
## Tejo
2021 · CASAL DAS AIRES VINHAS VELHAS | 69 | Lezíria do Tejo · Fernão Pires
2023 · CASA DE CADAVAL | 57 | Santarém · Riesling
2021 · MARQUESA DE CADAVAL | 83 | Santarém · Blend de Castas
2023 · ODE ENÓLOGA | 108 | Cartaxo · Arinto, Fernão Pires
## Península de Setúbal
2021 · QUINTA DO PILOTO COLEÇÃO DE FAMÍLIA | 55 | Palmela · Antão Vaz, Arinto
2022 · HERDADE DO PERÚ PRIVATE COLECÇÃO | 109 | Setúbal · Arinto
2023 · HERDADE DO CEBOLAL VINHA DO ROSSIO | 69 | Setúbal · Boal
JMF LAGOALVA GRANDE RESERVA | 85 | Setúbal · Fernão Pires
= 20
2022 · HERDADE DO PORTOCARRO GERÓNIMO | 81 | Setúbal · Sercial, Galego Dourado
## Alentejo
XXVI TALHAS MESTRE DANIEL | 52 | Vidigueira · Perrum, Antão Vaz, Roupeiro
PONTE DO MOUCHÃO | 50 | Estremoz · Verdelho
2024 · ADEGA MONTE BRANCO VINHAS NOVAS | 48 | Estremoz · Rabigato, Arinto, Galego Dourado
2022 · MAQUETE BARRO | 62 | Granja-Amareleja · Diagalves, Monteúdo, Antão Vaz, Outras
2022 · FITA PRETA CHÃO DOS EREMITAS | 66 | Évora · Alicante Branco
2022 · FITA PRETA CHÃO DOS EREMITAS OS PAULISTAS | 128 | Évora · Alicante Branco, Rabo de Ovelha, Trincadeira das Pratas
TORRE DE PALMA | 71 | Portalegre · Arinto, Alvarinho
MONTE DA PENHA VERÓNICA | 59 | Portalegre · Arinto, Roupeiro, Fernão Pires, Trincadeira das Pratas
CABEÇAS DE REGUENGO EQUINÓCIO | 69 | Portalegre · Monteúdo, Tamarez, Alicante Ganzin, Outras
2019 · PAÇO DOS INFANTES GARRAFEIRA | 97 | Vidigueira · Arinto, Alvarinho
2023 · HERDADE DO SOBROSO ARCHÉ | 165 | Vidigueira · Arinto, Antão Vaz
MARIAS DA MALHADINHA | 150 | Beja · Monteúdo, Alicante Branco, Olho de Lebre, Diagalves
2022 · ALDEIA DE CIMA MYNDRU | 98 | Vidigueira · Roupeiro, Perrum, Alvarinho
## Açores | Azores
2023 · ÍNSULA ARINTO DOS AÇORES | 84 | Pico · Arinto dos Açores
2024 · AZORES WINE COMPANY VERDELHO ORIGINAL | 70 | Pico · Verdelho dos Açores
AZORES WINE COMPANY VINHA DOS UTRAS | 509 | Pico · Arinto dos Açores, Outras
NV · AZORES WINE COMPANY 3 COLHEITAS | 104 | Pico · Arinto dos Açores
2023 · ADEGA DO VULCÃO AMEIXÂMBAR | 75 | Faial, Pico · Arinto, Verdelho, Terrantez dos Açores
= 21
2019 · TARELO | 59 | Pico · Arinto, Verdelho
2018 · TARELO MONUMENTAL | 125 | Pico · Arinto dos Açores
## Madeira
2024 · JUSTINO’S PXO LISTRÃO | 83 | Listrão
2023 · BARBEITO VINHAS DO LANÇO | 71 | Verdelho
PROFETAS E VILÕES | 77 | Verdelho dos Vilões
PROFETAS E VILÕES CROSTA CALCÁRIA | 286 | Listrão, Caracol
## Portugal e Espanha | Portugal and Spain
### Vinho Verde · Rías Baixas
2021 · MIXTURA | 93 | Trajadura, Alvarinho/Albariño
## Espanha | Spain
### Galiza · Rías Baixas
2022 · MARQUÉS DE MURRIETA PAZO DE BARRANTES | 109 | Albariño
2023 · ZARATE BALADO | 127 | Albariño
2023 · FORJAS DEL SALNÉS LEIRANA GENOVEVA | 83 | Albariño
### Galiza · Valdeorras
RAFAEL PALACIOS LOURO | 67
2023 · RAFAEL PALACIOS SORTE ANTIGA | 508 | Godello
### Castilla y León · Rueda
2022 · OSSIAN | 115 | Verdejo
2023 · JOSÉ PARIENTE LAS FINCAS | 57 | Verdejo
= 22
### Castilla y León · Ribera del Duero
2024 · AALTO | 133 | Verdejo, Godello, Albillo
### Rioja
2012 · VIÑA TONDONIA | 161 | Rioja Alta · Malvasia, Viura
2016 · REMÍREZ DE GANUZA GRAN RESERVA OLAGAR | 236 | Rioja Alavesa · Viura
### Catalunha · Penedès
2023 · PEPE RAVENTÓS MALVASIA SITGES DE LA PLANA | 69 | Malvasia de Sitges
CAN SUMOI XAREL·LO | 46 | Xarel·lo
2023 · FAMILIA NIN ORTIZ TERRA VERMELHA | 141 | Parellada Montonega
### Catalunha · Priorat
2023 · TERROIR AL LIMIT TERRA DE CUQUES | 103 | Garnacha Blanca, Pedro Ximénez
### Laguardia
2019 · ARTADI VIÑAS DE GAIN | 219 | Viura
### Jerez
2023 · RETA M2 CAMPIX | 114 | Palomino
## França | France
### Alsácia | Alsace
2022 · JEAN-LUC MADER ROSACKER GRAND CRU | 97 | Ribeauvillé · Riesling
2022 · OSTERTAG FRONHOLZ A L’ORIENT D’EDEN | 94 | Barr-Epfig · Gewürztraminer
### Vale do Loire | Val de Loire
CLAUDE RIFFAULT SANCERRE LES CHAILLOUX | 99 | Sancerre · Sauvignon Blanc
2025 · LAURENT SAILLARD LUCKY YOU | 58 | Touraine · Chenin Blanc
= 23
2023 · DE LADOUCETTE POUILLY-FUMÉ | 84 | Pouilly-Fumé · Sauvignon Blanc
### Borgonha | Burgundy · Chablis
2023 · DOMAINE OUDIN CHABLIS | 73 | Chardonnay
2023 · DOMAINE FÈVRE VAULORENT 1ER CRU | 113 | Chardonnay
2022 · DOMAINE CHRISTIAN MOREAU PÈRE & FILS VAILLON 1ER CRU | 119 | Chardonnay
2022 · JEAN PAUL & BENOIT DROIN VALMUR GRAND CRU | 209 | Chardonnay
2023 · REGNARD BOUGROS GRAND CRU | 206 | Chardonnay
2023 · DOMAINE LAVANTUREUX GRAND CRU VAUDÉSIR | 226 | Chardonnay
2019 · DOMAINE JEAN-PIERRE GROSSOT 1ER CRU VAUCOUPIN | 91 | Chardonnay
2020 · DOMAINE FRANÇOIS RAVENEAU CHABLIS | 596 | Chardonnay
2024 · DOMAINE BILLAUD-SIMON CHABLIS TÊTE D’OR | 93
2022 · DOMAINE BILLAUD-SIMON 1ER CRU FOURCHAUME | 138 | Chardonnay
### Borgonha | Burgundy · Côte-d’Or
2023 · DOMAINE BOHRMANN PULIGNY-MONTRACHET LES GRANDS CHAMPS | 180 | Côte de Beaune · Chardonnay
2023 · ANTOINE JOBARD MEURSAULT | 243 | Côte de Beaune · Chardonnay
2023 · DOMAINE FAIVELEY BÂTARD-MONTRACHET GRAND CRU | 1223 | Côte de Beaune · Chardonnay
2024 · LA PIERRE RONDE BOURGOGNE VIEILLES VIGNES | 122 | Côte de Beaune · Aligoté
MOREY-COFFINET CHASSAGNE-MONTRACHET LA ROMANÉE 1ER CRU | 299 | Côte de Beaune · Chardonnay
2023 · DOMAINE RAPET CORTON CHARLEMAGNE GRAND CRU | 471 | Côte de Beaune · Chardonnay
2018 · VINCENT GIRARDIN CHASSAGNE-MONTRACHET VIEILLES VIGNES | 232 | Côte de Beaune · Chardonnay
2023 · DOMAINE HUBERT LAMY SAINT-AUBIN 1ER CRU LES FRIONNES | 293 | Côte de Beaune · Chardonnay
2023 · DOMAINE SÉBASTIEN MAGNIEN PULIGNY-MONTRACHET 1ER CRU | 191 | Côte de Beaune · Chardonnay
= 24
2022 · DOMAINE ROULOT AUXEY-DURESSES | 428 | Côte de Beaune · Chardonnay
### Borgonha | Burgundy · Mâconnais
2023 · HÉRITIERS DU COMTE LAFON VIRÉ-CLESSE | 66 | Mâcon · Chardonnay
2023 · VINCENT CHÂTEAU-FUISSÉ LES CLOS MONOPOLE | 196 | Pouilly-Fuissé · Chardonnay
### Bordéus | Bordeaux
2018 · CHÂTEAU SMITH HAUT LAFITTE | 335 | Pessac-Léognan · Sémillon, Sauvignon Blanc
2023 · CHÂTEAU LA FLEUR GRAND VILLAGE | 70 | Bordeaux · Sauvignon Blanc, Sémillon
### Vale do Ródano | Vallée du Rhône
2022 · MICHEL CHAPOUTIER CONDRIEU INVITARE | 142 | Norte · Viognier
2019 · DOMAINE JEAN-LOUIS CHAVE SÉLECTION HERMITAGE BLANC | 146 | Norte · Marsanne, Roussanne
## Alemanha | Germany
### Mosel
2018 · MARKUS MOLITOR ZELTINGER SONNENUHR | 240 | Riesling
2017 · SYBILLE KUNTZ SPÄTLESE TROCKEN | 99 | Riesling
2024 · FRITZ HAAG KABINETT | 56 | Riesling
### Rheingau
2021 · KÜNSTLER PFAFFENBERG | 115 | Riesling
### Rheinhessen
2023 · WEINGUT WITTMANN WESTHOFENER TROCKEN IG | 107 | Riesling
= 25
## Áustria | Austria
### Niederösterreich
2017 · SCHLOSS GOBELSBURG TRADITION | 87 | Grüner Veltliner
## Itália | Italy
### Sicília | Sicily
2024 · AZIENDA AGRICOLA LAMORESCA | 65 | IGP Terre Siciliane · Vermentino
### Langhe
2020 · GAJA ALTENI DI BRASSICA | 273 | Langhe DOC · Sauvignon Blanc
= 27
# 05 — Vinho Rosé | Rosé Wine
## Trás-os-Montes
2024 · MONT’ALEGRE | 41 | Valpaços · Touriga Nacional
## Douro
2023 · TITAN OF DOURO RESERVA | 38 | Cima Corgo · Touriga Franca, Touriga Nacional, Tinto Cão
2025 · KOPKE SÃO LUIZ WINEMAKERS | 49 | Cima Corgo · Tinto Cão
2024 · BIOMBO | 61 | Cima Corgo · Castas Tradicionais
QUANTA TERRA PHENOMENA | 70 | Pinot Noir
2022 · PAULO COUTINHO FUSION | 107 | Cima Corgo · Castas Brancas e Tintas
## Dão
PRIMADO | 50 | Silgueiros · Touriga Nacional, Tinta Roriz, Tinta Pinheira
## Bairrada
2024 · GIZ VINHAS VELHAS | 63 | Anadia · Baga
2017 · KOMPASSUS COLEÇÃO PRIVADA TÊTE DE CUVÉE | 110 | Cantanhede · Baga
## Lisboa
CASAL STA MARIA MAR DE ROSAS | 49 | Colares · Touriga Nacional, Pinot Noir, Syrah
2021 · MONTE BLUNA TIC-TAC | 92 | Arruda · Tinta Miúda
2023 · MONTE D’OIRO RESERVA | 77 | Alenquer · Syrah
PÁGINA | 43 | Óbidos · Pinot Noir
= 28
## Alentejo
NV · FITA PRETA CUVÉE 8 | 48 | Évora · Castelão, Trincadeira, Aragonez
= 30
# 06 — Vinho Tinto | Red Wine
## Vinho Verde
2023 · ZAFIRAH | 48 | Monção e Melgaço · Alvarelhão, Borraçal, Pedral, Vinhão
2021 · RABIANA OAKED | 66 | Ave · Touriga Nacional
ANSELMO MENDES PRIVATE PARDUSCO | 52 | Monção e Melgaço · Alvarelhão
2022 · SEM IGUAL | 49 | Amarante · Touriga Nacional, Baga, Vinhão
2021 · MÁRCIO LOPES TOUCHÉ | 139 | Monção e Melgaço · Vinhas Velhas
## Trás-os-Montes
2019 · ARCOSSÓ VINHAS INTEMPORAIS | 127 | Chaves · Vinhas Velhas
2021 · PALÁCIO DOS TÁVORAS | 132 | Planalto Mirandês · Tinta Gorda
2020 · PALÁCIO DOS TÁVORAS VINHAS VELHAS | 80 | Planalto Mirandês · Vinhas Velhas
2022 · PARAPENTE VINHAS VELHAS | 67 | Valpaços · Marufo, Rufete, Outras
2021 · ARRIBAS WINE COMPANY QUILÓMETRO | 78 | Planalto Mirandês · Tinta Gorda, Rufete, Bastardo, Bastardo Branco, Outras
VALLE PRADINHOS LAST CORNER | 140 | Valpaços · Tinta Amarela, Tinta Roriz, Touriga Nacional
## Douro
2019 · POEIRA SHE | 87 | Touriga Franca
2023 · WINE&SOUL PINTAS CHARACTER | 66 | Cima Corgo · Vinhas Velhas
2019 · WINE&SOUL MANOELLA VINHAS VELHAS | 214 | Cima Corgo · Vinhas Velhas
2021 · AZINHEIRA GRANDE RESERVA | 74 | Baixo Corgo · Vinhas Velhas
BARRIOLO MENINO FRANCISCO | 62 | Touriga Nacional, Tinta Roriz, Touriga Franca
2020 · TITAN OF DOURO ESTÁGIO EM BARRO | 116 | Vinhas Velhas
2021 · DUAS ÁRVORES | 37
= 31
2022 · DUAS ÁRVORES GRANDE RESERVA | 126 | Cima Corgo · Touriga Nacional, Outras
2015 · QUINTA DA COSTA GRADUAL | 64 | Cima Corgo · Touriga Nacional, Tinta Roriz, Touriga Franca
QUINTA DO PORTAL GRANDE RESERVA | 97 | Cima Corgo · Touriga Nacional, Tinta Roriz, Touriga Franca
2021 · RAMOS PINTO ERVAMOIRA | 267 | Douro Superior · Vinhas Velhas
2021 · BOA-VISTA VINHA DO UJO | 272 | Baixo Corgo · Touriga Nacional, Touriga Franca, Outras
2022 · MAQUIA | 54 | Baixo Corgo · Castas Tradicionais
2019 · MAFARRICO MINHA VINHA | 77 | Baixo Corgo · Vinhas Velhas
2015 · FERREIRINHA BARCA VELHA | 586 | Douro Superior · Vinhas Velhas
2019 · QUINTA DO NOVAL VINHAS DA MARKA | 461 | Cima Corgo · Vinhas Velhas
2017 · QUANTA TERRA INTEIRO | 175 | Touriga Nacional, Touriga Franca
QUINTA DO CARVALHIDO | 66 | Douro Superior · Touriga Nacional, Touriga Franca
2023 · CONEXÃO O SEGREDO | 62 | Baixo Corgo · Tinta Francisca, Tinta Amarela
2022 · MONTE XISTO ORIENTE | 185 | Douro Superior · Tinto Cão, Tinta Francisca
2018 · NIEPOORT QUINTA DE NÁPOLES | 154 | Cima Corgo · Sousão, Tinta Amarela, Tinta Francisca, Outras
2016 · NIEPOORT TURRIS | 308 | Cima Corgo · Vinhas Velhas
QUINTA DA RORIZ CHRYSEIA | 163 | Cima Corgo · Touriga Nacional, Touriga Franca
2016 · QUINTA DA PEDRA ALTA N3 | 56 | Cima Corgo · Touriga Nacional, Touriga Franca, Tinta Barroca
2015 · QUINTA DO FOJO VINHA DO FOJO | 223 | Cima Corgo · Vinhas Velhas
2013 · FOJO | 521 | Cima Corgo · Tinta Roriz, outras
2023 · QUINTA DO JAVALI CLOS FONTE DO SANTO | 78 | Douro Superior · Vinhas Velhas
2021 · QUINTA DO CÔTTO BASTARDO | 92 | Baixo Corgo · Bastardo
= 32
2018 · QUINTA DE CEIS VINHA DA MANTELINHA | 194 | Cima Corgo · Touriga Franca, Touriga Nacional, Malvasia Preta, Outras
2020 · FAMÍLIA SILVA BRANCO PEDIGREE | 101 | Cima Corgo · Vinhas Velhas
2022 · ROQUETTE & CAZES | 60 | Cima Corgo · Touriga Nacional, Touriga Franca, Tinta Roriz
2015 · QUINTA DO CRASTO TINTA RORIZ | 126 | Cima Corgo · Tinta Roriz
2016 · QUINTA DO CRASTO VINHA DA PONTE | 478 | Cima Corgo · Vinhas Velhas
2016 · QUINTA DO VALE MEÃO | 527 | Douro Superior · Touriga Nacional, Touriga Franca, Tinta Roriz, Tinta Barroca
NV · QUINTA DA CAROLINA CORTEX | 126 | Cima Corgo · Touriga Nacional, Tinta Roriz, Tinta Carvalha, Rufete, outras
2015 · QUINTA DE MARITÁVORA Nº2 GRANDE RESERVA | 111 | Douro Superior · Touriga Franca, Touriga Nacional, Tinta Roriz
QUINTA DAS CARVALHAS TINTA FRANCISCA | 127 | Cima Corgo · Tinta Francisca
## Bairrada
LUÍS PATO VINHA PAN | 91 | Anadia · Baga
2014 · QUINTA DO RIBEIRINHO PÉ FRANCO | 431 | Anadia · Vinhas Velhas de Baga
MONTE CASCAS VINHA DO QUINTO | 107 | Cantanhede · Baga, Maria Gomes, Bical
2015 · MESSIAS GARRAFEIRA CLÁSSICO | 62 | Mealhada · Baga
2018 · SIDÓNIO DE SOUSA LAPSO | 59 | Anadia · Baga, Merlot
2019 · SIDÓNIO DE SOUSA VINHO D’AUTOR | 118 | Anadia · Baga
2021 · GIZ VINHA DAS CAVALEIRAS | 95 | Anadia · Vinhas Velhas de Baga
2015 · KOMPASSUS TINTO CÃO | 74 | Tinto Cão
2008 · VACARIÇA GARRAFEIRA | 126 | Mealhada · Baga, Vinhas Velhas
2015 · POEIRINHO GARRAFEIRA | 169 | Cantanhede · Baga
2022 · QUINTA DAS BÁGEIRAS AVÔ FAUSTO | 66 | Anadia · Baga, Touriga Nacional
2014 · PRINCIPAL GRANDE RESERVA | 252 | Anadia · Cabernet Sauvignon, Touriga Nacional, Outras
= 33
2021 · PRIOR LUCAS DOMINICAL’S | 69 | Vinhas Velhas
2020 · V PURO OUTRORA CLÁSSICO | 97 | Anadia · Baga
1995 · FREI JOÃO RESERVA | 266 | Anadia · Baga, Touriga Nacional, Tinta Roriz, Merlot, Syrah
## Dão
2021 · QUINTA DO SOBRAL DE SANTAR | 47 | Alva · Jaen
2018 · QUINTA DO ESCUDIAL TOURIGA NACIONAL | 56 | Serra da Estrela · Touriga Nacional
2013 · MONTE CASCAS VINHA DA CARPANHA | 117 | Silgueiros · Touriga Nacional, Jaen
2016 · M.O.B. GARRAFEIRA | 111 | Serra da Estrela · Vinhas Velhas
MARCADO A FERROS | 72 | Alva · Touriga Nacional, Alfrocheiro, Outras
2021 · QUINTA DE SAES ESTÁGIO PROLONGADO | 43 | Serra da Estrela · Touriga Nacional, Tinta Roriz, Outras
2019 · QUINTA DA PELLADA ALTO | 142 | Serra da Estrela · Jaen, Tinta Pinheira, Tinta Carvalha, Bastardo
2018 · CASA DA PASSARELLA VILLA OLIVEIRA VINHA CENTENÁRIA PAI D’AVIZ | 144 | Serra da Estrela · Baga, Jaen, Tinta Pinheira, Touriga Nacional, Outras
2014 · CASA DA PASSARELLA VILLA OLIVEIRA VINDIMA | 506 | Serra da Estrela · Baga, Touriga Nacional, Alvarelhão, Outras
2022 · ANTÓNIO MADEIRA CENTENÁRIA | 152 | Serra da Estrela · Jaen, Outras
PRIMADO SB | 51 | Tinta Roriz
2015 · PRIMADO | 82 | Silgueiros · Touriga Nacional, Alfrocheiro, Tinta Roriz, Outras
2021 · RIBEIRO SANTO VINHA DA NEVE | 90 | Terras de Senhorim · Touriga Nacional, Alfrocheiro, Tinto Cão
2022 · LIQUEN ALFROCHEIRO | 114 | Silgueiros · Alfrocheiro
1980 · PORTA DOS CAVALEIROS | 187 | Besteiros · Touriga Nacional, Tinta Roriz, Alfrocheiro, Jaen
## Beira Interior
2021 · BEYRA VINHA DE SANTA MARIA | 81 | Castelo Rodrigo · Tinta Roriz
2022 · MARTIN BOUTIQUE WINES 70/30 | 59 | Cova da Beira, Pinhel · Touriga Nacional, Syrah, Rufete
= 34
CASAS ALTAS | 36 | Cova da Beira · Rufete
## Lisboa
2021 · ADEGAMÃE ATLÂNTICO | 66 | Torres Vedras · Pinot Noir
2020 · MONTE BLUNA TIC-TAC | 70 | Arruda · Syrah
2023 · RAMILO NATIVAS | 84 | Colares · Castelão, Ramilo
QUINTA DAS CEREJEIRAS GRANDE RESERVA | 68 | Óbidos · Touriga Nacional, Castelão, Aragonez
BAÍAS ENSEADAS PESSOAL PINOT NOIR | 93 | Colares · Pinot Noir
SÉRIE ÍMPAR SOLITÁRIO | 142 | Bucelas · Castas Tradicionais
2022 · MONTE D’OIRO RESERVA | 104 | Alenquer · Syrah, Viognier
MONTE D’OIRO PARCELA 24 | 143 | Alenquer · Syrah
1969 · VIÚVA GOMES | 206 | Colares · Ramisco
2019 · CHOCAPALHA VINHA MÃE | 65 | Alenquer · Touriga Nacional, Alicante Bouschet, Syrah
QUINTA DO PINTO TINTA MIÚDA | 66 | Alenquer · Tinta Miúda
## Tejo
2022 · CASAL DAS AIRES VINHAS VELHAS | 62 | Lezíria do Tejo · Alicante Bouschet
QUINTA DA ESCUSA RESERVA | 54 | Tinta Miúda, Castelão, Sousão
2023 · PINHAL DA TORRE RESOLUTO | 47 | Lezíria do Tejo · Touriga Nacional, Tinta Francisca, Outras
2021 · PINHAL DA TORRE ANTAGONISTA | 123 | Lezíria do Tejo · Touriga Nacional, Grenache
## Península de Setúbal
2011 · CEBOLAL CAIOS | 112 | Setúbal · Alicante Bouschet, Aragonez
TROIS | 120 | Palmela · Castelão
= 35
ANTÓNIO SARAMAGO SUPERIOR | 59 | Setúbal · Alicante Bouschet, Castelão, Touriga Nacional
2022 · HORÁCIO SIMÕES RESERVA | 43 | Setúbal · Castelão, Outras
2018 · HERDADE DO PORTOCARRO CAVALO MALUCO | 97 | Setúbal · Petit Verdot, Touriga Franca, Touriga Nacional
## Alentejo
XXVI TALHAS MESTRE DANIEL | 50 | Vidigueira · Trincadeira, Aragonez, Tinta Grossa
2021 · MAQUETE BARRO | 51 | Alicante Bouschet, Moreto, Touriga Nacional
2020 · MARQUÊS DE BORBA V DO LADO CAIADA | 74 | Tinta Caiada
2021 · CORTES DE CIMA SALINO | 102 | Vidigueira · Cabernet Franc
2022 · GERAÇÕES DE TALHA FARRABO | 58 | Vidigueira · Alfrocheiro, Trincadeira, Alicante Bouschet
ALTAS QUINTAS RESERVA-DO | 132 | Portalegre · Alicante Bouschet, Syrah, Touriga Nacional
HERDADE DA MALHADINHA MM | 182 | Beja · Alicante Bouschet, Tinta Miúda, Baga
2004 · MONTE DA PENHA RESERVA | 98 | Portalegre · Alicante Bouschet, Aragonez, Trincadeira
2022 · ADEGA DO MONTE BRANCO ALENTO RESERVA | 41 | Estremoz · Aragonez, Alicante Bouschet, Touriga Nacional
2021 · ADEGA DO MONTE BRANCO CASTELÃO | 54 | Estremoz · Castelão
2015 · HERDADE DO MOUCHÃO TONEL 3-4 | 590 | Estremoz · Alicante Bouschet
2020 · QUINTA DO MOURO RÓTULO DOURADO | 239 | Alicante Bouschet, Aragonez, Cabernet Sauvignon
TORRE DE PALMA RESERVA | 43 | Portalegre · Alicante Bouschet, Aragonez, Touriga Nacional, Tinta Miúda
2014 · GLORIA REYNOLDS | 141 | Portalegre · Alicante Bouschet
2017 · TAPADA DO CHAVES VINHAS VELHAS | 256 | Portalegre · Tinta Francesa, Trincadeira
2023 · SUSANA ESTEBAN CENTENÁRIA | 78 | Portalegre · Vinhas Velhas
## Algarve
2025 · ARVAD NEGRAMOLE | 42 | Lagoa · Negramole
= 36
2021 · MORGADO DO QUINTÃO | 93 | Lagoa · Castelão
2022 · JOÃO CLARA RESERVA | 63 | Lagos · Alicante Bouschet, Touriga Nacional, Syrah
## Açores
2024 · ADEGA DO VULCÃO CLARETE | 56 | Pico · Merlot, Syrah
## Madeira
2024 · PROFETAS E VILÕES TINTA NEGRA | 59 | Tinta Negra
2023 · BARBEITO VINHAS DO FARROBO | 145 | Bastardo
## Espanha | Spain
### Galiza · Ribera Sacra
2021 · ABADIA DA COVA PENAFION | 76 | Mencia
### Castilla y León · Bierzo
2020 · RAÚL PÉREZ ULTREIA RAPOLÃO | 157 | Mencia
2021 · MAURO VALEYO | 107 | Mencía, Godello
### Castilla y León
2022 · RETA TA/RAZ | 117 | Rufete, Calabrês, Aragonez, Outras Brancas
### Castilla y León · Ribera del Duero
2019 · FLOR DE PINGUS | 407 | Tempranillo
2021 · DOMINIO DEL ÁGUILA RESERVA | 178 | Tempranillo, Garnacha, Albillo
2020 · PAGO DE CARRAOVEJAS CUESTA DE LAS LIEBRES | 984 | Tinto Fino
2022 · VEGA SICILIA ALIÓN | 227 | Tempranillo
2021 · VEGA SICILIA VALBUENA 5º | 366 | Tempranillo, Merlot
= 37
2015 · VEGA SICILIA ÚNICO | 834 | Tempranillo, Cabernet Sauvignon
2022 · MAURO GARMÓN | 118 | Tempranillo
MAURO VS | 195 | Tempranillo
### Castilla y León · Toro
2015 · TERMANTHIA | 436 | Tinta de Toro
2019 · NUMANTHIA | 132 | Tinta de Toro
FRANÇOIS LURTON CAMPO ELISEO | 166 | Tinta de Toro
2021 · VEGA SICILIA PINTIA | 181 | Tinta de Toro
2022 · SAN ROMÁN | 105 | Tinta de Toro
### Laguardia
2020 · ARTADI SAN LAZARO | 315 | Tempranillo
### Rioja
2009 · VIÑA BOSCONIA RESERVA | 92 | Rioja Alta · Garnacha, Graciano, Mazuelo, Tempranillo
2010 · VIÑA TONDONIA | 145 | Rioja Alta · Garnacha, Graciano, Tempranillo
2004 · VIÑA TONDONIA GRAN RESERVA | 408 | Rioja Alta · Tempranillo, Graciano, Garnacha Tintonera
2016 · LA RIOJA ALTA 904 | 180 | Rioja Alta · Tempranillo, Outras
MAURO BAYNOS | 176 | Rioja Alavesa · Tempranillo, Graciano
2021 · MARQUÉS DE MURRIETA RESERVA | 67 | Rioja Alta · Tempranillo, Graciano, Mazuelo
2011 · MARQUÉS DE MURRIETA CASTILLO YGAY GRAN RESERVA | 630 | Rioja Alta · Tempranillo, Mazuelo
2022 · BENJAMIN DE ROTHSCHILD & VEGA SICILIA MACÁN CLÁSICO | 127 | Rioja Alavesa, Rioja Alta · Tempranillo, Garnacha
2015 · REMÍREZ DE GANUZA GRAN RESERVA | 248 | Rioja Alavesa · Graciano, Malvasia, Tempranillo, Viura
= 38
### Catalunha · Priorat
2022 · ÁLVARO PALACIOS FINCA DOFÍ | 205 | Garnacha, Cariñena
2022 · TERROIR AL LIMIT ARBOSSAR | 206 | Carignan
2022 · TERROIR AL LIMIT TERRA DE CUQUES | 109 | Grenache, Carignan
2023 · FAMILIA NIN ORTIZ PLANETES CLÀSSIC | 113 | Garnacha, Cariñena, Garnacha Peluda
2022 · ÁLVARO PALACIOS GRATALLOPS | 125 | Garnacha, Cariñena
## França | France
### Borgonha | Burgundy · Côte-d’Or
2023 · ANTOINE JOBARD BEAUNE LES MONTREVENOTS 1ER CRU | 196 | Côte de Beaune · Pinot Noir
2021 · DOMAINE FABIEN COCHE MONTHELIE LES BARBIÈRES 1ER CRU | 137 | Côte de Beaune · Pinot Noir
2021 · DOMAINE FAIVELEY CLOS VOUGEOT GRAND CRU | 667 | Côte de Nuits · Pinot Noir
2022 · LA COMMARAINE NUITS-SAINT-GEORGES 1ER CRU | 287 | Côte de Nuits · Pinot Noir
2022 · VINCENT GIRARDIN CORTON GRAND CRU PERRIÈRES | 372 | Côte de Beaune · Pinot Noir
2023 · DOMAINE MÉO-CAMUZET VOSNE-ROMANÉE 1ER CRU | 395 | Côte de Nuits · Pinot Noir
2020 · DOMAINE D’ARLOT ROMANÉE SAINT-VIVANT GRAND CRU | 1235 | Côte de Nuits · Pinot Noir
2021 · PHILIPPE PACALET ÉCHEZEAUX GRAND CRU | 1517 | Côte de Nuits · Pinot Noir
2023 · GEORGES NOËLLAT NUITS-SAINT-GEORGES | 142 | Côte de Nuits · Pinot Noir
2023 · MAXIME CHEURLIN-NOËLLAT CHAMBOLLE-MUSIGNY | 237 | Côte de Nuits · Pinot Noir
2023 · DOMAINE CHEVROT SAVIGNY-LÈS-BEAUNE 1ER CRU AUX BOUSSELOTS | 126 | Côte de Beaune · Pinot Noir
2010 · DOMAINE FRANÇOIS GAUNOUX POMMARD 1ER CRU LES ÉPENOTS | 268 | Côte de Beaune · Pinot Noir
### Beaujolais
2019 · DOMAINE CHIGNARD FLEURIE LE COCHONNIER | 86 | Gamay
= 39
### Vale do Ródano | Vallée du Rhône
2022 · DOMAINE DES LISES CROZES-HERMITAGE | 86 | Norte · Syrah
2018 · CHAPOUTIER CROZES-HERMITAGE VARONNIERS | 211 | Norte · Syrah
2020 · DOMAINE ROSTAING CÔTE-RÔTIE AMPODIUM | 167 | Norte · Syrah
2021 · DOMAINE DU VIEUX TÉLÉGRAPHE CHÂTEAUNEUF-DU-PAPE LA CRAU | 244 | Grenache, Mourvèdre, Syrah, Cinsault
2015 · CHÂTEAU DES TOURS VIN DE PAYS | 264 | Grenache, Syrah
2023 · DOMAINE JAMET CÔTE-RÔTIE | 331 | Norte · Syrah
2021 · DOMAINE JEAN-LOUIS CHAVE HERMITAGE FARCONNET | 192 | Norte · Syrah
### Bordéus | Bordeaux
2015 · CHÂTEAU LATOUR 1ER CRU CLASSÉ | 2009 | Pauillac · Cabernet Sauvignon, Cabernet Franc, Petit Verdot
2019 · CHÂTEAU LAFITE-ROTHSCHILD 1ER CRU CLASSÉ | 2525 | Pauillac · Cabernet Sauvignon, Merlot, Petit Verdot
2020 · CHÂTEAU PICHON BARON LONGUEVILLE 2ÈME CRU CLASSÉ | 492 | Pauillac · Merlot, Cabernet Sauvignon
2019 · CHÂTEAU LYNCH-BAGES 5ÈME CRU CLASSÉ | 485 | Pauillac · Merlot, Cabernet Sauvignon
2016 · CHÂTEAU MARGAUX 1ER CRU CLASSÉ | 2050 | Margaux · Cabernet Sauvignon, Merlot, Petit Verdot
2016 · CHÂTEAU HAUT-BRION 1ER CRU CLASSÉ | 1736 | Pessac-Léognan · Merlot, Cabernet Sauvignon, Cabernet Franc
2019 · CHÂTEAU CHEVAL BLANC 1ER GRAND CRU CLASSÉ | 2255 | Saint-Émilion · Merlot, Cabernet Franc
2020 · CHÂTEAU PETIT FIGEAC | 223 | Saint-Émilion · Cabernet Sauvignon, Cabernet Franc, Merlot
2022 · LE PUY ÉMILIEN | 92 | Côtes de Bordeaux · Merlot, Cabernet Franc
2020 · STÉPHANE DERENONCOURT DOMAINE DE L’A | 113 | Côtes de Bordeaux · Merlot, Cabernet Franc
2021 · CHÂTEAU LAFLEUR LES PERRIÈRES | 188 | Pomerol · Merlot, Bouchet
2015 · CHÂTEAU FLEUR CARDINALE | 149 | Saint-Émilion · Merlot, Cabernet Sauvignon, Cabernet Franc
= 40
## Itália | Italy
### Piemonte
2021 · GAJA BAROLO DAGROMIS | 294 | Barolo DOCG · Nebbiolo
MARENGO BAROLO BRICCO DELLE VIOLE | 163 | Barolo DOCG · Nebbiolo
2017 · BORGOGNO BAROLO RISERVA | 464 | Barolo DOCG Riserva · Nebbiolo
2019 · CASCINA BARICCHI BARBARESCO RISERVA "ROSE DELLE CASASSE" | 162 | Barbaresco DOCG Riserva · Nebbiolo
2021 · PIERO BUSSO BARBARESCO ROSSO MONDINO | 150 | Barbaresco DOCG · Nebbiolo
### Emilia-Romagna
2020 · CHIARA CONDELLO LE LUCCIOLE | 168 | Romagna Sangiovese DOC · Sangiovese
### Toscana | Tuscany
LA RAGNAIE BRUNELLO DI MONTALCINO PETROSO | 305 | Brunello di Montalcino · Sangiovese
2022 · ANTINORI TIGNANELLO | 315 | Toscana IGT · Sangiovese, Cabernet Sauvignon, Cabernet Franc
2019 · ANTINORI SOLAIA | 909 | Toscana IGT · Cabernet Sauvignon, Cabernet Franc, Sangiovese
2004 · CAPRILI BRUNELLO DI MONTALCINO | 215 | Brunello di Montalcino DOCG Riserva · Sangiovese
2019 · AMPELEIA IGT TOSCANA | 143 | Toscana IGT · Cabernet Franc, Outras
### Veneto
ARMANI AMARONE RISERVA CUSLANUS | 106 | Amarone della Valpolicella DOCG Classico Riserva · Corvina, Corvinone, Rondinella
### Etna
2019 · CARRANCO CONTRADA ETNA ROSSO | 209 | Etna Rosso DOC · Nerello Mascalese, Nerello Cappuccio
= 42
# 07 — Colheita Tardia | Late Harvest
## Vinho Verde
2023 · SOUSA LOPES 50 cl | 72 | Ave · Petit Manseng
## Trás-os-Montes
2022 · QUINTA DO ARCOSSÓ 50 cl | 69 | Chaves · Sémillon
## Douro
ANETO S 50 cl | 121 | Baixo Corgo · Sémillon
## Lisboa
2020 · CASAL STA MARIA 37,5 cl | 120 | Colares · Petit Manseng
## Tejo
2018 · CASAL BRANCO FALCOARIA 37,5 cl | 82 | Lezíria do Tejo · Fernão Pires
## Alentejo
HERDADE DA MALHADINHA 37,5 cl | 84 | Beja · Petit Manseng
## França | France
### Bordéus | Bordeaux
2020 · CHÂTEAU DOISY-VÉDRINES 2ÈME CRU CLASSÉ | 137 | Barsac · Sémillon, Sauvignon Blanc, Sauvignon Gris
2015 · CHÂTEAU D’YQUEM 1ER CRU SUPÉRIEUR | 1298 | Sauternes · Sauvignon Blanc, Sémillon
## Alemanha | Germany
### Mosel
2010 · MARKUS MOLITOR WEHLENER SONNENUHR TBA 37,5 cl | 387 | Mosel · Riesling
= 43
## Hungria | Hungary
### Tokaj
2013 · DISZNÓKŐ TOKAJI ASZÚ 5 PUTTONYOS 50 cl | 132 | Tokaj · Furmint, Hárslevelű
2007 · DISZNÓKŐ TOKAJI ASZÚ ESZENCIA 37,5 cl | 1066 | Furmint, Hárslevelű
= 45
# 08 — Vinho do Porto | Port Wine
## Porto Branco | White Port
10 YO · NIEPOORT | 87
10 YO · VIEIRA DE SOUSA 50 cl | 96
10 YO · SÃO LEONARDO 50 cl | 117
20 YO · QUINTA DA GAIVOSA 50 cl | 148
20 YO · KOPKE 37,5 cl | 115
20 YO · DALVA DRY | 125
20 YO · RAMOS PINTO | 232
30 YO · KOPKE | 455
40 YO · ANDRESEN 50 cl | 313
50 YO · DALVA VERY OLD | 612
80 YO · TAYLOR’S | 1097
2007 · DALVA | 121
2004 · KOPKE | 181
2002 · KOPKE | 208
1971 · DALVA GOLDEN WHITE 50 cl | 461
1968 · NIEPOORT | 747
## Porto Tawny | Tawny Port
10 YO · PREGUIÇA | 77
10 YO · MENIN 50 cl | 86
20 YO · WINE&SOUL MANOELLA | 160
20 YO · NIEPOORT | 138
20 YO · KOPKE | 136
30 YO · SÃO LEONARDO | 299
30 YO · NIEPOORT | 341
40 YO · KOPKE | 404
40 YO · GRAHAM’S | 266
50 YO · QUINTA DO NOVAL | 957
50 YO · MENIN 50 cl | 527
= 46
80 YO · QUINTA DAS CARVALHAS | 2006
2003 · KOPKE | 168
2001 · DALVA | 194
1997 · GRAHAM’S | 279
1991 · ANDRESEN 50 cl | 197
1976 · KOPKE | 365
1967 · KOPKE | 573
1940 · VAN ZELLER | 1845
## Porto Ruby | Ruby Port
### LBV | Late Bottled Vintage
2019 · TAYLOR’S | 58
2004 · RAMOS PINTO BOTTLE MATURED | 101
2019 · QUINTA DE LA ROSA | 81
2019 · VAN ZELLER | 83
### Vintage
2021 · SYMINGTON STONE TERRACES | 710
2023 · ALVES DE SOUSA | 226
QUINTA DA GAIVOSA AMPHITEATRUM | 343
2023 · VAN ZELLER | 226
2019 · QUINTA DO NOVAL NACIONAL | 3945
2018 · QUINTA DO VESÚVIO | 194
2017 · DOW’S | 240
2016 · QUINTA DO NOVAL | 481
2015 · NIEPOORT BIOMA | 254
2014 · WINE&SOUL PINTAS | 305
2007 · DOW’S | 401
2004 · RAMOS PINTO ERVAMOIRA | 381
= 48
# 09 — Moscatel
## Douro
2007 · QUINTA DO PORTAL RESERVA | 90 | Cima Corgo · Moscatel Galego
20 YO · NIEPOORT | 144 | Cima Corgo · Moscatel Galego
## Península de Setúbal
NV · HORÁCIO SIMÕES EXCELLENT 50 cl | 125 | Setúbal · Moscatel
2010 · HORÁCIO SIMÕES COSTA A COSTA 50 cl | 81 | Setúbal · Moscatel Roxo
10 YO · QUINTA DO PILOTO 50 cl | 112 | Palmela · Moscatel Roxo
40 YO · JMF ALAMBRE | 275 | Setúbal · Moscatel Roxo
= 50
# 10 — Outros Fortificados | Other Fortified Wines
## Bairrada · Abafado
2007 · QUINTA DAS BÁGEIRAS | 123 | Anadia · Baga
## Lisboa · Carcavelos
15 YO · VILLA OEIRAS | 127 | Arinto, Galego Dourado, Ratinho
## Açores | Azores · Pico
10 YO · AZORES WINE COMPANY THOMAS JEFFERSON 37,5 cl | 187 | Arinto dos Açores, Terrantez do Pico, Verdelho
= 52
# 11 — Vinho da Madeira | Madeira Wine
10 YO · BARBEITO BOAL | 107
10 YO · JUSTINO’S MALVASIA | 94
15 YO · H.M. BORGES VERDELHO | 121
15 YO · D’OLIVEIRAS BOAL | 142
20 YO · BARBEITO BASTARDO 2 | 403
30 YO · BLANDY’S BOAL | 355
30 YO · BARBEITO DUETO 50 cl | 386
40 YO · BARBEITO VINHO DO REITOR LOTE 2 MALVASIA | 696
50+ YO · H.M. BORGES MALVASIA | 1042
2014–2017 · BARBEITO LOTE ESPECIAL SERCIAL E VERDELHO 50 cl | 184
2009 · D’OLIVEIRAS MALVASIA | 246
2008 · JUSTINO’S BOAL | 115
2002 · BLANDY’S SERCIAL | 193
2000 · JUSTINO’S TINTA NEGRA SINGLE CASK 50 cl | 230
2000 · D’OLIVEIRAS FRASQUEIRA MALVAZIA | 414
1996 · JUSTINO’S BOAL | 160
1982 · BLANDY’S FRASQUEIRA VERDELHO | 790
1982 · BARBEITO FRASQUEIRA BOAL 111 | 822
1981 · D’OLIVEIRAS FRASQUEIRA VERDELHO | 903
1978 · JUSTINO’S FRASQUEIRA TERRANTEZ | 921
`;
