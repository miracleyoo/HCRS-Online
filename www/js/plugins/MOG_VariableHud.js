//=============================================================================
// MOG_VariableHud.js
//=============================================================================

/*:
 * @plugindesc (v1.4) Apresenta as variáveis através de Huds.
 * @author Moghunter
 * 
 * @param Hud 1 Enable
 * @desc Ativar Hud.
 * @default true
 * 
 * @param Hud 1 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 1 Variable ID
 * @desc Definição da ID da variável.
 * @default 30
 * 
 * @param Hud 1 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1)
 * @default 100
 * 
 * @param Hud 1 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_1
 *
 * @param Hud 1 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 1 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 200
 *
 * @param Hud 1 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 5
 *
 * @param Hud 1 Number X
 * @desc Definição da posição X-axis do número.
 * @default -7
 *
 * @param Hud 1 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 10
 *
 * @param Hud 1 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 1 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 1 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default true
 *
 * @param Hud 1 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 1 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 1 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 2 Enable
 * @desc Ativar Hud.
 * @default true
 * 
 * @param Hud 2 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 2 Variable ID
 * @desc Definição da ID da variável.
 * @default 31
 * 
 * @param Hud 2 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 300
 * 
 * @param Hud 2 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_2
 *
 * @param Hud 2 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 2 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 347
 *
 * @param Hud 2 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 5
 *
 * @param Hud 2 Number X
 * @desc Definição da posição X-axis do número.
 * @default -7
 *
 * @param Hud 2 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 10
 *
 * @param Hud 2 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 2 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 2 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default true
 *
 * @param Hud 2 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 2 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 2 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 3 Enable
 * @desc Ativar Hud.
 * @default true
 * 
 * @param Hud 3 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 3 Variable ID
 * @desc Definição da ID da variável.
 * @default 32
 * 
 * @param Hud 3 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999
 * 
 * @param Hud 3 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_3
 *
 * @param Hud 3 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 3 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 490
 *
 * @param Hud 3 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 5
 *
 * @param Hud 3 Number X
 * @desc Definição da posição X-axis do número.
 * @default -7
 *
 * @param Hud 3 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 10
 *
 * @param Hud 3 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 3 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 3 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default true
 *
 * @param Hud 3 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 3 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 3 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 4 Enable
 * @desc Ativar Hud.
 * @default true
 * 
 * @param Hud 4 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 4 Variable ID
 * @desc Definição da ID da variável.
 * @default 33
 * 
 * @param Hud 4 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999
 * 
 * @param Hud 4 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_4
 *
 * @param Hud 4 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 4 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 730
 *
 * @param Hud 4 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 230
 *
 * @param Hud 4 Number X
 * @desc Definição da posição X-axis do número.
 * @default -50
 *
 * @param Hud 4 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 4 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 4 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 4 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 4 Show Gauge
 * @desc Apresentar o medidor.
 * @default true
 *
 * @param Hud 4 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 20
 *
 * @param Hud 4 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 63
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 5 Enable
 * @desc Ativar Hud.
 * @default true
 * 
 * @param Hud 5 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 5 Variable ID
 * @desc Definição da ID da variável.
 * @default 34
 * 
 * @param Hud 5 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999
 * 
 * @param Hud 5 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_5
 *
 * @param Hud 5 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 5 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 730
 *
 * @param Hud 5 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 327
 *
 * @param Hud 5 Number X
 * @desc Definição da posição X-axis do número.
 * @default -50
 *
 * @param Hud 5 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 5 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 5 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 5 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 5 Show Gauge
 * @desc Apresentar o medidor.
 * @default true
 *
 * @param Hud 5 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 20
 *
 * @param Hud 5 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 63
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 6 Enable
 * @desc Ativar Hud.
 * @default true
 * 
 * @param Hud 6 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 6 Variable ID
 * @desc Definição da ID da variável.
 * @default 35
 * 
 * @param Hud 6 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999
 * 
 * @param Hud 6 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_6
 *
 * @param Hud 6 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 6 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 730
 *
 * @param Hud 6 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 424
 *
 * @param Hud 6 Number X
 * @desc Definição da posição X-axis do número.
 * @default -50
 *
 * @param Hud 6 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 6 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 6 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 6 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 6 Show Gauge
 * @desc Apresentar o medidor.
 * @default true
 *
 * @param Hud 6 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 20
 *
 * @param Hud 6 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 63
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 7 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 7 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 7 Variable ID
 * @desc Definição da ID da variável.
 * @default 36
 * 
 * @param Hud 7 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 7 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_7
 *
 * @param Hud 7 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 7 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 0
 *
 * @param Hud 7 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 0
 *
 * @param Hud 7 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 7 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 7 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 7 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 7 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 7 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 7 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 7 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 8 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 8 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 8 Variable ID
 * @desc Definição da ID da variável.
 * @default 37
 * 
 * @param Hud 8 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 8 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_8
 *
 * @param Hud 8 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 8 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 50
 *
 * @param Hud 8 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 50
 *
 * @param Hud 8 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 8 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 8 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 8 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 8 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 8 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 8 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 8 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 9 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 9 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 9 Variable ID
 * @desc Definição da ID da variável.
 * @default 38
 * 
 * @param Hud 9 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 9 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_9
 *
 * @param Hud 9 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 9 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 100
 *
 * @param Hud 9 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 100
 *
 * @param Hud 9 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 9 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 9 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 9 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 9 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 9 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 9 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 9 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 10 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 10 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 10 Variable ID
 * @desc Definição da ID da variável.
 * @default 39
 * 
 * @param Hud 10 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 10 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_10
 *
 * @param Hud 10 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 10 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 150
 *
 * @param Hud 10 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 150
 *
 * @param Hud 10 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 10 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 10 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 10 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 10 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 10 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 10 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 10 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 11 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 11 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 11 Variable ID
 * @desc Definição da ID da variável.
 * @default 40
 * 
 * @param Hud 11 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 11 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_11
 *
 * @param Hud 11 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 11 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 200
 *
 * @param Hud 11 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 200
 *
 * @param Hud 11 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 11 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 11 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 11 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 11 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 11 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 11 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 11 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 12 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 12 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 12 Variable ID
 * @desc Definição da ID da variável.
 * @default 41
 * 
 * @param Hud 12 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 12 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_12
 *
 * @param Hud 12 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 12 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 250
 *
 * @param Hud 12 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 250
 *
 * @param Hud 12 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 12 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 12 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 12 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 12 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 12 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 12 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 12 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 13 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 13 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 13 Variable ID
 * @desc Definição da ID da variável.
 * @default 42
 * 
 * @param Hud 13 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 13 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_13
 *
 * @param Hud 13 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 13 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 300
 *
 * @param Hud 13 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 300
 *
 * @param Hud 13 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 13 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 13 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 13 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 13 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 13 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 13 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 13 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 14 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 14 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 14 Variable ID
 * @desc Definição da ID da variável.
 * @default 43
 * 
 * @param Hud 14 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 14 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_14
 *
 * @param Hud 14 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 14 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 350
 *
 * @param Hud 14 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 350
 *
 * @param Hud 14 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 14 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 14 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 14 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 14 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 14 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 14 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 14 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 15 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 15 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 15 Variable ID
 * @desc Definição da ID da variável.
 * @default 44
 * 
 * @param Hud 15 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 15 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_15
 *
 * @param Hud 15 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 15 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 400
 *
 * @param Hud 15 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 400
 *
 * @param Hud 15 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 15 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 15 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 15 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 15 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 15 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 15 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 15 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 16 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 16 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 16 Variable ID
 * @desc Definição da ID da variável.
 * @default 45
 * 
 * @param Hud 16 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 16 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_16
 *
 * @param Hud 16 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 16 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 450
 *
 * @param Hud 16 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 450
 *
 * @param Hud 16 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 16 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 16 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 16 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 16 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 16 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 16 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 16 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 17 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 17 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 17 Variable ID
 * @desc Definição da ID da variável.
 * @default 46
 * 
 * @param Hud 17 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 17 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_17
 *
 * @param Hud 17 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 17 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 500
 *
 * @param Hud 17 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 500
 *
 * @param Hud 17 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 17 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 17 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 17 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 17 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 17 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 17 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 17 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 18 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 18 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 18 Variable ID
 * @desc Definição da ID da variável.
 * @default 47
 * 
 * @param Hud 18 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 18 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_18
 *
 * @param Hud 18 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 18 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 550
 *
 * @param Hud 18 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 550
 *
 * @param Hud 18 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 18 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 18 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 18 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 18 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 18 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 18 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 18 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 19 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 19 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 19 Variable ID
 * @desc Definição da ID da variável.
 * @default 48
 * 
 * @param Hud 19 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 19 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_19
 *
 * @param Hud 19 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 19 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 600
 *
 * @param Hud 19 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 550
 *
 * @param Hud 19 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 19 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 19 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 19 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 19 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 19 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 19 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 19 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @param ---------------------------------------------------------------------
 * 
 * @param Hud 20 Enable
 * @desc Ativar Hud.
 * @default false
 * 
 * @param Hud 20 Mode
 * @desc Apresentar variável ou item.
 * 0 - Variable    1 - Item
 * @default 0
 * 
 * @param Hud 20 Variable ID
 * @desc Definição da ID da variável.
 * @default 49
 * 
 * @param Hud 20 Maximum Value
 * @desc Definição do vamor máximo da variável.
 * *(Não funciona para items -> Mode 1) 
 * @default 999999
 * 
 * @param Hud 20 File Name
 * @desc Definição do nome da imagem da Hud.
 * @default Hud_20
 *
 * @param Hud 20 Start Visible
 * @desc Começar visível.
 * @default true
 *
 * @param Hud 20 Layout X
 * @desc Definição da posição X-axis da imagem.
 * @default 650
 *
 * @param Hud 20 Layout Y
 * @desc Definição da posição Y-axis da imagem.
 * @default 550
 *
 * @param Hud 20 Number X
 * @desc Definição da posição X-axis do número.
 * @default -10
 *
 * @param Hud 20 Number Y
 * @desc Definição da posição Y-axis do número.
 * @default 30
 *
 * @param Hud 20 Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Left    1 - Center    2 - Right
 * @default 1
 *
 * @param Hud 20 Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud 20 Show Max Value
 * @desc Apresentar o valor maximo.
 * @default false
 *
 * @param Hud 20 Show Gauge
 * @desc Apresentar o medidor.
 * @default false
 *
 * @param Hud 20 Gauge X-Axis
 * @desc Definição X-axis do medidor.
 * @default 0
 *
 * @param Hud 20 Gauge Y-Axis
 * @desc Definição Y-axis do medidor.
 * @default 0
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Variable HUD (v1.4) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta as variáveis através de Huds.
 *
 * =============================================================================
 * UTILIZAÇÃO 
 * =============================================================================
 * Grave as imagens na pasta /img/variablehud/
 * Caso a função do medidor estiver ativada será necessário ter a imagem do 
 * medidor, essa imagem deverá ser nomeada da seguinte forma.
 *
 * FILE_NAME + _GAUGE.png
 *
 * EG
 *
 * HUD1_GAUGE.png
 *
 *
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * Para ativar ou desativar a hud use os commandos abaixo.
 *
 * show_variable_hud : HUD_ID
 * hide_variable_hud : HUD_ID
 *
 * EG
 *
 * show_variable_hud : 4
 * hide_variable_hud : 4
 *
 * =============================================================================
 * Para definir um valor máximo da variável durante o jogo use o comando abaixo.
 *
 * set_variable_max : VARIAVEL_ID : MAX_VALUE
 *
 * EG
 *
 * set_variable_max : 30 : 999
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * v1.4 - Correção de não apresentar o valor máximo após carregar o jogo.
 * v1.3 - Possibilidade de mudar o valor máximo da variável durante o jogo.
 *      - Adição do medidor da variável.
 *      - Opção de apresentar o valor máximo da variável. 
 * v1.2 - Compatibilidade com Engine.
 *  
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_VariableHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_VariableHud');
    Moghunter.variableHud_Max = 20;	Moghunter.variableHud_Visible = [];
	Moghunter.variableHud_VisibleInt = []; Moghunter.variableHud_VariableID = [];
	Moghunter.variableHud_ValueLimit = []; Moghunter.variableHud_FileName = [];
	Moghunter.variableHud_LayX = []; Moghunter.variableHud_LayY = [];
	Moghunter.variableHud_NumX = []; Moghunter.variableHud_NumY = [];
	Moghunter.variableHud_NumAlign = []; Moghunter.variableHud_NumFontSize = [];
	Moghunter.variableHud_Type = []; Moghunter.variableHud_ShowMax = [];
	Moghunter.variableHud_ShowGauge = []; Moghunter.variableHud_gaugeX = [];
	Moghunter.variableHud_gaugeY = [];
	for (var i = 0; i < Moghunter.variableHud_Max; i++) {
		Moghunter.variableHud_Visible[i] = String(Moghunter.parameters['Hud ' + String(i + 1) + ' Enable'] || 'false');
		Moghunter.variableHud_VisibleInt[i] = String(Moghunter.parameters['Hud ' + String(i + 1) + ' Start Visible'] || 'true');
		Moghunter.variableHud_Type[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Mode'] || 0);
		Moghunter.variableHud_VariableID[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Variable ID'] || 1);
		Moghunter.variableHud_ValueLimit[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Maximum Value'] || 999);
        Moghunter.variableHud_FileName[i] = String(Moghunter.parameters['Hud ' + String(i + 1) + ' File Name'] || 'Hud_');
		Moghunter.variableHud_LayX[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Layout X'] || 0);
		Moghunter.variableHud_LayY[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Layout Y'] || 0);
		Moghunter.variableHud_NumX[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Number X'] || -7);
		Moghunter.variableHud_NumY[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Number Y'] || 10);
		Moghunter.variableHud_NumAlign[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Number Align'] || 1);
		Moghunter.variableHud_NumFontSize[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Font Size'] || 18);
		Moghunter.variableHud_ShowMax[i] = String(Moghunter.parameters['Hud ' + String(i + 1) + ' Show Max Value'] || 'true');
		Moghunter.variableHud_ShowGauge[i] = String(Moghunter.parameters['Hud ' + String(i + 1) + ' Show Gauge'] || 'false');
		Moghunter.variableHud_gaugeX[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Gauge X-Axis'] || 0);
		Moghunter.variableHud_gaugeY[i] = Number(Moghunter.parameters['Hud ' + String(i + 1) + ' Gauge Y-Axis'] || 0);
	};	
	
//=============================================================================
// ** ImageManager
//=============================================================================	

//=============================
// ** Load Variable Hud
//=============================
ImageManager.loadVariableHud = function(filename) {
    return this.loadBitmap('img/variablehud/', filename, 0, true);
};	
	
//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_variableHud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_variableHud_pluginCommand.call(this,command, args)
	if (command === "hide_variable_hud") {
		var varID = Number(args[1]) - 1;
		if ($gameSystem._variableHudData[varID]) {
	         $gameSystem._variableHudData[varID].visible = false;
		};
    } else if (command === "show_variable_hud") {
		var varID = Number(args[1]) - 1;
		if ($gameSystem._variableHudData[varID]) {
	         $gameSystem._variableHudData[varID].visible = true;
		};		
	};
	if (command === "set_variable_max")  {
		var id = Number(args[1]);
		var maxvalue = args[3] != null ? Number(args[3]) : 0;		
		for (var i = 0; i < Moghunter.variableHud_Max; i++) {
			var vid = Moghunter.variableHud_VariableID[i];
			if ($gameSystem._variableHudData[i] && vid === id) {
				$gameSystem._variableHudData[i].maxValue = maxvalue;
			};
		};
	};
	return true;
};

//=============================================================================
// ** Game System
//=============================================================================	

//==============================
// * Initialize
//==============================
var _mog_variableHud_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_variableHud_gsys_initialize.call(this);
	this._variableHudData = [];
	this._variableHudVisible = true;
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};	

//=============================================================================
// ** Scene Map
//=============================================================================	

//==============================
// ** create Spriteset
//==============================
var _mog_VariableHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_VariableHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createVariableHuds();
	this.sortMz();
};

//==============================
// * create VariableHuds
//==============================
Scene_Map.prototype.createVariableHuds = function() {
	this._variableHud = [];
	for (var i = 0; i < Moghunter.variableHud_Max; i++) {
		if (!$gameSystem._variableHudData[i]) {
			 $gameSystem._variableHudData[i] = {}
		     var vis = String(Moghunter.variableHud_VisibleInt[i]) === "true" ? true : false;
			 $gameSystem._variableHudData[i].id = i;
			 $gameSystem._variableHudData[i].visible = vis;
			 $gameSystem._variableHudData[i].maxValue = Number(Moghunter.variableHud_ValueLimit[i]);			 
			 $gameSystem._variableHudData[i].showMax = String(Moghunter.variableHud_ShowMax[i]) === "true" ? true : false;			 
			 $gameSystem._variableHudData[i].gauge = String(Moghunter.variableHud_ShowGauge[i]) === "true" ? true : false;
			 $gameSystem._variableHudData[i].gaugeX = Number(Moghunter.variableHud_gaugeX[i]);
			 $gameSystem._variableHudData[i].gaugeY = Number(Moghunter.variableHud_gaugeY[i]);
		};
		this._variableHud[i] = new VariableHud(i);
	    this._variableHud[i].mz = 120;
	    this._hudField.addChild(this._variableHud[i]);			
	};
};

//=============================================================================
// ** Variable Hud
//=============================================================================
function VariableHud() {
    this.initialize.apply(this, arguments);
};

VariableHud.prototype = Object.create(Sprite.prototype);
VariableHud.prototype.constructor = VariableHud;

//==============================
// * Initialize
//==============================
VariableHud.prototype.initialize = function(index) {
    Sprite.prototype.initialize.call(this);
	this._index = index;
	this._enabled = String(Moghunter.variableHud_Visible[this._index]) === "true" ? true : false;
    if (this._enabled) {this.createSprites()};
};


//==============================
// * data Sys
//==============================
VariableHud.prototype.dataSys = function() {	
    return $gameSystem._variableHudData[this._index];
};

//==============================
// * Variable ID
//==============================
VariableHud.prototype.variableID = function() {	
    return Moghunter.variableHud_VariableID[this._index]
};

//==============================
// * max Value
//==============================
VariableHud.prototype.maxValue = function() {	
    return this.dataSys().maxValue;
};

//==============================
// * show Max
//==============================
VariableHud.prototype.showMax = function() {
   return this.dataSys().showMax;
};

//==============================
// * show Gauge 
//==============================
VariableHud.prototype.showGauge = function() {
   return this.dataSys().gauge;
};

//==============================
// * Type
//==============================
VariableHud.prototype.type = function() {
   return Moghunter.variableHud_Type[this._index];
};

//==============================
// * Number
//==============================
VariableHud.prototype.number = function() {
	return this.type() === 0 ? $gameVariables.value(this.variableID()) : $gameParty.numItems(this.item());
};

//==============================
// * item
//==============================
VariableHud.prototype.item = function() {
	return $dataItems[this.variableID()];
};

//==============================
// * Create Sprites
//==============================
VariableHud.prototype.createSprites = function() {
     this._variable = $gameVariables.value(this.variableID());
	 this._hud_size = [-1,0,0,0];
	 this.x = Number(Moghunter.variableHud_LayX[this._index]);
	 this.y = Number(Moghunter.variableHud_LayY[this._index]);
     this.createLayout();
	 if (this.showGauge()) {this.createGauge()};
	 this.createNumber();
	 this.refreshHud();
	 this._maxValue = this.maxValue();
	 if (this.needHide()) {this.opacity = 0};
};

//==============================
// * Create Layout
//==============================
VariableHud.prototype.createLayout = function() {
	 var fileName = String(Moghunter.variableHud_FileName[this._index]);
     this._layout = new Sprite(ImageManager.loadVariableHud(fileName));
	 this.addChild(this._layout);
};

//==============================
// * Create Gauge
//==============================
VariableHud.prototype.createGauge = function() {
	 var fileName = String(Moghunter.variableHud_FileName[this._index] + "_gauge");
     this._gaugeImg = ImageManager.loadVariableHud(fileName)
	 this._gauge = new Sprite(this._gaugeImg);
	 this._gauge.x = this.dataSys().gaugeX;
	 this._gauge.y = this.dataSys().gaugeY;
	 this.addChild(this._gauge);
	 this.refreshGauge();
};

//==============================
// * refresh Gauge
//==============================
VariableHud.prototype.refreshGauge = function() {
    var wd = this._gaugeImg.width * this._variable / this.maxValue();
	var ch = this._gaugeImg.height;
	this._gauge.setFrame(0,0,wd,ch);
};

//==============================
// * Create Number
//==============================
VariableHud.prototype.createNumber = function() {
     this._number = new Sprite(new Bitmap(200,46));
	 this._number.x = Number(Moghunter.variableHud_NumX[this._index]);
	 this._number.y = Number(Moghunter.variableHud_NumY[this._index]);
	 this._number.bitmap.fontSize = Moghunter.variableHud_NumFontSize[this._index]
	 this.addChild(this._number);
};

//==============================
// * Refresh Number
//==============================
VariableHud.prototype.refreshNumber = function() {	
    this._number.bitmap.clear();	
 	var maxv = (Math.abs(this.maxValue()).toString().split("")); 
	var maxv2 = Number(maxv.length);
	var text = this.showMax() ? (this._variable).padZero(maxv2) + "/" + this.maxValue() : String(this._variable);
	var text = (this._variable).padZero(maxv2) + "/" + this.maxValue();
	this._number.bitmap.drawText(text,0,0,190,44,this.aligntype());
};

//==============================
// * Refresh Hud
//==============================
VariableHud.prototype.refreshHud = function() {
	if (this.type() === 0) {
		if (this.number() > this.maxValue()) {
			$gameVariables.setValue(this.variableID(), this.maxValue());
		};
	};
	this._variable = this.number();
	this._maxValue = this.maxValue();
	$gameSystem._variableHudData[this._index].needRefresh = false
	this.refreshNumber();
	if (this._gauge) {this.refreshGauge()};
};

//==============================
// * need Refresh Hud
//==============================
VariableHud.prototype.needRefreshHud = function() {
	if (this._variable != this.number()) {return true};
	if (this._maxValue != this.maxValue()) {return true};
	return false
};

//==============================
// * Align Type
//==============================
VariableHud.prototype.aligntype = function() {
   if (Moghunter.variableHud_NumAlign[this._index] === 0) {return "left"    
   } else if (Moghunter.variableHud_NumAlign[this._index] === 1) {return "center"
   } else {return "right"};
};

//==============================
// * Update
//==============================
VariableHud.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if (this._enabled) {this.updateSprites()};
};

//==============================
// * Need Hide
//==============================
VariableHud.prototype.needHide = function() {
    if ($gameMessage.isBusy()) {return true};
	if ($gameSystem._variableHudData[i] && !$gameSystem._variableHudData[i].visible) {return true};
	if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {return true};
	return false
};

//==============================
// * Need Fade
//==============================
VariableHud.prototype.needFade = function() {
    if (this._hud_size[0] === -1) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return false};	
    return true;
};

//==============================
// * get Data
//==============================
VariableHud.prototype.getData = function() {
	  this._hud_size[0] =  this.x - ($gameMap.tileWidth() / 2);
	  this._hud_size[1] =  this.y - ($gameMap.tileHeight() / 2);
	  this._hud_size[2] =  this.x + this._layout.bitmap.width;
	  this._hud_size[3] =  this.y + this._layout.bitmap.height;
};

//==============================
// * Update Visible
//==============================
VariableHud.prototype.updateVisible = function() {
     if (this.needHide()) {
		 this.opacity -= 15;
	 } else {
		 if (this.needFade()) {
			 if (this.opacity > 90) {
				 this.opacity -= 10;
			     if (this.opacity < 90) {this.opacity = 90};
			 };
		 } else {
			 this.opacity += 10;
		 };
	 };
};

//==============================
// * Update Sprites
//==============================
VariableHud.prototype.updateSprites = function() {
    if (this.needRefreshHud()) {this.refreshHud()};
	if (this._hud_size[0] === -1 && this._layout.bitmap.isReady()) {this.getData()};
	this.updateVisible();
};