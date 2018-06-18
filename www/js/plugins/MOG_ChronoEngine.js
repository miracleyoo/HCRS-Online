//=============================================================================
// MOG_ChronoEngine.js
//=============================================================================

/*:
 * @plugindesc (v0.2b) Sistema avançado de interação de eventos.
 * @author Moghunter
 *
 * @param Tool Map ID
 * @desc Definição da ID do mapa de ferramentas.
 * @default 1
 *
 * @param Battle Mode
 * @desc Define o tipo de sistema de batalha.
 * 0 - Chrono Mode      1 - ABS Mode
 * @default 0
 *
 * @param Battle Sensor Range
 * @desc Definição do alcance do sensor para começar a batalha.
 * @default 3
 *   
 * @param Max Battle Members
 * @desc Definição do limite maximo de personagens na batalha.
 * (1..4)
 * @default 3
 *   
 * @param ATB Mode
 * @desc Definição do tipo de ATB
 * 0 - Wait    1 - Semi Active    2 - Full Active
 * @default 2
 *   
 * @param ATB Max
 * @desc Definição do valor maximo de ATB.
 * @default 1600
 *   
 * @param States Duration
 * @desc Definição da duração de um turno para as condições.
 * @default 240
 *   
 * @param Diagonal Movement
 * @desc Ativar movimento na diagonal.
 * @default true
 *  
 * @param Touch Input Mode
 * @desc Ativar a seleção através do mouse / toque.
 * @default true
 *   
 * @param Attack Command
 * @desc Ativar o comando de ataque no modo ABS.
 * @default true
 *   
 * @param Shield Command
 * @desc Ativar o comando de escudo no modo ABS.
 * @default true
 *   
 * @param Skill Command
 * @desc Ativar o comando de habilidade no modo ABS.
 * @default true
 *   
 * @param Item Command
 * @desc Ativar o comando de item no modo ABS.
 * @default true
 *   
 * @param Skill Menu Command
 * @desc Ativar o comando de menu de habilidades no modo ABS.
 * @default true
 * 
 * @param Item Menu Command
 * @desc Ativar o comando de menu de itens no modo ABS.
 * @default true
 * 
 * @param Attack Button
 * @desc Definição do botão de ataque.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default ok
 * 
 * @param Shield Button
 * @desc Definição do botão de escudo.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default d
 * 
 * @param Skill Button
 * @desc Definição do botão de habilidade.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default s
 * 
 * @param Item Button
 * @desc Definição do botão de item.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default a
 * 
 * @param Dash Button
 * @desc Definição do botão de correr.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default shift
 * 
 * @param Skill Menu Button
 * @desc Definição do botão de menu de habilidades.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default pagedown
 * 
 * @param Item Menu Button
 * @desc Definição do botão de menu de items.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default pageup
 * 
 * @param Escape Button
 * @desc Definição do botão de fugir no modo Chrono.
 * ( x , c , a , s , d , ok , pagedown , pageup , shift )
 * @default shift
 * 
 * @param Shield Animation ID
 * @desc Definição da ID da animação para o efeito escudo.
 * @default 142
 * 
 * @param Cast Animation ID
 * @desc Definição da ID da animação para o efeito cast.
 * @default 138
 * 
 * @param Level UP Animation ID
 * @desc Definição da ID da animação de level-up.
 * @default 143
 *  
 * @param Treasure SE
 * @desc Definição do som ao pegar o item do inimigo.
 * @default Item3
 * 
 * @param Turn SE
 * @desc Definição do som na seleção de comandos.
 * @default Ice1
 * 
 * @param Charging SE
 * @desc Definição do som no modo charge.
 * @default Up1
 * 
 * @param Charged SE
 * @desc Definição do som quando o charge está no maximo.
 * @default Saint3
 * 
 * @param Action Cost SE
 * @desc Definição do som quando não é possível ativar a ação.
 * @default Cancel1
 * 
 * @param Hookshot X-Axis Offset
 * @desc Definição X-Axis Offset da corrente em relação ao character
 * na função hookshot.
 * @default 12
 * 
 * @param Hookshot Y-Axis Offset
 * @desc Definição Y-Axis Offset da corrente em relação ao character.
 * na função hookshot.
 * @default 0
 * 
 * @param Cursor Actor X-Axis
 * @desc Definição X-Axis Offset do cursor do personagem.
 * @default 0
 * 
 * @param Cursor Actor Y-Axis
 * @desc Definição Y-Axis Offset do cursor do personagem.
 * @default -20
 * 
 * @param Cursor Actor Rotation
 * @desc Definição da velocidade de rotação da imagem.
 * @default 0.02
 * 
 * @param Cursor Actor Blend Mode
 * @desc Definição do tipo de blend.
 * @default 1
 * 
 * @param Cursor Actor Opacity
 * @desc Definição do valor da transparência da imagem.
 * @default 150
 * 
 * @param Cursor X-Axis
 * @desc Definição X-Axis Offset do cursor de seleção.
 * @default 0
 * 
 * @param Cursor Y-Axis
 * @desc Definição Y-Axis Offset do cursor de seleção.
 * @default 0
 * 
 * @param Cursor Float Mode
 * @desc Ativa a animação de flutuar do cursor de seleção.
 * @default true
 * 
 * @param Cursor FontSize
 * @desc Definição do tamanho da fonte do texto do cursor de seleção.
 * @default 18
 * 
 * @param Cursor Text X-Axis
 * @desc Definição X-axis do texto do cursor de seleção..
 * @default 0
 * 
 * @param Cursor Text Y-Axis
 * @desc Definição Y-axis do texto do cursor de seleção.
 * @default 3
 * 
 * @param Cursor HP X-Axis
 * @desc Definição X-axis do layout do medidor de HP.
 * @default 0
 * 
 * @param Cursor HP Y-Axis
 * @desc Definição Y-axis do layout do medidor de HP.
 * @default 32
 * 
 * @param Cursor HP Gauge X-Axis
 * @desc Definição X-axis do medidor de HP.
 * @default 0
 * 
 * @param Cursor HP Gauge Y-Axis
 * @desc Definição Y-axis do medidor de HP.
 * @default 1
 * 
 * @param Command X-Axis
 * @desc Definição X-axis do comando de seleção.
 * @default 0
 * 
 * @param Command Y-Axis
 * @desc Definição Y-axis do comando de seleção.
 * @default 0
 * 
 * @param Command Name X-Axis
 * @desc Definição X-axis do nome do comando de seleção.
 * @default 0
 * 
 * @param Command Name Y-Axis
 * @desc Definição Y-axis do nome do comando de seleção.
 * @default -7
 * 
 * @param Command Arrow X-Axis
 * @desc Definição X-axis da flecha de comando.
 * @default 0
 * 
 * @param Command Arrow Y-Axis
 * @desc Definição Y-axis da flecha de comando.
 * @default 0
 *  
 * @param Phase X-axis
 * @desc Definição X-axis da imagem das fases de batalha.
 * @default 130
 * 
 * @param Phase Y-axis
 * @desc Definição Y-axis da imagem das fases de batalha.
 * @default 300
 * 
 * @param Result X-axis
 * @desc Definição X-axis do Layout do resultado de batalha.
 * @default 200
 * 
 * @param Result Y-axis
 * @desc Definição Y-axis do Layout do resultado de batalha.
 * @default 200
 * 
 * @param Result FontSize
 * @desc Definição do tamanho da fonte do resultado de batalha.
 * @default 24
 * 
 * @param Result Exp X-axis
 * @desc Definição X-axis do resultado do número de experiência.
 * @default 110
 * 
 * @param Result Exp Y-axis
 * @desc Definição Y-axis do resultado do número de experiência.
 * @default 80
 *
 * @param Result Gold X-axis
 * @desc Definição X-axis do resultado do número de dinheiro.
 * @default 110
 * 
 * @param Result Gold Y-axis
 * @desc Definição Y-axis do resultado do número de dinheiro.
 * @default 185
 * 
 * @param Escape X-axis
 * @desc Definição X-axis do layout de escapar.
 * @default 60
 * 
 * @param Escape Y-axis
 * @desc Definição Y-axis do layout de escapar.
 * @default 170
 *
 * @param Escape Gauge X-axis
 * @desc Definição X-axis do medidor de escapar.
 * @default 6
 * 
 * @param Escape Gauge Y-axis
 * @desc Definição Y-axis do medidor de escapar.
 * @default 23
 *
 * @help  
 * =============================================================================
 * +++ MOG - Chrono Engine (v0.2b) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Este plugin permite criar sistemas avançados utilizando eventos, tais como
 * sistema de batalha em tempo real no mapa ou puzzles complexos de interação
 * com eventos.
 *
 * =============================================================================
 * *** HISTÓRICO ***
 * =============================================================================
 * (v0.2) - Melhoria na performance do sistema.
 *        - Adição do sistema de Input Combo/Command Combo. (ABS Mode)
 *        - Adição do sistema de Charge (ABS Mode)
 *        - Adição do sistema de Touch (Chrono Mode)
 *        - Adição da função "ignoreKnockback", que permite acertar o alvo
 *          mesmo quando ele está em estado atordoado/caido (knockback)
 *        - Correção do bug dos itens ou habilidades de ação (ABS) serem usáveis
 *          no menu normal, agora é necessário adicionar a TAG "abs mode" para
 *          aparecerem no menu de ABS. 
 *
 * =============================================================================
 * *** GRAPHICS ASSETS ***
 * =============================================================================
 * As imagens do sistema deverão ser gravadas na pasta.
 *
 * /img/chrono/
 *
 * =============================================================================
 * *** SKILL / ITEM / WEAPON (NOTETAGS) ***
 * =============================================================================
 *
 * Tool Id : X
 *    Define a ID do evento da ação. Esta ação será ativada ao utilizar a 
 *    habilidade através do menu.
 *
 * Cooperation Skill : X : X : X : ...
 *    Define a ID dos personagens que serão necessários para ativar a ação.
 *
 * Abs Mode
 *    Adicione essa Tag para fazer o item/habilidade aparecer no menu ABS.
 *
 * =============================================================================
 * *** SHIELD (NOTETAGS) ***
 * =============================================================================
 * Coloque este comentário para ativar a ação do escudo.
 *
 * Shield Pose Suffix : NAME
 *
 * =============================================================================
 * *** ACTORS & ENEMIES (NOTETAGS) ***
 * =============================================================================
 *
 * Body Size : X
 *   - Define o tamanho da área de colisão do personagem.
 *
 * Dead Switch Id : X
 *   - Ativa uma switch após o inimigo morrer.
 * 
 * Dead Variable Id : X
 *   - Adiciona +1 na variável X após o inimigo morrer.
 *  
 * Dead Selfswitch Id : X
 *   - Ativa a selfswitch após o inimigo morrer. (A,B,C,D)
 *   
 * Disable Knockback
 *   - Desativa o Knockback do personagem.
 *    
 * Invulnerable Actions : X,X,X,X...
 *   - Deixa o inimigo invulnerável a certas ações.
 *    
 * State Icon Y-Axis : Y
 *   - Define uma posição fixa da altura do ícone.
 *
 * =============================================================================
 * *** ENEMY EVENTS (COMMENTS) ***
 * =============================================================================
 *
 * enemy_id : X
 *   - Define a Id do inimigo para o evento.
 *
 * walk_nearby : X
 *   - Define um limite maximo de área de movimento no modo andar aleatóriamente.
 *
 * =============================================================================
 * *** TOOL SYSTEM ***
 * =============================================================================
 * Tool System é o sistema de interação de eventos, esses eventos são chamados
 * Tool Events que são eventos que são ativados durante o jogo.
 * Esses Tool Events devem ser criados em um mapa pré determinado separado dos
 * demais, por padrão a ID do mapa é 1, mas ela pode ser modificada.
 *
 * =============================================================================
 * *** TOOL EVENTS COMMENTS ***
 * =============================================================================
 * Para definir os parâmetros de ação dos eventos utilize os comentários abaixo.
 *
 * tool_item_id : ITEM_ID
 * - Define o dano baseado no Item ID.
 *
 * tool_skill_id : SKILL_ID
 * - Define o dano baseado na Habilidade ID. 
 *
 * tool_item_cost : ITEM_ID
 * - Ativa um custo de item para ação. (*Arco e flecha)
 *
 * tool_duration : X
 * - Definição da duração da ação.
 *
 * tool_pose_suffix : NAME
 * - Definição do sufixo da imagem do character ao utilizar a ação.
 * 
 * tool_pose_duration : X
 * - Definição da duração da pose da ação.
 * 
 * tool_area : MODE
 * - Definição do tipo de área de impacto da ação.
 *   - square             (Quadrado)
 *   - front_square       (Metade do quadrado)
 *   - rhombus            (Losango)
 *   - front_rhombus      (Metade do losango)
 *   - line               (Linha Frontal)
 *   - wall               (Linha Lateral)
 *   - cross              (Cruz)
 * 
 * tool_range : X
 * - Definição do tamanho da área de colisão da ação.
 * 
 * tool_disable_collision
 * - Desativa a colisão do evento.
 * 
 * tool_wait_collision : X
 * - Define um tempo para ativar a colisão da ação.
 * 
 * tool_disable_piercing
 * - Desativa o modo atravessar o alvo.
 *
 * tool_damage_all
 * - Causa dano em todos alvos, inimigos e aliados.
 * 
 * tool_position : MODE
 * - Define a posição inicial da ação.
 *       target             - Seleção do alvo através do cursor.
 *       user               - Posição no usuário. 
 *       move_to_target     - Faz o personagem ir até o alvo no modo Chrono.
 *
 * tool_multihit : LAG_TIME
 * - Ativa o modo de multiplos acertos, o valor X é o
 *   tempo de colisão entre os acertos.
 * 
 * tool_action_times : TIMES : LAG_TIME
 * - Aciona a ação X vezes.
 * 
 * tool_chain_action : ACTION_ID
 * - Ativa uma ação após o personagem terminar a primeira ação.
 * 
 * tool_chain_action_hit : ACTION_ID
 * - Ativa uma ação quando a primeira ação acertar o alvo.
 * 
 * tool_three_directions
 * - A ação é ativada em três direções.
 * 
 * tool_four_directions
 * - A ação é ativada em quatro direções.
 * 
 * tool_all_directions
 * - A ação é ativada em todas as direções.
 * 
 * tool_knockback_duration : X
 * - Tempo em que o alvo fica paralizado após o acerto.
 * 
 * tool_ignore_shield
 * - A colisão ignora se o alvo está usando o escudo.
 * 
 * tool_shield_reflect
 * - A ação é refletida quado o usuário está usado o escudo.
 * 
 * tool_unique
 * - A ação é ativada apenas uma vez.
 * 
 * tool_diagonal
 * - Permite que ação seja ativada na diagonal.
 * 
 * tool_diagonal_angle
 * - O ângulo do sprite sera baseado na direção do evento.
 *  
 * tool_user_animation_id : X
 * - Define uma animação no usuário ao ativar a ação.
 * 
 * tool_cast_animation_id : X
 * - Define uma animação no usuário durante a fase de invocação da ação.
 * 
 * tool_shake
 * - Faz a tela tremer ao acertar o alvo.
 * 
 * tool_boomerang : X
 * - Ativa o modo boomerang, X é a distância da ação.
 * 
 * tool_hookshot : X
 * - Ativa o modo hookshot, X é a distância da ação.
 *
 * tool_user_zoom_effect
 * - Ativa a animação de zoom ao usar a ação. (Requer o plugin MOG_Character_Motion)
 *
 * tool_ignore_knockback
 * - Permite a ação acertar o alvo independente do estado de knockback.
 *
 * tool_combo : ACTION_ID : COMMAND_TYPE
 * - Ativa o sistema de combo para está ação,será ativada uma ação diferente
 *   cada vez que o jogador pressionar o botão requerido.
 *
 *           COMMAND TYPE - Tipo de command.
 *           - 0 Weapon Command/Button 
 *           - 1 Skill Command/Button 
 *           - 2 Item Command/Button 
 *
 * tool_charge_attack : ACTION_ID : CHARGE_TIME
 * - Ativar o sistema de charge para esta ação, a ação será ativada quando
 *   o jogador deixar pressionado o botão de ataque normal (Weapon Command)
 * 
 * =============================================================================
 * *** PUZZLE EVENTS (COMMENTS) ***
 * =============================================================================
 *
 * collision_id : X
 *    - Define a ID da colisão do evento da ação.
 *      Quando o evento X colidir com este evento a página do evento será acionada.
 * 
 * collision_hookshot
 *    - Determina que este evento será um evento de colisão de hookshot.
 *

 * =============================================================================
 * *** ENEMY EVENTS (COMMENTS)  ***
 * =============================================================================
 *
 * enemy_id : X
 *    - Define a ID do inimigo para este evento.
 *
 * walk_nearby : X
 *    - Faz o evento andar no perímetro definido, essa função é útil para criar
 *      grupos de inimigos no modo Chrono.
 * 
 * event sensor : X
 *    - Define o alcance do sensor para ativar a página de ação.
 *      Essa função requer o plugin Event Sensor.
 *
 * battle_sensor : X
 *    - Define o alcance do sensor para ativar a batalha no modo Chrono.
 *
 * 
 * =============================================================================
 * *** PLUGIN COMMANDS ***
 * =============================================================================
 * 
 * chrono_mode : true
 * - Ativa ou desativa o modo de batalha por turnos (Chrono), deixe "false"
 *   se deseja ativar o modo ABS.
 *
 * atb_mode : 0
 * - Definição do modo Active Time no modo Chrono.
 *   0 - WAIT   O ATB não é ativo durante a seleção de comandos. 
 *   1 - SEMI ACTIVE   O ATB não é ativo durante a seleção da ação e inimigos.
 *   2 - FULL ACTIVE   O ATB é ativo o tempo todo.
 *
 * can_escape : true
 * - Ativa ou desativa o comando de fuga no modo Chrono.
 *
 * set_battler_position : ACTOR_ID : X : Y
 * - Define a posição X e Y do personagem no modo Chrono.
 *
 * set_battler_direction : ACTOR_ID : X : Y
 * - Define a direção do personagem no modo Chrono.
 * 
 * set_actor_skill : ACTOR_ID : TOOL_ID
 * - Força equipar uma habilidade no personagem.
 *
 * set_actor_item : ACTOR_ID : TOOL_ID
 * - Força equipar um item no personagem.
 *
 * action_commands : true
 * - Ativa ou desativa todos os comandos de ação no modo ABS.
 *
 * command_attack : true
 * - Ativa ou desativa o comando de ataque no modo ABS.
 *
 * command_shield : true
 * - Ativa ou desativa o comando de escudo no modo ABS.
 *
 * command_skill : true
 * - Ativa ou desativa o comando de habilidade no modo ABS.
 *
 * command_item : true
 * - Ativa ou desativa o comando de item no modo ABS.
 *
 * command_skill_window : true
 * - Ativa ou desativa o menu de habilidades.
 *
 * command_item_window : true
 * - Ativa ou desativa o menu de items.
 *
 * tool_item_visible : true
 * - Ativa ou desativa a hud de items.
 *
 * tool_skill_visible : true
 * - Ativa ou desativa a hud de habilidade.
 *
 * tool_weapon_visible : true
 * - Ativa ou desativa a hud de armas.
 *
 * tool_shield_visible : true
 * - Ativa ou desativa a hud de escudo.
 *
 * tool_shield_visible : true
 * - Ativa ou desativa a hud de escudo.
 *
 * tool_collision : true
 * - Ativa ou desativa a colisão no evento da ação.  
 *
 * force_damage : Mode
 * - Força o evento da ação causar dano no modo Chrono.
 *   - target   Dano apenas no alvo escolhido.
 *   - area     Dano nos alvos que estão no alcance da ação.
 *   - all      Dano em todos os alvos.
 *
 * tool_turn_end
 * - Força o turno terminar no modo Chrono.   
 * 
 * =============================================================================
 * *** CHARACTER SCRIPT COMMANDS ***
 * =============================================================================
 * Os comandos devem ser utilizados para criar movimentos complexos de ação.
 * Utilize os comandos abaixo através do comando chamar script.
 *
 * -----------------------------------------------------------------------------
 * SUBJECT (BASIC)
 * -----------------------------------------------------------------------------
 * Esses são os comandos básicos para definir os character a serem utilizados.
 *
 * this.user()
 * - Definição do usuário da ação
 * 
 * this.target()
 * - Definição do evento do alvo.
 *
 * this.actor(ID)
 * - Definição da ator baseado na ID, utilize este comando quando for criar
 *   movimentos nas cooperation skills.
 *
 * this.toolEvent()
 * - É o evento da Ação.
 *
 * -----------------------------------------------------------------------------
 * ACTION 
 * -----------------------------------------------------------------------------
 *
 * SUBJECT.setCharacterName("NAME")
 * - Define uma imagem para o character.
 *
 * SUBJECT.setDirection(X)
 * - Define uma direção para o character. (2,4,6,8)
 *
 * SUBJECT.setDirectionFix(true)
 * - Ativa ou desativa a direção fixa.
 * 
 * SUBJECT.setWalkAnime(true)
 * - Ativa ou desativa a animação de andar.
 *
 * SUBJECT.setStepAnime(true)
 * - Ativa ou desativa a animação de passos.
 *
 * SUBJECT.setPriorityType(X)
 * - Define a prioridade de imagem do character. (0,1,2)
 * 
 * SUBJECT.requestAnimation(X)
 * - Ativa uma animação no character.
 * 
 * SUBJECT.moveForward()
 * - Andar um passo para frente.
 *
 * SUBJECT.moveBackward()
 * - Andar um passo para traz.
 *
 * SUBJECT.moveRandom()
 * - Mover aleatoriamente.
 *
 * SUBJECT.jump(X,Y);
 * - Faz o character pular.
 *
 * SUBJECT.moveToTarget(X,Y,H,S,T)
 * - Faz o character mover até o alvo rapidamente ignorando a passabilidade.
 *     X  - X offset
 *     Y  - Y offset
 *     H  - Height (Jump Effect)
 *     S  - Subject
 *     T  - Through - Ignora a Passabilidade de inimigos e aliados.
 *
 * SUBJECT.teleportToTarget(X,Y,S)
 * - Faz o character teleportar até o alvo.
 *     X  - X offset
 *     Y  - Y offset
 *     S  - Subject
 *
 * SUBJECT.teleportRandom(A)
 * - Faz o character teleportar aleatoriamente.
 *     A  - Area
 *
 * SUBJECT.teleportRandomX(A)
 * - Faz o character teleportar aleatoriamente apenas na horizontal.
 *     A  - Area
 *
 * SUBJECT.teleportRandomY(A)
 * - Faz o character teleportar aleatoriamente apenas na vertical.
 *     A  - Area
 *
 * SUBJECT.jumpBack(S,H)
 * - Faz o character dar um passo para traz.
 *     S  - Numero de passos.
 *     H  - Altura.
 *
 * SUBJECT.collision(false)
 * - Ativa ou desativa a colisão do character.
 *
 * SUBJECT.shieldMode(false)
 * - Ativa ou desativa o modo escudo do character.
 *
 * SUBJECT.setAngle(X)
 * - Define o ângulo de imagem do sprite do character.
 * 
 * this.randomSwitches([X,X,X,X…])
 * - Ativa Switches aleatórias que estão no array. As switches que não são
 *   selecionadas serão desativadas (OFF), essa função é útil para criar 
 *   padrões de ações aleatórias dos inimigos no modo ABS. 
 * 
 * this.act(X)
 * - Ativa uma ação no modo ABS. 
 *
 * =============================================================================
 * *** ATB ***
 * =============================================================================
 * A velocidade do ATB é baseado na agilidade do battler e existem 3 modos ATB.
 * 
 * WAIT - Os ATB não é ativo durante a seleção de comandos.
 * SEMI ACTIVE - O ATB não é ativo durante a seleção das ações e alvos.
 * FULL ACTIVE - O ATB é ativo o tempo todo.
 *
 * =============================================================================
 * *** CASTING TIME ***
 * =============================================================================
 * Para definir o tempo de casting para ação basta definir um valor no SPEED
 * maior que zero.
 *  
 */
  
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ChronoEngine = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ChronoEngine');
    
	Moghunter.toolSys_MapID = Number(Moghunter.parameters['Tool Map ID'] || 1);
	Moghunter.ras_battleMode = Number(Moghunter.parameters['Battle Mode'] || 0);
	Moghunter.ras_maxBattleMembers = Number(Moghunter.parameters['Max Battle Members'] || 3);
	Moghunter.ras_battleRange = Number(Moghunter.parameters['Battle Sensor Range'] || 3);
	
	Moghunter.ras_ChargedSE = String(Moghunter.parameters['Charged SE'] || 'Saint3');
	Moghunter.ras_ChargingSE = String(Moghunter.parameters['Charging SE'] || 'Up1');
	Moghunter.ras_ActionCostSE = String(Moghunter.parameters['Action Cost SE'] || 'Cancel1');
	
	Moghunter.ras_waitMode = Number(Moghunter.parameters['ATB Mode'] || 2);
	Moghunter.ras_atbMax = Number(Moghunter.parameters['ATB Max'] || 1600);
	Moghunter.ras_statesDuration = Number(Moghunter.parameters['States Duration'] || 240);
	
	Moghunter.chronoTouchInput = String(Moghunter.parameters['Touch Input Mode'] || 'true');
	Moghunter.ras_DiagonalMovement = String(Moghunter.parameters['Diagonal Movement'] || 'true');
	Moghunter.ras_buttonWeapon = String(Moghunter.parameters['Attack Button'] || 'ok');
    Moghunter.ras_buttonItem = String(Moghunter.parameters['Item Button'] || 'a');
	Moghunter.ras_buttonSkill = String(Moghunter.parameters['Skill Button'] || 's');
	Moghunter.ras_buttonGuard = String(Moghunter.parameters['Shield Button'] || 'd');
	Moghunter.ras_buttonSkillW = String(Moghunter.parameters['Skill Menu Button'] || 'pagedown');
	Moghunter.ras_buttonItemW = String(Moghunter.parameters['Item Menu Button'] || 'pageup');	
	Moghunter.ras_buttonDash = String(Moghunter.parameters['Dash Button'] || 'shift');
	Moghunter.chronoCommandEscapeButton = String(Moghunter.parameters['Escape Button'] || 'shift');
	
	Moghunter.ras_comAttack = String(Moghunter.parameters['Attack Command'] || 'true');
	Moghunter.ras_comShield = String(Moghunter.parameters['Shield Command'] || 'true');
	Moghunter.ras_comSkill = String(Moghunter.parameters['Skill Command'] || 'true');
	Moghunter.ras_comItem = String(Moghunter.parameters['Item Command'] || 'true');
	Moghunter.ras_comItemWindow = String(Moghunter.parameters['Item Menu Command'] || 'true');
	Moghunter.ras_comSkillWindow = String(Moghunter.parameters['Skill Menu Command'] || 'true');

    Moghunter.ras_guardAnimationID = Number(Moghunter.parameters['Shield Animation ID'] || 142); 
	Moghunter.ras_castAnimationID = Number(Moghunter.parameters['Cast Animation ID'] || 138);
	Moghunter.ras_levelAnimationID = Number(Moghunter.parameters['Level UP Animation ID'] || 143)	
    Moghunter.ras_treasureSE = String(Moghunter.parameters['Treasure SE'] || 'Item3');
    Moghunter.ras_commandSE = String(Moghunter.parameters['Turn SE'] || 'Ice1');	
	
	Moghunter.ras_hookshootX = Number(Moghunter.parameters['Hookshot X-Axis Offset'] || 12);
	Moghunter.ras_hookshootY = Number(Moghunter.parameters['Hookshot Y-Axis Offset'] || 0);	

	Moghunter.ras_cursorActorX = Number(Moghunter.parameters['Cursor Actor X-Axis'] || 0);
	Moghunter.ras_cursorActorY = Number(Moghunter.parameters['Cursor Actor Y-Axis'] || -20); 	
	Moghunter.ras_cursorActorR = Number(Moghunter.parameters['Cursor Actor Rotation'] || 0.02); 
	Moghunter.ras_cursorActorB = Number(Moghunter.parameters['Cursor Actor Blend Mode'] || 1); 	
	Moghunter.ras_cursorActorO = Number(Moghunter.parameters['Cursor Actor Opacity'] || 150); 	
	
	Moghunter.ras_cursorX = Number(Moghunter.parameters['Cursor X-Axis'] || 0);
	Moghunter.ras_cursorY = Number(Moghunter.parameters['Cursor Y-Axis'] || 0); 	
    Moghunter.ras_cursorFloat = String(Moghunter.parameters['Cursor Float Mode'] || 'true');
    Moghunter.ras_cursorTextSize = Number(Moghunter.parameters['Cursor FontSize'] || 18);
	Moghunter.ras_cursorTextX = Number(Moghunter.parameters['Cursor Text X-Axis'] || 0);
	Moghunter.ras_cursorTextY = Number(Moghunter.parameters['Cursor Text Y-Axis'] || 3);	
    Moghunter.ras_hpLayoutX = Number(Moghunter.parameters['Cursor HP X-Axis'] || 0);
    Moghunter.ras_hpLayoutY = Number(Moghunter.parameters['Cursor HP Y-Axis'] || 32);
    Moghunter.ras_hpGaugeX = Number(Moghunter.parameters['Cursor HP Gauge X-Axis'] || 0);
    Moghunter.ras_hpGaugeY = Number(Moghunter.parameters['Cursor HP Gauge Y-Axis'] || 1); 	
	
    Moghunter.chronoCommandX = Number(Moghunter.parameters['Command X-Axis'] || 0);
    Moghunter.chronoCommandY = Number(Moghunter.parameters['Command Y-Axis'] || 0);
    Moghunter.chronoCommandListX = Number(Moghunter.parameters['Command Name X-Axis'] || 0);
    Moghunter.chronoCommandListY = Number(Moghunter.parameters['Command Name Y-Axis'] || -7);	
	Moghunter.chronoCommandArrowX = Number(Moghunter.parameters['Command Arrow X-Axis'] || 0);
	Moghunter.chronoCommandArrowY = Number(Moghunter.parameters['Command Arrow Y-Axis'] || 0);
	
    Moghunter.toolHud_PhaseX = Number(Moghunter.parameters['Phase X-axis'] || 130);
    Moghunter.toolHud_PhaseY = Number(Moghunter.parameters['Phase Y-axis'] || 300);
	Moghunter.toolHud_ResultX = Number(Moghunter.parameters['Result X-axis'] || 200);
	Moghunter.toolHud_ResultY = Number(Moghunter.parameters['Result Y-axis'] || 200);
	Moghunter.toolHud_ResultFontSize = Number(Moghunter.parameters['Result FontSize'] || 24);
	Moghunter.toolHud_ResultExpX = Number(Moghunter.parameters['Result Exp X-axis'] || 110);
	Moghunter.toolHud_ResultExpY = Number(Moghunter.parameters['Result Exp Y-axis'] || 80);
	Moghunter.toolHud_ResultGoldX = Number(Moghunter.parameters['Result Gold X-axis'] || 110);
	Moghunter.toolHud_ResultGoldY = Number(Moghunter.parameters['Result Gold Y-axis'] || 185);	

	Moghunter.toolHud_Escape1X = Number(Moghunter.parameters['Escape X-axis'] || 60);
	Moghunter.toolHud_Escape1Y = Number(Moghunter.parameters['Escape Y-axis'] || 170);
	Moghunter.toolHud_Escape2X = Number(Moghunter.parameters['Escape Gauge X-axis'] || 6);
	Moghunter.toolHud_Escape2Y = Number(Moghunter.parameters['Escape Gauge Y-axis'] || 23);	
	
    var $dataMapTool = null;

//=============================================================================
// ** Data Manager
//=============================================================================

//==============================
// * load Map Data Tool
//==============================
DataManager.loadMapDataTool = function() {
	var mapId = Number(Moghunter.toolSys_MapID);
    var filename = 'Map%1.json'.format(mapId.padZero(3));
    this.loadDataFile('$dataMapTool', filename);
};

//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Ras
//==============================
ImageManager.loadRas = function(filename) {
    return this.loadBitmap('img/chrono/', filename, 0, true);
};	

//==============================
// * Play Sound MX
//==============================
SoundManager.playSoundMX = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
};   

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_toolSys_gtemp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_toolSys_gtemp_initialize.call(this);
	DataManager.loadMapDataTool()
	$gameChrono = new Game_Chrono();
	this.setChronoTemp()
    this.clearToolCursor();
	this.clearChronoCommand();
	this.loadInput();
};

//==============================
// * set Chrono Temp
//==============================
Game_Temp.prototype.setChronoTemp = function() {
	this._chaPosesEVRunning = false;
	this._chrono = {};
    this._chrono.buttonLag = 0;
	this._chrono.clearCommadPhase = false;
	this._chrono.exp = 0;
	this._chrono.gold = 0;
	this._chrono.phase = [false,0,0];
	this._chrono.victory = [false,false,0];
	this._chrono.refreshWindow = false;
	this._chrono.moveWait = 0;
	this._hookshootPreData = {};
	this._hookshootPreData.user = null;
	this._hookshootPreData.tool = false;
	
};

//==============================
// * clear Chrono Command
//==============================
Game_Temp.prototype.clearChronoCommand = function() {
	if (this._chronoCom) {
        if ($gameChrono.canStartTurnCN($gameChrono.actor())) {$gameChrono.prepareTurnCN($gameChrono.actor(),$gameChrono.comUser()[0])};	
	}		
	this._chronoCom = {};
	this._chronoCom.phase = 0;
	this._chronoCom.index = 0;
	this._chronoCom.user = null;
	this._chronoCom.skill = null;
	this._chronoCom.toolAction = null;	
	this._chronoCom.cursorMode = 0;
	this._chronoCom.targetIndex = -1;
	this._chronoCom.targets = [];
	this._chrono.buttonLag = 5;
	if ($gameChrono && $gameChrono.win()) {$gameChrono.win().clearAllWindows()};
};

//==============================
// * clear Tool Cursor
//==============================
Game_Temp.prototype.clearToolCursor = function() {
	this._autoTarget = {};
	this._autoTarget.enabled = false;
	this._autoTarget.actionID = 0;
	this._autoTarget.preTarget = null;	
	this._autoTarget.index = -1;
	this._autoTarget.targetType = 0;
	this._autoTarget.pressMenu = 2;	
	this._autoTarget.refresh = false;
};

//==============================
// * Load Input
//==============================
Game_Temp.prototype.loadInput = function() {
	Input.keyMapper[65] = 'a';
	Input.keyMapper[67] = 'c';
	Input.keyMapper[68] = 'd';
    Input.keyMapper[83] = 's';
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_tool_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_tool_sys_initialize.call(this);
	this.chronoInitialize();
};

//==============================
// * chrono Initialize
//==============================
Game_System.prototype.chronoInitialize = function() {
	this._rasMode = 0;
    this._chronoMode = {};
	this._chronoMode.enabled = Number(Moghunter.ras_battleMode) === 0 ? true : false;
	this._chronoMode.phase = 0;
	this._chronoMode.phaseDuration = 0;
	this._chronoMode.turnDuration = 0;
	this._chronoMode.turnDuration2 = 0;
	this._chronoMode.needCreateSprites = false;
	this._chronoMode.needRemoveSprites = false;
	this._chronoMode.needCreateHuds = false;
	this._chronoMode.needRemovehHuds = false;
	this._chronoMode.inTurn = false;
	this._chronoMode.inTurnBattler = null;
	this._chronoMode.wait = false;
	this._chronoMode.waitD = 0;
	this._chronoMode.waitMode = Number(Moghunter.ras_waitMode);
	this._chronoMode.battlerActive = null;
	this._chronoMode.touchInput = String(Moghunter.chronoTouchInput) === 'true' ? true : false;
	this._chronoMode.phaseEndPhaseDuration = 0;
    this._eventDataTool = null;
	this._eventDataToolLoad = false;
	this._eventDataToolRequestAddSprite = false;
	this._eventDataToolRequestRemoveSprite = false;
	this._toolsData = null;
	this._toolsOnMap = [];
	this._toolActorMode = true;
	this._toolHookshotSprite = [null,0,0];
	this._chronoEscape = {};
	this._chronoEscape.canEscape = true;
	this._chronoEscape.maxTime = 100;
	this.clearChronoEscape();
	this._chronoCom = {};
	this._chronoCom.attack = String(Moghunter.ras_comAttack) === 'true' ? true : false;
	this._chronoCom.shield = String(Moghunter.ras_comShield) === 'true' ? true : false;
	this._chronoCom.item = String(Moghunter.ras_comItem) === 'true' ? true : false;
	this._chronoCom.skill = String(Moghunter.ras_comSkill) === 'true' ? true : false;
	this._chronoCom.windowSkill = String(Moghunter.ras_comSkillWindow) === 'true' ? true : false;
	this._chronoCom.windowItem = String(Moghunter.ras_comItemWindow) === 'true' ? true : false;
	this._chronoCom.diagonal = String(Moghunter.ras_DiagonalMovement) === "true" ? true : false;

};

//==============================
// * clear Chrono Command
//==============================
Game_System.prototype.clearChronoEscape = function() {
    this._chronoEscape.pressed = false;
	this._chronoEscape.enabled = false;
	this._chronoEscape.phase = 0;
    this._chronoEscape.time = 0;
};

//==============================
// * is Abs Mode
//==============================
Game_System.prototype.isAbsMode = function() {
	return this._rasMode === 0; 
};

//==============================
// * is Chrono Mode
//==============================
Game_System.prototype.isChronoMode = function() {
	return this._rasMode === 1 && this._chronoMode.enabled ; 
};

//==============================
// * is Non Battle Mode
//==============================
Game_System.prototype.isNonBattleMode = function() {
	if (!this._chronoMode.enabled) {return false};
	if (this._rasMode === 1) {return false}
    return true;
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Subject
//==============================
Game_Action.prototype.subject = function() {
	if (this._absSubject) {
		return this._absSubject;
    } else if (this._subjectActorId > 0) {
        return $gameActors.actor(this._subjectActorId);
    } else {
        return $gameTroop.members()[this._subjectEnemyIndex];
    };
};

//==============================
// * set ABS Subject
//==============================
Game_Action.prototype.setAbsSubject = function(subject) {
	this._absSubject = subject;
};

//=============================================================================
// ** Game Battler Base
//=============================================================================

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//==============================
// * check Action ID
//==============================
Game_Battler.prototype.checkActionID = function(item) {
	var actionID = null
	if (!item) {return null};
    var item_notes = item.note.split(/[\r\n]+/);
        item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
			if (note_data[0].toLowerCase() == "tool id"){
				actionID = Number(note_data[1]);
			};
	},this);
    return actionID;
};

//==============================
// * init  Members
//==============================
var _mog_toolSys_gbattler_iniMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
	_mog_toolSys_gbattler_iniMembers.call(this);
	this.toolSysInitBattler();
};

//==============================
// * tool Sys Init Battler
//==============================
Game_Battler.prototype.toolSysInitBattler = function() {
	this._ras = {};
	this._ras._knockback = true;
	this._ras.tool = null;
	this._ras.knockback = [0,0];
	this._ras.collisionD = 0;
	this._ras.poseDuration = 0;
	this._ras.poseSuffix = "";
	this._ras.poseLoop = false;
	this._ras.offsetX = 0;	
	this._ras.offsetY = 0;
	this._ras.diagonal = [false,0];
	this._ras.hookshotUser = [false,false,4,null];
	this._ras.invunerable = false;
	this._ras.disableCollision = false;
	this._ras.superGuard = false;
	this._ras.moveSpeed	= 4;
	this._ras.diagonal = [false,0];
	this._ras.deadSwitchID = [];
	this._ras.deadVariableID = [];
	this._ras.deadSelfSwitchID = [];
	this._ras.invunerableActions = [];
	this._ras.character = null;
	this._ras.autoTarget = null;
	this._ras.dead = false;
	this._ras.guard = {};
	this._ras.guard.enabled = false;
	this._ras.guard.chrono = false;
	this._ras.guard.chronoPer = 50;
    this._ras.guard.active = false;
	this._ras.guard.poseSuffix = ""
	this._ras.bodySize = 0;
	this._ras.iconStateX = 0;
	this._ras.iconStateY = 0;
	this._ras.combo = {};
	this._ras.combo.id = 0;
	this._ras.combo.time = 0;
	this._ras.combo.type = 0;
	this._ras.charge = {};
	this._ras.charge.id = 0;
	this._ras.charge.time = 0;
	this._ras.charge.time2 = 0;
	this._ras.charge.maxtime = 0;
	this._ras.charge.charging = false;
	this._chrono = {};
	this._chrono.targets = [];
    this._chrono.action = null;
	this._chrono.actionTimes = 0;
	this._chrono.actionPhase = 0;
	this._chrono.actionID = 0;
	this._chrono.ScopeIndex = 0;
	this._chrono.statesTurn = [0,Number(Moghunter.ras_statesDuration)];
	this._chrono.inAction = false;
	this._chrono.atb = 0;
	this._chrono.maxAtb = Number(Moghunter.ras_atbMax);
	this._chrono.index = 0;
	this._chrono.defeated = [false,false];
	this._chrono.deadTurn = false;
	this._chrono.ct = 0;
	this._chrono.maxct = 100;
	this._chrono.ctSpeed = 1;
	this._chrono.ctDashLimit = 30;
    this.clearRasCast();
};

//==============================
// * atb Clear CN
//==============================
Game_Battler.prototype.atbClearCN = function() {
	this._chrono.targets = [];
    this._chrono.action = null;
	this._chrono.actionTimes = 0;
	this._chrono.actionPhase = 0;
	this._chrono.actionID = 0;
	this._chrono.inAction = false;
	this._chrono.atb = 0;
};

//==============================
// * clear Ras Cast
//==============================
Game_Battler.prototype.clearRasCast = function() {
	this._ras.cast = {};
	this._ras.cast.actionID = 0;
	this._ras.cast.item = null;
	this._ras.cast.duration = 0;
	this._ras.cast.maxDuration = 1;
	this._ras.cast.animationDuration = 0;
	this._ras.cast.animationMax = 0;
	this._ras.cast.animationID = 0;
};

//==============================
// * clear Ras Combo
//==============================
Game_Battler.prototype.clearRasCombo = function() {
	this._ras.combo.id = 0;
	this._ras.combo.time = 0;
	this._ras.combo.type = 0;
};

//==============================
// * is Max Atb C
//==============================
Game_Battler.prototype.isMaxAtbC = function() {
	return this._chrono.atb >= this._chrono.maxAtb;
};

//==============================
// * is Casting C
//==============================
Game_Battler.prototype.isCastingC = function() {
	return this._ras.cast.item && this._ras.cast.duration > 0;
};

//==============================
// * is Charge Max
//==============================
Game_Battler.prototype.isChargeMax = function() {
	return this._ras.charge.time >= this._ras.charge.maxtime;
};

//==============================
// * is Charging
//==============================
Game_Battler.prototype.isCharging = function() {
    return this._ras.charge.charging;
};

//==============================
// * atb Speed C
//==============================
Game_Battler.prototype.atbSpeedC = function() {
	return this.agi;
};

//==============================
// * need Update ATB C
//==============================
Game_Battler.prototype.needUpdateAtbC = function() {
	if (!this.canMove()) {return false};
	if ($gameSystem._chronoMode.waitD > 0) {return false};
	if ($gameSystem._chronoMode.wait) {return false};
	if ($gameSystem._chronoMode.inTurn) {return false};
	if ($gameSystem._chronoMode.phase != 3) {return false};
	return true;
};

//==============================
// * tool Tool Sys Notes
//==============================
Game_Battler.prototype.loadToolSysNotes = function() {
	 this.notetags().forEach(function(note) {
		 if (note.toLowerCase() == "disable knockback"){
			 this._ras._knockback = false;
	     };	
         var note_data = note.split(' : ')
		 if (note_data[0].toLowerCase() == "dead switch id"){	
			 this._ras.deadSwitchID.push(Number(note_data[1]));
	     };
		 if (note_data[0].toLowerCase() == "dead variable id"){
			 this._ras.deadVariableID.push(Number(note_data[1]));
	     };		
		 if (note_data[0].toLowerCase() == "dead selfswitch id"){
			 this._ras.deadSelfSwitchID = String(note_data[1]);
	     };
		 if (note_data[0].toLowerCase() == "invulnerable actions"){
			 var par = note_data[1].split(',');	
			 for (var i = 0; i < par.length; i++) {
				 var actionID = par[i];
				 this._ras.invunerableActions.push(actionID) 
			 };
         };	
		 if (note_data[0].toLowerCase() == "body size"){
			 this._ras.bodySize = Number(note_data[1]);
	     };
		 if (note_data[0].toLowerCase() == "state icon y-axis"){
			 this._ras.iconStateY = Number(note_data[1]);
	     };		  	 
	},this); 
};

//==============================
// * clear Acting
//==============================
Game_Battler.prototype.clearActing = function(skipCast) {
	this._ras.knockback = [0,0];
	this._ras.collisionD = 0;
	this._ras.superGuard = false;
	//this._ras.invunerable = false;
	this._ras.offsetX = 0;	
	this._ras.offsetY = 0;	
	this._ras.poseDuration = 0;
	this._ras.poseSuffix = "";
	this._ras.poseLoop = false;
	this._ras.hookshotUser = [false,false,this._ras.moveSpeed,null];
	this._ras.guard.active = false;
	this._ras.guard.chrono = false;
	if (skipCast) {this.clearRasCast()};
	this._ras.tool = null;
};

//==============================
// * is Guarding CN
//==============================
Game_Battler.prototype.isGuardingCN = function() {
	return this._ras.guard.chrono;
};

//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * setup
//==============================
var _mog_toolSys_gact_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_toolSys_gact_setup.call(this,actorId);
	this.loadToolSysNotes()
};

//==============================
// * initialize
//==============================
var _mog_toolSys_gact_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
	_mog_toolSys_gact_initMembers.call(this);
	this._toolItemId = 0;
	this._toolSkillId = 0;
	this._toolItemActionId = 0;
	this._toolSkillActionId = 0;
	this._toolWeaponActionId = 0;
	this._toolShieldActionId = 0;
};

//==============================
// * tool Item ID
//==============================
Game_Actor.prototype.toolItemID = function() {
    return this._toolItemActionId;
};

//==============================
// * tool Skill ID
//==============================
Game_Actor.prototype.toolSkillID = function() {
    return this._toolSkillActionId;
};

//==============================
// * tool Weapon ID
//==============================
Game_Actor.prototype.toolWeaponID = function() {
    return this._toolWeaponActionId;
};

//==============================
// * tool Shield ID
//==============================
Game_Actor.prototype.toolShieldID = function() {
    return this._toolShieldActionId;
};

//==============================
// * equip Tool Item ID
//==============================
Game_Actor.prototype.equipToolItemID = function(itemid) {
    this._toolItemId = itemid;
	this.setToolItemID();
};

//==============================
// * equip Tool skill ID
//==============================
Game_Actor.prototype.equipToolSkillID = function(itemid) {
    this._toolSkillId = itemid;
	this.setToolSkillID();
};

//==============================
// * set Tool Item ID
//==============================
Game_Actor.prototype.setToolItemID = function() {
	var item = $dataItems[this._toolItemId];
	if (item) {
		this._toolItemActionId = this.getToolActionID(item);
	} else {
		this._toolItemActionId = 0;
	};
};

//==============================
// * set Tool Skill ID
//==============================
Game_Actor.prototype.setToolSkillID = function() {
	var item = $dataSkills[this._toolSkillId];
	if (item) {
		this._toolSkillActionId = this.getToolActionID(item);
	} else {
		this._toolSkillActionId = 0;
	};	
};

//==============================
// * set Tool Weapon ID
//==============================
Game_Actor.prototype.setToolWeaponID = function() {
	var item = this.equips()[0]
	if (item) {
		this._toolWeaponActionId = this.getToolActionID(item);
	} else {
		this._toolWeaponActionId = 0;
	};
	this.setChargeAttackID();
};

//==============================
// * set Charge Attack ID
//==============================
Game_Actor.prototype.setChargeAttackID = function() {
	var tool = $gameMap.tool(this._toolWeaponActionId);
	if (!tool) {return};
	this._ras.charge.id = tool.charge.id;
	this._ras.charge.time = 0;
	this._ras.charge.time2 = 0;
	this._ras.charge.maxtime = tool.charge.maxtime;
};

//==============================
// * set Tool Armor ID
//==============================
Game_Actor.prototype.setToolArmorID = function() {
	this._ras.guard.enabled = false;
	var item = this.equips()[1]
	if (item) {
		this._toolShieldActionId = this.getToolActionID(item);
	} else {
		this._toolShieldActionId = 0;		
	};	
};

//==============================
// * get Tool Action ID
//==============================
Game_Actor.prototype.getToolActionID = function(item) {
	 var actionID = 0; 
     var item_notes = item.note.split(/[\r\n]+/);
     item_notes.forEach(function(note) {
		 var note_data = note.split(' : ')
		 if (note_data[0].toLowerCase() == "tool id"){
			 actionID = Number(note_data[1]);
		 }
		 if (DataManager.isArmor(item)) {
			 if (note_data[0].toLowerCase() == "shield pose suffix"){
					this._ras.guard.enabled = true;
					this._ras.guard.poseSuffix = String(note_data[1]);
					
			 };
		 };
	 },this);
	 return actionID;
};

//==============================
// * refresh Tool Ids
//==============================
Game_Actor.prototype.refreshToolIds = function(item) {
	this.setToolItemID();
	this.setToolSkillID();
	this.setToolWeaponID();
	this.setToolArmorID();
};

//==============================
// * refresh
//==============================
var _mog_toolSys_gActor_refresh = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
	_mog_toolSys_gActor_refresh.call(this,slotId, item);
	this.refreshToolIds();
};

//==============================
// * gain Exp CN
//==============================
Game_Actor.prototype.gainExpCN = function(exp) {
    var newExp = this.currentExp() + Math.round(exp * this.finalExpRate());
    this.changeExp(newExp, false);
};

//=============================================================================
// ** Game Enemy
//=============================================================================

//==============================
// * setup
//==============================
var _mog_toolSys_genemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_toolSys_genemy_setup.call(this,enemyId, x, y);
    this.loadToolSysNotes()
};

//=============================================================================
// ** Game Party
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_toolSys_gparty_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
    _mog_toolSys_gparty_initialize.call(this);
	this._tool = {};
	this._tool.id = 2;
};

//==============================
// * Tool ID
//==============================
Game_Party.prototype.tool_id = function() {
    return this._tool.id;
};

//==============================
// * set Tool ID
//==============================
Game_Party.prototype.setToolID = function(toolID) {
    this._tool.id = toolID;
};

//==============================
// * max Battle Members
//==============================
Game_Party.prototype.maxBattleMembers = function() {
    return Math.min(Math.max(Number(Moghunter.ras_maxBattleMembers),1),4);
};		
	
//=============================================================================
// ** Game Map
//=============================================================================

//==============================
// * Setup
//==============================
var _mog_toolSys_gmap_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_mog_toolSys_gmap_setup.call(this,mapId);
	this._treasureEvents = [];
	this._battlersOnScreen = [];
	this._enemiesOnScreen = [];
	this._actorsOnScreen = [];
	$gameSystem._toolsOnMap = [];
	$gameTemp.clearToolCursor();
	if (!$gameSystem._toolsData) {this.dataMapToolClear()};
	for (var i = 0; i < $gameParty.members().length; i++) {
		var actor = $gameParty.members()[i];
		actor.clearActing();
		$gameSystem._toolHookshotSprite = [null,null,0];
	};
};

//==============================
// * Need Load Tool Data
//==============================
Game_Map.prototype.needLoadToolData = function() {
	if (!$dataMapTool) {return true};
	return false;
};

//==============================
// * Update
//==============================
var _mog_toolSys_gmap_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
	if ($gameTemp._hookshootPreData.user && !$gamePlayer.followers().areGathering()) {
		this.loadHookShotData()
	};
	if ($gameSystem._eventDataTool) {this.addToolEvents()};
	_mog_toolSys_gmap_update.call(this,sceneActive);
	if ($gameSystem.isChronoMode()) {$gameChrono.update()};	
};

//==============================
// * load HookShotData
//==============================
Game_Map.prototype.loadHookShotData = function() {
   var user = $gameTemp._hookshootPreData.user;
   var tool = $gameTemp._hookshootPreData.tool;
   user._x = tool._tool.hookshot.x;
   user._y = tool._tool.hookshot.y;
   user.battler()._ras.hookshotUser[1] = true
   tool._tool.hookshot.locked = true; 
   tool._tool.forcingMove = 2;
   $gameTemp._hookshootPreData.user = null;
   $gameTemp._hookshootPreData.tool = null;
   $gamePlayer.gatherFollowers();
   for (var i = 0; i < $gamePlayer._followers._data.length; i++) {
		var char = $gamePlayer._followers._data[i];
		if (char) {char.setDirection($gamePlayer._direction)}
   };   
};

//==============================
// * Add Tool Events
//==============================
Game_Map.prototype.addToolEvents = function() {
    var eventsTools = [];
	var mapId = Number(Moghunter.toolSys_MapID);
    $gameSystem._eventDataToolLoad = true;
    for (var i = 0; i < $gameSystem._eventDataTool.length; i++) {
		var actionId = $gameSystem._eventDataTool[i][0];
		var user = $gameSystem._eventDataTool[i][1];
        if ($dataMapTool.events[actionId]) {
            eventsTools[i] = new ToolEvent(mapId,actionId,user,false);
			if (eventsTools[i]._tool.active) {
				this._events.push(eventsTools[i])
			} else {
				eventsTools[i] = null;
			};
        };
	};
	$gameSystem._eventDataToolLoad = false;
	$gameSystem._eventDataTool = null;
	$gameSystem._eventDataToolRequestAddSprite = true;
	this.refresh();
};

//==============================
// * add Tools On Map
//==============================
Game_Map.prototype.addToolsOnMap = function(tool_id) {
	var enable = true;
	for (var i = 0; i < $gameSystem._toolsOnMap.length; i++) {
		var toolMapID = $gameSystem._toolsOnMap[i];
		if (tool_id === toolMapID) {enable = false};
	};
	if (enable) {$gameSystem._toolsOnMap.push(tool_id)};
};

//==============================
// * clear Tools On Map
//==============================
Game_Map.prototype.clearToolsOnMap = function() {	
    for (var i = 0; i < this._events.length; i++) {
		var ev = this._events[i];
		if (ev  && ev._tool.enabled) {			
			ev._tool.duration = 1;
			ev._tool.removeSprite = true;
		};
	};
};

//==============================
// * clear Battlers on Map
//==============================
Game_Map.prototype.clearBattlersOnMap = function() {	 
    for (var i = 0; i < this._events.length; i++) {
		var ev = this._events[i];
		if (ev  && ev.battler()) {
			ev.clearActing();
		};
	};
    $gamePlayer.clearActing();
    var followers = $gamePlayer._followers._data;
	for (var i = 0; i < followers.length; i++) {
		 var character = followers[i];
		 if (character && character.battler()) {character.clearActing()};	
	};
	$gamePlayer.clearPickUpRas();
	$gameSystem._toolHookshotSprite = [null,null,0];
};

//==============================
// * remove Tool Events
//==============================
Game_Map.prototype.removeToolEvents = function() {
    for (var i = 0; i < this._events.length; i++) {
		var ev = this._events[i];
		if (ev && ev._tool.removeSprite) {
	        this.removeRasEffectEvents(ev)
		    ev._tool.removeSprite = false;
		    this._events.splice(i,1);
		    this.removeToolsOnMap(ev._tool.id);
		};
	};
};

//==============================
// * remove Ras Effect Events
//==============================
Game_Map.prototype.removeRasEffectEvents = function(ev) {
	if (Imported.MOG_PickupThrow && ev._throw.enabled) {
	   target = $gamePlayer
	   target._pickup.enabled = false;
	   target._pickup.wait = 5;
	   if (target._pickup.pose) {target._characterName = target._pickup.originalName};   
	};
	if (ev._tool.hookshot.target) {
	    ev._tool.hookshot.target._user.hookshotTool = null;
	};				
	if (this.needClearActionEvent(ev)) {
		if (ev._tool.hookshot.enabled) {
		    ev._tool.user._moveSpeed = ev._tool.user.battler()._ras.hookshotUser[2];
		};
		ev._tool.user.clearActing();
	};
};

//==============================
// * need Clear Action Event
//==============================
Game_Map.prototype.needClearActionEvent = function(event) {
	if (event._tool.hookshot.enabled) {return true};
	if (event._tool.boomerang[0]) {return true};
	return false;
};
					
//==============================
// * remove Tools On Map
//==============================
Game_Map.prototype.removeToolsOnMap = function(tool_id) {
	for (var i = 0; i < $gameSystem._toolsOnMap.length; i++) {
		var toolMapID = $gameSystem._toolsOnMap[i];
		if (tool_id === toolMapID) {
			$gameSystem._toolsOnMap.splice(i,1);
		};
	};
};

//==============================
// * Data Map Tool Clear
//==============================
Game_Map.prototype.dataMapToolClear = function() {
	if (!$dataMapTool) {return};
	for (var i = 1; i < $dataMapTool.events.length; i++) {
	      if ($dataMapTool.events[i] == null) {
			  $dataMapTool.events.splice(i, 1);
			  i--;
		  };
	};
	this.getToolsData()
};

//==============================
// * get Tools Data
//==============================
Game_Map.prototype.getToolsData = function() {
	var tempEvent = []
	$gameSystem._toolsData = [];
	var mapId = Number(Moghunter.toolSys_MapID);
	if (!$dataMapTool || !$dataMapTool.events) {return};
	for (var i = 0; i < $dataMapTool.events.length; i++) {
	      if ($dataMapTool.events[i]) {
			  tempEvent[i] = new ToolEvent(mapId,i,$gamePlayer,true);
			  $gameSystem._toolsData.push(tempEvent[i])
			  tempEvent[i] = null
		  };
	};	
};

//==============================
// * Tool Map Events
//==============================
Game_Map.prototype.toolIsExist = function(id) {
	var idr = id - 1;
	if (!$gameSystem._toolsData) {return false};
	if (!$gameSystem._toolsData[idr]) {return false}
	return true;
};

//==============================
// * Tool Map Events
//==============================
Game_Map.prototype.toolMapEvents = function() {
	if (!$gameSystem._toolsData) {this.getToolsData()};
	if (!$gameSystem._toolsData) {return false};
	return $gameSystem._toolsData;
};

//==============================
// * Tool Event
//==============================
Game_Map.prototype.toolEvent = function(id) {
	var toolID = Math.min(Math.max(id - 1,0),this.toolMapEvents().length - 1);
	return this.toolMapEvents()[toolID];
};

//==============================
// * tool
//==============================
Game_Map.prototype.tool = function(id) {
	if (!this.toolEvent(id)) {return false}
	return this.toolEvent(id)._tool;
};
  
//==============================
// * tool Event On Map
//==============================
Game_Map.prototype.toolEventOnMap = function(toolID) {
	var event = null;	 
    for (var i = 0; i < this._events.length; i++) {
		var ev = this._events[i];
		if (ev && ev._tool.enabled && ev._tool.id === toolID) {
			event = ev;
		};
	};
	return event;
};  
  
//==============================
// * Players
//==============================
Game_Map.prototype.players = function() {
	var players = [];
	players.push($gamePlayer);
	var followers = $gamePlayer._followers._data;
	for (var i = 0; i < followers.length; i++) {
		 var character = followers[i];
		 if (character.battler()) {players.push(character)};
	};
	return players;
};

//==============================
// * allCharacters
//==============================
Game_Map.prototype.allCharacters = function() {
	var characters = [];
	for (var i = 0; i < this.players().length; i++) {
		 var char = this.players()[i];
		 if (char) {characters.push(char)};
	};
	for (var i = 0; i < this._events.length; i++) {
		 var char = this._events[i];
		 if (char) {characters.push(char)};
	};	
	return characters;
};
  
//==============================
// * Targets on Screen
//==============================
Game_Map.prototype.targetsOnScreen = function() {	 
	 this._battlersOnScreen = [];
	 this._enemiesOnScreen = [];
	 this._actorsOnScreen = [];
     for (var i = 0; i < this._events.length; i++) {
		 var character = this._events[i];
		 if (character) {
			 character._user.onScreen = false;
			 if (this.isBattlerOnScreen(character,true,false)) {
				 this._enemiesOnScreen.push(character);
				 this._battlersOnScreen.push(character);
				 character._user.onScreen = true;
			 };
		 };
	};	 
	for (var i = 0; i < this.players().length; i++) {
		 var character = this.players()[i];
		 character._user.onScreen = false;
		 if (character && this.isBattlerOnScreen(character,false,true)) {
			 this._actorsOnScreen.push(character);
			 this._battlersOnScreen.push(character);
			 character._user.onScreen = true;
		 };			
	};
};

//==============================
// * clear All Battler Actions
//==============================
Game_Map.prototype.clearAllBattlerActions = function() {	 
     this.targetsOnScreen();
	 for (var i = 0; i < this._battlersOnScreen.length; i++) {
		 var battler = this._battlersOnScreen[i];
		 battler.clearActing();		
	 };
};

//==============================
// * Enemies F
//==============================
Game_Map.prototype.enemiesF = function() {	 
    return this._enemiesOnScreen;
};

//==============================
// * All Enemies On Map
//==============================
Game_Map.prototype.allEnemiesOnMap = function() {	
     var allenemies = [];
     for (var i = 0; i < this._events.length; i++) {
		 var character = this._events[i];
		 if (character) {
			 if (this.isBattlerOnScreen(character,false,false)) {
				 allenemies.push(character);
			 };
		 };
	};
	return allenemies;
};

//==============================
// * Is Battler On Screen
//==============================
Game_Map.prototype.isBattlerOnScreen = function(character,range,ignoreDead) {
	if (!character) {return false};
    if (!character.battler()) {return false};
	if (character._erased) {return false};
	if (character.battler().isEnemy()) {
		if (!ignoreDead && character.battler().isDead()) {return false};
		if (character._chrono.escaped) {return false};
	};
	if (character._tool.enabled) {return false};
	if (range) {	
		if (character.screenX() < this.dspX1()) {return false};
		if (character.screenX() > this.dspX2()) {return false};
		if (character.screenY() < this.dspY1()) {return false};
		if (character.screenY() > this.dspY2()) {return false};
	};
	return true;
};

//==============================
// * Dsp X1
//==============================
Game_Map.prototype.dspX1 = function() {
	return 0;
};

//==============================
// * Dsp X2
//==============================
Game_Map.prototype.dspX2 = function() {
	return Graphics.boxWidth;
};

//==============================
// * Dsp Y1
//==============================
Game_Map.prototype.dspY1 = function() {
	return 0;
};

//==============================
// * Dsp Y2
//==============================
Game_Map.prototype.dspY2 = function() {
	return Graphics.boxHeight;
};

//==============================
// * set Display Pos
//==============================
var _mog_gchrono_gmap_setDisplayPos = Game_Map.prototype.setDisplayPos;
Game_Map.prototype.setDisplayPos = function(x, y) {
	if ($gameSystem.isChronoMode()) {return};
	_mog_gchrono_gmap_setDisplayPos.call(this,x, y);
};

//==============================
// * setup Starting Map Event
//==============================
Game_Map.prototype.setupStartingMapEvent = function() {
    var events = this.events();
    for (var i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.isStarting()) {
            event.clearStartingFlag();
            this._interpreter.setup(event.list(), event.eventId());
			if (event._tool && event._tool.enabled) {this._interpreter.setupToolEvent(event)};
            return true;
        }
    }
    return false;
};

//=============================================================================
// ** Game Character Base
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_toolSys_gChar_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_mog_toolSys_gChar_initMembers.call(this);
	this.userSetup();
    this.toolSetup();
};
  
//==============================
// * user Setup
//==============================
Game_CharacterBase.prototype.userSetup = function() {
	this._charPoses = Imported.MOG_CharPoses ? true : false;
	this._dashing = false;
    this._user = {};
	this._user.tool = null;
	this._user.battler = null;
	this._user.toolCollision = [];
	this._user.poseMaxPattern = 2;
	this._user.isEvent = false;
	this._user.isPlayer = false;
	this._user.isFollower = false;
	this._user.isLeader = false;
	this._user.diagonal = [false,0];
	this._user.hookshotEvent = false;
	this._user.hookshotTool = null;
	this._user.hookshotLock = {};
	this._user.hookshotLock.preMoveSpeed = this._moveSpeed;
	this._user.hookshotLock.tool = null;
	this._user.treasure = [null,false,0,0,0];
	this._user.collapse = [false,0];
	this._user.autoTarget = null;
	this._user.spriteSize = [0,0];
	this._user.spcShoot = [false,0,0,null];
	this._user.onScreen = false;
	this._user.touchDamage = false;
	this._user.rotation = [0,0];
	this._user.walkAround = [false,0,0,0];
	this._user.orgX = 0;
	this._user.orgY = 0;
	this._user.collision = true;
	this._spritePar = {};
	this._spritePar.refresh = false;
	this._spritePar.width = 0;
	this._spritePar.height = 0;
	this.chainActionClear();
	this.chainActionHitClear();
	this.actionTimesClear();
	this._chrono = {}
	this._chrono.target = null;
	this._chrono.escaped = false;
	this._chrono.orgX = 0;
	this._chrono.orgY = 0;
	this._chrono.orgDirection = 2;
	this._chrono.orgPriorityType = 1;
	this._chrono.orgWalkAnime = false;
	this._chrono.orgStepAnime = false;
	this._chrono.orgDirectionFix = false;
	this._chrono.orgThrough = false;
	this._chrono.orgMoveSpeed = 4;
	this._chrono.orgFrequency = 6;
	this._chrono.orgName = "";
	this._chrono.battleRange = Number(Moghunter.ras_battleRange);
    this.clearAnimationCN();
	if (Imported.MOG_CharPoses) {this._chrono.orgoriginalName = ""};		
	this._chrono.deadChecked = false;
	this._chrono.nextX = null;
	this._chrono.nextY = null;
	this._chrono.premapD = this._direction;
	this._chrono.premapX = 0;
	this._chrono.premapY = 0;
	this._chrono.premapMoveSpeed = 4;
	this._chrono.posX = -1;
	this._chrono.posY = -1;
	this._chrono.dir = -1;
	this._chrono.dirF = false;
};

//==============================
// * clear Animation CN
//==============================
Game_CharacterBase.prototype.clearAnimationCN = function() {
	this._chrono.animation = {};
	this._chrono.animation.directionMode = false;
	this._chrono.animation.rotationP = [0,90 * Math.PI / 180, 180 * Math.PI / 180, 270 * Math.PI / 180];
	this._chrono.animation.rotation = 0;
	this._chrono.animation.x = 0;
	this._chrono.animation.y = 0;
};

//==============================
// * set Angle
//==============================
Game_CharacterBase.prototype.setAngle = function(angle) {
	var ag = angle * Math.PI / 180;
    this._user.rotation = [ag,angle];
};

//==============================
// * set Character Name
//==============================
Game_CharacterBase.prototype.setCharacterName = function(name) {
   this._characterName = String(name);
  if (Imported.MOG_CharPoses) {
      this._originalName.name = String(name);
	  this.refreshPoses()
  };
  this._characterIndex = 0;
  this.battler()._ras.poseSuffix = "";
  if (Imported.MOG_CharPoses) {this.setCharacterFrames()};
};

//==============================
// * chain Action Clear
//==============================
Game_CharacterBase.prototype.chainActionClear = function() {
  this._user.chainAction = [0,0,null];
};

//==============================
// * chain Action Hit Clear
//==============================
Game_CharacterBase.prototype.chainActionHitClear = function() {
  this._user.chainActionHit = [0,0,null,false,null,null];
};

//==============================
// * Action Times Clear
//==============================
Game_CharacterBase.prototype.actionTimesClear = function() {
  this._user.actionTimes = [false,0,0,0,null,0,false,0];
};

//==============================
// * save Org Parameters
//==============================
Game_CharacterBase.prototype.saveOrgParameters = function() {
	this._chrono.orgX = this._x;
	this._chrono.orgY = this._y;
	this._chrono.orgName = this._characterName;
	if (Imported.MOG_CharPoses) {this._chrono.orgoriginalName = this._originalName.name};
	this._chrono.orgDirection = this._direction;
	this._chrono.orgPriorityType = this._priorityType;
	this._chrono.orgWalkAnime = this._walkAnime;
	this._chrono.orgStepAnime = this._stepAnime;
	this._chrono.orgDirectionFix = this._directionFix;
	this._chrono.orgThrough = this._through;
	this._chrono.orgMoveSpeed = this._moveSpeed;
	this._chrono.orgFrequency = this._frequency;	
};

//==============================
// * load Org Parameters
//==============================
Game_CharacterBase.prototype.loadOrgParameters = function(direction) {
	this._x = this._chrono.orgX ? this._chrono.orgX : this._chrono.premapX;
	this._y = this._chrono.orgY ? this._chrono.orgY : this._chrono.premapY;
	if (direction) {this._direction = this._chrono.orgDirection};
	this._characterName = this._chrono.orgName;
	if (Imported.MOG_CharPoses && this._chrono.orgoriginalName != "") {this._originalName.name = this._chrono.orgoriginalName};
	this._priorityType = this._chrono.orgPriorityType;
	this._walkAnime = this._chrono.orgWalkAnime;
	this._stepAnime = this._chrono.orgStepAnime;
	this._directionFix = this._chrono.orgDirectionFix;
	this._through = this._chrono.orgThrough;
	this._moveSpeed = this._chrono.orgMoveSpeed;
	this._frequency = this._chrono.orgFrequency;
	if (this.battler() && !this.battler().isDead()) {
		this.battler()._ras.collisionD = 0;
		this.battler()._ras.knockback = [0,0];
	};
	this._user.rotation = [0,0];
	this.clearAnimationCN();
	var target = this.battler()._chrono.targets[0];
	if (target) {
	    this.turnTowardCharacter(target)	
	}	
};

//==============================
// * can Touch Target
//==============================
Game_CharacterBase.prototype.canTouchTarget = function(character) {
	if (!this.battler()) {return false};	
	if (this.battler().isActor()) {return false};	
	if (this.battler().restriction() >= 4) {return false};
	if (!this._user.touchDamage) {return false};
	if ($gameSystem.isChronoMode()) {return false};
	if (!character._user.isPlayer) {return false};
	if (!character.battler()) {return false};
	if (character.isKnockbacking()) {return false};
    if ($gameTemp._chaPosesEVRunning) {return false};
	if (this.isMovementSucceeded()) {return false}
	var dis = Math.abs(character.x - this.x) + Math.abs(character.y - this.y);
	if (dis > 1) {return false};
	var dX = character.x - this.x;
	var dY = character.y - this.y;
	if (this._direction === 2 && dY >= 0) {
		return true;
	} else if (this._direction === 8 && dY <= 0) {
		return true;
	} else if (this._direction === 6 && dX >= 0) {	
		return true;
	} else if (this._direction === 4 && dX <= 0) {	
		return true;				
	};
	return false
};

//==============================
// * can Collide Attack Mode Base
//==============================
Game_CharacterBase.prototype.canCollideAttackModeBase = function() {
	if ($gameSystem.isChronoMode()) {return false};
	if (!this.battler()) {return false};
	if (this.isKnockbacking()) {return false};
	return true;
};

//==============================
// * Tool Setup
//==============================
Game_CharacterBase.prototype.toolSetup = function() {
	this._tool = {};
	this._tool.enabled = false;
	this._tool.user = null;
	this._tool.id = 0;
	this._tool.addSprite = false;
	this._tool.removeSprite = false;	
	this._tool.poseDuration = 0;
	this._tool.poseSuffix = "";
	this._tool.offsetX = 0;
	this._tool.offsetY = 0;	
	this._tool.start = false;
	this._tool.position = 0;
	this._tool.active = false;
	this._tool.duration = 60;
	this._tool.durationBase = 60;
	this._tool.waitD = false;
	this._tool.piercing = true;
	this._tool.target = null;
	this._tool.targetF = null;
	this._tool.knockbackType = 0;
	this._tool.knockbackFace = true;
	this._tool.knockbackPower = 1;
	this._tool.collision = true;
	this._tool.collisionD = 20;
	this._tool.animationID1 = 0;
	this._tool.animationID2 = 0;
	this._tool.animationID3 = 0;
	this._tool.multihit = false;
	this._tool.range = 1;
	this._tool.wait = 3;
	this._tool.area = 0;
	this._tool.type = -1;
	this._tool.hitSuccess = false;
	this._tool.damage = false;
	this._tool.skill = null;
	this._tool.item = null;
	this._tool.itemCost = null;
	this._tool.mpCost = 0;
	this._tool.tpCost = 0;
	this._tool.unique = false;
	this._tool.selfDamage = false;
	this._tool.ignoreKnockback = false;
	this._tool.hookshot = {};
	this._tool.hookshot.enabled = false;
	this._tool.hookshot.range = 0;
	this._tool.hookshot.x = 0;
	this._tool.hookshot.y = 0;	
	this._tool.hookshot.locked = false;
	this._tool.hookshot.target = null;
	this._tool.boomerang = [false,0,0];
	this._tool.offsetUserX = 0;
	this._tool.offsetUserY = 0;
	this._tool.ignoreGuard = false;
	this._tool.diagonal = false;
	this._tool.diagonalAngle = 0;
	this._tool.diagonalAngleEnabled = false;
	this._tool.forcingMove = 0;
	this._tool.getTreasure = false;
	this._tool.autoTarget = false;
	this._tool.projectile = false;
	this._tool.eventInt = false;
	this._tool.guardReflect = false;
	this._tool.castAnimationID = Number(Moghunter.ras_castAnimationID);
	this._tool.spcShootTool = [false,0,0];
	this._tool.shake = [0,0,0];
	this._tool.ctCost = 0;
	this._tool.combo = {};
	this._tool.combo.id = 0;
	this._tool.combo.type = 0;
	this._tool.combo.time = 20;
	this._tool.charge = {};
	this._tool.charge.id = 0;
	this._tool.charge.time = 0;
	this._tool.charge.maxtime = 120;
	this._tool.zoomAct = false;
};

//==============================
// * clear Acting
//==============================
Game_CharacterBase.prototype.clearActing = function(skipCast) {
	var skipCast = skipCast ? true : false;
	this._user.hookshotTool = null;
	this._user.autoTarget = null;
	this.battler().clearActing(skipCast);
	if (this._user.actionTimes[1] > 0) {
		this.executeActionTimes();
	} else {
	   if (this._user.chainAction[0] > 0) {this.executeChainAction()};
	};
	if (this._user.chainActionHit[4] || !$gameSystem.isChronoMode()) {
		this.chainActionHitClear();
	};	
};

//==============================
// * execute Action Times
//==============================
Game_CharacterBase.prototype.executeActionTimes = function() {
    this._user.actionTimes[1]--;
	if (this._user.actionTimes[1] === 0) {this.actionTimesClear();return};
	this._user.actionTimes[5] = this._user.actionTimes[7];
	if ($gameSystem.isChronoMode()) {
		if ( $gameSystem._chronoMode.inTurn) {
			this.battler()._chrono.actionPhase = 3;
			$gameSystem._chronoMode.turnDuration = this._user.actionTimes[5] + 1;
			if (this._user.actionTimes[4]) {
				this._user.autoTarget = this._user.actionTimes[4];
			};			
			$gameChrono.updateExecuteActionCN(this,this.battler())
		};
	} else {
		if (this._user.actionTimes[4]) {
			this._user.autoTarget = this._user.actionTimes[4];
		};			
		this.act(this._user.actionTimes[2]);
	};

};

//==============================
// * Execute Chain Action
//==============================
Game_CharacterBase.prototype.executeChainAction = function() {
	if ($gameSystem.isChronoMode()) {
		$gameSystem._chronoMode.turnDuration += this._user.chainAction[1];
		if (this._user.chainAction[2]) {
			this._user.autoTarget = this._user.chainAction[2];
		};
		this.actC(this._user.chainAction[0]);			
	} else {
	    this.act(this._user.chainAction[0]);
	};
	this.chainActionClear();
};

//==============================
// * can Move ABS Base
//==============================
Game_CharacterBase.prototype.canMoveABSBase = function() {
	if (!this.battler()) {return true};
	if (this.battler().isDead()) {return false};
	if (this.isActing()) {return false};
	if (this._erased) {return false};
	if (this.isKnockbacking()) {return false};
	if (this.isCasting()) {return false};
	if ($gameTemp._chrono.moveWait > 0) {return false};
	if ($gameTemp._chaPosesEVRunning) {return false};
	if (SceneManager.isSceneChanging()) {return false};
	if ($gameMessage.isBusy()) {return false};
	if (!this.canMove()) {return false};
	if (this._user.collapse[0]) {return false};
	if (this._user.hookshotTool) {return false};
	if ($gameSystem._chronoMode.waitMode < 2 && !$gameTemp._autoTarget.enabled) {
	    if ($gameTemp._chronoCom.phase != 0) {return false};
	};
	if ($gameTemp._autoTarget.enabled) {
		if (!$gameSystem.isChronoMode()) {	
			if (this._user.isLeader) {
				if (!this._user.autoTarget) {return false};
			} else {
				return false;
			};
		} else {
			if ($gameSystem._chronoMode.waitMode === 0) {return false};
		};
	};
	return true;
};

//==============================
// * can Move ABS
//==============================
Game_CharacterBase.prototype.canMoveABS = function() {
    if (!this.canMoveABSBase()) {return false};
	if (this.isGuarding()) {return false};
    return true;
};

//==============================
// * is Guarding
//==============================
Game_CharacterBase.prototype.isGuarding = function() {
	if (!this.battler()) {return false};
	if (this._tool.enabled) {return false};
    return this.battler()._ras.guard.active;
};

//==============================
// * guard Is Usable
//==============================
Game_Player.prototype.guardIsUsable = function() {
	if ($gameSystem.isChronoMode()) {return false};
	if (!this.canMoveABSBase()) {return false};
	if (!this.battler()._ras.guard.enabled) {return false};
    return true
};

//==============================
// * battler
//==============================
Game_CharacterBase.prototype.battler = function() {
	return this._user.battler;
};

//==============================
// * can Move
//==============================
Game_CharacterBase.prototype.canMove = function() {
	if (!this.battler()) {return true};
	if (this._tool.enabled) {return true};
	if (this.battler().restriction() >= 4) {return false};
	return true;
};

//==============================
// * Is Acting
//==============================
Game_CharacterBase.prototype.isActing = function() {
	if (!this.battler()) {return false};
	if (this._tool.enabled) {return false};
	if (this.battler()._ras.hookshotUser[0]) {return true};
	if (this.battler()._ras.poseDuration > 0) {return true};
    return false 
};

//==============================
// * Is Knockbacking
//==============================
Game_CharacterBase.prototype.isKnockbacking = function() {
	if (this._tool.enabled) {return false};
	if (!this.battler()) {return false}
	if (this.battler()._ras.knockback[1] > 0) {return true};
	if (this.battler().isDead()) {return true};
    return false 
};

//==============================
// * Can Knockback
//==============================
Game_CharacterBase.prototype.canKnockback = function(target) {
	if (target.isCasting()) {return false};
    if (target.battler()._ras.hookshotUser[0]) {return false};
    if (target.battler()._ras.invunerable) {return false};
    if (target.battler()._ras.superGuard) {return false};
	if (target.battler()._ras.poseDuration > 25) {return false};
    if (!target.battler()._ras._knockback) {return false};
	if (!$gameSystem.isChronoMode()) {
		if (target.battler().isActor()) {
	        if (target.battler().isDead()) {return false};
			if (target != $gamePlayer) {return false};
		};
	};
    return true;
};

//==============================
// * Is Attacking
//==============================
Game_CharacterBase.prototype.isAttacking = function() {
	if (this._tool.enabled) {return false};
	if (this._user.touchDamage) {return true};
    return false 
};

//==============================
// * can Use Tool
//==============================
Game_CharacterBase.prototype.canUseTool = function(toolID) {
	if (!toolID) {return false};
	if (toolID <= 0) {return false};
	if (!$gameMap.toolIsExist(toolID)) {return false};
	if (this.isKnockbacking()) {return false};
    if (this.battler()) {
		if (!this.battler().canMove()) {return false};
	};
    return true;
};

//==============================
// * can Action Base
//==============================
Game_CharacterBase.prototype.canActionBase = function() {
	if (this.isActing()) {return false};
	if ($gameTemp._autoTarget.enabled) {return false};
	if (this.isCasting()) {return false};
	if (this.isKnockbacking()) {return false};
	if (this.isGuarding()) {return false};
	return true;
};

//==============================
// * can Execute Action
//==============================
Game_CharacterBase.prototype.canExecuteAction = function(toolID) {
	if ($gameSystem.isChronoMode()) {return false};
	if ($gameSystem._toolsOnMap.length > 0 && this.battler()) {
		if (this.battler().isActor()) {return false};
	};
	if (!this.canUseTool(toolID)) {
		this.clearActing();
		return false;
	};
	if (this.isRequiredCast(toolID)) {this.prepareCast(toolID);return false};
	if (this.isAutoTarget(toolID)) {this.executeAutoTarget(toolID);return false};
	return true;
};

//==============================
// * Act
//==============================
Game_CharacterBase.prototype.act = function(toolID) {
    if (!this.canExecuteAction(toolID)) {return};
    if (!$gameSystem._eventDataTool) {$gameSystem._eventDataTool = []};
    var action = $gameMap.toolEvent(toolID);
	this._user.spcShoot[0] = action._tool.spcShootTool[0];
	this._user.spcShoot[1] = action._tool.spcShootTool[1];
	this._user.spcShoot[2] = action._tool.spcShootTool[2];
	this._user.spcShoot[3] = this._user.autoTarget;
	if (this._user.spcShoot[2] != 0 && this._user.spcShoot[1] > 0) {
		this._user.spcShoot[0] = true;
	   for (var i = 0; i < this._user.spcShoot[1]; i++) {
	        $gameSystem._eventDataTool.push([toolID,this]);
	   };
    } else {
       $gameSystem._eventDataTool.push([toolID,this]);
	};
};

//==============================
// * is Auto Target
//==============================
Game_CharacterBase.prototype.isAutoTarget = function(toolID) {
	if (this._user.autoTarget) {return false};
	if (this._user.actionTimes[0]) {return false};
	var action = $gameMap.toolEvent(toolID);
	if (!action) {return false};
	if (!action._tool.autoTarget) {return false};
	if (!action.item()) {return false};
    return true;
};

//==============================
// * execute Auto Target
//==============================
Game_CharacterBase.prototype.executeAutoTarget = function(toolID) {
	if (this._user.isLeader) {$gameTemp.clearToolCursor()};
	var action = $gameMap.toolEvent(toolID);
	var item = action.item();	
	this._user.autoTarget = null;
	$gameMap.targetsOnScreen();
	var sOpponent = [1, 2, 3, 4, 5, 6];
	var sFriend = [7, 8, 9, 10, 11];
	var scope = item.scope;		
	var scopeOpponent = sOpponent.contains(scope) ? true : false;
	var scopeFriend = sFriend.contains(scope) ? true : false;	
	var battler = [];
    if (this.battler().isEnemy()) {
		if (scopeFriend) {
		   var battler = $gameMap._enemiesOnScreen;
		} else {
		   var battler = $gameMap._actorsOnScreen;
	    }
	} else {
		if (scopeFriend) {
		   var battler = $gameMap._actorsOnScreen;
		   $gameTemp._autoTarget.targetType = 1;
		} else {
		   var battler = $gameMap._enemiesOnScreen;
		   $gameTemp._autoTarget.targetType = 0;
	    };
	};
	if (this._user.isLeader) {
	    SoundManager.playEquip();
	    $gameTemp._autoTarget.actionID = toolID;
	    $gameTemp._autoTarget.enabled = true;
	} else {
		var rb = Math.randomInt(battler.length)
		var battler = battler[rb];
		if (battler) {this._user.autoTarget = battler};
	};
};

//==============================
// * is Required Cast
//==============================
Game_CharacterBase.prototype.isRequiredCast = function(toolID) {
	if (this._user.autoTarget) {return false};
	if (this.battler()._ras.cast.item) {return false};
	var action = $gameMap.toolEvent(toolID);
	if (!action) {return false};
	if (!action.item()) {return false};
	if (Math.abs(action.item().speed) === 0) {return false};
    return true;
};

//==============================
// * prepare Cast
//==============================
Game_CharacterBase.prototype.prepareCast = function(toolID) {
	var action = $gameMap.toolEvent(toolID);
	var item = action.item();
	if (!item) {return};
	var duration = Math.abs(item.speed)
	var actionID = action._tool.id;
	this.battler()._ras.cast.actionID = actionID;
	this.battler()._ras.cast.item = item;
	this.battler()._ras.cast.duration = duration;
	this.battler()._ras.cast.maxDuration = duration;
	this.battler()._ras.cast.animationID = action._tool.castAnimationID;
	var animation = $dataAnimations[this.battler()._ras.cast.animationID]
	if (animation) {
		this.battler()._ras.cast.animationMax = animation.frames.length * 4 + 1;
		this.battler()._ras.cast.animationDuration = 1;
	} else {

	    this.battler()._ras.cast.animationMax = 0;
		this.battler()._ras.cast.animationDuration = 0;
	};		
};

//==============================
// * Set Dead Enemy
//==============================
Game_CharacterBase.prototype.setDeadEnemy = function(char,battler) {
   this.setDeadSwitch(battler);
   this.setDeadVariable(battler);
   this.setDeadSelfSwitch(char,battler);
   this.makeTreasure(char,battler);
   this.prepareDeadSprite(char,battler);
   if (!char._user.treasure[0]) {
	   this.executeCollapse(char,battler)
   } else {;
      if ($gameSystem.isChronoMode()) {char.jump(0,0)};
   };
   char._chrono.deadChecked = true;
   char.battler().performCollapse();
   char._user.rotation = [0,0];
};

//==============================
// * Execute Collapse
//==============================
Game_CharacterBase.prototype.executeCollapse = function(char,battler) {
	char._user.collapse = [true,90];
};

//==============================
// * Dead Effect For Enemy
//==============================
Game_CharacterBase.prototype.makeTreasure = function(char,battler) {
	var treasures = battler.makeDropItems();
    if (treasures.length > 0) {
		var rt = Math.randomInt(treasures.length);
		var item = treasures[rt]
		char._user.treasure = [item,false,0,0,20];		
		char._characterName = 'treasurebattlertool'
		$gameMap._treasureEvents.push(char);
		char._user.collapse = [true,0];
	};
};

//==============================
// * prepare Dead Sprite
//==============================
Game_CharacterBase.prototype.prepareDeadSprite = function(char,battler) {
	char._through = true;
    char._pattern = 1;
    char._walkAnime = false;
    char._stepAnime = false;
	char._user.dead = true;
};

//==============================
// * set Dead Switch
//==============================
Game_CharacterBase.prototype.setDeadSwitch = function(battler) {
	for (var i = 0; i < battler._ras.deadSwitchID.length; i++) {
		var id = battler._ras.deadSwitchID[i];
		if (id) {
			$gameSwitches.setValue(id, true);			
		};
	};
};

//==============================
// * set Dead Variable
//==============================
Game_CharacterBase.prototype.setDeadVariable = function(battler) {
	for (var i = 0; i < battler._ras.deadVariableID.length; i++) {
		var variableId = battler._ras.deadVariableID[i];
		if (variableId) {
			var oldValue = $gameVariables.value(variableId);
			$gameVariables.setValue(variableId, oldValue + 1);			
		};
	};
};

//==============================
// * set Dead SelfSwitch
//==============================
Game_CharacterBase.prototype.setDeadSelfSwitch = function(char,battler) {
	if (battler._ras.deadSelfSwitchID) {
        var key = [char._mapId, char._eventId, battler._ras.deadSelfSwitchID];
        $gameSelfSwitches.setValue(key, true);
	};
};

//==============================
// * need Stop Character Update
//==============================
Game_CharacterBase.prototype.needStopCharacterUpdate = function() {
	if ($gameTemp._autoTarget.enabled && !$gameSystem.isChronoMode()) {return true};
	if (this.needStopNonChronoBattlers()) {return true};
	return false;
};

//==============================
// * Update
//==============================
var _mog_toolSystem_gCharBase_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function() {
	if (this.needStopCharacterUpdate()) {return};
	_mog_toolSystem_gCharBase_update.call(this);
	if (this._tool) {this.updateToolBasic()};
};

//==============================
// * Update Tool Basic
//==============================
Game_CharacterBase.prototype.updateToolBasic = function() {
	if (this._user.hookshotLock.tool) {this.updateHookShotLock()};
	if (this.battler()) {
		if (this.needUpdateAutoAction()) {this.updateAutoAction()};
		if ($gameSystem.isChronoMode()) {this.updateChrono()};
		if (!this._tool.enabled) {this.updateRasBattler()};
	};	
	if (this._user.treasure[4] > 0) {this._user.treasure[4]--};
};


//==============================
// * need Update Auto Action
//==============================
Game_CharacterBase.prototype.needUpdateAutoAction = function() {
	if (this._user.actionTimes[1] === 0) {return false};
	if (this._user.actionTimes[2] === 0) {return false};
	if (this._user.actionTimes[5] === 0) {return false};
	return true;	
};

//==============================
// * Update Auto Action
//==============================
Game_CharacterBase.prototype.updateAutoAction = function() {
    this._user.actionTimes[5]--;
	if (this._user.actionTimes[5] === 0) {this.executeActionTimes()};
};


//==============================
// * Update Tool shot Lock
//==============================
Game_CharacterBase.prototype.updateHookShotLock = function() {
	 var target = this._user.hookshotLock.tool;
	 this._moveSpeed = target._moveSpeed;
	 if (target._x != $gamePlayer._x || target._y != $gamePlayer._y) {
	     this._x = target._x;
	     this._y = target._y;
	 } else {
		 this._moveSpeed = this._user.hookshotLock.preMoveSpeed;
		 this._user.hookshotLock.preMoveSpeed = this._moveSpeed;
     	 this._user.hookshotLock.tool = null;		 
	 };
};

//==============================
// * Is Casting
//==============================
Game_CharacterBase.prototype.isCasting = function() {
	if (!this.battler()) {return false}
	if (this.battler()._ras.cast.duration > 0) {return true};
	return false;
};

//==============================
// * Update Ras Battler
//==============================
Game_CharacterBase.prototype.updateRasBattler = function() {
	this.battler()._ras.diagonal = this._user.diagonal;
	if (this.battler()._ras.poseDuration > 0) {this.updatePoseDuration()};
	if (this.battler()._ras.collisionD > 0) {this.battler()._ras.collisionD--};
	if (this.needUpdateKnockBack()) {
		this.updateKnockbackDuration();
	};	
	if (this.battler()._ras.combo.time > 0 && !this.isActing()) {
		this.battler()._ras.combo.time--;
	    if (this.battler()._ras.combo.time <= 0) {
			this.battler().clearRasCombo()};	
	};
  	if (this.battler()._ras.hookshotUser[1]) {this.updateHookshot()};
	if (this.battler().isCharging() && !this.isKnockbacking()) {this.updateCharging()};
	if (this.isCasting() && !$gameSystem._chronoMode.inTurn) {this.updateCasting()};
	if ($gameSystem.isChronoMode()) {this.updateChronoModeChar()}
};

//==============================
// * update Charging
//==============================
Game_CharacterBase.prototype.updateCharging = function() {
	if (!this.battler().isChargeMax()) {
	    this.battler()._ras.charge.time++;
		if (this.battler().isChargeMax()) {
		    SoundManager.playSoundMX(Moghunter.ras_ChargedSE);
		};
	};
	if (this.battler()._ras.charge.time >= this.battler()._ras.charge.maxtime) {
		this.battler()._ras.charge.time = this.battler()._ras.charge.maxtime; 
	};
};

//==============================
// * update Chrono Mode Char
//==============================
Game_CharacterBase.prototype.updateChronoModeChar = function() {
	if (!$gameSystem._chronoMode.inTurn) {
		this._stepAnime = this.canSpepAnimeCN();		
	};
};

//==============================
// * can Step Anime CN
//==============================
Game_CharacterBase.prototype.canSpepAnimeCN = function() {
    if (!this.battler().canMove()) {return false};
    return true;
};

//==============================
// * need Update Knockback
//==============================
Game_CharacterBase.prototype.needUpdateKnockBack = function() {
	 if (this.battler()._ras.knockback[1] === 0) {return false};
	 if ($gameSystem._chronoMode.inTurn) {return false};
	 if (this._user.hookshotLock.tool) {return false};
	 return true;
};
	
//==============================
// * update Casting
//==============================
Game_CharacterBase.prototype.updateCasting = function() {
	if (this.canUpdateCastTime()) {this.battler()._ras.cast.duration--};
	if (this.battler()._ras.cast.duration === 0) {
	    this.executeCast()	
	};	
	if (this.canUpdateCastAnimation()) {this.updateCastAnimation()};
};

//==============================
// * can Update Casting Time
//==============================
Game_CharacterBase.prototype.canUpdateCastTime = function() {
	 if (!$gameSystem.isChronoMode()) {return true};
	 if ($gameSystem._chronoMode.waitMode < 2) {
		 if ($gameSystem._chronoMode.waitMode === 0) {
			 if ($gameTemp._chronoCom.user) {return false}
		 };
		 if ($gameTemp._autoTarget.enabled) {return false};
		 if (!$gameTemp._autoTarget.enabled && $gameTemp._chronoCom.phase != 0) {return false};
	}; 
	return true;
};

//==============================
// * can Update Cast Animation
//==============================
Game_CharacterBase.prototype.canUpdateCastAnimation = function() {
    if (this.battler()._ras.cast.animationMax === 0) {return false};
	if (this.battler()._ras.cast.duration < this.battler()._ras.cast.animationMax) {return false};
	return true;
};
	
//==============================
// * can Update Cast Animation
//==============================
Game_CharacterBase.prototype.updateCastAnimation = function() {	
	this.battler()._ras.cast.animationDuration--;
	if (this.battler()._ras.cast.animationDuration <= 0) {
		this.battler()._ras.cast.animationDuration = this.battler()._ras.cast.animationMax;
		this.requestAnimation(this.battler()._ras.cast.animationID);
	};
};

//==============================
// * execute Cast
//==============================
Game_CharacterBase.prototype.executeCast = function() {
	 this.act(this.battler()._ras.cast.actionID);
     this.battler().clearRasCast();
};
		
//==============================
// * Update Knockback Duration
//==============================
Game_CharacterBase.prototype.updateKnockbackDuration = function() {
   this.battler()._ras.knockback[1]--;
   if (this.battler()._ras.knockback[1] === 0) {this.clearActing(false)};
};

//==============================
// * Update Hook Shot
//==============================
Game_CharacterBase.prototype.updateHookshot = function() {
	if (!this.isMoving()) {
		if (this.battler()._ras.tool) {
			this.battler()._ras.tool._tool.duration = 1;
			this.battler()._ras.tool._tool.waitD = false;
	    };
		this.battler()._ras.poseDuration = 1;
		this.battler()._ras.hookshotUser = [false,false,4,null];
  		this._moveSpeed = this.battler()._ras.hookshotUser[2];		
		$gameSystem._toolHookshotSprite = [null,null,0];		
	};
};

//==============================
// * Update Pose Duration
//==============================
Game_CharacterBase.prototype.updatePoseDuration = function() {
     this.battler()._ras.poseDuration--;
	 if (this.battler()._ras.poseDuration === 0) {this.clearActing()};
};

//==============================
// * Need Stop Pattern
//==============================
Game_CharacterBase.prototype.needStopPattern = function() {
	if (this.needStopPatternAction()) {return true};
	return false
};

//==============================
// * Need Stop Pattern Action
//==============================
Game_CharacterBase.prototype.needStopPatternAction = function() {
	if (!this.battler()) {return false};
	if (!this.isActing()) {return false};
	if (this.battler()._ras.poseLoop) {return false};
	if (Imported.MOG_CharPoses) {
		if (this._pattern < this._frames.max) {return false};
	} else {
	   if (this._pattern < this._user.poseMaxPattern) {return false};
	};
	return true
};

//==============================
// * update Pattern
//==============================
var _mog_toolSys_gcharBase_updatePattern = Game_CharacterBase.prototype.updatePattern;
Game_CharacterBase.prototype.updatePattern = function() {
	if (this.needStopPattern()) {return}
    _mog_toolSys_gcharBase_updatePattern.call(this);
};

//==============================
// * Shield
//==============================
Game_CharacterBase.prototype.shield = function(value) {
    if (!this.battler()) {return};
	this.battler()._ras.invunerable = value;
};

 //==============================
// * clear  PickUp Ras
//==============================
Game_CharacterBase.prototype.clearPickUpRas = function() {
   if (Imported.MOG_PickupThrow && this._pickup.enabled) {
		$gameMap.events().forEach(function(event) {
				 if (event._throw.enabled) {
					 event._throw.range = 1; 
					 this.throwEvent(event)			
					 event.clearThrow(1);
				 };
				 
	   }, this);	   
	   this._pickup.enabled = false;
	   this._pickup.wait = 15;
	   if (this._pickup.pose) {this._characterName = this._pickup.originalName};	   
   };
};

//=============================================================================
// ** Game Follower
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_toolSys_gfollower = Game_Follower.prototype.initialize;
Game_Follower.prototype.initialize = function(memberIndex) {
    _mog_toolSys_gfollower.call(this,memberIndex);
	this._user.isPlayer = true;
	this._user.isFollower = true;
	this._user.isLeader = false;	
};

//==============================
// * Refresh
//==============================
var _mog_toolSys_gfolower_refresh = Game_Follower.prototype.refresh;
Game_Follower.prototype.refresh = function() {
	_mog_toolSys_gfolower_refresh.call(this);
	this._user.battler = this.actor();
	if (this.battler()) {
	    this._user.diagonal = this.battler()._ras.diagonal;
		this.battler().refreshToolIds();
	};
};

//=============================================================================
// ** Game Player
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_toolSys_gplayer_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
	_mog_toolSys_gplayer_initMembers.call(this);
	this._toolEventStart = false;
	this._user.isPlayer = true;
	this._user.isFollower = false;
	this._user.isLeader = true;	
};

//==============================
// * Start Map Event
//==============================
Game_Player.prototype.startMapEvent = function(x, y, triggers, normal) {
	if ($gameSystem.isChronoMode()) {return};
    if (!$gameTemp._chaPosesEVRunning) {
        $gameMap.eventsXy(x, y).forEach(function(event) {
		    if (event.canStartMapEvent(triggers,normal)) {
				this._toolEventStart = true;
                event.start();
            };
        });
    };
};

//==============================
// * Refresh
//==============================
var _mog_toolSys_gplayer_refresh = Game_Player.prototype.refresh;
Game_Player.prototype.refresh = function() {
	_mog_toolSys_gplayer_refresh.call(this);
	this._user.battler = $gameParty.leader();
	if (this.battler()) {
	    this._user.diagonal = this.battler()._ras.diagonal;
		this.battler().refreshToolIds();
	};
};

//==============================
// * Update
//==============================
var _mog_toolSys_gplayer_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
	this._toolEventStart = false;
	_mog_toolSys_gplayer_update.call(this,sceneActive);
	if (this.battler() && !$gameSystem.isChronoMode()) {this.updateToolCommand()};
};

//==============================
// * Move By Input
//==============================
var _mog_toolSys_gPlayer_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	if (!this.canMoveABS() || $gameSystem.isChronoMode()) {return};
	_mog_toolSys_gPlayer_moveByInput.call(this);
};

//==============================
// * update Non moving
//==============================
var _mog_toolSys_gPlayer_updateNonmoving = Game_Player.prototype.updateNonmoving;
Game_Player.prototype.updateNonmoving = function(wasMoving) {
	if (!this.canMoveABS() || $gameSystem.isChronoMode()) {return};
	_mog_toolSys_gPlayer_updateNonmoving.call(this,wasMoving);
};

//==============================
// * is Command Tool Usable
//==============================
Game_Player.prototype.commandToolUsable = function() {
	if (!$gameSystem.isAbsMode()) {return false};
	if (this._toolEventStart) {return false};
	if (!this.canMoveABS()) {return false};
	if (Imported.MOG_PickupThrow) {
		if (this._pickup.enabled) {return false};
		if (this._pickup.wait > 0) {return false};
	};
	return true;
};

//==============================
// * is Command Tool Menu Usable
//==============================
Game_Player.prototype.isCommandToolMenuUsable = function() {
	if (!$gameSystem.isAbsMode()) {return false};
	if (this._toolEventStart) {return false};
	if (!this.canMoveABS()) {return false};	
	return true;
};

//==============================
// * command Tool Menu Item
//==============================
Game_Player.prototype.commandToolMenuItem = function() {	
	SoundManager.playOk();
	SceneManager.snapForBackground();
	SceneManager.push(Scene_ToolMenu);
};

//==============================
// * command Tool Menu Skill
//==============================
Game_Player.prototype.commandToolMenuSkill = function() {	
	SoundManager.playOk();
	SceneManager.snapForBackground();
	SceneManager.push(Scene_ToolSkill);
};

//==============================
// * prepare Combo 
//==============================
Game_Player.prototype.prepareCombo = function(actionID,type) {
	if (this.isComboAction(actionID,type)) {
		var tool = $gameMap.tool(actionID);
		this.battler()._ras.combo.id = tool.combo.id;
		this.battler()._ras.combo.time = tool.combo.time;
	} else {
		this.battler().clearRasCombo();
	};	
};

//==============================
// * command Rase Weapon
//==============================
Game_Player.prototype.isComboAction = function(actionID,type) {
     if (!$gameMap.toolIsExist(actionID)) {return false};
     var tool = $gameMap.tool(actionID);
     if (tool.combo.id === 0) {return false};
     if (tool.combo.type != type) {return false};
     return true;
};

//==============================
// * command Rase Weapon
//==============================
Game_Player.prototype.commandRasWeapon = function() {
	var actionID =  this.battler().toolWeaponID();
	if (this.battler()._ras.combo.id != 0) {
		if (this.battler()._ras.combo.type != 0) {
		    this.battler().clearRasCombo();
		   return	
		};
		var actionID = this.battler()._ras.combo.id
	};
	this.act(actionID)
    this.prepareCombo(actionID,0);
};

//==============================
// * command Rase Skill
//==============================
Game_Player.prototype.commandRasSkill = function() {
	var actionID =  this.battler().toolSkillID();
	if (this.battler()._ras.combo.id != 0) {
		if (this.battler()._ras.combo.type != 1) {
		    this.battler().clearRasCombo();
		   return	
		};
		var actionID = this.battler()._ras.combo.id
	};
	this.act(actionID);
	this.prepareCombo(actionID,1);
};

//==============================
// * command Rase Item
//==============================
Game_Player.prototype.commandRasItem = function() {
	var actionID = $gameSystem._toolActorMode ? this.battler().toolItemID() : $gameParty.tool_id();
	if (this.battler()._ras.combo.id != 0) {
		if (this.battler()._ras.combo.type != 2) {
		    this.battler().clearRasCombo();
		   return	
		};
		var actionID = this.battler()._ras.combo.id
	};
	this.act(actionID);
	this.prepareCombo(actionID,2);
};

//==============================
// * command Ras Guard
//==============================
Game_Player.prototype.commandRasGuard = function() {
    this.battler()._ras.guard.active = true;
	this.updateGuardDirection();
};

//==============================
// * command Ras Charge
//==============================
Game_Player.prototype.commandRasCharge = function() {
	var actionID =  this.battler()._ras.charge.id;
	this.act(actionID)
    this.prepareCombo(actionID,0);
};


//==============================
// * update Guard Direction
//==============================
Game_Player.prototype.updateGuardDirection = function() {
    if (Input.isPressed('down')) {
	    this.setDirection(2);
	} else if (Input.isPressed('up')) {
		this.setDirection(8);
	} else if (Input.isPressed('left')) {
		this.setDirection(4);
	} else if (Input.isPressed('right')) {
		this.setDirection(6);
	};	 
};

//==============================
// * command Attack Usable
//==============================
Game_Player.prototype.commandAttackUsable = function() {
	if (!$gameSystem._chronoCom.attack) {return false};
	if (Input.isTriggered(Moghunter.ras_buttonWeapon)) {return true};
    return false;	
};

//==============================
// * command Skill Usable
//==============================
Game_Player.prototype.commandSkillUsable = function() {
	if (!$gameSystem._chronoCom.skill) {return false};
	if (Input.isTriggered(Moghunter.ras_buttonSkill)) {return true};
    return false;		
};

//==============================
// * command Item Usable
//==============================
Game_Player.prototype.commandItemUsable = function() {
	if (!$gameSystem._chronoCom.item) {return false};
	if (Input.isTriggered(Moghunter.ras_buttonItem)) {return true};
    return false;			
};	

//==============================
// * command Guard Usable
//==============================
Game_Player.prototype.commandGuardUsable = function() {
	if (!$gameSystem.isAbsMode()) {return false};
	if (!this.guardIsUsable()) {return false};
	if (!$gameSystem._chronoCom.shield) {return false};
	if (Input.isPressed(Moghunter.ras_buttonGuard)) {return true};
    return false;
};

//==============================
// * command Charge Usable
//==============================
Game_Player.prototype.commandChargeUsable = function() {
	if (!$gameSystem._chronoCom.attack) {return false};
	if (this.battler()._ras.charge.id == 0) {return false};
	if (Input.isPressed(Moghunter.ras_buttonWeapon)) {return true};
    return false;	
};


//==============================
// * Update Tool Command
//==============================
Game_Player.prototype.updateToolCommand = function() {
	if (this.isCommandToolMenuUsable()) {
		if ($gameSystem._chronoCom.windowItem && Input.isTriggered(Moghunter.ras_buttonItemW)) {
			this.commandToolMenuItem ();
			return;
		} else if ($gameSystem._chronoCom.windowSkill && Input.isTriggered(Moghunter.ras_buttonSkillW)) {
			this.commandToolMenuSkill();
			return;			
		};
	};
	this.battler()._ras.guard.active = false;
	if (this.commandGuardUsable()) {
	    this.commandRasGuard();	
		this.battler()._ras.charge.time = 0;
		this.battler()._ras.charge.time2 = 0;
		this.battler()._ras.charge.charging = false;		
	} else if (this.commandToolUsable()) {
		if (this.commandAttackUsable()) {
			this.commandRasWeapon();
		} else if (this.commandChargeUsable()) {
			this.battler()._ras.charge.time2++;
			if (this.battler()._ras.charge.time2 > 5) {
				if (!this.battler()._ras.charge.charging) {
				   SoundManager.playSoundMX(Moghunter.ras_ChargingSE);
				};
			    this.battler()._ras.charge.charging = true;
				this.battler()._ras.charge.time2 = 6;
			};
			return;
		} else if (this.battler().isChargeMax()) {
			this.commandRasCharge();
			return
		} else if (this.commandItemUsable()) {
			this.commandRasItem();
		} else if (this.commandSkillUsable()) {
			this.commandRasSkill();
		};
		this.battler()._ras.charge.time = 0;
		this.battler()._ras.charge.time2 = 0;
		this.battler()._ras.charge.charging = false;		
	};
};
	
//==============================
// * Act
//==============================
var _mog_toolSys_gplayer_act = Game_Player.prototype.act;
Game_Player.prototype.act = function(toolID) {
	_mog_toolSys_gplayer_act.call(this,toolID);
if (Imported.MOG_PickupThrow) {$gamePlayer._pickup.wait = 2};
};

//==============================
// * can Call Menu
//==============================
Game_Player.prototype.canCallMenu = function() {
	if (!this.canActionBase()) {return false};
	return true;
};

//=============================================================================
// ** Game Event
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_toolSys_gevent_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
	_mog_toolSys_gevent_initMembers.call(this);
	this._user.isEvent = true;
};

//==============================
// * Setup Page
//==============================
var _mog_toolSys_gevent_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_mog_toolSys_gevent_setupPage.call(this);
	this._user.touchDamage = false;
    this.checkToolComments();
};

//==============================
// * Start
//==============================
var _mog_toolSys_gevent_start = Game_Event.prototype.start;
Game_Event.prototype.start = function() {
	if (this._user.toolCollision.length > 0 && this._trigger != 9) {return};
	_mog_toolSys_gevent_start.call(this);
};

//==============================
// * can Start Map Event
//==============================
Game_Event.prototype.canStartMapEvent = function(triggers,normal) {
	if (!this.isTriggerIn(triggers)) {return false};
	if (this.isNormalPriority() != normal) {return false};
	if (this.battler()) {
		if (!this._tool.enabled) {return false};
		if (!this._tool.eventInt) {return false}; 
	};
	if (this._user.toolCollision.length > 0 ) {return false};
	return true;
};

//==============================
// * check Tool Comments
//==============================
Game_Event.prototype.checkToolComments = function() {
	this._user.touchDamage = false;
	this._user.toolCollision = [];
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
	       if (l.code === 108) {var comment = l.parameters[0].split(' : ')
		        
				if (comment[0].toLowerCase() == "collision_id"){
		            this._user.toolCollision.push(Number(comment[1]))
				};
				if (!this._tool.enabled && comment[0].toLowerCase() == "collision_hookshot"){
				    this._user.hookshotEvent = true;
				};
				if (!this._tool.enabled && comment[0].toLowerCase() == "walk_nearby"){
					var r = comment[1] ? Number(comment[1]) : 2;
					var x = comment[2] ? Number(comment[2]) : this._x;
					var y = comment[3] ? Number(comment[3]) : this._y;
				    this.setWalkAround(r,x,y);
				};	
				if (!this._tool.enabled && comment[0].toLowerCase() == "battle_sensor") {
	                this._chrono.battleRange = Number(comment[1]);
				};
				if (comment[0].toLowerCase() == "enemy_id"){
					var enemyId = Number(comment[1]);
					if ($dataEnemies[enemyId]) {
				       if (!this._user.battler) {this._user.battler = new Game_Enemy(enemyId, 0, 0)};
					   if (this._poses) {
						   this._poses.enabled = true
					   };
					};
				};				
		   };
	}, this);};
};

//==============================
// * update Self Movement
//==============================
var _mog_toolSys_gevent_updateSelfMovement = Game_Event.prototype.updateSelfMovement;
Game_Event.prototype.updateSelfMovement = function() {
	if (this.needStopSelfMovement()) {return};
	_mog_toolSys_gevent_updateSelfMovement.call(this);	
};

//==============================
// * needStopSelfMovement
//==============================
Game_Event.prototype.needStopSelfMovement = function() {
	if (this._tool.enabled) {return false};
	if (this._user.treasure[0]) {return true};	
	if (this._chrono.escaped) {return true};
	if (!this.canMoveABS()) {return true};
	if (this.battler() && $gameSystem.isChronoMode()) {
		 if ($gameSystem._chronoMode.inTurn) {return true};
	     if ($gameSystem._chronoMode.phase != 3) {return true};
		 if ($gameSystem._chronoMode.waitMode < 2) {
			if ($gameSystem._chronoMode.waitMode === 0 && $gameTemp._chronoCom.user) {return true};
			if ($gameTemp._autoTarget.enabled) {return true};
		 };		 
		 
	}; 
	return false
};

//==============================
// * move Type Ramdom
//==============================
var _mog_chrono_gevent_moveTypeRandom = Game_Event.prototype.moveTypeRandom;
Game_Event.prototype.moveTypeRandom = function() {
	if (this.needMoveTowardPlayerCR()) {this.moveTypeTowardPlayer();return};
	if (this.needWalkAround()) {this.walkAround();return};
	_mog_chrono_gevent_moveTypeRandom.call(this);
};

//==============================
// * need Move Toward Player
//==============================
Game_Event.prototype.needMoveTowardPlayerCR = function() {
	if (!$gameSystem.isChronoMode()) {return false};
    if (this._tool.enabled) {return false};
    if (!this.battler()) {return false};
	if (this.battler().isDead()) {return false};
	var disX = Math.abs($gamePlayer._x - this._x);
	var disY = Math.abs($gamePlayer._y - this._y);
	if (disX >= 4) {return true};
	if (disY >= 4) {return true};
    return false;
};

//==============================
// * update Parallel
//==============================
var _mog_toolSys_gevent_updateParallel = Game_Event.prototype.updateParallel;
Game_Event.prototype.updateParallel = function() {
	if (!this.canMoveABS()) {return};
	_mog_toolSys_gevent_updateParallel.call(this);
};

//==============================
// * check Event Trigger Touch
//==============================
var _mog_toolSys_gevent_checkEventTriggerTouch = Game_Event.prototype.checkEventTriggerTouch
Game_Event.prototype.checkEventTriggerTouch = function(x, y) {
	if ($gameSystem.isChronoMode()) {return};
	if (!this.canMoveABS()) {return};
	_mog_toolSys_gevent_checkEventTriggerTouch.call(this,x, y);
};

//==============================
// * update
//==============================
var _mog_ras_gEvent_update = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
	_mog_ras_gEvent_update.call(this);
    if (this.battler()) {this.updateRasEvent()};
};

//==============================
// * check Envent Trigger Auto
//==============================
var _mog_chrono_gevnt_checkEventTriggerAuto = Game_Event.prototype.checkEventTriggerAuto;
Game_Event.prototype.checkEventTriggerAuto = function() {
	if (!this.canStartEventAutoCN()) {return};
	_mog_chrono_gevnt_checkEventTriggerAuto.call(this);
};

//==============================
// * can Start Event Auto CN
//==============================
Game_Event.prototype.canStartEventAutoCN = function() {
   if (this._tool.active) {return true};
   if ($gameSystem.isChronoMode()) {return false};
   return true
};

//==============================
// * Touch Damage
//==============================
Game_Event.prototype.touchDamage = function(value) {
	 this._user.touchDamage = String(value) == "true" ? true : false;
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * can Call Menu Tool
//==============================
Scene_Map.prototype.canCallMenuTool = function() {
	if ($gameSystem.isChronoMode()) {return false};
    if (!$gamePlayer.canCallMenu()) {return false}; 
	return true;
};

//==============================
// * update Call Menu
//==============================
var _mog_toolSys_ScnMap_updateCallMenu = Scene_Map.prototype.updateCallMenu;
Scene_Map.prototype.updateCallMenu = function() {
	if ($gameTemp._autoTarget.pressMenu > 0) {
		$gameTemp._autoTarget.pressMenu--;
	};
	if (!this.canCallMenuTool()) {return};
	_mog_toolSys_ScnMap_updateCallMenu.call(this);
};

//=============================================================================
// ** Game_Followers
//=============================================================================

//==============================
// * Update Move
//==============================
var _mog_chrono_gfollowers_updateMove = Game_Followers.prototype.updateMove;
Game_Followers.prototype.updateMove = function() {
	if ($gameSystem.isChronoMode()) {return};
	_mog_chrono_gfollowers_updateMove.call(this);
};

//==============================
// * Jump All
//==============================
var _mog_chrono_gfollower_jumpAll = Game_Followers.prototype.jumpAll;
Game_Followers.prototype.jumpAll = function() {
	if ($gameSystem.isChronoMode()) {return};
	_mog_chrono_gfollower_jumpAll.call(this);
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * create Spriteset
//==============================
var _mog_chrono_scmap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_chrono_scmap_createSpriteset.call(this);
	$gameChrono.setSpriteset(this._spriteset);
};

//==============================
// * check Game Over
//==============================
var _mog_chrono_scmap_checkGameover = Scene_Base.prototype.checkGameover;
Scene_Base.prototype.checkGameover = function() {
	if ($gameSystem.isChronoMode()) {return false};
	_mog_chrono_scmap_checkGameover.call(this);
};

//=============================================================================
// ** Game Chrono
//=============================================================================
function Game_Chrono() {
    this.initialize.apply(this, arguments);
};

//==============================
// * Initialize
//==============================
Game_Chrono.prototype.initialize = function() {
	this._spriteset = null;
};

//==============================
// * set Spriteset
//==============================
Game_Chrono.prototype.setSpriteset = function(spriteset) {
	this._spriteset = spriteset;
};

//==============================
// * cursor
//==============================
Game_Chrono.prototype.cursor = function() {
	return this._spriteset.toolCursor;
};

//==============================
// * win
//==============================
Game_Chrono.prototype.win = function() {
	if (!this._spriteset) {return null};
	return this._spriteset._chronoWindow;
};

//==============================
// * prepare Chrono Battle
//==============================
Game_Chrono.prototype.prepareChronoBattle = function() {
	$gameSystem._chronoMode.phase = 1;
	$gameSystem._rasMode = 1;
	$gameSystem._chronoMode.needCreateSprites = true;
	$gameSystem._chronoMode.needCreateHuds = true;
	$gameSystem._chronoMode.battlerActive = null;
	this.clearBaseParameters()	
	$gameSystem.onBattleStart();
	$gameParty.onBattleStart();
	$gameTroop.onBattleStart();	
	BattleManager.saveBgmAndBgs();
	if (!AudioManager.isCurrentBgm($gameSystem.battleBgm())) {
	   	 AudioManager.fadeOutBgm(4);
	};
	AudioManager.fadeOutBgs(2);
	AudioManager.fadeOutMe(2);        		
	this.prepareInitialATB();
	this.setInitialActorsPositionChrono();	
	$gameSystem._chronoMode.phaseDuration = 90;
};

//==============================
// * clear Base Parameters
//==============================
Game_Chrono.prototype.clearBaseParameters = function() {
	$gameTemp.clearChronoCommand();
	$gameSystem.clearChronoEscape();
	$gameTemp._chrono.exp = 0;
	$gameTemp._chrono.gold = 0;	
	$gameTemp._chrono.victory = [false,false,0];
	$gameTemp._chrono.phase = [true,0,-1];
	$gameMap.clearToolsOnMap();
	$gameMap.clearBattlersOnMap();
};			

//==============================
// * Battle Start Chrono
//==============================
Game_Chrono.prototype.battleStartChrono = function() {
	BattleManager.playBattleBgm();
	$gameSystem._chronoMode.phase = 3;
	for (var i = 0; i < $gameMap.players().length; i++) {
	    var character = $gameMap.players()[i];
		if (character._chrono.dir > 0) {
		    character.setDirection(character._chrono.dir);
		} else {
		  //  character.turnTowardCharacter(character._chrono.target);
		};
		character._chrono.nextX = null;	
		character._chrono.nextY = null;	
		character._moveSpeed = character._chrono.premapMoveSpeed;
		if (character._user.isPlayer) {$gamePlayer._moveSpeed = $gamePlayer._chrono.premapMoveSpeed};
		character._chrono.orgX = this._x;
		character._chrono.orgY = this._y;
		character.actionTimesClear();
		character._chrono.dir = -1;
	};
	$gameTemp._chrono.phase[0] = false;
	$gameTemp._chrono.phase[1] = 0;
	this.recordCharacterParameters();
};

//==============================
// * phase
//==============================
Game_Chrono.prototype.phase = function() {
    return $gameSystem._chronoMode.phase
};

//==============================
// * is Battle Active
//==============================
Game_Chrono.prototype.isBattleActive = function() {
	if ($gameSystem._chronoMode.phase != 3) {return false};
	if ($gameSystem._chronoMode.phaseDuration > 0) {return false};
	return true
};

//==============================
// * Set First Target
//==============================
Game_Chrono.prototype.setFirstTarget = function(char) {
	var ftarget = $gameMap.enemiesF()[0];
	var sx = char._x;
	var sy = char._y;
	var d = 99999;
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
		var tg = $gameMap.enemiesF()[i];
		tg.saveOrgParameters();
		tg.actionTimesClear();
		var rx = Math.abs(sx - tg._x);
		var ry = Math.abs(sy - tg._y);
		var dt = Math.abs(rx + ry);
		if (tg && dt < d) {
			ftarget = tg;
			d = dt;
		};
	};
	return ftarget; 
};

//==============================
// * Set Initial Actors Pos
//==============================
Game_Chrono.prototype.setInitialActorsPositionChrono = function() {
	for (var i = 0; i < $gameMap.players().length; i++) {
		 var character = $gameMap.players()[i];
		 var ftarget = this.setFirstTarget(character);
		     if (character.battler().isDead()) {character.battler().setHp(1)};
			 character.battler()._chrono.index = i;
			 character._chrono.premapMoveSpeed = character._moveSpeed;
			 character._chrono.target = ftarget;
			 character._chrono.premapD = character._direction;
			 character._chrono.premapX = character._x;
			 character._chrono.premapY = character._y;
			 character._stepAnime = true;
			 if (i > 0) {this.setInitialFollowerPositionChrono(i,character)};
			 if (character._chrono.posX >= 0) {
				 character._chrono.nextX = character._chrono.posX
			     character._chrono.posX = -1;
			 };;
			 if (character._chrono.posY >= 0) {
				 character._chrono.nextY = character._chrono.posY
			     character._chrono.posY = -1;
			 };;
			 character._chrono.orgX = character._x;
			 character._chrono.orgY = character._y;		 
			 character.turnTowardCharacter(character._chrono.target);
	};
};

//==============================
// * Set Initial Follower Pos
//==============================
Game_Chrono.prototype.setInitialFollowerPositionChrono = function(index,character) {
	if ($gamePlayer.direction() === 2 || $gamePlayer.direction() === 8) {
		character._chrono.nextY = $gamePlayer.direction() === 2 ? $gamePlayer._y + 1 : $gamePlayer._y - 1;		
		if (index === 1) {
			character._chrono.nextX = $gamePlayer.direction() === 2 ? $gamePlayer._x - 2 : $gamePlayer._x + 2;
		} else if (index === 2) {
			character._chrono.nextX = $gamePlayer.direction() === 2 ? $gamePlayer._x + 2 : $gamePlayer._x - 2;
		} else if (index === 3) {
			character._chrono.nextY = $gamePlayer.direction() === 2 ? $gamePlayer._y - 2 : $gamePlayer._y + 2;		
			character._chrono.nextX = $gamePlayer._x;
		} else {
			character._chrono.nextY = $gamePlayer.direction() === 2 ? $gamePlayer._y - index : $gamePlayer._y + index;		
			character._chrono.nextX = $gamePlayer._x;
		};		
	} else {
		character._chrono.nextX = $gamePlayer.direction() === 4 ? $gamePlayer._x - 1 : $gamePlayer._x + 1;
		if (index === 1) {
			character._chrono.nextY = $gamePlayer.direction() === 4 ? $gamePlayer._y + 2 : $gamePlayer._y - 2;	
		} else if (index === 2) {
			character._chrono.nextY = $gamePlayer.direction() === 4 ? $gamePlayer._y - 2 : $gamePlayer._y + 2;
		} else if (index === 3) {
			character._chrono.nextX = $gamePlayer.direction() === 4 ? $gamePlayer._x + 2 : $gamePlayer._x - 2;
			character._chrono.nextY = $gamePlayer._y;				
		} else {
			character._chrono.nextX = $gamePlayer.direction() === 4 ? $gamePlayer._x + index : $gamePlayer._x - index;
			character._chrono.nextY = $gamePlayer._y;	
		};		
	};
};

//==============================
// * Update Phase
//==============================
Game_Chrono.prototype.updatePhase = function() {
	$gameSystem._chronoMode.phaseDuration--;
	if ($gameSystem._chronoMode.phaseDuration > 0) {return};
	if ($gameSystem._chronoMode.phase === 1) {
		this.battleStartChrono()
	} else if ($gameSystem._chronoMode.phase === 4) {
		this.executeVictory();	
	} else if ($gameSystem._chronoMode.phase === 6) {
		this.executeGameOver();	
	} else if ($gameSystem._chronoMode.phase === 10) {
		this.endChronoSystem();				
	};
};

//==============================
// * check Battle Result
//==============================
Game_Chrono.prototype.checkBattleResult = function() {
	var clearParameters = false
	if (this.isAllPartyDead()) {
		$gameSystem._chronoMode.phase = 6;
		this.clearCommandPhase();
		$gameSystem.clearChronoEscape();
		AudioManager.fadeOutBgm(3);
		$gameSystem._chronoMode.phaseDuration = 120;
		$gameSystem._chronoMode.phaseEndPhaseDuration = 120;
		clearParameters = true;
	} else if (this.isAllEnemiesDead()) {
		$gameSystem._chronoMode.phase = 4;
		this.clearCommandPhase();
		$gameSystem.clearChronoEscape();
	    AudioManager.fadeOutBgm(3);
		$gameSystem._chronoMode.phaseDuration = 120;
		$gameSystem._chronoMode.phaseEndPhaseDuration = 120;
		clearParameters = true;
	};
	if (clearParameters) {this.forceClearBaseParameters()}
};

//==============================
// * execute GameOver
//==============================
Game_Chrono.prototype.executeGameOver = function() {
     AudioManager.playMe($gameSystem.defeatMe());
	 SceneManager.goto(Scene_Gameover);
};

//==============================
// * prepare Escape
//==============================
Game_Chrono.prototype.prepareEscape = function() {
	 $gameSystem._chronoEscape.enabled = true;
	 $gameSystem._chronoEscape.phase = 0;
	 $gameSystem._chronoMode.phase = 7;
	 $gameSystem._chronoMode.phaseEndPhaseDuration = 120;
	 if (this.actor()) {this.actor().atbClearCN()};
	 $gameTemp.clearChronoCommand();
	 this.forceClearBaseParameters();
};

//==============================
// * execute Escape
//==============================
Game_Chrono.prototype.executeEscape = function() {
	if (this.actor()) {this.actor().atbClearCN()};
	$gameTemp.clearChronoCommand();
    SoundManager.playEscape();
    $gameTemp._chrono.phase[0] = true;
	$gameTemp._chrono.phase[1] = 2;
	$gameSystem._chronoEscape.phase = 1;
	$gameSystem._chronoMode.phaseDuration = 90;
	this.prepareEscapeEnemies();
};

//==============================
// * need Update Escape Phase
//==============================
Game_Chrono.prototype.needUpdateEscapePhase = function() {
	if (!this.escape().enabled) {return false};
	if ($gameSystem._chronoMode.phase != 7) {return false};
	return true;
};

//==============================
// * update Escape Phase
//==============================
Game_Chrono.prototype.updateEscapePhase = function() {
   if ($gameSystem._chronoEscape.phase === 0) {
	   this.executeEscape();
   } else if ($gameSystem._chronoEscape.phase === 1) {
	   $gameTemp._chrono.phase[0] = false;
	   $gameTemp._chrono.phase[1] = 2;
	   $gameSystem._chronoEscape.phase = 2;
	   $gameSystem._chronoMode.phaseDuration = 90;
	   AudioManager.fadeOutMe(1);	   
   } else if ($gameSystem._chronoEscape.phase === 2) {
	   $gameSystem._chronoEscape.phase = 3;
	   $gameSystem.onBattleEscape();
       this.preEndChronoSystem();	
   };
};

//==============================
// * prepare Escape Enemies
//==============================
Game_Chrono.prototype.prepareEscapeEnemies = function() {
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
	     var char = $gameMap.enemiesF()[i];
		 char._chrono.escaped = true;
		 char._through = true;
		 char._walkAnime = false;
		 char._stepAnime = false;			 
	};
};

//==============================
// * execute Victory
//==============================
Game_Chrono.prototype.executeVictory = function() {
	$gameSystem._chronoMode.phase = 5;
    $gameTemp._chrono.phase[0] = true;
	$gameTemp._chrono.phase[1] = 1;	
	$gameSystem._chronoMode.phaseDuration = 90;
};

//==============================
// * update Victory
//==============================
Game_Chrono.prototype.updateVictory = function() {
    $gameTemp._chrono.phase[0] = false;
	$gameTemp._chrono.phase[1] = 1;	
	if ($gameTemp._chrono.victory[2] === 0) {
		$gameTemp._chrono.victory[2] = 1;
		$gameTemp._chrono.victory[0] = true;
		$gameTemp._chrono.victory[1] = true;
		$gameSystem._chronoMode.phaseDuration = 30;
		AudioManager.playMe($gameSystem.victoryMe());
		$gameTemp._chrono.exp = this.resultExp();
		$gameTemp._chrono.gold = this.resultGold();		
	} else if ($gameTemp._chrono.victory[2] === 1) {
		if (Input.isTriggered('ok') || TouchInput.isTriggered()) {
			this.gainGoldExp();
			$gameTemp._chrono.victory[2] = 2;
			$gameTemp._chrono.victory[0] = false;
			$gameSystem._chronoMode.phaseDuration = 45;	
			SoundManager.playCursor();
			BattleManager.replayBgmAndBgs();
		};
	} else if ($gameTemp._chrono.victory[2] === 2) {
		AudioManager.fadeOutMe(1);
		$gameSystem.onBattleWin();
		this.preEndChronoSystem();			
	};
};

//==============================
// * result Exp
//==============================
Game_Chrono.prototype.resultExp = function() {
	var exp = 0;
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
		var enemy = $gameMap.enemiesF()[i].battler();
		exp += enemy.exp();
	};	
	return exp;
};

//==============================
// * result Gold
//==============================
Game_Chrono.prototype.resultGold = function() {
	var gold = 0;
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
		var enemy = $gameMap.enemiesF()[i].battler();
		gold += enemy.gold();
	};	
	return gold;
};

//==============================
// * gain Gold Exp
//==============================
Game_Chrono.prototype.gainGoldExp = function() {
    for (var i = 0; i < $gameMap.players().length; i++) {
		var char = $gameMap.players()[i];
		var battler = char.battler();
		var oldLevel = battler._level;
		battler.gainExpCN(this.resultExp());
		if (battler._level > oldLevel) {
			char.requestAnimation(Number(Moghunter.ras_levelAnimationID));		
		};		
	};
	$gameParty.gainGold(this.resultGold());
};

//==============================
// * pre End Chrono System
//==============================
Game_Chrono.prototype.preEndChronoSystem = function() {
 	for (var i = 0; i < $gameMap.players().length; i++) {
		 var char = $gameMap.players()[i];
	     var battler = char.battler();
		 battler.atbClearCN();
		 battler.clearActing(true);
		 if (battler.isDead()) {battler.setHp(1)};
		 char.loadOrgParameters(true);
	     char._chrono.nextX = char._chrono.premapX;	
		 char._chrono.nextY = char._chrono.premapY;
	};
	$gameMap.clearToolsOnMap();
	$gameParty.removeBattleStates();
	AudioManager.stopMe();
	BattleManager.replayBgmAndBgs();
	$gameSystem._chronoMode.needRemoveSprites = true;
	$gameSystem._chronoMode.needRemovehHuds = true;
	if ($gameMap.players().length === 1) {
	    $gameSystem._chronoMode.phase = 10;
		$gameSystem._chronoMode.phaseDuration = 5;
    };	
};

//==============================
// * end Chrono System
//==============================
Game_Chrono.prototype.endChronoSystem = function() {
 	for (var i = 0; i < $gameMap.players().length; i++) {
		 var char = $gameMap.players()[i];	
	     char.nextX = null;
		 char.nextY = null;
		 char._chrono.dirF = false;
		 char._stepAnime = false;
	};
	BattleManager.replayBgmAndBgs();
	$gamePlayer._through = false;
	$gameSystem._chronoMode.phase = 0;
	$gameSystem._rasMode = 0;
	$gameSystem._chronoMode.inTurn = false;
	$gameSystem._chronoMode.inTurnBattler = null;
	$gameParty.onBattleEnd();
	$gameTroop.onBattleEnd();
	$gameTemp._chrono.moveWait = 2;
    this.clearBaseParameters();	
};

//==============================
// * record Battle Parameters
//==============================
Game_Chrono.prototype.recordCharacterParameters = function() {
	for (var i = 0; i < $gameMap.players().length; i++) {
	     var character = $gameMap.players()[i];
		 character.saveOrgParameters();
		 character.battler()._chrono.deadTurn = character.battler().isDead();
	};
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
	     var character = $gameMap.enemiesF()[i];
		 character.saveOrgParameters();
		 character.battler()._chrono.deadTurn = character.battler().isDead();
	};	
};

//==============================
// * load Battle Parameters
//==============================
Game_Chrono.prototype.loadCharacterParameters = function(direction) {
	for (var i = 0; i < $gameMap.players().length; i++) {
	     var character = $gameMap.players()[i];
		 var oldX = character._x;
		 var oldY = character._y;
		 character.loadOrgParameters(direction);
		 if (oldX != character._x || oldY != character._y || character.isMoving()) {
		    character.jump(0,0)	 
		 };		 
	};
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
	     var character = $gameMap.enemiesF()[i];
		 var oldX = character._x;
		 var oldY = character._y;	 
		 if (!character.battler().isDead()) {
			 var mov = character.isMoving()
			 character.loadOrgParameters(direction);
			 if (character.isMoving() && !mov) {
				character.jump(0,0)	 
			 };					 
		 };
	};	
};

//==============================
// * force Clear Base Parameters
//==============================
Game_Chrono.prototype.forceClearBaseParameters = function() {
	for (var i = 0; i < $gameMap.players().length; i++) {
	     var character = $gameMap.players()[i];
		 character.clearActing();
		 character.battler().clearRasCast();	
		 character.battler().removeBattleStates();
		 character.battler().removeAllBuffs();
	};
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
	     var character = $gameMap.enemiesF()[i];
		 character.clearActing();
		 character.battler().clearRasCast();	
		 character.battler().removeBattleStates();
		 character.battler().removeAllBuffs();	    
	};		
};

//==============================
// * force Restore Position
//==============================
Game_Chrono.prototype.forceRestorePosition = function() {
};

//==============================
// * is All Enemies Dead
//==============================
Game_Chrono.prototype.executeDeadEffect = function() {
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
	     var char = $gameMap.enemiesF()[i];
		 if (char.battler().isDead() && !char._chrono.deadChecked) {
			 if ($gameSystem._chronoMode.phase === 3) {
			    if (Imported.MOG_BossHP && char.battler()._bosshp_meter) {this.checkBossHp()};
			 };
			 char.setDeadEnemy(char,char.battler());
		 };
	};
};

//==============================
// * check Boss HP
//==============================
Game_Chrono.prototype.checkBossHp = function() {
	var enemies = $gameSystem.isChronoMode() ? $gameMap.enemiesF() : $gameMap.allEnemiesOnMap()
    for (var i = 0; i < enemies.length; i++) {
	     var ev = enemies[i];
		 var battler = ev.battler();;
		 if (battler._bosshp_meter) {
			 $gameSystem._chronoBossEnemy = battler;
			 $gameTemp._battler_bhp_refresh = true;
			 break
		 };
	};
};

//==============================
// * is All Party Dead
//==============================
Game_Chrono.prototype.isAllPartyDead = function() {
	var dead = true;
	for (var i = 0; i < $gameMap.players().length; i++) {
	     var battler = $gameMap.players()[i].battler();
		 if (!battler.isDead()) {dead = false};
	};
	return dead;
};

//==============================
// * is All Enemies Dead
//==============================
Game_Chrono.prototype.isAllEnemiesDead = function() {
	var dead = true;
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
	     var battler = $gameMap.enemiesF()[i].battler();
		 if (!battler.isDead()) {dead = false};
	};
	return dead;
};

//==============================
// * update
//==============================
Game_Chrono.prototype.update = function() {
	this.updateBasic();
	if (this.isBattleActive()) {this.updateBattle()};
	if ($gameSystem._chronoMode.phaseDuration > 0) {
		this.updatePhase()
	} else {
		if (!$gameSystem._chronoMode.inTurn) {
			if ($gameSystem._chronoMode.phase === 5) {
				this.updateVictory();
			} else if (this.needUpdateEscapePhase()) {
				this.updateEscapePhase();
			};
		};
	};;
};

//==============================
// * update Battle
//==============================
Game_Chrono.prototype.updateBattle = function() {
 	this.updateCommands();	
	for (var i = 0; i < $gameMap._battlersOnScreen.length; i++) {
		 if (this.canUpdateATB()) {
		    this.updateChronoATB($gameMap._battlersOnScreen[i].battler(),$gameMap._battlersOnScreen[i]);
		 };
		 this.updateChronoTurn($gameMap._battlersOnScreen[i],$gameMap._battlersOnScreen[i].battler());
	};
};

//==============================
// * can Update ATB
//==============================
Game_Chrono.prototype.canUpdateATB = function() {
    if (this.escape().enabled) {return false}; 
	if ($gameSystem._chronoMode.waitMode < 2) {
		if ($gameSystem._chronoMode.waitMode === 0) {
			if ($gameTemp._chronoCom.user) {return false}
		};
		if ($gameTemp._autoTarget.enabled) {return false};
		if (!$gameTemp._autoTarget.enabled && $gameTemp._chronoCom.phase != 0) {return false};
	};
    return true;
};

//==============================
// * Update Basic
//==============================
Game_Chrono.prototype.updateBasic = function() {
	if ($gameSystem._chronoMode.waitD > 0) {$gameSystem._chronoMode.waitD--};
	if ($gameTemp._chrono.buttonLag > 0) {$gameTemp._chrono.buttonLag--};
	if ($gameTemp._chrono.clearCommadPhase) {this.clearCommandPhase()};
	if ($gameSystem._chronoMode.phaseEndPhaseDuration > 0) {
		$gameSystem._chronoMode.phaseEndPhaseDuration--; 
	};
	if (!this.escape().enabled && !this.isMaxEscapeTime() && !this.inTurn()) {
		 $gameSystem._chronoEscape.time--;
		 if ($gameSystem._chronoEscape.time < 0) {
		     $gameSystem._chronoEscape.time = 0;
		 };
	};
};

//==============================
// * clear Command Phase
//==============================
Game_Chrono.prototype.clearCommandPhase = function() {
	$gameTemp._chrono.clearCommadPhase = false;
   	this.win()._itemWindow.hide();
	this.win()._itemWindow.deactivate();
	this.win()._itemWindow.select(0);
	this.win()._skillWindow.hide();
	this.win()._skillWindow.deactivate();
	this.win()._skillWindow.select(0);
	$gameTemp.clearChronoCommand();
	$gameTemp.clearToolCursor();
};

//==============================
// * all Battlers
//==============================
Game_Chrono.prototype.allBattlers = function() {
	return $gameMap.players() + $gameMap.enemiesF()
};

//==============================
// * prepare Initial ATB
//==============================
Game_Chrono.prototype.prepareInitialATB = function() {
	for (var i = 0; i < $gameMap.players().length; i++) {
		 var battler = $gameMap.players()[i].battler();
		 if (battler) {
			 battler.atbClearCN();
			 battler.clearRasCast();		 
			 var randPer = Math.randomInt(50);
			 var perc = battler._chrono.maxAtb * randPer / 100;
			 battler._chrono.atb = perc;
		 };
	};
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
		 var battler = $gameMap.enemiesF()[i].battler();
		 if (battler) {
			 battler.atbClearCN();
			 battler.clearRasCast();		 
			 var randPer = Math.randomInt(50);
			 var perc = battler._chrono.maxAtb * randPer / 100;
			 battler._chrono.atb = perc;
		 };
	};	
};

//==============================
// * update Chrono Turn
//==============================
Game_Chrono.prototype.updateChronoTurn = function(char,battler) {
	if (this.needUpdateTurnCN(char,battler)) {this.updateTurnPhaseCN(char,battler)};	
};

//==============================
// * need Update Turn CN
//==============================
Game_Chrono.prototype.needUpdateTurnCN = function(char,battler) {
	if (!$gameSystem._chronoMode.inTurn) {return false};
	if ($gameTemp._chaPosesEVRunning) {return false};
	if (!battler._chrono.action) {return false};
	if (!battler._chrono.inAction) {return false};	
	if (char.isCasting()) {return false};
	return true;
};

//==============================
// * update Turn Phase CN
//==============================
Game_Chrono.prototype.updateTurnPhaseCN = function(char,battler) {
   if (battler._chrono.actionPhase === 0) {
	   this.prepareMoveToTargetCN(char,battler);
   } else if (battler._chrono.actionPhase === 1) {
	   this.updateMoveToTargetCN(char,battler);
   } else if (battler._chrono.actionPhase === 2) { 
      this.updateBeforeActionCN(char,battler);   
   } else if (battler._chrono.actionPhase === 3) {  
	  this.updateExecuteActionCN(char,battler);
   } else if (battler._chrono.actionPhase === 4) { 
	  this.updateWaitActionCN(char,battler);	  
   } else if (battler._chrono.actionPhase === 5) {
	   this.prepareMoveBackCN(char,battler);
   } else if (battler._chrono.actionPhase === 6) { 
	  this.updateMoveBackCN(char,battler);	
   } else if (battler._chrono.actionPhase === 7) {  
	  this.turnEndCN(char,battler);	
   };
};

//==============================
// * make Targets CN
//==============================
Game_Chrono.prototype.makeTargetsCN = function(battler,item) {
   var actionID = battler.checkActionID(item);
   var aliveTargets = [];
   var deadTargets = [];
   var sDead = [9, 10];
   var sAllies = [7, 8];
   var sOff = [1,2,3,4,5,6];
   var scope = item.scope;			
   var fDead = sDead.contains(scope) ? true : false; 
   var fOff = sOff.contains(scope) ? true : false;  
   var fAllies = sAllies.contains(scope) ? true : false;  
    
   var enemiesAlive = [];
   var enemiesDead = [];
   var alliesAlive = [];
   var alliesDead = [];	
   var enemies = battler.isActor() ? $gameMap.enemiesF() : $gameMap.players();
   var allies = battler.isActor() ? $gameMap.players() : $gameMap.enemiesF();
   for (var i = 0; i < enemies.length; i++) {
		if (!enemies[i].battler().isDead()) {
			enemiesAlive.push(enemies[i]);
		} else {
			enemiesDead.push(enemies[i]);
		};
	};	
	for (var i = 0; i < allies.length; i++) {
		if (!allies[i].battler().isDead()) {
			alliesAlive.push(allies[i]);
		} else {
			alliesDead.push(allies[i]);
		};
   };
   var target = battler._chrono.targets[battler._chrono.actionTimes];
   if (target) {
	   if (fOff && target.battler().isDead()) {
			tid = Math.randomInt(enemiesAlive.length);
			var target = enemiesAlive[tid];
		    if (!target) {target = null};
	   } else if (fDead && !target.battler().isDead()) {
			tid = Math.randomInt(alliesDead.length);
			var target = alliesDead[tid];
			if (!target) {target = null};
	   } else if (fAllies && target.battler().isDead()) {				
			tid = Math.randomInt(alliesAlive.length);
			var target = alliesAlive[tid];
       };	
   };
   if (target) {battler._chrono.targets[battler._chrono.actionTimes] = target}
   return target;
};

//==============================
// * item
//==============================
Game_Chrono.prototype.item = function(battler) {
	if (battler._chrono.action) {return battler._chrono.action};
	if (battler.currentAction()) {return battler.currentAction().item()}; 
	return null;
};

//==============================
// * prepare Move ToTarget
//==============================
Game_Chrono.prototype.prepareMoveToTargetCN = function(char,battler) {
   this._toolTurn = null;
   this._itemTurn = null;
   this._coopMembersTurn = [];
   this.recordCharacterParameters();
   $gameSystem._chronoMode.turnDuration = 0;
   $gameSystem._chronoMode.turnDuration2 = 0;
   battler._chrono.actionPhase = 1;   
   battler._chrono.actionTimes--;
   $gameSystem._chronoMode.battlerActive = char;
   var actionID = battler.checkActionID(this.item(battler));
   var target = this.makeTargetsCN(battler,this.item(battler)); 
   char._user.autoTarget = target;
   this._itemTurn = this.item(battler);
   if (!this.isActionIsAvailable(char,battler,target,actionID,this._itemTurn)) {
       this.clearTurnPhase(char,battler);	   
	   return;
   };
   var tool = $gameMap.tool(actionID);
   this._toolTurn = tool;
   this._coopMembersTurn = this.getCooperationMembersChars(this._itemTurn);
   battler._chrono.actionScopeIndex = battler._chrono.targets.length;
   $gameSystem._chronoMode.turnDuration = tool.durationBase + 10;
   $gameSystem._chronoMode.turnDuration2 = 3;
   char.turnTowardCharacter(target);
   this.moveToTargetCN(char,battler,target,actionID);
};

//==============================
// * is Action Is Available
//==============================
Game_Chrono.prototype.isActionIsAvailable = function(char,battler,target,actionID,item) {
	if (!item) {return false};
	if (!target) {return false};
	if (!actionID) {return false};
	if (!$gameMap.toolIsExist(actionID)) {return false};
	if (!$gameChrono.isCooperationMeet(item,false)) {return false};
	return true;
};

//==============================
// * clear Turn Phase
//==============================
Game_Chrono.prototype.clearTurnPhase = function(char,battler) {
   battler.atbClearCN();
   if (this.item(battler)) {this.clearCooperationSkill(this.item(battler))};
   $gameSystem._chronoMode.inTurn = false;
   $gameSystem._chronoMode.inTurnBattler = null
   $gameSystem._chronoMode.battlerActive = null;
   this._toolTurn = null;
   this._itemTurn = null;
   this._coopMembersTurn = [];
};

//==============================
// * move To Target CN
//==============================
Game_Chrono.prototype.moveToTargetCN = function(char,battler,target,actionID) {
   battler._chrono.actionID = actionID;
   char.saveOrgParameters();
   char._priorityType = 2;
   if (this._toolTurn.position === 0) {
	   char.jumpToCharacter(target,false,-1)
   };
};

//==============================
// * update Move ToTarget
//==============================
Game_Chrono.prototype.updateMoveToTargetCN = function(char,battler) {
	if (!char.isMoving() && !char.isJumping()) {battler._chrono.actionPhase = 2};
};

//==============================
// * update Before Action CN
//==============================
Game_Chrono.prototype.updateBeforeActionCN = function(char,battler) {
	$gameSystem._chronoMode.turnDuration2--;
	if ($gameSystem._chronoMode.turnDuration2 <= 0) {;
	    battler._chrono.actionPhase = 3;
	};	
};

//==============================
// * update Execute Action CN
//==============================
Game_Chrono.prototype.updateExecuteActionCN = function(char,battler) {
	$gameSystem._chronoMode.turnDuration2--;
	if ($gameSystem._chronoMode.turnDuration2 > 0 ){return};
	if (this.item(battler).scope === 2 || this.item(battler).scope === 8 || this.item(battler).scope === 10) {
		if (battler._chrono.actionScopeIndex > 0) {
			var tindex = battler._chrono.actionScopeIndex;			
			char._user.autoTarget = battler._chrono.targets[tindex - 1];
			char.actC(battler._chrono.actionID);
			$gameMap.addToolEvents();
			battler._chrono.actionScopeIndex--;
			if (battler._chrono.targets.length != 1 && battler._chrono.actionScopeIndex > 0) {
				$gameSystem._chronoMode.turnDuration2 = 10;
			};
		};
    } else { 
	   char.actC(battler._chrono.actionID);
	   battler._chrono.actionScopeIndex = 0;
    };
	if ($gameSystem._chronoMode.turnDuration2 > 0) {return};
	$gameSystem._chronoMode.turnDuration--;
	battler._chrono.actionPhase = 4;
	if (Imported.MOG_BattleHud) { 
	    battler._bhud_face_data = [0,40,2,40];
	};
};

//==============================
// * update Wait Action CN
//==============================
Game_Chrono.prototype.updateWaitActionCN = function(char,battler) {
	$gameSystem._chronoMode.turnDuration--;
	if ($gameSystem._chronoMode.turnDuration <= 0) {;
	    battler._chrono.actionPhase = 5;
	   if (this._toolTurn.position != 0) {
		  $gameSystem._chronoMode.turnDuration += 30;
	   };			
	};
};

//==============================
// * prepare Move Back CN
//==============================
Game_Chrono.prototype.prepareMoveBackCN = function(char,battler) {
   if ($gameSystem._chronoMode.turnDuration > 0) {
	   $gameSystem._chronoMode.turnDuration--;
	   return;
   };
   $gameMap.clearToolsOnMap();
   battler._chrono.actionPhase = 6;
   char.setDirection(char._chrono.orgDirection);
   char._directionFix = true;
   if (this._toolTurn.position === 0) {
       char.jumpToPosition(char._chrono.orgX,char._chrono.orgY);
   };
   this.forceRestorePosition();
};

//==============================
// * update Move Back CN
//==============================
Game_Chrono.prototype.updateMoveBackCN = function(char,battler) {
	if (!char.isMoving() && !char.isJumping()) {battler._chrono.actionPhase = 7};
};

//==============================
// * turn End CN
//==============================
Game_Chrono.prototype.turnEndCN = function(char,battler) {
	$gameMap.clearToolsOnMap();
	this.checkBattleResult();
	this.executeDeadEffect();
	char._directionFix = false;
    char.loadOrgParameters(false);
	char.chainActionClear();
	char.chainActionHitClear();
	char.clearActing(false);
	this.clearCooperationSkill(this._itemTurn);
	$gameSystem._chronoMode.turnDuration = 0;
	if (battler._chrono.actionTimes === 0) {
		battler.atbClearCN();
	    $gameSystem._chronoMode.inTurn = false;	
	} else {
		battler._chrono.actionPhase = 0;
		$gameSystem._chronoMode.battlerActive = null;
	};
	this.loadCharacterParameters(false);
	
    if (Imported.MOG_ComboCounter) {
		$gameTemp.combo_data = [false,0,0,true,false];
	};	
	if (Imported.MOG_Chrono_EnemyHP) {
    	$gameTemp._chronoEHPForceClear = true;
	};
};

//==============================
// * update Chrono ATB
//==============================
Game_Chrono.prototype.updateChronoATB = function(battler,char) {
	if (!$gameSystem._chronoMode.inTurn && !battler.isDead()) {this.updateStatesTurn(battler,char)};
    if (!battler.isMaxAtbC()) {
		if (battler.needUpdateAtbC()) {battler._chrono.atb += battler.atbSpeedC()};
		if (battler.isMaxAtbC()) {
			battler.clearActing(false);
			if (battler.isEnemy()) {
				this.prepareEnemyActionC(battler,char)
			} else {
			    $gameTemp._chrono.refreshWindow = true;
			};
		};
	} else {		
	        if (this.canStartCommandCN(battler)) {this.prepareCommandSelectionCN(battler,char)};
		    if (this.canStartTurnCN(battler)) {this.prepareTurnCN(battler,char)};
	};
	if (battler._chrono.atb > battler._chrono.maxAtb) {battler._chrono.atb = battler._chrono.maxAtb};
	if (battler._chrono.atb < 0) {battler._chrono.atb = 0};
};

//==============================
// * update States Turn
//==============================
Game_Chrono.prototype.updateStatesTurn = function(battler,char) {
    battler._chrono.statesTurn[0]++;
	if (battler._chrono.statesTurn[0] > battler._chrono.statesTurn[1]) {
        this.onStatesTurn(battler,char);
	};
};

//==============================
// * on States Turn
//==============================
Game_Chrono.prototype.onStatesTurn = function(battler,char) {
	battler._chrono.statesTurn[0] = 0;
	battler.regenerateAll();
	battler.updateStateTurns();
    battler.updateBuffTurns();
	battler.removeStatesAuto(1);
	battler.removeStatesAuto(2);
	battler.removeBuffsAuto();	
	battler.startDamagePopup();
};

//==============================
// * prepare Command Selection
//==============================
Game_Chrono.prototype.prepareCommandSelectionCN = function(battler,char) {
	battler.atbClearCN();
	battler.clearRasCast();
	battler._chrono.atb = battler._chrono.maxAtb;
    this.clearCommandPhase();
	$gameTemp._chronoCom.user = [char,battler];
	$gameTemp._chronoCom.phase = 0;
    var se = String(Moghunter.ras_commandSE);
	if (se) {SoundManager.playSoundMX(se)};	
};

//==============================
// * can Start Command CN
//==============================

Game_Chrono.prototype.canStartCommandCN = function(battler) {
	 if (battler.isEnemy()) {return false};
 	 if (battler._chrono.action) {return false};
	 if (!battler.isMaxAtbC()) {return false};
	 if (battler.restriction() > 0) {return false};
	 if ($gameTemp._chronoCom.user) {return false};
	 if ($gameTemp._chrono.buttonLag > 0) {return false};
	 return true;
};

//==============================
// * can Start TurnCN
//==============================
Game_Chrono.prototype.canStartTurnCN = function(battler) {
	 if ($gameSystem._chronoMode.inTurn) {return false};
	 if (!battler._chrono.action) {return false};
	 if (battler._chrono.inAction) {return false};
	 if (battler.isCastingC()) {return false};
	 return true;
};

//==============================
// * prepare Turn CN
//==============================
Game_Chrono.prototype.prepareTurnCN = function(battler,char) {
     $gameSystem._chronoMode.inTurn = true;
	 $gameSystem._chronoMode.inTurnBattler = char;
	 battler._chrono.inAction = true;
	 battler._chrono.actionPhase = 0;
};

//==============================
// * prepare Enemy Action C
//==============================
Game_Chrono.prototype.prepareEnemyActionC = function(battler,char) {
	battler.makeActions()
    if (battler.canMakeActionCN()) { 
	    battler._chrono.action = this.item(battler);
		this.selectTargetAutoCN(battler,char);
		this.needCastActionEnemy(battler,char);	
	} else {
		battler.atbClearCN();
	};
};

//==============================
// * need Cast Action Enemy
//==============================
Game_Chrono.prototype.needCastActionEnemy = function(battler,char) {
	var item = this.item(battler);
	if (item.speed === 0) {return};
    var item_notes = item.note.split(/[\r\n]+/);
        item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
			if (note_data[0].toLowerCase() == "tool id"){
				char.prepareCast(Number(note_data[1]))
			};
	},this);
};

//==============================
// * select Target Auto CN
//==============================
Game_Chrono.prototype.selectTargetAutoCN = function(battler,char) {
	battler._chrono.targets = [];
	battler._chrono.actionTimes = 1;
	var enemiesAlive = [];
	var enemiesDead = [];
	var alliesAlive = [];
	var alliesDead = [];	
	var enemies = battler.isActor() ? $gameMap.enemiesF() : $gameMap.players();
	var allies = battler.isActor() ? $gameMap.players() : $gameMap.enemiesF();
	for (var i = 0; i < enemies.length; i++) {
		if (!enemies[i].battler().isDead()) {
			enemiesAlive.push(enemies[i]);
		} else {
			enemiesDead.push(enemies[i]);
		};
	};	
	for (var i = 0; i < allies.length; i++) {
		if (!allies[i].battler().isDead()) {
			alliesAlive.push(allies[i]);
		} else {
			alliesDead.push(allies[i]);
		};
	};
	var sOpponent = [1, 2, 3, 4, 5, 6];
	var sFriend = [7, 8, 9, 10, 11];
	var scope = this.item(battler).scope;			
	var scopeOpponent = sOpponent.contains(scope) ? true : false;
	var scopeFriend = sFriend.contains(scope) ? true : false;
    var times = 1;	
	if (scopeFriend) {
		if (scope === 11) { 
		    for (var i = 0; i < allies.length; i++) {
				var abattler = allies[i].battler();
				if (abattler === battler) {battler._chrono.targets.push(allies[i])
				};				
			};
		} else if (scope === 10) {
		    for (var i = 0; i < alliesDead.length; i++) {
				battler._chrono.targets.push(alliesDead[i]);
			};			
		} else if (scope === 9) {
			var aIndex = Math.randomInt(alliesDead.length);	
			battler._chrono.targets.push(alliesDead[aIndex]);
		} else if (scope === 8) {
		    for (var i = 0; i < alliesAlive.length; i++) {
				battler._chrono.targets.push(alliesAlive[i]);
			};
		} else if (scope === 7) {
			var lhpally = alliesAlive[0]; 
			for (var i = 0; i < alliesAlive.length; i++) {
				if (alliesAlive[i].battler().hp < lhpally.battler().hp) {
					lhpally = alliesAlive[i];
				};
			};
		    battler._chrono.targets.push(lhpally);
	    };
	} else {
		if (scope === 2) {
		    for (var i = 0; i < enemiesAlive.length; i++) {
				battler._chrono.targets.push(enemiesAlive[i]);
			};
		} else {		
			if (scope >= 4) {times += scope - 3;};
			battler._chrono.actionTimes = times;
			for (var i = 0; i < times; i++) {
				var eIndex = Math.randomInt(enemiesAlive.length);
				battler._chrono.targets.push(enemiesAlive[eIndex]);
			};
		};
	};
};

//==============================
// * Select Next Actor
//==============================
Game_Chrono.prototype.selectNextActor = function() {
	var nextActor = null;
	for (var i = 0; i < $gameParty.members().length; i++) {
     	 if (!nextActor) {
		   var actorID = $gameParty.leader()._actorId;
		   $gameParty.removeActor(actorID);
		   $gameParty.addActor(actorID);
		   if (!$gameParty.leader().isDead()) {
		       $gameParty.leader()._ras.collisionD = 60;
		       nextActor = $gameParty.leader();
			   break
		   };	
	    };
	};
	for (var i = 0; i < $gameMap.players().length; i++) {
		 var players = $gameMap.players()[i];
		 players.refresh();
	};	
};

//==============================
// * is Guarding Direction
//==============================
Game_Chrono.prototype.isGuardingDirectionTouch = function(attacker,target) {
	if (!target.isGuarding()) {return false};
	if (attacker._user.diagonal[0]) {
		if (target.direction() === 2) {
			if (attacker._user.diagonal[1] === 9) {return true};
			if (attacker._user.diagonal[1] === 7) {return true};
		} else if (target.direction() === 8) {
			if (attacker._user.diagonal[1] === 1) {return true};
			if (attacker._user.diagonal[1] === 3) {return true};			
		} else if (target.direction() === 4) {
			if (attacker._user.diagonal[1] === 9) {return true};
			if (attacker._user.diagonal[1] === 3) {return true};		
		} else if (target.direction() === 6) {
			if (attacker._user.diagonal[1] === 7) {return true};
			if (attacker._user.diagonal[1] === 1) {return true};			
		};
    } else {
		if (target.direction() === 2 && attacker.direction() === 8) {return true};
		if (target.direction() === 8 && attacker.direction() === 2) {return true};
		if (target.direction() === 4 && attacker.direction() === 6) {return true};
		if (target.direction() === 6 && attacker.direction() === 4) {return true};
	};
	return false;
};

//==============================
// * execute Guard Touch
//==============================
Game_Chrono.prototype.executeGuardTouch = function(user,target) {
	target.battler()._ras.collisionD = 20;
    var animationID = Moghunter.ras_guardAnimationID;
	if (animationID) {target.requestAnimation(animationID)};   
};

//==============================
// * execute Touch After Hit
//==============================
Game_Chrono.prototype.executeTouchTouchAfterHit = function(user,target,skillId) {
	if (target.canKnockback(target)) {
	   target.clearActing();
	   target.turnTowardCharacter(user);			
	   target.jump(0,0)
	   target.moveBackward();
	      target.battler()._ras.knockback[1] = 55;
	   target.battler()._ras.collisionD = 60;
	};
	var skill = $dataSkills[skillId];
	if (skill) {
		var aniID = $dataSkills[skillId].animationId;
		if (aniID) {
			target.requestAnimation(aniID)
		};
	};
};

//==============================
// * executeTouch Damage
//==============================
Game_Chrono.prototype.executeTouchDamage = function(user,target) {
	if (target.battler()._ras.collisionD > 0) {return};
	if (this.isGuardingDirectionTouch(user,target)) {
		this.executeGuardTouch(user,target);
	    return
	};
    var subject = user.battler(); 
    var action = new Game_Action(subject);
	action.setAbsSubject(subject)
	var oldHP = target.battler()._hp;	
	var coop = [];
	var skillId = user.battler().attackSkillId();
	action.setSkill(skillId);
	action.applyCN(target.battler(),coop);
	target.battler().startDamagePopup();	
	target.battler()._ras.collisionD = 30;
	if (oldHP > target.battler()._hp) {
        this.executeTouchTouchAfterHit(user,target,skillId);
	};
};

//==============================
// * get Cooperation Members
//==============================
Game_Chrono.prototype.getCooperationMembers = function(item) {
	var item_notes = item.note.split(/[\r\n]+/);
	this._actorsIdsCop = [];
	var members = [];		
    item_notes.forEach(function(note) {
        var note_data = note.split(' : ')
		if (note_data[0].toLowerCase() == "cooperation skill"){				
			for (var i = 1; i < note_data.length; i++) {
				 this._actorsIdsCop.push(note_data[i])
			};
			for (var i = 0; i < $gameParty.members().length; i++) {
				var actor = $gameParty.members()[i];
				for (var s = 0; s < this._actorsIdsCop.length; s++) {
				    if (Number(this._actorsIdsCop[s]) === Number(actor._actorId)) {
						members.push(actor)						
					};							
				};
		    };
		};
	},this);
	return members;
};

//==============================
// * get Cooperation Members Chars
//==============================
Game_Chrono.prototype.getCooperationMembersChars = function(item) {
	var chars = [];
	var cpmembers = $gameChrono.getCooperationMembers(item);
    for (var i = 0; i < cpmembers.length; i++) {
		 var actor = cpmembers[i];
		 for (var s = 0; s < $gameMap.players().length; s++) {
			 var char = $gameMap.players()[s];
			 if (Number(actor._actorId) === Number(char.battler()._actorId)) {
				 chars.push(char)
			 };
		 };
	};
	return chars;
};

//==============================
// * all Coop Members In Battle
//==============================
Game_Chrono.prototype.allCoopMembersInBattle = function(item,inTurn) {
	if (this._actorsIdsCop.length === 0) {return true}
	var actors = 0;
	for (var s = 0; s < $gameMap.players().length; s++) {
	     var battlerID = Number($gameMap.players()[s].battler()._actorId);
		 for (var i = 0; i < this._actorsIdsCop.length; i++) {
			  var actorID = Number(this._actorsIdsCop[i]); 
			  if (battlerID === actorID) {actors++};
		 };
	};
	if (actors != this._actorsIdsCop.length) {return false};
	return true;
};

//==============================
// * is Cooperation Meet
//==============================
Game_Chrono.prototype.isCooperationMeet = function(item,inTurn) {
	var enable = true;
	var cpmembers = $gameChrono.getCooperationMembers(item);
    for (var i = 0; i < cpmembers.length; i++) {
		 var actor = cpmembers[i];
		 if (!actor.canUse(item)) {enable = false};
		 if (!actor.isMaxAtbC()) {enable = false};
		 if (actor.restriction() > 0) {enable = false};
		 if (inTurn && actor._chrono.action) {enable = false};
	};
    if (!this.allCoopMembersInBattle()) {enable = false};

	return enable;
};

//==============================
// * get Tool Action ID
//==============================
Game_Chrono.prototype.getToolActionID = function(item) {
	 var actionID = 0; 
     var item_notes = item.note.split(/[\r\n]+/);
     item_notes.forEach(function(note) {
		 var note_data = note.split(' : ')
		 if (note_data[0].toLowerCase() == "tool id"){
			 actionID = Number(note_data[1]);
		 }
	 },this);
	 return actionID;
};

//==============================
// * set Cooperation Skill
//==============================
Game_Chrono.prototype.setCooperationSkill = function(item) {
     var members = this.getCooperationMembersChars(item);
	 var actionId = this.getToolActionID(item)
	 for (var i = 0; i < members.length; i++) {
		 var char = members[i];
		 var battler = char.battler();
		 if (char.isRequiredCast(actionId)) {char.prepareCast(actionId)};
		 battler._chrono.actionTimes = $gameChrono.actor()._chrono.actionTimes;
	     battler._chrono.actionPhase = $gameChrono.actor()._chrono.actionPhase;			
	     battler._chrono.action = $gameChrono.actor()._chrono.action;
		 battler._chrono.targets = $gameChrono.actor()._chrono.targets;	
	 };
};

//==============================
// * is Include Cooperation Skill
//==============================
Game_Chrono.prototype.isIncludeCooperationSkill = function(battler) {
	 var enable = false
	 var item = battler._chrono.action
	 if (item) {
		 var members = this.getCooperationMembers(item)
		 for (var i = 0; i < members.length; i++) {
	          var actor = members[i];
		      if (actor === battler) {enable = true};
		 };
	 };
	 return enable;
};

//==============================
// * clear Cooperation Skill
//==============================
Game_Chrono.prototype.clearCooperationSkill = function(item) {
	 var members = this.getCooperationMembersChars(item)
	 for (var i = 0; i < members.length; i++) {
		 var char = members[i];
		 char._directionFix = false;
		 char.loadOrgParameters(false);
		 char.chainActionClear();
		 char.chainActionHitClear();
	     char.clearActing(false);
		 char.battler().atbClearCN(); 
		 char.battler().clearRasCast();
	 };
};

//=============================================================================
// ** Game Event
//=============================================================================

//==============================
// * update
//==============================
Game_Event.prototype.updateRasEvent = function() {
	if (this.canStartCrBattle()){this.prepareBattle()};
};

//==============================
// * eventDis
//==============================
Game_Event.prototype.eventDis = function() {
  return Math.abs($gamePlayer.x - this.x) + Math.abs($gamePlayer.y - this.y);
};

//==============================
// * can Start Cr Battle
//==============================
Game_Event.prototype.canStartCrBattle = function() {
	if (!$gameSystem._chronoMode.enabled) {return false};
	if ($gameSystem._chronoMode.phase != 0) {return false};
	if (!this.battler()) {return false};
	if (this.battler()._ras.knockback[1] > 0) {return false};	
	if (this.isJumping()) {return false};
	if ($gameTemp._chaPosesEVRunning) {return false};
	if ($gamePlayer._user.hookshotTool) {return false};
	if (!$gameParty.leader()) {return false};
	if ($gamePlayer.isActing()) {return false};
	if ($gamePlayer.isKnockbacking()) {return false};
	if ($gamePlayer.isJumping()) {return false};
	if ($gamePlayer.isInVehicle()) {return false};	
	if ($gameParty.leader().isDead()) {return false};
	if (this.battler().isDead()) {return false};
	if (this._tool.enabled) {return false};
	if (this._user.isPlayer) {return false};
	if (this._erased) {return false};
	if (this._chrono.escaped) {return false};
	var enable   = (this.eventDis() <= this._chrono.battleRange);
	return enable;
};

//==============================
// * prepare Battle
//==============================
Game_Event.prototype.prepareBattle = function() {
	$gameMap.targetsOnScreen();
    if ($gameMap.enemiesF().length > 0) {$gameChrono.prepareChronoBattle()};
};

//=============================================================================
// ** Game Character
//=============================================================================

//==============================
// * need Stop Non Chrono Battlers
//==============================
Game_CharacterBase.prototype.needStopNonChronoBattlers = function() {
	if (this._tool.enabled) {return false};
    return $gameSystem.isChronoMode() && this.battler() && !this._user.onScreen
};
  
//==============================
// * is Chrono Battler
//==============================
Game_CharacterBase.prototype.isCronoBattler = function() {
   if (!$gameSystem.isChronoMode()) {return false};
   if (!this.battler()) {return false};
   if (!this._user.onScreen) {return false};
   return true;
};

//==============================
// * Update Crono
//==============================
Game_CharacterBase.prototype.updateChrono = function() {
    if (this._chrono.nextX != null) {
		if (!this.isMoving()) {this.updateForceMovementRas()};
	};
};

//==============================
// * update Force Movement Ras
//==============================
Game_CharacterBase.prototype.updateForceMovementRas = function() {
	this._through = false;
	this._moveSpeed = 3;
	this._directionFix = false;
	if (this._user.isPlayer) {$gamePlayer._moveSpeed = 3};
    var x = this._chrono.nextX;
    var y = this._chrono.nextY;
    direction = this.findDirectionTo(x, y);
	$gameSystem._chronoMode.phaseDuration = this._moveSpeed < 5 ? 40 : 30;
    if (direction > 0) {this.moveStraight(direction)};
	    if (!this.isMoving()) {
			var preX = this._chrono.nextX;
			var preY = this._chrono.nextY;
			this._chrono.nextX = null;	
			this._chrono.nextY = null;	
			this._moveSpeed = this._chrono.premapMoveSpeed;
			if (this._user.isPlayer) {$gamePlayer._moveSpeed = $gamePlayer._chrono.premapMoveSpeed};
			if ($gameChrono.phase() === 1) {
				this._chrono.orgX = this._x;
				this._chrono.orgY = this._y;
				var ftarget = $gameChrono.setFirstTarget(this);
				if (ftarget) {this._chrono.target = ftarget};
				if (this._chrono.dir > 0) {
				   this.setDirection(this._chrono.dir);
			    } else {
					if (this._x != preX || this._y != preY) {
				        this.turnTowardCharacter(this._chrono.target);
					} else {
						if (this._chrono.target) {
					   	    this.turnTowardCharacter(this._chrono.target);
						} else {
							this.setDirection($gamePlayer._direction);
						};
					};
			    };
			} else {
                $gameSystem._chronoMode.phase = 10;
				this.turnTowardCharacter($gamePlayer);
				this._through = true;
				this._moveSpeed = $gamePlayer._moveSpeed;
                this._direction = this._chrono.premapD;				
			};
		};
};

//=============================================================================
// ** Game Enemy
//=============================================================================

//==============================
// * can Make Action CN
//==============================
Game_Enemy.prototype.canMakeActionCN = function() {
	if (!this.canMove()) {return false};
	if (!this.currentAction()) {return false};
	if (!this.currentAction().item()) {return false};
	return true;
};

//==============================
// * Act C
//==============================
Game_CharacterBase.prototype.actC = function(toolID) {
    if (!$gameSystem._eventDataTool) {$gameSystem._eventDataTool = []};
    var action = $gameMap.toolEvent(toolID);
	this._user.spcShoot[0] = action._tool.spcShootTool[0];
	this._user.spcShoot[1] = action._tool.spcShootTool[1];
	this._user.spcShoot[2] = action._tool.spcShootTool[2];
	this._user.spcShoot[3] = this._user.autoTarget;
	if (this._user.spcShoot[2] != 0 && this._user.spcShoot[1] > 0) {
		this._user.spcShoot[0] = true;
	   for (var i = 0; i < this._user.spcShoot[1]; i++) {
	        $gameSystem._eventDataTool.push([toolID,this]);
	   };
    } else {
       $gameSystem._eventDataTool.push([toolID,this]);
	};
};

//=============================================================================
// ** Game Action Result
//=============================================================================

//==============================
// * isHitCR
//==============================
Game_ActionResult.prototype.isHitCR = function() {
    return !this.missed && !this.evaded;
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * apply CN
//==============================
Game_Action.prototype.applyCN = function(target,coopUsers) {
	if (Imported.MOG_BossHP) {
		if (target.isEnemy() && target._bosshp_meter) {
			 $gameTemp._battler_bhp_temp[1] = target.hp;
			 $gameTemp._battler_bhp_temp[3] = 0
		};
	};
	if (Imported.MOG_Chrono_EnemyHP) {
		$gameTemp._chronoEnemyHP[4] = target.hp; 
	};	

	var oldhp = target.hp;
	var oldmp = target.mp;
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = (result.used && Math.random() >= this.itemHit(target));
    result.evaded = (!result.missed && Math.random() < this.itemEva(target));
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    if (result.isHitCR()) {
        if (this.item().damage.type > 0) {
            result.critical = (Math.random() < this.itemCri(target));
			if (coopUsers.length > 0) {
				var value = 0
				for (var i = 0; i < coopUsers.length; i++) {
					var subject = coopUsers[i].battler();
					value += this.makeDamageValueCN(target, result.critical,subject);
				};
				var realValue = Math.floor(value / coopUsers.length)
				value = realValue;
			} else {
                var value = this.makeDamageValue(target, result.critical);
			};
            this.executeDamageCN(target, value);
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);


        }, this);
        this.applyItemUserEffect(target);		
		this.afterApplyCN(target,result,oldhp,oldmp);
    };
};

//==============================
// * make Damage Value CN
//==============================
Game_Action.prototype.makeDamageValueCN = function(target, critical,subject) {
    var item = this.item();
    var baseValue = this.evalDamageFormulaCN(target,subject);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};

//==============================
// * eval Damage Formula CN
//==============================
Game_Action.prototype.evalDamageFormulaCN = function(target,subject) {
    try {
        var item = this.item();
        var a = subject;
        var b = target;
        var v = $gameVariables._data;
        var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
        return Math.max(eval(item.damage.formula), 0) * sign;
    } catch (e) {
        return 0;
    }
};

//==============================
// * after Apply CN
//==============================
Game_Action.prototype.afterApplyCN = function(target,result,oldhp,oldmp) {
    if (Imported.MOG_BattleHud && target.isActor()) {
	    if (oldhp > target.hp) {
			target._bhud_face_data = [30,20,3,30];
		}
	    else if (oldhp < target.hp) {
		    target._bhud_face_data = [0,20,1,30];
		};
	};
	if (Imported.MOG_BossHP) {
		if (target.isEnemy() && target._bosshp_meter) {
			 $gameTemp._battler_bhp_temp[0] = target;
			 $gameSystem._chronoBossEnemy = target;
			 if (oldhp > target.hp) {$gameTemp._battler_bhp_temp[3] = 60};
		};		
	};
};

//==============================
// * execute Damage CN
//==============================
Game_Action.prototype.executeDamageCN = function(target, value) {
    var result = target.result();
    if (value === 0) {
        result.critical = false;
    }
	if (value > 0 && target._ras.guard.chrono) {value = Math.floor(value / 2)};
    if (this.isHpEffect()) {
        this.executeHpDamage(target, value);
    }
    if (this.isMpEffect()) {
        this.executeMpDamage(target, value);
    }
};

//=============================================================================
// ** Game Player
//=============================================================================

//==============================
// * update Scroll
//==============================
var _mog_chrono_gplayer_updateScroll = Game_Player.prototype.updateScroll;
Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
	if ($gameSystem.isChronoMode()) {return};
	_mog_chrono_gplayer_updateScroll.call(this,lastScrolledX, lastScrolledY)
};

//=============================================================================
// ** Game Follower
//=============================================================================

//==============================
// * update
//==============================
var _mog_chrono_gfollower_update = Game_Follower.prototype.update;
Game_Follower.prototype.update = function() {
	_mog_chrono_gfollower_update.call(this);
	if ($gamePlayer.battler()) {this.updateChronoFollower()};
};

//==============================
// * update Chrono Follower
//==============================
Game_Follower.prototype.updateChronoFollower = function() {	
	if (this._chrono.nextX) {
		this.setMoveSpeed(4);
		$gameSystem._chronoMode.phaseDuration = 4;
	};
	if (!$gameSystem.isChronoMode() && $gamePlayer.isActing()) {	
	    this.setStepAnime(false);
	};
	if ($gamePlayer.battler()._ras.hookshotUser[1]) {
		this.setWalkAnime(false);
		this.setMoveSpeed(5);
		this._x = $gamePlayer._x;
		this._y = $gamePlayer._y;
	};
};

//=============================================================================
// ** ToolEvent
//=============================================================================
function ToolEvent() {
    this.initialize.apply(this, arguments);
};

ToolEvent.prototype = Object.create(Game_Event.prototype);
ToolEvent.prototype.constructor = ToolEvent;

//==============================
// * Initialize
//==============================
ToolEvent.prototype.initialize = function(mapId, eventId , user,getdata) {
	Game_Event.prototype.initialize.call(this,mapId,eventId);
	this._tool.enabled = true;
	this._tool.addSprite = true;
	this._tool.start = true;
	this._tool.active = true;
	this._tool.id = eventId;
	this._tool.user = user;
	this._tool.target = null;
	this._tool.duration = 1;
	this._preLoad = getdata;
	this._coopMembers = [];
	if (this._tool.user && this._tool.user.battler()) {
	    this._user.battler = this._tool.user.battler();
		if (this.battler()._chrono.targets.length > 0) {
	    	this._tool.targetF = this.battler()._chrono.targets[0];
		};
	};
 	if (!this._preLoad) {this._tool.user.battler()._ras.tool = this};
	this.checkToolNotes();
	if (!this._preLoad && this.toolUsable()) {	
        this.startTool();
	} else {
		this.cancelTool();
	};	
};

//==============================
// * Tool Usable
//==============================
ToolEvent.prototype.toolUsable = function() {
	this._payCost = {};
	this._payCost.item = null;
	this._payCost.mp = null;
	this._payCost.tp = null;
	if (this.user()._tool.enabled) {return true};
	if (!this.canUseUniqueTools()) {return false};
	if (this.user()._user.actionTimes[0]) {		
		if (!this.user()._user.actionTimes[6]) {
			this.user()._user.actionTimes[6] = true;
		} else {
			return true
		}
	};
    if (!this.canPayActionCost()) {
		SoundManager.playSoundMX(Moghunter.ras_ActionCostSE);
		return false;
	};
	return true;
};

//==============================
// * can Pay Action Cost
//==============================
ToolEvent.prototype.canPayActionCost = function() {
	if (!this.canPayItemCost()) {return false};
	if (!this.canPayMPCost()) {return false};
	if (!this.canPayTPCost()) {return false};
	if (!this.canPayCTCost()) {return false};
	return true;	
};


//==============================
// * can Use Unique Tools
//==============================
ToolEvent.prototype.canUseUniqueTools = function() {
	if (!this._tool.unique) {return true};
	var enable = true;
	for (var i = 0; i < $gameSystem._toolsOnMap.length; i++) {
		var toolMapID = $gameSystem._toolsOnMap[i];
		if (this._tool.id === toolMapID) {enable = false};
	};
	return enable;
};

//==============================
// * set Unique Tools
//==============================
ToolEvent.prototype.setUniqueTools = function() {	
	$gameMap.addToolsOnMap(this._tool.id);
};

//==============================
// * pay Cost
//==============================
ToolEvent.prototype.payCost = function() {
	if (this.item() && $gameSystem.isChronoMode()) {
		this._coopMembers = $gameChrono.getCooperationMembersChars(this.item())
	};	
	if (this.user()._user.spcShoot[0]) {return};
    if (this._payCost.item) {this.payItemCost()};
    if (this._payCost.mp) {this.payMPCost()};
    if (this._payCost.tp) {this.payTPCost()};
	if (this.user().battler().isActor()) {this.payCTCost()};
};

//==============================
// * Pay Cost Coop
//==============================
ToolEvent.prototype.payCostCoop = function(type) {
   for (var i = 0; i < this._coopMembers.length; i++) {
	    var battler = this._coopMembers[i].battler();
		if (type === 0) {
		    battler._mp -= this._payCost.mp;
		} else if (type === 1) {
			battler._tp -= this._payCost.tp;
	    };
   };
};

//==============================
// * Pay Item Cost
//==============================
ToolEvent.prototype.payItemCost = function() {
	$gameParty.consumeItem(this._payCost.item)
};

//==============================
// * Pay MP Cost
//==============================
ToolEvent.prototype.payMPCost = function() {
	if (this._coopMembers.length > 0) {this.payCostCoop(0);return};
    if (this.user().battler()) {
		this.user().battler()._mp -= this._payCost.mp;
	} else {
		var actor = $gameParty.leader();
        if (actor) {actor._mp -= this._payCost.mp};
    };
};

//==============================
// * Pay TP Cost
//==============================
ToolEvent.prototype.payTPCost = function() {
	if (this._coopMembers.length > 0) {this.payCostCoop(1);return};
    if (this.user().battler()) {
		this.user().battler()._tp -= this._payCost.tp;
	} else {
		var actor = $gameParty.leader();
        if (actor) {actor._tp -= this._payCost.tp};
    };
};

//==============================
// * Pay CT Cost
//==============================
ToolEvent.prototype.payCTCost = function() {
};

//==============================
// * Can Pay Item Cost
//==============================
ToolEvent.prototype.canPayItemCost = function() {
	if (!this._tool.itemCost) {return true};
	if ($gameSystem.isChronoMode()) {
		if (this.item() && DataManager.isItem(this.item()) && this.item().consumable) {
			return true
		};
	};
	var item = $dataItems[this._tool.itemCost];
	if (!item) {return false};
	if (this.user().battler()) {
		if (this.user().battler().isEnemy()) {return true};
		if (!$gameParty.hasItem($dataItems[this._tool.itemCost])) {return false};
		this._payCost.item = item;
		return true
	};
	if (this.user()._user.isEvent) {return true};
	if (!$gameParty.hasItem($dataItems[this._tool.itemCost])) {return false};
	this._payCost.item = item;	
	return true;
};

//==============================
// * Can Pay MP Cost
//==============================
ToolEvent.prototype.canPayMPCost = function() {
	var skillCost = this._tool.mpCost;
	if (!skillCost || skillCost <= 0) {return true};	
	if (this.user().battler()) {
		if (this.user().battler()._mp < skillCost) {return false};
		this._payCost.mp = skillCost;
		return true;
	};
	if (this.user()._user.isEvent) {return true};
	var actor = $gameParty.leader();
	if (!actor) {return false};
	if (actor._mp < skillCost) {return false};
	this._payCost.mp = skillCost;
	return true;
};

//==============================
// * Can Pay TP Cost
//==============================
ToolEvent.prototype.canPayTPCost = function() {
	var skillCost = this._tool.tpCost;
	if (!skillCost || skillCost <= 0) {return true};	
	if (this.user().battler()) {
		if (this.user().battler()._tp < skillCost) {return false};
		this._payCost.tp = skillCost;
		return true;
	};
	if (this.user()._user.isEvent) {return true};
	var actor = $gameParty.leader();
	if (!actor) {return false};
	if (actor._tp < skillCost) {return false};
	this._payCost.tp = skillCost;
	return true;
};

//==============================
// * Can Pay CT Cost
//==============================
ToolEvent.prototype.canPayCTCost = function() {
	return true;
};

//==============================
// * Start Tool
//==============================
ToolEvent.prototype.startTool = function() {
	this.payCost();
	if (this._tool.unique) {this.setUniqueTools()};
	this.setInitialPosition();
	this.startEffect();
	this._locked = false;
	this._collided = [];
	this.user().battler()._ras.charge.time = 0;
	this.user().battler()._ras.charge.time2 = 0;
	this.user().battler()._ras.charge.charging = false;		
	if (this._tool.hookshot.enabled) {
		$gameSystem._toolHookshotSprite[0] = this.user();
		$gameSystem._toolHookshotSprite[1] = this;	
		this.user().battler()._ras.hookshotUser = [true,false,4,null];
		this.user().battler()._ras.poseDuration = 9999;
		this.user().battler()._ras.superGuard = true;	
		this.user()._moveSpeed = 5;		
	};	
	if (this.user()._user.spcShoot[1] > 0) {
		this.user()._user.spcShoot[1]--;
		this._tool.duration += this.user()._user.spcShoot[1];
	    this._tool.durationBase += this.user()._user.spcShoot[1];	
		if (this.user()._user.spcShoot[3]) {
			this.user()._user.autoTarget = this.user()._user.spcShoot[3];
		};
		if (this.user()._user.spcShoot[1] === 1) {

		   this.user()._user.spcShoot[0] = false;
		} else if (this.user()._user.spcShoot[1] === 0) {
	        this.user()._user.spcShoot = [false,0,0,null];
			this.user()._user.autoTarget = null;
		};
	};
	if (this._tool.projectile && $gameSystem.isChronoMode()) {this.setProjectileEffect()};
	if (this.needSetSkillName()) {
		this.setSkillName()
	} else {
		if (Imported.MOG_ActionName && $gameSystem.isChronoMode()) {
			$gameTemp._skillNameDuration[0] = 0;
		};
	};
	if (this.item()) {
		this._tool.scope = this.item().scope;
	};
	if (Imported.MOG_CharPoses) {this.user().updateSetPose()};
	
	if (this._tool.zoomAct) {this.user().charZoomAct(true,false)};
};

//==============================
// * need Set Skill Name
//==============================
ToolEvent.prototype.needSetSkillName = function() {
	if (!Imported.MOG_ActionName) {return false};
	if (!this.item()) {return false};
	if (!$gameSystem.isChronoMode()) {
	    if (this.user().battler().isEnemy()) {return false};
	};
	return true;
};

//==============================
// * set Skill Name
//==============================
ToolEvent.prototype.setSkillName = function() {
	var notes = this.item().note.split(/[\r\n]+/);
	var enableName = true;
    notes.forEach(function(note) {
    if (note == "Disable Name" ) {enableName = false};
	},this);		
	if (enableName) {
		$gameTemp._skillNameData = [true,this.item(),true]
		$gameTemp._skillNameDuration[0] = $gameTemp._skillNameDuration[1];
	};
};

//==============================
// * Cancel Tool
//==============================
ToolEvent.prototype.cancelTool = function() {
	this._tool.duration = 1;
    this._tool.range = -1;
	this._tool.wait = 10;
	this._tool.addSprite = false;
	this._tool.start = false;
	this._tool.active = false;
	if (this.user().battler()) {
		this.user().battler()._ras.poseDuration = 0;
	};
	this.user()._user.spcShoot = [false,0,0,null];
};
	
//==============================
// * start Effect
//==============================
ToolEvent.prototype.startEffect = function() {
   this._locked = true
   this.start();
   this._locked = false;
   if (this._tool.animationID3 > 0) {
       this.user().requestAnimation(this._tool.animationID3);
   };
   this.user().straighten(); 
};

//==============================
// * User
//==============================
ToolEvent.prototype.user = function() {
   return this._tool.user;
};

//==============================
// * set Angle Sprite
//==============================
ToolEvent.prototype.setAngleSprite = function() {
	this._tool.diagonalAngle = 0;
	var angle = 0;
	if (this._user.diagonal[1] === 1 ) {
	    angle = this.direction() === 2 ? -45 : 180;
	} else if (this._user.diagonal[1] === 7) {
	    angle = this.direction() === 4 ? -45 : 180;
	} else if (this._user.diagonal[1] === 9) {
		angle = this.direction() === 6 ? 180 : -45;
	} else if (this._user.diagonal[1] === 3) {
	    angle = this.direction() === 2 ? 180 : -45;
	};
    if (angle != 0) {this._tool.diagonalAngle = angle + Math.PI / 2.0};
};

//==============================
// * can Set Angle Sprite
//==============================
ToolEvent.prototype.canSetAngleSprite = function() {
	if (!this._user.diagonal[0]) {return false};
	if (this._tool.diagonalAngle === 0) {return false};
	if (!this._tool.diagonal) {return false};
	return true;
};

//==============================
// * set Initial Direction
//==============================
ToolEvent.prototype.setInitialDirection = function() {
   if (this.user()._user.spcShoot[2] != 0) {
	   this.setSpcDirection()
   } else {
      var d = this.user()._direction;
      this.setDirection(d);
      this._user.diagonal = this.user()._user.diagonal;
   };
};

//==============================
// * set Spc Direction
//==============================
ToolEvent.prototype.setSpcDirection = function() {
	if (this.user()._user.spcShoot[2] === 1) {
        this.setAllDirection();
    } else if (this.user()._user.spcShoot[2] === 2) {
        this.setFourDirection();
    } else if (this.user()._user.spcShoot[2] === 3) {
        this.setThreeDirection();		
	};
};

//==============================
// * Set All Direction
//==============================
ToolEvent.prototype.setAllDirection = function() {
	  if (this.user()._user.spcShoot[1] > 4) {
		  if (this.user()._user.spcShoot[1] === 8) {
		     d = 1;
		  } else if (this.user()._user.spcShoot[1] === 7) {
		     d = 3;
		  } else if (this.user()._user.spcShoot[1] === 6) {  
		     d = 7;
		  } else if (this.user()._user.spcShoot[1] === 5) {
		     d = 9;
		  };
		  this._user.diagonal = [true,d];
	  } else {
	      this.setFourDirection();	
	  };
};

//==============================
// * Set four Direction
//==============================
ToolEvent.prototype.setFourDirection = function() {
	d = (this.user()._user.spcShoot[1] * 2);
	this.setDirection(d);
};

//==============================
// * Set Three Direction
//==============================
ToolEvent.prototype.setThreeDirection = function() {
	this._user.diagonal = this.user()._user.diagonal;
	this.setDirection(this.user().direction());	
    if (this.user()._user.spcShoot[1] === 3) {
       this.turnDiagonalLeft();
	} else if (this.user()._user.spcShoot[1] === 2) {
	   this.turnDiagonalRight();
	};
};

//==============================
// * set Initial Position
//==============================
ToolEvent.prototype.setInitialPosition = function() {
   this.setInitialDirection();
   if (this.user()._user.autoTarget && this._tool.position === 1) {
      var x = this.user()._user.autoTarget.x;
      var y = this.user()._user.autoTarget.y;
   } else if (this.user()._user.chainActionHit[4]	) {  
      var x = this.user()._user.chainActionHit[4].x;	
      var y = this.user()._user.chainActionHit[4].y;	
   } else {
      var x = this.user().x;
      var y = this.user().y;
   };   
   this.locate(x, y);   
   if (this.canSetAngleSprite()) {
	   this.setAngleSprite();
   } else {
	   this._tool.diagonalAngle = 0;
   };
   this.user()._user.autoTarget = null;
};

//==============================
// * set Projectile Effect
//==============================
ToolEvent.prototype.setProjectileEffect = function() {
	if (this.user().battler()._chrono.targets.length > 0) {
		if (this.user().battler()._chrono.actionScopeIndex > 0) {
		    var index = this.user().battler()._chrono.actionScopeIndex - 1;
	        target = this.user().battler()._chrono.targets[index];
	    } else {
		    target = this.user().battler()._chrono.targets[0];
        };
		if (!target) {return};
		this.jumpToCharacter(target,true,0);
		$gameSystem._chronoMode.turnDuration2 += this._jumpCount;
	};
};

//==============================
// * Event
//==============================
ToolEvent.prototype.event = function() {
	return $dataMapTool.events[this._eventId];
};

//==============================
// * Check Tool Notes
//==============================
ToolEvent.prototype.checkToolNotes = function() {
	if (!this._erased && this.page()) {this.list().forEach(function(l) {		
	       if (l.code === 108) {var comment = l.parameters[0].split(' : ')	
				this._tool.mpCost = 0;
				this._tool.tpCost = 0;		   	        
				if (comment[0].toLowerCase() == "tool_duration"){
		            this._tool.duration = Math.max(Number(comment[1]),1);
					this._tool.durationBase = this._tool.duration;
				};
				if (comment[0].toLowerCase() == "tool_range"){
		            this._tool.range = Math.max(Number(comment[1]),0);
				};
				if (comment[0].toLowerCase() == "tool_area"){
					var area = String(comment[1]);
					if (area === "square") {
					    this._tool.area = 1;
					} else if (area === "line") {
						this._tool.area = 2;
					} else if (area === "front_rhombus") {
						this._tool.area = 3;
					} else if (area === "front_square") {
						this._tool.area = 4;
					} else if (area === "wall") {
						this._tool.area = 5;						
					} else if (area === "cross") {
						this._tool.area = 6;																
					} else {
		               this._tool.area = 0;
					};
    			};
				if (comment[0].toLowerCase() == "tool_position"){					
					var position = String(comment[1]);	
					if (position === "target") {
					    this._tool.position = 1;
						this._tool.autoTarget = true;
				    	this._tool.ignoreGuard = true;
					} else if (position === "user") {	
					    this._tool.position = 2;
					} else {
		                this._tool.position = 0;
					};
				};
		        if (comment[0].toLowerCase() == "tool_collision"){
				
				} else if (comment[0].toLowerCase() == "tool_disable_collision"){
				    this._tool.collision = false;
				};				
				if (comment[0].toLowerCase() == "tool_wait_collision"){
		            this._tool.wait = Math.max(Number(comment[1]),1);
				};
				if (comment[0].toLowerCase() == "tool_item_id"){
					var item = $dataItems[Number(comment[1])];
					if (item) {
						this._tool.item = item;
						if (item.consumable) {
							this._tool.itemCost = item.id;
						};		
						if (this._tool.item.animationId > 0) {
							this._tool.animationID2 = this._tool.item.animationId;
						};
					};
				};
				if (comment[0].toLowerCase() == "tool_skill_id"){
					var skill = $dataSkills[Number(comment[1])];
		            if (skill) {this._tool.skill = skill};
				};								
				if (comment[0].toLowerCase() == "tool_animation_id"){
		            this._tool.animationID1 = Math.max(Number(comment[1]),0);
				};
				if (comment[0].toLowerCase() == "tool_hit_animation_id"){
		            this._tool.animationID2 = Math.max(Number(comment[1]),0);
				};
				if (comment[0].toLowerCase() == "tool_user_animation_id"){
		            this._tool.animationID3 = Math.max(Number(comment[1]),0);
				};	
				if (comment[0].toLowerCase() == "tool_cast_animation_id"){
		            this._tool.castAnimationID = Math.max(Number(comment[1]),0);
				};		
				if (comment[0].toLowerCase() == "tool_item_cost"){
		            this._tool.itemCost = Number(comment[1]);
				};				
				if (comment[0].toLowerCase() == "tool_mp_cost"){
		            this._tool.mpCost = Number(comment[1]);
				};					
				if (comment[0].toLowerCase() == "tool_tp_cost"){
		            this._tool.tpCost = Number(comment[1]);
				};
				if (comment[0].toLowerCase() == "tool_ct_cost"){
		            this._tool.ctCost = Number(comment[1]);
				};				
				if (this._tool.skill) {
					this._tool.mpCost += this._tool.skill.mpCost;
					this._tool.tpCost += this._tool.skill.tpCost;
				};						
				if (comment[0].toLowerCase() == "tool_unique"){
		            this._tool.unique = true;
				};
				if (comment[0].toLowerCase() == "tool_offset_x"){
		            this._tool.offsetX = Number(comment[1]);
				};
				if (comment[0].toLowerCase() == "tool_offset_y"){
		            this._tool.offsetY = Number(comment[1]);
				};
				if (this.user().battler()) {
					if (comment[0].toLowerCase() == "tool_pose_duration"){
		     				this.user().battler()._ras.poseDuration = Number(comment[1]);
					}
		            if (comment[0].toLowerCase() == "tool_pose_suffix"){
					    this.user().battler()._ras.poseSuffix = String(comment[1])
				    };
					if (comment[0].toLowerCase() == "tool_user_offset_x"){
						this.user().battler()._ras.offsetX = Number(comment[1]);
					};							
					if (comment[0].toLowerCase() == "tool_user_offset_y"){
						this.user().battler()._ras.offsetY = Number(comment[1]);
					};				
				};
				if (comment[0].toLowerCase() == "tool_all_directions"){
				    this._tool.spcShootTool = [true,8,1];
					this._tool.diagonal = true;
				} else if (comment[0].toLowerCase() == "tool_four_directions") {
		            this._tool.spcShootTool = [true,4,2];
				} else if (comment[0].toLowerCase() == "tool_three_directions") {
		            this._tool.spcShootTool = [true,3,3];
					this._tool.diagonal = true;					
				};				
				
				if (comment[0].toLowerCase() == "tool_damage_all"){
		            this._tool.selfDamage = true;
				};
				if (comment[0].toLowerCase() == "tool_diagonal"){
		            this._tool.diagonal = true;
				};
				if (comment[0].toLowerCase() == "tool_diagonal_angle"){
		            this._tool.diagonalAngle = -1;
					this._tool.diagonalAngleEnabled = true;
				};				
				if (comment[0].toLowerCase() == "tool_disable_piercing"){
		            this._tool.piercing = false;
				};
				if (comment[0].toLowerCase() == "tool_chain_action"){
					if (this.user().battler() && this.user()._user.chainAction[0] != this._tool.id) {
					   this.user()._user.chainAction[0] = Number(comment[1]);
					   this.user()._user.chainAction[1] = this._tool.durationBase;
					   if (this.user()._user.autoTarget) {
						   this.user()._user.chainAction[2] = this.user()._user.autoTarget;
					   };
				   };
				} else if (comment[0].toLowerCase() == "tool_chain_action_hit"){
					if (this.user().battler() && this.user()._user.chainActionHit[0] != this._tool.id) {
					   this.user()._user.chainActionHit[0] = Number(comment[1]);
					   this.user()._user.chainActionHit[1] = this._tool.durationBase;
					   if (this.user()._user.autoTarget) {
						   this.user()._user.chainActionHit[2] = this.user()._user.autoTarget;
					   };
					   this.user()._user.chainActionHit[3] = true;
					   if (this.user().battler()._chrono.targets.length > 0) {
					       this.user()._user.chainActionHit[5] = this.user().battler()._chrono.targets[0];
					   };
				   };
                } else if (comment[0].toLowerCase() == "tool_combo"){
						this._tool.combo.id = Number(comment[1]);
						this._tool.combo.type = Number(comment[2]);	
						this._tool.combo.time = comment[3] != null ? Number(comment[3]) : 20;
				};
				if (comment[0].toLowerCase() == "tool_charge_attack"){
					this._tool.charge.id =  Number(comment[1]);
	                this._tool.charge.maxtime = Number(comment[2]);	
				};
				if (comment[0].toLowerCase() == "tool_knockback_duration"){
					this._tool.collisionD = Number(comment[1]);
				};							
				if (comment[0].toLowerCase() == "tool_multihit"){
				    this._tool.multihit = true;
					this._tool.collisionD = Number(comment[1]);
				};
				if (comment[0].toLowerCase() == "tool_knockback_power"){
					this._tool.knockbackPower = Number(comment[1])
				};	
				if (comment[0].toLowerCase() == "tool_ignore_shield"){
					this._tool.ignoreGuard = true;
				};		
				if (comment[0].toLowerCase() == "tool_ignore_knockback"){
					this._tool.ignoreKnockback = true;
				};							
				if ($gameSystem.isAbsMode() && comment[0].toLowerCase() == "tool_auto_target"){
					this._tool.position = 1;
				    this._tool.autoTarget = true;
					this._tool.ignoreGuard = true;
				};
				if (comment[0].toLowerCase() == "tool_projectile"){
					this._tool.position = 2;
			     	this._tool.projectile = true;
				};				
				if (comment[0].toLowerCase() == "tool_shield_reflect"){
				     this._tool.guardReflect = true;
				};				
				if (comment[0].toLowerCase() == "throw"){
				    this._tool.eventInt = true;
		        };
				if (comment[0].toLowerCase() == "tool_shake"){
					this._tool.shake = [2,10,20]
		        };								
				if (this.user().battler() && comment[0].toLowerCase() == "tool_action_times") {
					if (!this.user()._user.actionTimes[0] ) {
						this.user()._user.actionTimes[0] = true; 
						this.user()._user.actionTimes[1] = Number(comment[1]);
						this.user()._user.actionTimes[2] = this._tool.id;
						this.user()._user.actionTimes[3] = this._tool.durationBase;
						if (this.user()._user.autoTarget) {
							this.user()._user.actionTimes[4] = this.user()._user.autoTarget;
						};
						this.user()._user.actionTimes[5] = Number(comment[2]) ? Number(comment[2]) : 25; 
						this.user()._user.actionTimes[6] = false;
						this.user()._user.actionTimes[7] = this.user()._user.actionTimes[5];
						//this._tool.collisionD = Number(comment[2]);
					};
		        };
				if (Imported.MOG_CharacterMotion) {
				    if (comment[0].toLowerCase() == "tool_user_zoom_effect"){
						this._tool.zoomAct = true;
					};
				};				
				if (comment[0].toLowerCase() == "tool_angle_animation"){
                    this._chrono.animation.directionMode = true;
				};
				if (comment[0].toLowerCase() == "tool_boomerang"){
					var range = Number(comment[1]) ? Number(comment[1]) : 4;
		            this._tool.boomerang = [true,range,0];
                    this.setForceMoveEffect();
					this._tool.getTreasure = true;
				} else if (comment[0].toLowerCase() == "tool_hookshot"){
					var range = Number(comment[1]) ? Number(comment[1]) : 4;
		            this._tool.hookshot = {};
					this._tool.hookshot.enabled = true;
					this._tool.hookshot.range = range;
					this._tool.hookshot.x = 0;
					this._tool.hookshot.y = 0;
					this._tool.getTreasure = true;
					this._tool.range = 0;
					this._tool.diagonal = false;	
					this._tool.multihit = false;
					this.setForceMoveEffect();
				};												
		   };
	}, this);};
	this._tool.knockbackFace = this._tool.wait >= 100 ? false : true;
};

//==============================
// * set Force Move Effect
//==============================
ToolEvent.prototype.setForceMoveEffect = function() {
	this._moveRouteForcing = true;
	this._moveRoute.repeat = true;
	this._through = true;
	this._tool.wait = 1;
	this._tool.autoTarget = false;
	this._tool.selfDamage = false;
	this._tool.unique = true;
	this._tool.piercing = true;		
	this._tool.duration = 5;
	this._tool.waitD = true;
	this._tool.guardReflect = false;
	this._tool.forcingMove = 1;
};

//==============================
// * Update Tool Duration
//==============================
ToolEvent.prototype.updateToolDuration = function() {
    this._tool.duration--;
	if (this._tool.duration <= 	0) {
		this._tool.removeSprite = true;
		this.endAnimation();
		$gameSystem._eventDataToolRequestRemoveSprite = true;
	};		
};

//==============================
// * Update Tool Wait
//==============================
ToolEvent.prototype.updateToolWait = function() {
    this._tool.wait--;
	if (this._tool.wait <= 0) {
		if (this._tool.animationID1 > 0) {this.playToolAnimation()};
	};		
};

//==============================
// * play Tool Animation
//==============================
ToolEvent.prototype.playToolAnimation = function() {
    this.requestAnimation(this._tool.animationID1)
};

//==============================
// * Targets
//==============================
ToolEvent.prototype.targets = function() {
   return SceneManager._scene._spriteset._characterSprites
};

//==============================
// * Update Collision
//==============================
ToolEvent.prototype.updateCollision = function() {
    for (var i = 0; i < this.targets().length; i++) {
		 var target = this.targets()[i]._character;
	     if (target && this.canCollide(target)) {this.executeCollision(target)}; 
	};
};

//==============================
// * Is Already Collided
//==============================
ToolEvent.prototype.isAlreadyCollided = function(target) {
	var coll = false;
	for (var i = 0; i < this._collided.length; i++) {
		if (this._collided[i] === target) {coll = true};
	};
	if (!coll) {this._collided.push(target)};
	return coll
};

//==============================
// * collided XY
//==============================
ToolEvent.prototype.collidedXY = function(target) {
    var bodySize = target.battler() ? target.battler()._ras.bodySize : 0;
    var cxy = [target.x,target.y - bodySize];
    var dx = cxy[0] - this.x;
    var dy = cxy[1] - this.y;
    var dx = dx >= 0 ? Math.max(dx - bodySize,0) : Math.min(dx + bodySize,0);
    var dy = dy >= 0 ? Math.max(dy,0) : Math.min(dy + bodySize,0);
	return this.inRange(dx,dy);
};

//==============================
// * In Range
//==============================
ToolEvent.prototype.inRange = function(dx,dy) {
	var range = this._tool.range;
	var mode = this._tool.area;
	// RHOMBUS
	if (mode === 0) {
	    if (Math.abs(dx) + Math.abs(dy) <= range) {return true};
	// SQUARE
	} else if (mode === 1) { 
		if (Math.abs(dx) <= range && Math.abs(dy) <= range) {return true};
	// LINE
	} else if (mode === 2) {
         if (this._direction === 2) {
             if (dx == 0 && dy >= 0 && dy <= range) {return true};    
		 } else if (this._direction === 8) {
			 if (dx == 0 && dy <= 0 && dy >= -range) {return true};
		 } else if (this._direction === 6) {
			 if (dy == 0 && dx >= 0 && dx <= range) {return true};				
		 } else if (this._direction === 4) {
			 if (dy == 0 && dx <= 0 && dx >= -range) {return true};
		 };
	// FRONT RHOMBUS
	} else if (mode === 3) {
         if (this._direction === 2) {
             if (Math.abs(dx) + Math.abs(dy) <= range && dy >= 0) {return true};    
		 } else if (this._direction === 8) {
			 if (Math.abs(dx) + Math.abs(dy) <= range && dy <= 0) {return true};
		 } else if (this._direction === 6) {
			 if (Math.abs(dx) + Math.abs(dy) <= range && dx >= 0) {return true};				
		 } else if (this._direction === 4) {
			 if (Math.abs(dx) + Math.abs(dy) <= range && dx <= 0) {return true};
		 }; 
	// FRONT SQUARE
	} else if (mode === 4) {
         if (this._direction === 2) {
             if (Math.abs(dx) <= range && dy >= 0 && Math.abs(dy) <= range) {return true};    
		 } else if (this._direction === 4) {
			 if (Math.abs(dx) <= range && dx <= 0 && Math.abs(dy) <= range) {return true};
		 } else if (this._direction === 6) {
			 if (Math.abs(dx) <= range && dx >= 0 && Math.abs(dy) <= range) {return true};				
		 } else if (this._direction === 8) {
			 if (Math.abs(dx) <= range && dy <= 0 && Math.abs(dy) <= range) {return true};
		 };
	// WALL
	} else if (mode === 5) {
         if (this._direction === 2) {
             if (Math.abs(dx) <= range && dy == 0) {return true};    
		 } else if (this._direction === 4) {
			 if (Math.abs(dy) <= range && dx == 0) {return true};
		 } else if (this._direction === 6) {
			 if (Math.abs(dy) <= range && dx == 0) {return true};				
		 } else if (this._direction === 8) {
			 if (Math.abs(dx) <= range && dy == 0) {return true};
		 };
	// CROSS
	} else if (mode === 6) {
         if (Math.abs(dx) <= range && dy == 0) {return true};
         if (Math.abs(dy) <= range && dx == 0) {return true}; 		
    };
	return false;
};

//==============================
// * Can Collide
//==============================
ToolEvent.prototype.canCollide = function(target) {
	//if ($gameMap.isEventRunning()) {return false};
//	if ($gameSystem.isAbsMode() && target._user.isFollower) {return false};
    if (!this._tool.collision) {return false};
	if (this._tool.wait > 0) {return false};
	if (this._tool.duration <= 0) {return false};
	if (this.isJumping()) {return false};
	if (this._erased) {return false};
	if (this._tool.removeSprite) {return false};
	if (target === this) {return false};
	if (!target._user.collision) {return false};
	if (target.needStopNonChronoBattlers()) {return false};
	if ($gameTemp._hookshootPreData.user && $gameTemp._hookshootPreData.user === this.user()) {
		return false;
	};
	if (target._characterName == '') {return false};
	if (target.battler()) {
	   if (target.battler()._ras.disableCollision) {return false};
	   if (!this._tool.autoTarget && !this._tool.ignoreKnockback) {
		   if (target.battler()._ras.collisionD > 0) {return false};
	   };
	   if (target.battler()._ras.hookshotUser[1]) {return false};
	};
	if (target._tool.enabled) {return false};
	if (target._erased) {return false};
	if (target._user.treasure[4] > 0) {return false};
	if (target._user.hookshotTool) {
		return false
	};
	if (target._transparent) {return false};
	if (target._opacity === 0) {return false};
    if (!this.collidedXY(target)) {return false};
	if (this._tool.hookshot.enabled && this.x === this._tool.user.x && this.y === this._tool.user.y) {
		if (this._tool.waitD) {
		   this._tool.duration = 4;
		   this._tool.waitD = false;
		};
        this._tool.hookshot.target = null;
        this._tool.user.battler()._ras.hookshotUser = [false,0,4,null];
		$gameSystem._toolHookshotSprite = [null,null,0];
	}	
	if (!this._tool.multihit) {
		if (this.isAlreadyCollided(target)) {return false};
	};
	if (this.isTreasure(target)) {
		this.collisionTreasure(target);
		return false;
	};	
	if (target._user.isPlayer) {
	    if ($gamePlayer.isInVehicle()) {return false};
		if (!target._user.isLeader && !target.isVisible()) {return false};	
	};
    if (this.canCollideBattler(target)) {
		this.collisionBattler(target,target.battler());
		target.battler()._ras.collisionD = this._tool.collisionD;
		this._tool.autoTarget = false;
		return this._tool.hitSuccess;
	};
	if (this.isCollisionEvent(target)) {return true};
	if (this.isHookshotEvent(target)) {return true};
	return false;
};

//==============================
// * Collision Treasure
//==============================
ToolEvent.prototype.collisionTreasure = function(target) {
	for (var i = 0; i < $gameMap._treasureEvents.length; i++) {
		var event = $gameMap._treasureEvents[i];
	    if (event === target) {$gameMap._treasureEvents.splice(i,1);}
	};		
	this.user().getTreasure(target);
};

//==============================
// * is Treasure
//==============================
ToolEvent.prototype.isTreasure = function(target) {
    if (!target._user.treasure[0]) {return false};
	if (!this.user()._user.isPlayer) {return false};
	if (!this._tool.getTreasure) {return false};
	return true;
};

//==============================
// * is Collision Event
//==============================
ToolEvent.prototype.isCollisionEvent = function(target) {
	if (!$gameSystem.isAbsMode()) {return false};
    if (!target._eventId) {return false};
	if (target._user.collapse[0]) {return false};
	var enable = false
	for (var i = 0; i < target._user.toolCollision.length; i++) {
	     var actionID = target._user.toolCollision[i];
		 if (actionID === this._tool.id) {enable = true};
	};
	return enable;
};

//==============================
// * check Weapon
//==============================
ToolEvent.prototype.checkWeapon = function(battler) {
	if (battler.isEnemy()) {return false};
	if (!this._tool.skill) {return false};
	if (this._tool.id != battler.attackSkillId()) {return false};
	if (!battler.equips()[0]) {return false};
	return true; 
};

//==============================
// * play Hit Animation
//==============================
ToolEvent.prototype.playHitAnimation = function(target) {
	if (this.checkWeapon(this.user().battler())) {
		var animationID = this.user().battler().equips()[0].animationId;
	} else {
	    var animationID = this.item() ? this.item().animationId : this._tool.animationID2;
	};
    if (animationID > 0) {
       target.requestAnimation(animationID);
    };
};

//==============================
// * Collision Sprite
//==============================
ToolEvent.prototype.collisionSprite = function(target,oldHP) {
//	if (this.needKnockbackJumpEffect(target,oldHP)) {target.jump(0,0)}
    this.playHitAnimation(target);
};

//==============================
// * need Knockback Jump Effect
//==============================
ToolEvent.prototype.needKnockbackJumpEffect = function(target,oldHP) {
   if (target._user.hookshotTool) {return false};
   if ($gameSystem.isChronoMode()) {return false};
   if (target.battler().hp >= oldHP) {return false};
   if (!target.battler()._ras._knockback) {return false};
   return true;
};

//==============================
// * Collision Tool
//==============================
ToolEvent.prototype.collisionTool = function(target) {   
   target._trigger = 9;
   target.start();
};

//==============================
// * Collision User
//==============================
ToolEvent.prototype.collisionUser = function(target) {
   target.clearPickUpRas();
};

//==============================
// * set Inverse Direction
//==============================
ToolEvent.prototype.setInverseDirection = function(direction) {
	if (direction === 2) {this.setDirection(8)};
	if (direction === 8) {this.setDirection(2)};
	if (direction === 4) {this.setDirection(6)};
	if (direction === 6) {this.setDirection(4)};	
};

//==============================
// * collision Guard
//==============================
ToolEvent.prototype.collisionGuard = function(char,battler) {
	char.battler()._ras.collisionD = this._tool.collisionD;
    var animationID = Moghunter.ras_guardAnimationID;
	if (animationID) {char.requestAnimation(animationID)};
	if (this._tool.guardReflect) {
        this.executeGuardReflection(char,battler);
	} else {
		if (!this.isPiercing()) {
		    this._tool.duration = 4;
	        battler._ras.collisionD = 5;
		};
	};
};

//==============================
// * setReverseDiagonal
//==============================
ToolEvent.prototype.setReverseDiagonal = function() {
	if (this._user.diagonal[1] === 1) {return 9};
	if (this._user.diagonal[1] === 9) {return 1};
	if (this._user.diagonal[1] === 3) {return 7};
	if (this._user.diagonal[1] === 7) {return 3};
	return 0;
};

//==============================
// * Execute Guard Reflection
//==============================
ToolEvent.prototype.executeGuardReflection = function(char,battler) {
	if (this._user.diagonal[0]) {
        this._user.diagonal[1] = this.setReverseDiagonal();
    } else {
	    this.setDirection(char.direction());
	};
	this._tool.user = char
	this._user.battler = this._tool.user.battler();
};

//==============================
// * target Can Guard
//==============================
ToolEvent.prototype.targetCanGuard = function(char,battler) {
   if (!$gameSystem.isAbsMode()) {return false};
   if (this._tool.ignoreGuard) {return false}
   if (!char.isGuarding()) {return false};
   if (!this.isGuardingDirection(char)) {return false};
   return true;
};

//==============================
// * isGuardingDirection
//==============================
ToolEvent.prototype.isGuardingDirection = function(char) {
	if (this._user.diagonal[0]) {
		if (char.direction() === 2) {
			if (this._user.diagonal[1] === 9) {return true};
			if (this._user.diagonal[1] === 7) {return true};
		} else if (char.direction() === 8) {
			if (this._user.diagonal[1] === 1) {return true};
			if (this._user.diagonal[1] === 3) {return true};			
		} else if (char.direction() === 4) {
			if (this._user.diagonal[1] === 9) {return true};
			if (this._user.diagonal[1] === 3) {return true};		
		} else if (char.direction() === 6) {
			if (this._user.diagonal[1] === 7) {return true};
			if (this._user.diagonal[1] === 1) {return true};			
		};
    } else {
		if (char.direction() === 2 && this.direction() === 8) {return true};
		if (char.direction() === 8 && this.direction() === 2) {return true};
		if (char.direction() === 4 && this.direction() === 6) {return true};
		if (char.direction() === 6 && this.direction() === 4) {return true};
	};
	return false;
};

//==============================
// * Can Collide Battler
//==============================
ToolEvent.prototype.canCollideBattler = function(target) {
	if (!target.battler()) {return false};	
	if (!this.user().battler()) {return false};
	if (target._user.collapse[0]) {return false};
	if (target._erased) {return false};
	if (target.battler()._chrono.defeated[1]) {return false};
	if (target.battler()._chrono.escaped) {return false};
	if (!this.item()) {return false};
	if (this.targetCanGuard(target,target.battler())) {
		this.collisionGuard(target,target.battler());
		return false;
	};
	if (this.isInvunerableAction(target,target.battler())) {
		this.collisionInvunerable(target,false);
		return false;
	};		
	if (!this.inScope(this.user().battler(),target.battler())) {return false};
	return true
};

//==============================
// * available Targets
//==============================
ToolEvent.prototype.availableTargets = function(char,targetMode) {
   if (!char.battler()) {return false};
   if (!$gameMap.isBattlerOnScreen(char,true,true)) {return false};
   if (targetMode === 0) {
       var realTarget = this.user().battler()._chrono.targets[0];
       if (char != realTarget) {return false};
   } else if (targetMode === 1) {   
	   if (!this.collidedXY(char)) {return false};
   };
   if (!this.canCollideBattler(char)) {return false};
   return true;
};

//==============================
// * Force Damage
//==============================
ToolEvent.prototype.forceDamage = function(targetMode) {
    for (var i = 0; i < this.targets().length; i++) {
		 var target = this.targets()[i]._character;		
	     if (this.availableTargets(target,targetMode)) {
				if (targetMode === 1) {
				     if (this.collidedXY(target)) {
						 this.collisionBattler(target,target.battler());
				         target.battler()._ras.collisionD = this._tool.collisionD; 
					 };	
				} else if (targetMode === 2) {
				 
				     this.collisionBattler(target,target.battler());
				     target.battler()._ras.collisionD = this._tool.collisionD;					 
					 
				} else { 
				     var realTarget = this.user().battler()._chrono.targets[0];
				     if (target === realTarget) {
						 this.collisionBattler(target,target.battler());
				         target.battler()._ras.collisionD = this._tool.collisionD; 
					 };					 
				};
			    if (Imported.MOG_CharPoses) {target.updateSetPose()};
		 }; 
	};
};

//==============================
// * Is Invunerable Action
//==============================
ToolEvent.prototype.isInvunerableAction = function(target,battler) {
	if (battler._ras.invunerable && this.user() != target) {return true};
	var invunerable = false;
	for (var i = 0; i < battler._ras.invunerableActions.length; i++) {
	     var actionID = Number(battler._ras.invunerableActions[i]);
		 if (actionID === this._tool.id) {invunerable = true;break};
	};
	return invunerable;
};

//==============================
// * Item
//==============================
ToolEvent.prototype.item = function() {
	if (this._tool.skill) {return this._tool.skill};
	if (this._tool.item) {return this._tool.item};
	return null;
};

//==============================
// * Is Friend
//==============================
ToolEvent.prototype.isFriend = function(user,target) {
	if (user.isEnemy() && target.isEnemy()) {return true};
	if (user.isActor() && target.isActor()) {return true};
	return false;
};

//==============================
// * Is Opponent
//==============================
ToolEvent.prototype.isOpponent = function(user,target) {
	if (user.isEnemy() && target.isActor()) {return true};
	if (user.isActor() && target.isEnemy()) {return true};
	return false;
};

//==============================
// * In Scope
//==============================
ToolEvent.prototype.inScope = function(user,target) {
	var sOpponent = [1, 2, 3, 4, 5, 6];
	var sFriend = [7, 8, 9, 10, 11];
	var scope = this.item().scope;
	var scopeOpponent = sOpponent.contains(scope) ? true : false;
	var scopeFriend = sFriend.contains(scope) ? true : false;
	if (scopeOpponent && this.isOpponent(user,target)) {
		if ($gameSystem.isChronoMode()) {
		    if (target._chrono.deadTurn) {return false};
		} else {
		    if (target.isDead()) {return false};
		};
	    return true;
    } else if (scopeFriend && this.isFriend(user,target)) {
        if ((scope === 9 || scope === 10)) {
	        if (!target.isDead()) {return false};
		} else {
			if (target.isDead()) {return false};
	    };
	    return true;	
	} else if (this._tool.selfDamage) {
		if (!$gameSystem.isChronoMode() && target.isDead()) {
			return false;
		}		
		return true;
    };
    return false;
};

//==============================
// * Execute Damage
//==============================
ToolEvent.prototype.executeDamage = function(target) {
   var subject = this.user().battler(); 
   var action = new Game_Action(subject);
   if (!subject || !target) {return};
   action.setAbsSubject(subject)
   if (this._tool.skill) {
       action.setSkill(this._tool.skill.id);
   } else {
	   action.setItem(this._tool.item.id);
   };
   action.applyCN(target,this._coopMembers);
   target.startDamagePopup();
   if (this.item().damage.type > 4) {
	   this.user().battler().startDamagePopup();
   };
   if ($gameSystem.isNonBattleMode() && target.isActor() && target.isDead()) {
	   target.setHp(1);
   };
};

//==============================
// * Dead Effect For Actor
//==============================
ToolEvent.prototype.deadEffectActor = function(char,battler) {
	battler._ras.charge.time = 0;
	battler._ras.charge.time2 = 0;
	battler._ras.charge.charging = false;	
	if (battler._ras.hookshotUser[0]) {
	    $gameSystem._toolHookshotSprite = [null,null,0];
    };
	if (!$gameSystem.isChronoMode()) {
		if ($gameParty.leader()._actorId === battler._actorId) {
			 $gameChrono.selectNextActor();
			 if ($gameParty.leader().isDead()) {this.prepareGameOver(char,battler)};
			 if (Imported.MOG_PartyHud) {$gameSystem._partyHudData[1] = true};	
		};
	};	
};

//==============================
// * prepare Game Over 
//==============================
ToolEvent.prototype.prepareGameOver = function(char,battler) {
 
};

//==============================
// * Dead Effect For Enemy
//==============================
ToolEvent.prototype.deadEffectEnemy = function(char,battler) {
	if (!$gameSystem.isChronoMode()) {
		if (Imported.MOG_BossHP && battler._bosshp_meter) {$gameChrono.checkBossHp()};
		this.setDeadEnemy(char,battler)
	    if (this.user().battler().isActor()) {this.gainExpGold(char,battler)};
	};
};

//==============================
// * gain Exp Gold
//==============================
ToolEvent.prototype.gainExpGold = function(char,battler) {
    this.gainExp(char,battler);
	this.gainGold(char,battler);
};

//==============================
// * gain Exp
//==============================
ToolEvent.prototype.gainExp = function(char,battler) {
	var exp = battler.exp();
	if ($gameSystem.isChronoMode()) {
		$gameTemp._chrono.exp += exp;
	} else {
	  var oldLevel = this.user().battler()._level;
	  this.user().battler().gainExpCN(exp);
	  if (this.user().battler()._level > oldLevel) {
		  this.user().requestAnimation(Number(Moghunter.ras_levelAnimationID));		
	  };	  
	};
};

//==============================
// * gain Gold
//==============================
ToolEvent.prototype.gainGold = function(char,battler) {
	var gold = battler.gold() * this.goldRate();
	if ($gameSystem.isChronoMode()) {
		$gameTemp._chrono.gold += gold;
	} else {	
	   $gameParty.gainGold(gold);
	};
};

//==============================
// * gold Rate
//==============================
ToolEvent.prototype.goldRate = function() {
    return $gameParty.hasGoldDouble() ? 2 : 1;
};

//==============================
// * After Dead
//==============================
ToolEvent.prototype.afterDead = function(char,battler) {
	if (this.needRefreshTargets()) {this.refreshTargets()};
    if (battler.isEnemy()) {
		this.deadEffectEnemy(char,battler);
	} else {
		this.deadEffectActor(char,battler); 
	};
	if (!battler._chrono.inAction) {battler.atbClearCN()};
	char.clearActing();
	char.actionTimesClear();
	char.chainActionClear();
	char.chainActionHitClear();
	battler.clearRasCast();
};

//==============================
// * refresh Targets
//==============================
ToolEvent.prototype.refreshTargets = function() {
    var actor = $gameTemp._chronoCom.user[1];
	var skill = $gameTemp._chronoCom.skill;
    if (skill) {
		$gameTemp._chronoCom.targets = $gameChrono.makeTargets(actor,skill)
	};	
	$gameTemp._autoTarget.refresh = true;
};

//==============================
// * need refresh Targets
//==============================
ToolEvent.prototype.needRefreshTargets = function() {
    if (!$gameTemp._autoTarget.enabled) {return false};
	if (!$gameTemp._chronoCom.user) {return false};
	if (!$gameTemp._chronoCom.user[1]) {return false};
	if (!$gameTemp._chronoCom.skill) {return false};
	return true;
};

//==============================
// * Collision Battler
//==============================
ToolEvent.prototype.collisionBattler = function(char,battler) {
	var oldHP = battler._hp;
	if (battler.isEnemy() && $gameSystem.isNonBattleMode()) {
		this._tool.hitSuccess = true;
		if (this.canKnockback(char,battler)) {
			this.executeKnockback(char,battler)
			battler._ras.knockback[1] = 120;
		};
		battler._ras.collisionD = 15;
	} else {
	    this.executeDamage(battler);
		this._tool.hitSuccess = battler.result().isHit();
    };
	if (!battler.result().missed && !battler.result().evaded) {
		this.collisionAfterHitBattler(char,battler,oldHP)
	} else {
		if (!this.user()._user.chainActionHit[3]) {
		   this.user().chainActionHitClear();
           if (!$gameTemp._chaPosesEVRunning) {   
			  this._tool.duration = 1;
			  $gameSystem._chronoMode.turnDuration = 1;		
		   };
	    };
	};
}; 

//==============================
// * collision After Hit Battler
//==============================
ToolEvent.prototype.collisionAfterHitBattler = function(char,battler,oldHP) {
	if (oldHP > battler._hp) {
        if (this.needScreenShake()) {this.executeScreenShake()};
		if (this.canKnockback(char,battler)) {this.executeKnockback(char,battler)};
	};
	if ($gameSystem.isChronoMode() && battler.isActor()) {
		if (this.needClearCooperationSkill(char,battler)) {
			$gameChrono.clearCooperationSkill(battler._chrono.action);
		};		
		$gameTemp._chrono.refreshWindow = true
	};	
	if (battler.isDead()) {this.afterDead(char,battler)};
	this.collisionSprite(char,oldHP);
	if (this.needForceClearCommand()) {this.forceClearCommand()};
	if (this.needChainHitAction(char,battler)) {this.setChainHitAction(char,battler)};
    if (!battler.canMove()) {char._stepAnime = false};
};

 //==============================
// * need Clear Cooperation Skill
//==============================
ToolEvent.prototype.needClearCooperationSkill = function(char,battler) {
	if (!battler.isActor()) {return false};
	if (!battler._chrono.action) {return false};
	if (!$gameChrono.isIncludeCooperationSkill(battler)) {return false};
	if ($gameChrono.isCooperationMeet(battler._chrono.action,false)) {return false};
	return true;
};


 //==============================
// * need Screen Shake
//==============================
ToolEvent.prototype.needScreenShake = function() {
	if (this._tool.shake[0] > 0) {return true};
	return false
};

 //==============================
// * execute Screen Shake
//==============================
ToolEvent.prototype.executeScreenShake = function() {
	 $gameScreen.startShake(this._tool.shake[0], this._tool.shake[1], this._tool.shake[2]);
};

//==============================
// * need Chain Hit Action
//==============================
ToolEvent.prototype.needChainHitAction = function(char,battler) {
	if (!this.user()._user.chainActionHit[3]) {return false};	
	return true
};

 //==============================
// * set Chain Hit Action
//==============================
ToolEvent.prototype.setChainHitAction = function(char,battler) {
	var actionID = this.user()._user.chainActionHit[0];
	this.user()._user.chainActionHit[3] = false;
	this.user()._user.chainActionHit[4] = this;
	if ($gameSystem.isChronoMode()) {
		if ($gameMap.tool(actionID)) {
		    $gameSystem._chronoMode.turnDuration = $gameMap.tool(actionID).durationBase + 1;
		};
		this.user().actC(actionID);
	} else {
		this.user().act(actionID);
	};
	this._tool.duration = 1;
};

//==============================
// * need Force Clear Command
//==============================
ToolEvent.prototype.needForceClearCommand = function() {
   if (!$gameTemp._chronoCom.user) {return false};
   if (!$gameTemp._chronoCom.user[1]) {return false};
   return $gameTemp._chronoCom.user[1].isRestricted();
};
 
//==============================
// * Force Clear Command
//==============================
ToolEvent.prototype.forceClearCommand = function() {
	$gameSystem.clearChronoEscape();
	$gameTemp._chronoCom.user[1].clearActing();
	$gameTemp._chrono.clearCommadPhase = true;
	$gameTemp.clearChronoCommand();
	$gameTemp.clearToolCursor(); 
};
 
//==============================
// * collision Invunerable
//==============================
ToolEvent.prototype.collisionInvunerable = function(target,knockback) {
	target.battler()._ras.collisionD = this._tool.collisionD;
    var animationID = Moghunter.ras_guardAnimationID;
	if (animationID) {target.requestAnimation(animationID)};
}; 
 
//==============================
// * is Hook Shot Event
//==============================
ToolEvent.prototype.isHookshotEvent = function(target) {   
     if (!target._user.hookshotEvent) {return false};
	 if (!this._tool.hookshot.enabled) {return false};
	 if ($gameSystem.isChronoMode()) {return false};
	 if ($gameMap.isLoopHorizontal() || $gameMap.isLoopVertical()) {return false};
	 if (this.direction() === 2) {
		 var ex = target.x;
		 var ey = target.y - 1;
	 } else if (this.direction() === 4) {
		 var ex = target.x + 1;
		 var ey = target.y;		 
	 } else if (this.direction() === 6) {	 
		 var ex = target.x - 1;
		 var ey = target.y;		
	 } else {
		 var ex = target.x;
		 var ey = target.y + 1;		 
	 };
	 if (!$gameMap.isPassable(ex, ey)) {return false};
	 if (this.isCollidedWithCharacters(ex, ey)) {return false}
	 this._tool.hookshot.x = ex;
	 this._tool.hookshot.y = ey;
	 return true
}; 

//==============================
// * collision Hookshot
//==============================
ToolEvent.prototype.collisionHookshot = function(target) {  
 	   this._tool.hookshot.locked = true;
	   $gameTemp._hookshootPreData.refresh = true;
	   $gameTemp._hookshootPreData.user = this.user();
	   $gameTemp._hookshootPreData.tool = this;
	   $gamePlayer.gatherFollowers();
}; 

//==============================
// * Execute Collision
//==============================
ToolEvent.prototype.executeCollision = function(target) {
	if (this.isCollisionEvent(target)) {this.collisionTool(target)};
	if (this.isHookshotEvent(target)) {this.collisionHookshot(target)};	
	if (target === this.user()) {this.collisionUser(target)};
	if (!this.isPiercing()) {this.durationOne()};
    if (target.battler()) {this.setInvunerableDuration(target)};
};

//==============================
// * set Invunerable Duration
//==============================
ToolEvent.prototype.setInvunerableDuration = function(target) {
	this._tool.target = target;
	if ($gameSystem.isChronoMode()) {
	    target.battler()._ras.collisionD = this._tool.collisionD;
	} else {
	    if (target.battler()._ras.knockback[1] > 0) {
		   target.battler()._ras.collisionD = target.battler()._ras.knockback[1] + 2;
	    } else {
		   target.battler()._ras.collisionD = this._tool.collisionD;
	    };
	};
};

//==============================
// * Duration One
//==============================
ToolEvent.prototype.durationOne = function() {
	this._tool.duration = 1;
	if ($gameSystem.isChronoMode()) {
		$gameSystem._chronoMode.turnDuration = 1;
           $gameSystem._chronoMode.turnDuration2 = 1;
	};
};

//==============================
// * Turn Toward Tool
//==============================
ToolEvent.prototype.turnTowardTool = function(target) {
   var newD = target.direction();
   if (this.direction() === 2) {
	   newD = 8;
   } else if (this.direction() === 4) {
	   newD = 6;
   } else if (this.direction() === 6) {
	   newD = 4;
   } else if (this.direction() === 8) {
	   newD = 2;
   };
   target.setDirection(newD)
}; 

//==============================
// * set Knockback Duration
//==============================
ToolEvent.prototype.setKnockbackDuration = function(target,battler) {
   target.clearActing();
   target.battler()._ras.knockback[0] = this._tool.knockbackType;
   target.battler()._ras.knockback[1] = this._tool.knockbackType === 0 ? this._tool.collisionD : 120;
};

//==============================
// * set Knockback Direction
//==============================
ToolEvent.prototype.setKnockbackDirection = function(target,battler) {
	var preD = target.direction();
	if (this._tool.hookshot.enabled && $gameSystem.isAbsMode()) {
		//this.knockbackHookshot(target,battler)
	} else {;
		if (this._tool.knockbackFace) {
			this.turnTowardTool(target);
		} else {
			target.turnTowardCharacter(this)
		};
		if ($gameSystem.isAbsMode()) {
			var d = target.getReverseDirection()
			if (target.canPass(target._x, target._y, d)) {
				if (d === 2) {
					target._y++;
				} else if (d === 8)  {
					target._y--;
				} else if (d === 4)  {
					target._x--;
				} else if (d === 6)  {
				    target._x++;
				};
			};
			target.jump(0,0)
			if (target.battler().isEnemy()) {
			    target.battler()._ras.knockback[1] = this._tool.collisionD;
			};
		};
	};
	if ($gameSystem.isChronoMode() && !target._chrono.dirF) {
		target.turnTowardCharacter(this.user())
	} else {
	    target.setDirection(preD);	
	};
};

//==============================
// * Execute Knockback
//==============================
ToolEvent.prototype.executeKnockback = function(target,battler) {
	this.setKnockbackDuration(target,battler);
    this.setKnockbackDirection(target,battler);	
	target.battler().clearRasCombo();
};	

//==============================
// * Knockback Hookshot
//==============================
ToolEvent.prototype.knockbackHookshot = function(target,battler) {
	target._user.hookshotTool = this; 
    this._tool.hookshot.target = target;
	var distanceX = Math.abs(this.user().deltaXFrom(target._x));
	var distanceY = Math.abs(this.user().deltaYFrom(target._y));
	var d = (distanceX + distanceY - 1)
	var pd = target.direction();
	target.turnTowardCharacter(this.user());
	target._user.hookshotLock.preMoveSpeed = target._moveSpeed;
	target._user.hookshotLock.tool = this;	
	target.setDirection(pd);
	this._tool.hookshot.range = 0;
};
	
//==============================
// * Is Piercing
//==============================
ToolEvent.prototype.isPiercing = function() {
	if (this._tool.duration === 0) {return false};
	if (this._tool.forcingMove != 0) {return false};
	return this._tool.piercing
};

//==============================
// * Update Tool System
//==============================
ToolEvent.prototype.updateToolSystem = function() {
	if (this.needRemoveForcedMoveTool()) {this.removeForcedMoveTool()};
    if (this.needUpdateToolDuration()) {this.updateToolDuration()};
	if (this._tool.wait > 0) {this.updateToolWait()};
	this.updateCollision();
};

//==============================
// * need Update Tool Duration
//==============================
ToolEvent.prototype.needUpdateToolDuration = function() {
    if (this._tool.waitD) {return false};
	if (this._tool.duration === 0) {return false};
	if (this.isJumping()) {return false};
	return true;
};

//==============================
// * Update
//==============================
ToolEvent.prototype.update = function() {
	Game_Event.prototype.update.call(this);
	if (this._tool.active) {this.updateToolSystem()};
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * Update Auto Target
//==============================
Spriteset_Map.prototype.updateAutoTarget = function() {
    this.toolCursor.update();
};

//=============================================================================
// ** Tool Cursor
//=============================================================================
function ToolCursor() {
    this.initialize.apply(this, arguments);
};

ToolCursor.prototype = Object.create(Sprite.prototype);
ToolCursor.prototype.constructor = ToolCursor;

//==============================
// * Initialize
//==============================
ToolCursor.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._nx = 0;
	this._ny = 0;
	this._lagTime = 0
	this._cursorFloat = String(Moghunter.ras_cursorFloat) === "true" ? true : false;
	this._float = [0,0,0];
	this._index = 0;
	this.opacity = 0;
 	this.createCursor();
	this.createHpGauge();
	this.createName();
	this._target = null;
};

//==============================
// * Create Cursor
//==============================
ToolCursor.prototype.createCursor = function() {
    this._cursor = new Sprite(ImageManager.loadRas("CursorTarget"));
	this._cursor.x = Moghunter.ras_cursorX;
	this._cursor.y = Moghunter.ras_cursorY;	
	this._cursor.anchor.x = 0.5;
	this.addChild(this._cursor);
};

//==============================
// * Create Hp Gauge
//==============================
ToolCursor.prototype.createHpGauge = function() {
    this._hpLayout = new Sprite(ImageManager.loadRas("HPGauge_A"));
	this._hpLayout.org = [Moghunter.ras_hpLayoutX,Moghunter.ras_hpLayoutY];
    this._hpLayout.x = this._hpLayout.org[0];
	this._hpLayout.y = this._hpLayout.org[1];	
	this.addChild(this._hpLayout);
	this._hpGaugeImg = ImageManager.loadRas("HPGauge_B");
    this._hpGauge = new Sprite(this._hpGaugeImg);
	this._hpGauge.org = [Moghunter.ras_hpGaugeX + this._hpLayout.x,Moghunter.ras_hpGaugeY + this._hpLayout.y];
    this._hpGauge.x = this._hpGauge.org[0];
	this._hpGauge.y = this._hpGauge.org[1];
	this._hpGauge.hp = 0;
	this._hpGauge.mhp = 0;
	this.addChild(this._hpGauge);	
};
	
//==============================
// * Create Name
//==============================
ToolCursor.prototype.createName = function() {
    this._name = new Sprite(new Bitmap(200,48));
	this._name.anchor.x = 0.5;
	this._name.x = this._cursor.x + Moghunter.ras_cursorTextX;
	this._name.y = this._cursor.y + Moghunter.ras_cursorTextY;
	this._name.bitmap.fontSize = Number(Moghunter.ras_cursorTextSize);
	this.addChild(this._name);
};

//==============================
// * refresh Name
//==============================
ToolCursor.prototype.refreshName = function(target) {
	this._name.bitmap.clear();
	this._name.bitmap.drawText(target.battler().name(),0,0,200,48,"center")
};

//==============================
// * move Sprite
//==============================
ToolCursor.prototype.moveSprite = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / 10);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Enemies
//==============================
ToolCursor.prototype.enemies = function() {
   return $gameMap._enemiesOnScreen;
};

//==============================
// * Actors
//==============================
ToolCursor.prototype.actors = function() {
   return $gameMap._actorsOnScreen;
};

//==============================
// * battlers
//==============================
ToolCursor.prototype.battlers = function() {
   if ($gameTemp._chronoCom.targets.length > 0) {return $gameTemp._chronoCom.targets}
   if ($gameTemp._autoTarget.actionID) {
	   var actionID = $gameTemp._autoTarget.actionID;
	   if (!$gameMap.toolIsExist(actionID)) {return null};
	   var tool = $gameMap.tool(actionID)
	   var item = tool.item ? tool.item : tool.skill;
	   var actor = $gameParty.leader()
	   var targets = $gameChrono.makeTargets(actor,item);
	   return targets;
   } else {   
	   if ($gameTemp._autoTarget.targetType === 0) {
		   return this.enemies();
	   } else { 
		   return this.actors();
	   };
   };
};

//==============================
// * execute Cancel
//==============================
ToolCursor.prototype.executeCancel = function() {
	if (this.battlers().length > 0) {SoundManager.playCancel()};
	this._index = 0;
	this._nx = 0;
	this._ny = 0;
	this.opacity = 0;
	this._target = null;
	this._active = false;
	$gameTemp.clearToolCursor();
	$gameTemp._chronoCom.targetIndex = -1;
	$gameTemp._chronoCom.targets = [];		
	$gameTemp._chrono.buttonLag = 5;	
    this.executeCancelChronoWindows();
};

//==============================
// * execute Cancel Chrono
//==============================
ToolCursor.prototype.executeCancelChronoWindows = function() {
	$gameTemp._autoTarget.enabled = false;
	$gameTemp._chrono.buttonLag = 5;
	if ($gameTemp._chronoCom.index === 0) {
		$gameTemp._chronoCom.phase = 0;
	} else if ($gameTemp._chronoCom.index === 1) {	
		$gameTemp._chronoCom.phase = 2;
		$gameChrono.win()._skillWindow.show();
	} else if ($gameTemp._chronoCom.index === 3) {	
		$gameTemp._chronoCom.phase = 2;
		$gameChrono.win()._itemWindow.show();		
	};
	if ($gameChrono.actor()) {
	    $gameChrono.actor()._chrono.actionTimes = 0;
	    $gameChrono.actor()._chrono.actionPhase = 0;			
        $gameChrono.actor()._chrono.action = null;
	};
};

//==============================
// * execute Selection
//==============================
ToolCursor.prototype.executeSelection = function() {
	SoundManager.playOk();
	this._index = 0;
	this._nx = 0;
	this._ny = 0;
	this.opacity = 0;
	this._target = null;
    if ($gameSystem.isChronoMode()) {
        this.chronoPhaseSelection();
    } else {
	   $gamePlayer._user.autoTarget = $gameTemp._autoTarget.target;
	   $gamePlayer.act($gameTemp._autoTarget.actionID);
    };
	$gameTemp.clearChronoCommand();
	$gameTemp.clearToolCursor();
	$gameTemp._chrono.buttonLag = 5;
};

//==============================
// * chrono Phase Selection
//==============================
ToolCursor.prototype.chronoPhaseSelection = function() {
	if ($gameTemp._chronoCom.index === 0) {
	    $gameTemp._chronoCom.user[1]._chrono.actionTimes = 1;
	    $gameTemp._chronoCom.user[1]._chrono.actionPhase = 0;		
	    $gameTemp._chronoCom.user[1]._chrono.action = $gameTemp._chronoCom.skill;
	    $gameTemp._chronoCom.user[1]._chrono.targets.push($gameTemp._autoTarget.target);
	} else if ($gameTemp._chronoCom.index === 1) {
	    $gameChrono.actor()._chrono.actionTimes = 1;
	    $gameChrono.actor()._chrono.actionPhase = 0;			
		$gameChrono.actor()._chrono.action = $gameChrono.win()._skillWindow.item();
		$gameChrono.actor()._chrono.targets.push($gameTemp._autoTarget.target);
        $gameTemp._chronoCom.toolAction = $gameChrono.win()._skillWindow.tool();
	} else if ($gameTemp._chronoCom.index === 3) {
	    $gameChrono.actor()._chrono.actionTimes = 1;
	    $gameChrono.actor()._chrono.actionPhase = 0;			
		$gameChrono.actor()._chrono.action = $gameChrono.win()._itemWindow.item();
		$gameChrono.actor()._chrono.targets.push($gameTemp._autoTarget.target);	
		$gameTemp._chronoCom.toolAction = $gameChrono.win()._itemWindow.tool();	
	};
	var item = $gameChrono.actor()._chrono.action;
	if (item) {	$gameParty.consumeItem(item)};
	if (item) {	$gameChrono.setCooperationSkill(item)};
	$gameChrono.setCastAction();
	$gameChrono.clearCommandPhase();
};

//==============================
// * next Index
//==============================
ToolCursor.prototype.nextIndex = function(value) {
	SoundManager.playCursor();
	this._index += value;
	this._lagTime = 3;
	if (this._index < 0) {this._index = this.battlers().length -1};
	if (this._index >= this.battlers().length) {this._index = 0};
};

//==============================
// * refresh Position
//==============================
ToolCursor.prototype.refreshPosition = function() {
	this._active = $gameTemp._autoTarget.enabled;
	$gameTemp._autoTarget.refresh = false;	
	if (this.battlers().length === 0) {this.executeCancel();return};
	$gameTemp._autoTarget.index = this._index;
	for (var i = 0; i < this.battlers().length; i++) {
		if (this._index === i) {
			var target = this.battlers()[i];
			if (target) {
				this._target = target;
				$gameTemp._autoTarget.target = target;
		        this._nx = target.screenX();
	            this._ny = target.screenY();
				this.refreshName(target);
				if ($gameTemp._chronoCom.user) {this.refreshDirection(target)};
			};
		};
	};
	if (this._hpGauge && this._target) {
		this._hpLayout.x = this._hpLayout.org[0] - (this._hpLayout.width / 2);;
		this._hpLayout.y = this._hpLayout.org[1];
		this._hpGauge.x = this._hpGauge.org[0] - (this._hpGaugeImg.width / 2);
		this._hpGauge.y = this._hpGauge.org[1];		
		this.refreshHpGauge();
	};
};

//==============================
// * refresh Hp Gauge
//==============================
ToolCursor.prototype.refreshHpGauge = function() {	
    this._hpGauge.hp = this._target.battler().hp;
	this._hpGauge.mhp = this._target.battler().mhp;
    var w = this._hpGaugeImg.width;
	var h = this._hpGaugeImg.height;
	var wr = w * this._hpGauge.hp / this._hpGauge.mhp;
	this._hpGauge.setFrame(0,0,wr,h);
};

//==============================
// * refresh Direction
//==============================
ToolCursor.prototype.refreshDirection = function(target) {
   var user = $gameTemp._chronoCom.user[0];
   user.turnTowardCharacter(target);
   if (target.battler().isEnemy() && target.battler().isDead()) {
      //$gameChrono.clearCommandPhase();
   };
};

//==============================
// * update Command
//==============================
ToolCursor.prototype.updateCommand = function() {
	if (this._lagTime > 0) {this._lagTime--;return	};
    if (Input.isTriggered('ok')) {
		this.executeSelection();
	} else if (Input.isTriggered('cancel')) {
        this.executeCancel();
	} else if (Input.isTriggered('right') || Input.isTriggered('down')) {
		this.nextIndex(1);
	} else if (Input.isTriggered('left') || Input.isTriggered('up')) {
	    this.nextIndex(-1);
	};
};

//==============================
// * update Float
//==============================
ToolCursor.prototype.updateFloat = function() {
   this._float[1]++;
   if (this._float[1] < 4) {return};
   this._float[1] = 0;
   this._float[2]++;
   if (this._float[2] < 15) {
	   this._float[0]--;
   } else if (this._float[2] < 30) {   
       this._float[0]++;
   } else {
	   this._float = [0,0,0];
   };
};

//==============================
// * update Active
//==============================
ToolCursor.prototype.updateActive = function() {
	this.opacity += 25;
	if (this.opacity > 60) {this.updateCommand()};
	if (this._index != $gameTemp._autoTarget.index) {
		this.refreshPosition();
	};
	if (this._cursorFloat) {this.updateFloat()};
 	this.x = this.moveSprite(this.x,this._nx);
	this.y = this.moveSprite(this.y,this._ny+ this._float[0]);
};
 
//==============================
// * Update
//==============================
ToolCursor.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if ($gameTemp._autoTarget.enabled) {
		 this.updateActive();
	} else {
		 this.opacity -= 25;
	};	
	if (this._target) {
        this._nx = this._target.screenX();
	    this._ny = this._target.screenY();
	};	
	if (this.needRefreshCursor()) {this.refreshPosition()};
};

//==============================
// * need Refresh Cursor
//==============================
ToolCursor.prototype.needRefreshCursor = function() {
	if ($gameTemp._autoTarget.enabled != this._active) {return true};
    if ($gameTemp._autoTarget.refresh) {return true};
	if (this._hpGauge && this._target) {
		if (this._hpGauge.hp != this._target.battler().hp) {return true};
		if (this._hpGauge.mhp != this._target.battler().mhp) {return true};
	};
	return false;
};

//=============================================================================
// ** Turn Cursor
//=============================================================================
function TurnCursor() {
    this.initialize.apply(this, arguments);
};

TurnCursor.prototype = Object.create(Sprite.prototype);
TurnCursor.prototype.constructor = TurnCursor;

//==============================
// * Initialize
//==============================
TurnCursor.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this._xOff = Number(Moghunter.ras_cursorActorX);
	this._yOff = Number(Moghunter.ras_cursorActorY);
	this._rSpd = Number(Moghunter.ras_cursorActorR);
	this._bMod = Number(Moghunter.ras_cursorActorB);
	this._opct = Number(Moghunter.ras_cursorActorO);
	this.bitmap = ImageManager.loadRas("CursorActor");
	this._actor = null;
};

//==============================
// * Update
//==============================
TurnCursor.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.visible = $gameTemp._chronoCom.user ? true : false;
	if (this.visible) {
		this.rotation += this._rSpd;
		this.opacity = this._opct;
		this.blendMode = this._bMod;
	    this.x = $gameTemp._chronoCom.user[0].screenX() + this._xOff;
		this.y = $gameTemp._chronoCom.user[0].screenY() + this._yOff;
		if (this._actor != $gameTemp._chronoCom.user[1]) {
		    this.scale.x = 2.00;	
		};
		this._actor = $gameTemp._chronoCom.user[1];
	    if (this.scale.x > 1.00) {this.scale.x -= 0.1}
	} else {
	    this.scale.x = 2.00;
	};
	this.scale.y = this.scale.x;
};

//=============================================================================
// ** HookshotChain
//=============================================================================
function Hookshotchain() {
    this.initialize.apply(this, arguments);
};

Hookshotchain.prototype = Object.create(Sprite.prototype);
Hookshotchain.prototype.constructor = Hookshotchain;

//==============================
// * Initialize
//==============================
Hookshotchain.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._img = ImageManager.loadRas("Hookshot")
	this.createChain();
};

//==============================
// * createChain
//==============================
Hookshotchain.prototype.createChain = function() {
	this._chain = []
    for (var i = 0; i < 12; i++) {
		this._chain[i] = new Sprite(this._img);
		this._chain[i].index = i;
		this._chain[i].anchor.x = 0.5;
		this._chain[i].anchor.y = 0.5;
		this.addChild(this._chain[i])
	};
};

//==============================
// * Update Chain
//==============================
Hookshotchain.prototype.updateChain = function(sprite) {
	var user = $gameSystem._toolHookshotSprite[0];
	var hook = $gameSystem._toolHookshotSprite[1];	
	if (user.direction() === 2 || user.direction() === 8) {
		var fx = 0;
		var fy = user.direction() === 8 ? (-48 - Moghunter.ras_hookshootY) : Moghunter.ras_hookshootY;
		var fx2 = fx;
		var fy2 = fy;
	} else {
		var fx = user.direction() === 4 ? -Moghunter.ras_hookshootX : Moghunter.ras_hookshootX
		var fy = -12 + Moghunter.ras_hookshootY;
		var fx2 = fx;
		var fy2 = 0;		
	};
	var dx = ((hook.screenX() - user.screenX()) - fx2) / this._chain.length;
	var dy = ((hook.screenY() - user.screenY()) - fy2) / this._chain.length;
	sprite.x = user.screenX() + (dx * sprite.index) + fx;
	sprite.y = user.screenY() + (dy * sprite.index) + fy;
	sprite.z = user.screenZ() - 9999;
	this.z = user.screenZ() + 1;
};

//==============================
// * Update
//==============================
Hookshotchain.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if ($gameSystem._toolHookshotSprite[0]) {
		this.visible = true;
		for (var i = 0; i < this._chain.length; i++) {
		    this.updateChain(this._chain[i]);
		};
	} else {
		this.visible = false;
	};
};

//=============================================================================
// ** Game Character Base
//=============================================================================	

//==============================
// * diag X
//==============================
Game_CharacterBase.prototype.diagX = function(d) {
	if (d === 1 || d === 7) {return 4};
	return 6;
};

//==============================
// * diag Y
//==============================
Game_CharacterBase.prototype.diagY = function(d) {
	if (d === 7 || d === 9) {return 8};
	return 2;
};

//==============================
// * move Diagonally
//==============================
var _mog_diagMov_gcharPlayer_moveDiagonally = Game_Character.prototype.moveDiagonally;
Game_Character.prototype.moveDiagonally = function(horz, vert) {
    _mog_diagMov_gcharPlayer_moveDiagonally .call(this,horz, vert);
	if (!this.isMovementSucceeded() && !this._tool.enabled) {this.moveDiagonallyAfter(horz, vert);
	} else {this.getDiagonalDirection(horz, vert)}
};

//==============================
// * set Diagonal Direction
//==============================
Game_Character.prototype.setDiagonalDirection = function(horz, vert) {
  if (horz === 4 && vert === 2) {return 1};
  if (horz === 4 && vert === 8) {return 7};
  if (horz === 6 && vert === 8) {return 9};
  if (horz === 6 && vert === 2) {return 3};
  return 0
};

//==============================
// * get Diagonal Direction
//==============================
Game_Character.prototype.getDiagonalDirection = function(horz, vert) {
  var direction = this.setDiagonalDirection(horz, vert);
  this._user.diagonal = [this.isDiagonal(direction),direction];
};

//==============================
// * move Diagonally After
//==============================
Game_CharacterBase.prototype.moveDiagonallyAfter = function(horz, vert) {
 	var dir = this.canPass(this._x,this._y,horz) ? horz : vert
	this.moveStraight(dir);
	if (this._direction === this.reverseDir(horz)) {
        this.setDirection(horz);
    }
    if (this._direction === this.reverseDir(vert)) {
        this.setDirection(vert);
    };
	if (this.needForceDiagonalDirection()) {this.forceDiagonalbyInput(horz, vert)};
};

//==============================
// * need Force Diagonal Direction
//==============================
Game_CharacterBase.prototype.needForceDiagonalDirection = function() {
	if (!this._user.isLeader) {return false};
	return true;
};
	
//==============================
// * force Diagonal By Input
//==============================
Game_CharacterBase.prototype.forceDiagonalbyInput = function(horz, vert) {
	var d = this.setDiagonalDirection(horz, vert);
	if (d != 0) {this._user.diagonal = [true,d]};
};

//==============================
// * is Diagonal
//==============================
Game_CharacterBase.prototype.isDiagonal = function(d) {
	return (d % 2) === 0 ? false : true;
};

//==============================
// * setDirection
//==============================
var _mog_toolSys_gcharBase_setDirection = Game_CharacterBase.prototype.setDirection;
Game_CharacterBase.prototype.setDirection = function(d) {
    _mog_toolSys_gcharBase_setDirection.call(this,d);
	if (d && this.isDiagonal(d)) {this._user.diagonal = [true,d]};
};

//==============================
// * moveStraight
//==============================
var _mog_toolSys_gcharbase_moveStraight = Game_CharacterBase.prototype.moveStraight;
Game_CharacterBase.prototype.moveStraight = function(d) {
	_mog_toolSys_gcharbase_moveStraight.call(this,d);
	this._user.diagonal = [false,d]
};

//==============================
// * update Move
//==============================
var _mog_toolSys_gchar_base_updateMove = Game_CharacterBase.prototype.updateMove;
Game_CharacterBase.prototype.updateMove = function() {
	_mog_toolSys_gchar_base_updateMove.call(this);
    if (this._user.isPlayer) {this.updateCharacterTreasures()};
};

//==============================
// * update Character Treasures
//==============================
Game_CharacterBase.prototype.updateCharacterTreasures = function() {
	for (var i = 0; i < $gameMap._treasureEvents.length; i++) {
		var event = $gameMap._treasureEvents[i];
		if (this.isTouchOnTreasure(event)) {
			this.getTreasure(event);
			var se = String(Moghunter.ras_treasureSE);
			if (se) {SoundManager.playSoundMX(se)};
			$gameMap._treasureEvents.splice(i,1);
		};
	};
};

//==============================
// * is Touch On Treasure
//==============================
Game_CharacterBase.prototype.isTouchOnTreasure = function(event) {
	if (!event) {return false};
	if (!event._user.treasure[0]) {return false};
	if (event._erased) {return false};
	if (event._x != this._x) {return false};
	if (event._y != this._y) {return false};
	return true;
};

//==============================
// * get Treasure
//==============================
Game_CharacterBase.prototype.getTreasure = function(event) {
	var item = event._user.treasure[0];
	if (item) {
		$gameParty.gainItem(item, 1);
		if (Imported.MOG_TreasurePopup) {
		    $gameSystem._trspupData.push([item,1,event.screenX(),event.screenY()]);
		};
	};
	SoundManager.playSoundMX("Item3")
	event._user.treasure = [null,false,0,0,0];
    event.erase();
};

//==============================
// * is Dashing
//==============================
Game_CharacterBase.prototype.isDashing = function() {
	if (this.battler() && this.battler()._ras.hookshotUser[0]) {return false};
    return this._dashing;
};

//=============================================================================
// ** Game Character
//=============================================================================

//==============================
// * Move Forward
//==============================
var _toolSys_gchar_moveForward = Game_Character.prototype.moveForward;
Game_Character.prototype.moveForward = function() {
	if (this.needMoveFowardDiagonal()) {this.moveForwardDiagonal();return}
	_toolSys_gchar_moveForward.call(this);
};

//==============================
// * Need Move Foward Diagonal
//==============================
Game_Character.prototype.needMoveFowardDiagonal = function() {
	if (!this._tool) {return false};
	if (this._tool.enabled && !this._tool.diagonal) {return false};
	if (!this._user.diagonal[0]) {return false};
    return true;
};

//==============================
// * move BackWard
//==============================
var _mog_chrono_gchar_moveBackward = Game_Character.prototype.moveBackward;
Game_Character.prototype.moveBackward = function() {
	if (this.needMoveFowardDiagonal()) {this.moveBackwardDiagonal();return}
	_mog_chrono_gchar_moveBackward.call(this);
};

//==============================
// * get Reverse Direction
//==============================
Game_Character.prototype.getReverseDirection = function() {
	if (this._direction === 2) {
	    return 8;
	} else if (this._direction === 8) {
		return 2;	
	} else if (this._direction === 4) {
		return 6;					
	} else if (this._direction === 6) {
		return 4;					
	};
};

//==============================
// * move Backward Diagonal
//==============================
Game_Character.prototype.moveBackwardDiagonal = function() {	
    var lastDirectionFix = this.isDirectionFixed();
	var diag = this._user.diagonal;
    this.setDirectionFix(true);
    if (this._user.diagonal[1] === 1) {
		this.moveDiagonally(6,8);
	} else if (this._user.diagonal[1] === 7) {
		this.moveDiagonally(6,2);
	} else if (this._user.diagonal[1] === 9) {	
		this.moveDiagonally(4,2);
	} else if (this._user.diagonal[1] === 3) {
		this.moveDiagonally(4,8);
	};	
	this._user.diagonal = diag;	
    this.setDirectionFix(lastDirectionFix);
};

//==============================
// * Move Forward Diagonal
//==============================
Game_Character.prototype.moveForwardDiagonal = function() {
    if (this._user.diagonal[1] === 1) {
		this.moveDiagonally(4,2);
	} else if (this._user.diagonal[1] === 7) {
		this.moveDiagonally(4,8);
	} else if (this._user.diagonal[1] === 9) {	
		this.moveDiagonally(6,8);
	} else if (this._user.diagonal[1] === 3) {
		this.moveDiagonally(6,2);
	};
	if (!this.isMovementSucceeded() && !this._tool.enabled) {this.moveStraight(this.direction())};
};

//==============================
// * process Move Command
//==============================
var _mog_toolSys_gchar_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function(command) {
	if (this.needProcessMoveCoomandTool()) {this.processMoveCommandTool(command);return};
	_mog_toolSys_gchar_processMoveCommand.call(this,command);
};

//==============================
// * needProcessMoveCoomandTool
//==============================
Game_Character.prototype.needProcessMoveCoomandTool = function() {
	if (!this._tool) {return false};
	if (!this._tool.enabled) {return false};
  	if (this._tool.hookshot.enabled) {return true};
	if (this._tool.boomerang[0]) {return true};  
	return false;
};

//==============================
// * Need Remove Forced Tool
//==============================
Game_Character.prototype.needRemoveForcedMoveTool = function() {
	if (!this._tool.waitD) {return false};
	if (this._tool.forcingMove != 2) {return false};
	if (this.screenX() < this._tool.user.screenX() - 24) {return false};
    if (this.screenX() > this._tool.user.screenX() + 24) {return false};
	if (this.screenY() < this._tool.user.screenY() - 24) {return false};
	if (this.screenY() > this._tool.user.screenY() + 24) {return false};
    return true;
};

//==============================
// * remove Forcing Move Tool
//==============================
Game_Character.prototype.removeForcedMoveTool = function() {
	this._tool.duration = 1;
	this._tool.waitD = false;
	$gameSystem._toolHookshotSprite = [null,null,0];
	if (this._tool.user && this._tool.user.battler()._ras.hookshotUser[0]) {
		this._tool.user.battler().clearActing();
		this._tool.user._moveSpeed = this._tool.user.battler()._ras.hookshotUser[2];
		if (this._tool.hookshot.target) {
		    this._tool.hookshot.target._user.hookshotTool = null;
		}
    	this._tool.user.battler()._ras.hookshotUser = [false,0,4,null];		
	};
};

//==============================
// * process Move Command Tool
//==============================
Game_Character.prototype.processMoveCommandTool = function(command) {
	if (this._tool.boomerang[0]) {
		if (this._tool.boomerang[1] > 0) {
			this._tool.boomerang[1]--;
			this.moveForward();
		} else {
			this.moveTowardCharacter(this._tool.user);
			this._tool.forcingMove = 2;
		};
	} else if (this._tool.hookshot.enabled) {
		if (!this._tool.hookshot.locked) {
			this._directionFix = true;
			if (this._tool.hookshot.range > 0) {
				this._tool.hookshot.range--;
				this.moveForward();
			} else {
				this.moveTowardCharacter(this._tool.user);
				this._tool.forcingMove = 2;
			};
		} else {
			this._tool.forcingMove = 2;
		};
	};
};

//==============================
// * moveTowardCharacterDiagonal
//==============================
Game_Character.prototype.moveTowardCharacterDiagonal = function(character) {
	 var sx = this.deltaXFrom(character.x);
     var sy = this.deltaYFrom(character.y);
     if (sx === 0 && sy === 0) {return};
	 var abs_sx = Math.abs(sx);
     var abs_sy = Math.abs(sy);	 
     if (sx < 0 && sy > 0) {
         this.moveDiagonally(6,8);
	 } else if (sx > 0 && sy > 0) {
         this.moveDiagonally(4,8);
     } else if (sx > 0 && sy < 0 ) {   
         this.moveDiagonally(4, 2);
     } else if (sx < 0 && sy < 0) {
         this.moveDiagonally(6,2);
     } else if (sx < 0) {
         this.moveStraight(6);
     } else if (sx > 0) {
         this.moveStraight(4);
    } else if (sy > 0) {
         this.moveStraight(8);
    } else if (sy < 0) {
         this.moveStraight(2);
	};
	if (this.canTouchTarget(character)) {
		   $gameChrono.executeTouchDamage(this,character) 
	};		
	if (!this.isMovementSucceeded()) {this.moveRandom()};
};

//==============================
// * turnTowardDiagonal
//==============================
Game_Character.prototype.turnTowardDiagonal = function(character) {
	 var sx = this.deltaXFrom(character.x);
     var sy = this.deltaYFrom(character.y);
     if (sx === 0 && sy === 0) {return};
     var sd = Math.abs(sx) - Math.abs(sy);
     var sdx = Math.abs(sd) - Math.abs(sx);
     var sdy = Math.abs(sd) - Math.abs(sy);
	 this._user.diagonal = [false,0];
      if (sx < 0 && sy > 0) {
         if (Math.abs(sx) > Math.abs(sy) && Math.abs(sdx)< Math.abs(sd)) {
            this.setDirection(6);
	     } else if (Math.abs(sx) < Math.abs(sy) && Math.abs(sdy) < Math.abs(sd)) {
            this.setDirection(8);
	     } else {
            this._user.diagonal[1] = this.setDiagonalDirection(6,8);
			 var d = Math.abs(sx) > Math.abs(sy) ? 6 : 8;
			 this.setDirection(d);			
	     };
	  } else if (sx > 0 && sy > 0) {
         if (Math.abs(sx) > Math.abs(sy) && Math.abs(sdx) < Math.abs(sd)) {
            this.setDirection(4);
	     } else if (Math.abs(sx) < Math.abs(sy) && Math.abs(sdy) < Math.abs(sd)) {
            this.setDirection(8);        
         } else {
             this._user.diagonal[1] = this.setDiagonalDirection(4,8);
			 var d = Math.abs(sx) > Math.abs(sy) ? 4 : 8;
			 this.setDirection(d);			 
		 };
      } else if (sx > 0 && sy < 0) {
         if (Math.abs(sx) > Math.abs(sy) && Math.abs(sdx) < Math.abs(sd)) {
            this.setDirection(4);
         } else if (Math.abs(sx) < Math.abs(sy) && Math.abs(sdy) < Math.abs(sd)) {
            this.setDirection(2);
		 } else {                 
            this._user.diagonal[1] = this.setDiagonalDirection(4,2);
			var d = Math.abs(sx) > Math.abs(sy) ? 4 : 2;
			this.setDirection(d);			
		 };
       } else if (sx < 0 && sy < 0) {     
         if (Math.abs(sx) > Math.abs(sy) && Math.abs(sdx) < Math.abs(sd)) {
            this.setDirection(6);
         } else if (Math.abs(sx) < Math.abs(sy) && Math.abs(sdy) < Math.abs(sd)) {
            this.setDirection(2);
		 } else {  
            this._user.diagonal[1] = this.setDiagonalDirection(6,2);
			var d = Math.abs(sx) > Math.abs(sy) ? 6 : 2;
			this.setDirection(d);
		 };      
      } else if (sx < 0) { 
         this.setDirection(6);
      } else if (sx > 0) {
         this.setDirection(4);
      } else if (sy > 0) { 
         this.setDirection(8);
      } else if (sy < 0) { 
         this.setDirection(2);
      };   
      this._user.diagonal[0] = this._user.diagonal[1] != 0 ? true : false;
};

//==============================
// * need Move Toward Diagonal
//==============================
Game_Character.prototype.needMoveTowardDiagonal = function(character) {
     if (!this._tool) {return false};
     if (this._tool.enabled) {return true};
	 if (this.battler()) {return true;};
     return false;
};

//==============================
// * Turn Diagonal Left
//==============================
Game_Character.prototype.turnDiagonalLeft = function() {
	if (this._user.diagonal[0]) {
	    if (this._user.diagonal[1] === 1) {
		    this.setDirection(2);
		} else if (this._user.diagonal[1] === 3) {
		    this.setDirection(6);
		} else if (this._user.diagonal[1] === 7) {	
		    this.setDirection(4);
		} else if (this._user.diagonal[1] === 9) {
			this.setDirection(8);
		};
		this._user.diagonal = [false,0];
    } else {
		if (this.direction() === 2) {
			this._user.diagonal = [true,3];
		} else if (this.direction() === 4) {
			this._user.diagonal = [true,1];	
		} else if (this.direction() === 6) {
			this._user.diagonal = [true,9];	
		} else if (this.direction() === 8) {		
			this._user.diagonal = [true,7];
		};
    };
};

//==============================
// * Turn Diagonal Right
//==============================
Game_Character.prototype.turnDiagonalRight = function() {
	if (this._user.diagonal[0]) {
	    if (this._user.diagonal[1] === 1) {
		    this.setDirection(4);
		} else if (this._user.diagonal[1] === 3) {
		    this.setDirection(2);
		} else if (this._user.diagonal[1] === 7) {	
		    this.setDirection(8);
		} else if (this._user.diagonal[1] === 9) {
			this.setDirection(6);
		};
		this._user.diagonal = [false,0];
    } else {
		if (this.direction() === 2) {
			this._user.diagonal = [true,1];
		} else if (this.direction() === 4) {
			this._user.diagonal = [true,7];	
		} else if (this.direction() === 6) {
			this._user.diagonal = [true,3];	
		} else if (this.direction() === 8) {		
			this._user.diagonal = [true,9];
		};
    };
};

//==============================
// * move Toward Character
//==============================
var _mog_toolSys_gchar_moveTowardCharacter = Game_Character.prototype.moveTowardCharacter;
Game_Character.prototype.moveTowardCharacter = function(character) {
	if (this.needMoveTowardDiagonal(character)) {this.moveTowardCharacterDiagonal(character);return};
    _mog_toolSys_gchar_moveTowardCharacter.call(this,character);
    if (this.canTouchTarget(character)) {
	   $gameChrono.executeTouchDamage(this,character) 
    };
};

//==============================
// * Turn Toward Character
//==============================
var _mog_toolSys_gchar_turnTowardCharacter = Game_Character.prototype.turnTowardCharacter;
Game_Character.prototype.turnTowardCharacter = function(character) {
	if (this.needMoveTowardDiagonal(character)) {this.turnTowardDiagonal(character);return};
    _mog_toolSys_gchar_turnTowardCharacter.call(this,character);
};

//==============================
// * move Random
//==============================
var _mog_toolSys_gchar_moveRandom = Game_Character.prototype.moveRandom;
Game_Character.prototype.moveRandom = function() {
	if (this.battler()) {this.moveRandomBattler();return};	
	_mog_toolSys_gchar_moveRandom.call(this);
};

//==============================
// * move Random Battler
//==============================
Game_Character.prototype.moveRandomBattler = function() {
    var diagonal = Math.randomInt(2);
    if (diagonal === 0) {
        var d = Math.randomInt(4);
		if (d === 0) {
		    var nd = 1;
		} else if (d === 1) {
			var nd = 3;
		} else if (d === 2) {
		    var nd = 7;
		} else if (d === 3) {
		    var nd = 9;
		};
		this._user.diagonal = [true,nd];
		this.moveForward();
    } else {
		var d = 2 + Math.randomInt(4) * 2;
		if (this.canPass(this.x, this.y, d)) {
			this.moveStraight(d);
		};
	};
};

//==============================
// * Turn Toward Target
//==============================
Game_Character.prototype.turnTowardTarget = function() {
   if (!this.battler()) {return};
   if (!target) {var target = this.getTargetCN()};
   if (!target) {return};	
    this.turnTowardCharacter(target);
};

//==============================
// * Turn Toward Position
//==============================
Game_Character.prototype.turnTowardPosition = function(x,y) {
    var sx = this.deltaXFrom(x);
    var sy = this.deltaYFrom(y);
    if (Math.abs(sx) > Math.abs(sy)) {
        this.setDirection(sx > 0 ? 4 : 6);
    } else if (sy !== 0) {
        this.setDirection(sy > 0 ? 8 : 2);
    };
};

//==============================
// * move to Target
//==============================
Game_Character.prototype.moveToTarget = function(x,y,hPlus,target,through) {  
   if (x === null) {return};
   if (y === null) {return};
   if (!target && !this.battler()) {return}
   if (!target) {var target = this.getTargetCN()};
   if (!target) {return};
   if (!hPlus) {hPlus = 0};
   var prethrough = this._through;
   var predirectionFix = this._directionFix;
   var preDirection = this._direction;
   var through = through != null ? through : false;
   var pos = this.isXYavailableMove(x,y,target,through)
   this._through = false
   this._direction = preDirection
   this._directionFix = true;
   this._x = pos[0];
   this._y = pos[1];
   this.jumpexch(0,0,hPlus);
   this._directionFix = predirectionFix;
   this._through = prethrough;   
};

//==============================
// * Jump Back
//==============================
Game_Character.prototype.jumpBack = function(steps,h) {  
   var target = this.battler()._chrono.targets[0];
   var predirectionFix = this._directionFix;
   this._directionFix = true;  
   if (this._direction === 2 || this._direction === 8) {
	   var x = 0;
	   var y = this._direction === 2 ? -steps : steps;
   } else {
	   var x = this._direction === 6 ? -steps : steps;
	   var y = 0;   
   };
   var pos = this.isXYavailableMove(x,y,target,false)
   this._x = pos[0];
   this._y = pos[1];
   var h = h ? h : 10;
   this.jumpexch(0,0,h);
   this._directionFix = predirectionFix;
};

//==============================
// * teleport To Target
//==============================
Game_Character.prototype.teleportToTarget = function(x,y,target) {  
   if (x === null) {return};
   if (y === null) {return};
   if (!target && !this.battler()) {return};
   if (!target) {var target = this.getTargetCN()};
   if (!target) {return};
   var pos = this.isXYavailableMove(x,y,target,true)
   this.locate(pos[0], pos[1])
};

//==============================
// * get Target CN
//==============================
Game_Character.prototype.getTargetCN = function() {  
    if ($gameSystem.isChronoMode()) {return this.battler()._chrono.targets[0]};
	if (this.battler().isEnemy()) {return $gamePlayer}
	return null
};

//==============================
// * Jump Ex CH
//==============================
Game_CharacterBase.prototype.jumpexch = function(xPlus, yPlus,hPlus) {
    if (Math.abs(xPlus) > Math.abs(yPlus)) {
        if (xPlus !== 0) {
            this.setDirection(xPlus < 0 ? 4 : 6);
        }
    } else {
        if (yPlus !== 0) {
            this.setDirection(yPlus < 0 ? 8 : 2);
        }
    }
    this._x += xPlus;
    this._y += yPlus;
    var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
    this._jumpPeak = 4 + hPlus;
    this._jumpCount = this._jumpPeak * 2;
    this.resetStopCount();
    this.straighten();
};

//==============================
// * Is XY Available Move
//==============================
Game_Character.prototype.isXYavailableMove = function(x,y,target,through) {  
   var pos = [0,0];
   var nx = x;
   var ny = y;   
   pos[0] = target._x + nx;
   pos[1] = target._y + ny;
   var disX2 = Math.abs(pos[0]);
   var disY2 = Math.abs(pos[1]);   
   var absX = pos[0];
   var absY = pos[1];
   this.turnTowardPosition(absX,absY);
   if (!through && !this._tool.active && this.isCollidedWithBattlers(absX, absY)) {
	   if (this._direction === 4 || this._direction === 6) {
		   	 for (var i = 0; i < disX2; i++) {
				 if (this._direction === 4) {
	 		       nx++;
				 } else {
				   nx--; 
				 }
			    pos[0] = target._x + nx;
			    pos[1] = target._y + ny;
			    var absX = pos[0];
			    var absY = pos[1];			
			    if (!through && !this.isCollidedWithBattlers(absX, absY)) {break};
			 };
	   } else {
		   	 for (var i = 0; i < disY2; i++) {
				 if (this._direction === 8) {
	 		       ny++;
				 } else {
				   ny--; 
				 }
			    pos[0] = target._x + nx;
			    pos[1] = target._y + ny;
			    var absX = pos[0];
			    var absY = pos[1];			
			    if (!through && !this.isCollidedWithBattlers(absX, absY)) {break};
			 };		   
	   };
   }
   return pos;
};

//==============================
// * Is XY Available Jump 
//==============================
Game_Character.prototype.isXYavailableJump = function(x,y,target) {  
   var pos = [0,0];
   var nx = x;
   var ny = y;   
   pos[0] = target._x - this._x + nx;
   pos[1] = target._y - this._y + ny;
   var disX2 = Math.abs(pos[0]);
   var disY2 = Math.abs(pos[1]);   
   var absX = this._x + pos[0];
   var absY = this._y + pos[1];
   this.turnTowardPosition(absX,absY);
   if (this.isCollidedWithBattlers(absX, absY)) {
	   if (this._direction === 4 || this._direction === 6) {
		   	 for (var i = 0; i < disX2; i++) {
				 if (this._direction === 4) {
	 		       nx++;
				 } else {
				   nx--; 
				 }
			    pos[0] = target._x - this._x + nx;
			    pos[1] = target._y - this._y + ny;
			    var absX = this._x + pos[0];
			    var absY = this._y + pos[1];			
			    if (!this.isCollidedWithBattlers(absX, absY)) {break};
			 };
	   } else {
		   	 for (var i = 0; i < disY2; i++) {
				 if (this._direction === 8) {
	 		       ny++;
				 } else {
				   ny--; 
				 }
			    pos[0] = target._x - this._x + nx;
			    pos[1] = target._y - this._y + ny;
			    var absX = this._x + pos[0];
			    var absY = this._y + pos[1];			
			    if (!this.isCollidedWithBattlers(absX, absY)) {break};
			 };		   
	   };
   }
   return pos;
};
   
 //==============================
// * turn Toward Target
//==============================
Game_Character.prototype.turnTowardTarget = function(target) {    
   var target = target ? target : this.battler()._chrono.targets[0];
   this.turnTowardCharacter(target);
};

//==============================
// * is Collide With Battlers
//==============================
Game_Character.prototype.isCollidedWithBattlers = function(x,y) {  
    var collided = false;
	var target = this.battler()._chrono.targets[0];
	for (var i = 0; i < $gameMap.players().length; i++) {
	    var char = $gameMap.players()[i];
		if (char != this && target != char) {
		   if (char._x === x && char._y === y) {collided = true};
		};
	};
	for (var i = 0; i < $gameMap.enemiesF().length; i++) {
		var char = $gameMap.enemiesF()[i];	
		if (char != this && !char.battler().isDead() && target != char) {
		   if (char._x === x && char._y === y) {collided = true};
		};
	};
	return collided;
};

//==============================
// * jump to Position
//==============================
Game_Character.prototype.jumpToPosition = function(x,y) {  
   var prethrough = this._through;     
   var disX = x - this._x;
   var disY = y - this._y;
   this.jump(disX,disY);
   this._through = prethrough;
};

//==============================
// * jump to Character
//==============================
Game_Character.prototype.jumpToCharacter = function(target,projectile,d) {  
   var prethrough = this._through;     
   var preDirection = this._direction;
   this.jumpToCharacterZero(target,projectile,d)
   this._through = prethrough;
};

//==============================
// * jump to Character Front
//==============================
Game_Character.prototype.jumpToCharacterFront = function(target,projectile,d) {  
   this.turnTowardCharacter(target);
   if (this._direction === 2) {
	   var ex = 0;
	   var ey = -1;
   } else if (this._direction === 4) {
	   var ex = 1;
	   var ey = 0;	   
   } else if (this._direction === 6) {
	   var ex = -1;
	   var ey = 0;   
   } else if (this._direction === 8) {	   	   
	   var ex = 1;
	   var ey = 0;
   };
   var disX = target._x - this._x + ex;
   var disY = target._y - this._y + ey;
   this._through = false;
   if (this.jumpCanPass(disX,disY,this._direction)) {
	   this.jump(disX,disY);
   } else {
	   this.jumpToCharacterZero(target,projectile,d);
   };
};

//==============================
// * jump to Character Zero
//==============================
Game_Character.prototype.jumpToCharacterZero = function(target,projectile,d) {  
   var disX = target._x - this._x;
   var disY = target._y - this._y;
   if (projectile) {
       this.jumpProjectile(disX,disY);
   } else {
	   this.jump(disX,disY);
   };
};

//==============================
// * jump Can Pass
//==============================
Game_CharacterBase.prototype.jumpCanPass = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
	if (d === 2) {x3 = x; y3 = y + 1;	
	} else if (d === 4) {x3 = x - 1;y3 = y;		
	} else if (d === 6) {x3 = x + 1;y3 = y;	
	} else {x3 = x;y3 = y - 1;
	};
    if (!$gameMap.isValid(x2, y2)) {
        return false;
    };
    if (this.isThrough() || this.isDebugThrough()) {
        return true;
    };
    if (!$gameMap.isPassable(x3, y3)) {
        return false;
    };
    if (this.isCollidedWithCharacters(x2, y2)) {
        return false;
    };
    return true;
};

//==============================
// * Jump Projectile
//==============================
Game_CharacterBase.prototype.jumpProjectile = function(xPlus, yPlus) {
    if (Math.abs(xPlus) > Math.abs(yPlus)) {
        if (xPlus !== 0) {
            this.setDirection(xPlus < 0 ? 4 : 6);
        }
    } else {
        if (yPlus !== 0) {
            this.setDirection(yPlus < 0 ? 8 : 2);
        }
    }
    this._x += xPlus;
    this._y += yPlus;
    var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
    this._jumpPeak = 7;
    this._jumpCount = this._jumpPeak * 2;
    this.resetStopCount();
    this.straighten();
};

//==============================
// * max Pattern ABS
//==============================
Game_CharacterBase.prototype.maxPatternABS = function() {
     return this._user.poseMaxPattern
};

//==============================
// * set Walk Around
//==============================
Game_CharacterBase.prototype.setWalkAround = function(r,x,y) {
	var r = r ? r : 2;	
	var x = x ? x : this._x;
	var y = y ? y : this._y;
	this._user.walkAround = [true,Number(x),Number(y),Number(r)];
};

//==============================
// * need Walk Around
//==============================
Game_CharacterBase.prototype.needWalkAround = function() {
	if (!this._user.walkAround[0]) {return false};
	if (this._tool.active) {return false};
	if ($gameSystem.isChronoMode()) {return false};
	var disX = Math.abs(this._user.walkAround[1] - this._x);
	var disY = Math.abs(this._user.walkAround[2] - this._y);
	if (disX >= this._user.walkAround[3]) {return true};
	if (disY >= this._user.walkAround[3]) {return true};	
	return false;
};

//==============================
// * walk Around
//==============================
Game_CharacterBase.prototype.walkAround = function() {
	 var sx = this.deltaXFrom(this._user.walkAround[1]);
     var sy = this.deltaYFrom(this._user.walkAround[2]);
     if (sx === 0 && sy === 0) {return};
	 var abs_sx = Math.abs(sx);
     var abs_sy = Math.abs(sy);	 
     if (sx < 0 && sy > 0) {
         this.moveDiagonally(6,8);
	 } else if (sx > 0 && sy > 0) {
         this.moveDiagonally(4,8);
     } else if (sx > 0 && sy < 0 ) {   
         this.moveDiagonally(4, 2);
     } else if (sx < 0 && sy < 0) {
         this.moveDiagonally(6,2);
     } else if (sx < 0) {
         this.moveStraight(6);
     } else if (sx > 0) {
         this.moveStraight(4);
    } else if (sy > 0) {
         this.moveStraight(8);
    } else if (sy < 0) {
         this.moveStraight(2);
	};
	if (!this.isMovementSucceeded()) {this.moveRandom()};	 
};

//==============================
// * teleport Random
//==============================
Game_CharacterBase.prototype.teleportRandom = function(value) {
     var rg = Math.randomInt(value);
	 var rd = Math.randomInt(2);
	 var rgX = rd === 0 ? rg : -rg;
	 var rg = Math.randomInt(value);
	 var rd = Math.randomInt(2);
	 var rgY = rd === 0 ? rg : -rg;
	 var x = this._x + rgX;
	 var y = this._y + rgY;
	 this.locate(x, y)
};

//==============================
// * teleport Random X
//==============================
Game_CharacterBase.prototype.teleportRandomX = function(value) {
     var rg = Math.randomInt(value);
	 var rd = Math.randomInt(2);
	 var rgX = rd === 0 ? rg : -rg;
	 var x = this._x + rgX;
	 var y = this._y;
	 this.locate(x, y)
};

//==============================
// * teleport Random Y
//==============================
Game_CharacterBase.prototype.teleportRandomY = function(value) {
     var rg = Math.randomInt(value);
	 var rg = Math.randomInt(value);
	 var rd = Math.randomInt(2);
	 var rgY = rd === 0 ? rg : -rg;
	 var x = this._x;
	 var y = this._y + rgY;
	 this.locate(x, y)
};

//==============================
// * record Org
//==============================
Game_CharacterBase.prototype.recordOrg = function() {
 	this._user.orgX = this._x;
	this._user.orgY = this._y;
};

//==============================
// * move Org
//==============================
Game_CharacterBase.prototype.moveOrg = function(h) {
	var oX = this._user.orgX - this._x;
	var oY = this._user.orgY - this._y;
	if (!h || h === null) {h = 0};
	this.jumpexch(oX,oY,h);
};

//==============================
// * jump Org
//==============================
Game_CharacterBase.prototype.jumpOrg = function() {
	var oX = this._user.orgX - this._x;
	var oY = this._user.orgY - this._y;
	this.jumpexch(oX,oY,10);
};

//==============================
// * teleport Org
//==============================
Game_CharacterBase.prototype.teleportOrg = function() {
    if (this._user.orgX === 0 && this._user.orgY === 0) {return};
    this.locate(this._user.orgX, this._user.orgY)
};

//==============================
// * shield Mode
//==============================
Game_CharacterBase.prototype.shieldMode = function(value) {
	if (!this.battler()) {return}; 
    var enable = String(value) == "true" ? true : false;
    this.battler()._ras.invunerable = enable
};

//==============================
// * collision
//==============================
Game_CharacterBase.prototype.collision = function(value) {
	if (!this.battler()) {return}; 
    var enable = String(value) == "true" ? true : false;
    this._user.collision = enable
};

//==============================
// * random Switches
//==============================
Game_CharacterBase.prototype.randomSwitches = function(switches) {
	if (!switches || switches.length === 0) {return}
	var swt = Math.randomInt(switches.length);
	var eswt = switches[swt]
    for (var i = 0; i < switches.length; i++) {
	     sch = Number(switches[i]);
		 if (sch === eswt) {
			 $gameSwitches.setValue(sch, true);
		 } else {
			 $gameSwitches.setValue(sch, false);
		 };
	};
};

//==============================
// * update Animation
//==============================
var _mog_toolSys_gchar_updateAnimation = Game_CharacterBase.prototype.updateAnimation;
Game_CharacterBase.prototype.updateAnimation = function() {
	if (this.isActing() && this._pattern >= this.maxPatternABS()) {return}
	_mog_toolSys_gchar_updateAnimation.call(this)
};

//=============================================================================
// ** Game Player
//=============================================================================	

//==============================
// * get Input Direction
//==============================
Game_Player.prototype.getInputDirection = function() {
   if ($gameSystem._chronoCom.diagonal) {return Input.dir8};
   return Input.dir4;
};

//==============================
// * is Dashing
//==============================
Game_Player.prototype.isDashing = function() {
	if (!this.battler()) {return false};
	if (this.battler()._ras.hookshotUser[0]) {return false};
    return this._dashing;
};

//==============================
// * execute Move
//==============================
var _mog_diagMov_gplayer_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function(direction) {
	this._diagonal = [false,direction];
	if (this.isDiagonal(direction)) {
		this._user.diagonal = [true,direction];
  		this.moveDiagonally(this.diagX(direction),this.diagY(direction));
		return
	};
	_mog_diagMov_gplayer_executeMove.call(this,direction);
};

//==============================
// * make Encounter Count
//==============================
var _mog_chrono_gplayer_makeEncounterCount = Game_Player.prototype.makeEncounterCount;
Game_Player.prototype.makeEncounterCount = function() {
	if ($gameSystem.isChronoMode()) {return};
    _mog_chrono_gplayer_makeEncounterCount.call(this);
};

//=============================================================================
// ** Game Followers
//=============================================================================	

//==============================
// * Synchronize
//==============================
var _mog_chrono_gfollowers_synchronize = Game_Followers.prototype.synchronize;
Game_Followers.prototype.synchronize = function(x, y, d) {
	if ($gameSystem.isChronoMode()) {return};
	_mog_chrono_gfollowers_synchronize.call(this,x, y, d);
};

//=============================================================================
// ** Window Tool Skill
//=============================================================================	

function Window_ToolSkill() {
    this.initialize.apply(this, arguments);
}

Window_ToolSkill.prototype = Object.create(Window_Selectable.prototype);
Window_ToolSkill.prototype.constructor = Window_ToolSkill;

//==============================
// * Initialize
//==============================
Window_ToolSkill.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._category = '';
    this._data = [];
	this._toolID = [];
	this._toolData = [];
	this._actor = null;
	this.select(0);
	this.activate();
};

//==============================
// * set Category
//==============================
Window_ToolSkill.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
        this.resetScroll();
    };
};

//==============================
// * max Cols
//==============================
Window_ToolSkill.prototype.maxCols = function() {
    return 2;
};

//==============================
// * spacing
//==============================
Window_ToolSkill.prototype.spacing = function() {
    return 48;
};

//==============================
// * Max Items
//==============================
Window_ToolSkill.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * Item
//==============================
Window_ToolSkill.prototype.item = function() {
    var index = this.index();
    return this._data && index >= 0 ? this._data[index] : null;
};

//==============================
// * is Current Item Enabled
//==============================
Window_ToolSkill.prototype.isCurrentItemEnabled = function() {
    return true;
};

//==============================
// * includes
//==============================
Window_ToolSkill.prototype.includes = function(item) {
	var enable = false;
	var abs_mode = false; 
	if (!item) {return false};
    var item_notes = item.note.split(/[\r\n]+/);
        item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
			if (note_data[0].toLowerCase() == "tool id"){
					this._toolID[this.itemIndex] = Number(note_data[1]);
					this.itemIndex++;
					enable = true;
			} else if (note_data[0].toLowerCase() == "abs mode"){
				    abs_mode = true;
			};
	    },this);
    return enable && abs_mode;
};

//==============================
// * max Item List
//==============================
Window_ToolSkill.prototype.makeItemList = function() {
	this.itemIndex = 0;
    if (this._actor) {
        this._data = this._actor.skills().filter(function(item) {
            return this.includes(item);
        }, this);
    } else {
        this._data = [];
    }	
};

//==============================
// * select Last
//==============================
Window_ToolSkill.prototype.selectLast = function() {
    var index = this._data.indexOf($gameParty.lastItem());
    this.select(index >= 0 ? index : 0);
};

//==============================
// * Tool
//==============================
Window_ToolSkill.prototype.tool = function(index) {
    return  $gameMap.tool(this._toolID[index]);
};

//==============================
// * draw Item
//==============================
Window_ToolSkill.prototype.drawItem = function(index) {
    var item = this._data[index];
	item.tool = this.tool(index);
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x, rect.y, rect.width);
    }
};

//==============================
// * draw Item Number
//==============================
Window_ToolSkill.prototype.drawItemNumber = function(item, x, y, width) {
    if (item.tool.itemCost) {
		var itemCost = $dataItems[item.tool.itemCost];
		if (itemCost) {
		    this.drawText(':', x, y, width - this.textWidth('00'), 'right');
            this.drawText($gameParty.numItems(itemCost), x, y, width, 'right');
		};
	} else if (item.tool.mpCost > 0) {
            this.drawText(TextManager.mpA + ' '  + item.tool.mpCost, x, y, width, 'right');
	} else if (item.tool.tpCost > 0) {
            this.drawText(TextManager.tpA + ' '  + item.tool.tpCost, x, y, width, 'right');			
    };
};

//==============================
// * Number Width
//==============================
Window_ToolSkill.prototype.numberWidth = function() {
    return this.textWidth('000');
};

//==============================
// * update Help
//==============================
Window_ToolSkill.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

//==============================
// * Refresh
//==============================
Window_ToolSkill.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

//==============================
// * Set Tool ID
//==============================
Window_ToolSkill.prototype.setToolID = function() {
	var toolID = this._toolID[this._index];
	if (toolID && this._actor) {
        this._actor.equipToolSkillID(this.item().id);
	};
};

//=============================================================================
// ** Scene Tool Skill
//=============================================================================	
function Scene_ToolSkill() {
    this.initialize.apply(this, arguments);
}

Scene_ToolSkill.prototype = Object.create(Scene_Base.prototype);
Scene_ToolSkill.prototype.constructor = Scene_ToolSkill;

//==============================
// * Initialize
//==============================
Scene_ToolSkill.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	this.createBackground();
	this.createHelpWindow();
	this.createWindowList();
};

//==============================
// * create Background
//==============================
Scene_ToolSkill.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

//==============================
// * create Help Windows
//==============================
Scene_ToolSkill.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this.addChild(this._helpWindow);
};

//==============================
// * create Window List
//==============================
Scene_ToolSkill.prototype.createWindowList = function() {
	var w = Graphics.boxWidth;
	var h = Graphics.boxHeight - this._helpWindow.height;
	var x = 0;
	var y = this._helpWindow.height;
    this._windowList = new Window_ToolSkill(x,y,w,h);
	var actor = $gameParty.leader();
	this._windowList.setActor(actor);
	this._windowList.setHelpWindow(this._helpWindow);
	this._windowList.setHandler('ok',       this.equipTool.bind(this));
	this._windowList.setHandler('cancel',   this.popScene.bind(this));
    this.addChild(this._windowList);
};

//==============================
// * Equip Tool
//==============================
Scene_ToolSkill.prototype.equipTool = function() {
	SoundManager.playEquip();
    this._windowList.setToolID();
	SceneManager.pop();
};

//=============================================================================
// ** Window ToolList
//=============================================================================	

function Window_ToolList() {
    this.initialize.apply(this, arguments);
}

Window_ToolList.prototype = Object.create(Window_Selectable.prototype);
Window_ToolList.prototype.constructor = Window_ToolList;

//==============================
// * Initialize
//==============================
Window_ToolList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._category = '';
    this._data = [];
	this._toolID = [];
	this._toolData = [];
	this.setCategory('item')
	this.select(0);
	this.activate()
};

//==============================
// * set Category
//==============================
Window_ToolList.prototype.setCategory = function(category) {
    if (this._category !== category) {
        this._category = category;
        this.refresh();
        this.resetScroll();
    };
};

//==============================
// * max Cols
//==============================
Window_ToolList.prototype.maxCols = function() {
    return 2;
};

//==============================
// * spacing
//==============================
Window_ToolList.prototype.spacing = function() {
    return 48;
};

//==============================
// * Max Items
//==============================
Window_ToolList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * Item
//==============================
Window_ToolList.prototype.item = function() {
    var index = this.index();
    return this._data && index >= 0 ? this._data[index] : null;
};

//==============================
// * is Current Item Enabled
//==============================
Window_ToolList.prototype.isCurrentItemEnabled = function() {
    return true;
};

//==============================
// * includes
//==============================
Window_ToolList.prototype.includes = function(item) {
	if (!item) {return false};
	//if (!$gameParty.canUse(item)) {return false};
    switch (this._category) {
    case 'item':
	    var enable = false;
		var abs_mode = false;
        if (DataManager.isItem(item)) {;
      	var item_notes = item.note.split(/[\r\n]+/);
            item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
            if (note_data[0].toLowerCase() == "tool id"){
                this._toolID[this.itemIndex] = Number(note_data[1]);
				this.itemIndex++;
				enable = true;
			} else if (note_data[0].toLowerCase() == "abs mode"){
				    abs_mode = true;
			};
	      },this);
		};
		return enable && abs_mode;
    default:
        return false;
    }
};

//==============================
// * max Item List
//==============================
Window_ToolList.prototype.makeItemList = function() {
    this.itemIndex = 0;
    this._data = $gameParty.allItems().filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) {
        this._data.push(null);
    };
};

//==============================
// * select Last
//==============================
Window_ToolList.prototype.selectLast = function() {
    var index = this._data.indexOf($gameParty.lastItem());
    this.select(index >= 0 ? index : 0);
};

//==============================
// * Tool
//==============================
Window_ToolList.prototype.tool = function(index) {
    return  $gameMap.tool(this._toolID[index]);
};

//==============================
// * draw Item
//==============================
Window_ToolList.prototype.drawItem = function(index) {
    var item = this._data[index];
	item.tool = this.tool(index);
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x, rect.y, rect.width);
    }
};

//==============================
// * draw Item Number
//==============================
Window_ToolList.prototype.drawItemNumber = function(item, x, y, width) {
    if (item.tool.itemCost) {
		var itemCost = $dataItems[item.tool.itemCost];
		if (itemCost) {
		    this.drawText(':', x, y, width - this.textWidth('00'), 'right');
            this.drawText($gameParty.numItems(itemCost), x, y, width, 'right');
		};
	} else if (item.tool.mpCost > 0) {
            this.drawText(TextManager.mpA + ' '  + item.tool.mpCost, x, y, width, 'right');
	} else if (item.tool.tpCost > 0) {
            this.drawText(TextManager.tpA + ' '  + item.tool.tpCost, x, y, width, 'right');			
    };
};

//==============================
// * Number Width
//==============================
Window_ToolList.prototype.numberWidth = function() {
    return this.textWidth('000');
};

//==============================
// * update Help
//==============================
Window_ToolList.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

//==============================
// * Refresh
//==============================
Window_ToolList.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

//==============================
// * Set Tool ID
//==============================
Window_ToolList.prototype.setToolID = function() {
	var toolID = this._toolID[this._index];
	if (toolID) {
		if ($gameSystem._toolActorMode) {
			var actor = $gameParty.leader();
			if (actor) {actor.equipToolItemID(this.item().id)};
		} else {
			$gameParty.setToolID(toolID);
		};
	};
};

//=============================================================================
// ** Scene ToolMenu
//=============================================================================	
function Scene_ToolMenu() {
    this.initialize.apply(this, arguments);
}

Scene_ToolMenu.prototype = Object.create(Scene_Base.prototype);
Scene_ToolMenu.prototype.constructor = Scene_ToolMenu;

//==============================
// * Initialize
//==============================
Scene_ToolMenu.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	this.createBackground();
	this.createHelpWindow();
	this.createWindowList();
};

//==============================
// * create Background
//==============================
Scene_ToolMenu.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};

//==============================
// * create Help Windows
//==============================
Scene_ToolMenu.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this.addChild(this._helpWindow);
};

//==============================
// * create Window List
//==============================
Scene_ToolMenu.prototype.createWindowList = function() {
	var w = Graphics.boxWidth;
	var h = Graphics.boxHeight - this._helpWindow.height;
	var x = 0;
	var y = this._helpWindow.height;
    this._windowList = new Window_ToolList(x,y,w,h);
	this._windowList.setHelpWindow(this._helpWindow);
	this._windowList.setHandler('ok',       this.equipTool.bind(this));
	this._windowList.setHandler('cancel',   this.popScene.bind(this));
    this.addChild(this._windowList);
};

//==============================
// * equip Tool
//==============================
Scene_ToolMenu.prototype.equipTool = function() {
	SoundManager.playEquip();
    this._windowList.setToolID();
	SceneManager.pop();
};

//==============================
// * com User
//==============================
Game_Chrono.prototype.comUser = function() {
    return $gameTemp._chronoCom.user;
};

//==============================
// * is Command Selection
//==============================
Game_Chrono.prototype.isCommandSelection = function() {
    return this.comUser();
};

//==============================
// * is Main Selection
//==============================
Game_Chrono.prototype.isMainSelection = function() {
    return this.isCommandSelection() && $gameTemp._chronoCom.phase === 0;
};

//==============================
// * is Target Selection
//==============================
Game_Chrono.prototype.isTargetSelection = function() {
    return $gameTemp._autoTarget.enabled;
};

  //==============================
// * targets Selection
//==============================
Game_Chrono.prototype.targetsSelection = function() {
	if ($gameSystem.isChronoMode()) {
		if (!this.comUser()) {return []};
		return $gameTemp._chronoCom.targets;
	};
    return [];
};  

//==============================
// * actor
//==============================
Game_Chrono.prototype.actor = function() {
    if ($gameTemp._chronoCom.user) {return $gameTemp._chronoCom.user[1]};
	return $gamePlayer.battler();
};

//==============================
// * turn Battler
//==============================
Game_Chrono.prototype.turnBattler = function() {
     return $gameSystem._chronoMode.inTurnBattler;
};

//==============================
// * target Arrow
//==============================
Game_Chrono.prototype.targetArrow = function() {
	return	$gameTemp._autoTarget.target
};

//==============================
// * Skill
//==============================
Game_Chrono.prototype.skill = function() {
    return $gameTemp._chronoCom.skill;
};

//==============================
// * in Turn
//==============================
Game_Chrono.prototype.inTurn = function() {
    return $gameSystem._chronoMode.inTurn;
};

//==============================
// * tool Action
//==============================
Game_Chrono.prototype.toolAction = function() {
    return $gameTemp._chronoCom.toolAction
};


//==============================
// * update Commands
//==============================
Game_Chrono.prototype.updateCommands = function() {
    if (this.comUser()) {this.updateCommandSelection()};
};

//==============================
// * update Command Selection
//==============================
Game_Chrono.prototype.updateCommandSelection = function() {
	$gameSystem._chronoEscape.pressed = false;	
	if ($gameTemp._chronoCom.phase === 0) {
		this.updateMainSelection()
	} else if ($gameTemp._chronoCom.phase === 1) {
		
	};
};

//==============================
// * update Main Selection
//==============================
Game_Chrono.prototype.updateMainSelection = function() {	
    if (Input.isTriggered('ok')) {
		this.selectCommand();
	} else if (Input.isTriggered('cancel')) {	
	    this.cancelTurnCom();
	} else if (Input.isRepeated('up') || Input.isRepeated('left')) {
		this.nextComIndex(-1);
	} else if (Input.isRepeated('down') || Input.isRepeated('right')) {
		this.nextComIndex(1);
	} else if (Input.isTriggered('pageup')) {
		this.nextActor(-1);		
	} else if (Input.isTriggered('pagedown')) {
		this.nextActor(1);
	} 
	if (this.canEscape()) {this.commandEscape()};
};

//==============================
// * next Actor
//==============================
Game_Chrono.prototype.nextActor = function(value) {
    var avaliableActors = [];
	for (var i = 0; i < $gameMap.players().length; i++) {
		var actor = $gameMap.players()[i];
		if (this.isUsableActor(actor.battler())) {avaliableActors.push(actor)};		
	};
	var index = this.actor()._chrono.index + value;
	var nextActor = avaliableActors[index];
	if (!nextActor || (nextActor && nextActor.battler() === this.actor())) {
		if (value > 0) {
			for (var i = avaliableActors.length; i >= 0; i--) {
				 var actor = avaliableActors[i];
				 if (actor && actor.battler() != this.actor()) {
					nextActor = actor;
				 };		
			};
		} else {
			for (var i = 0; i < avaliableActors.length; i++) {
				 var actor = avaliableActors[i];
				 if (actor &&  actor.battler() != this.actor()) {
					nextActor = actor;	
				 };		
			};			
		};			
	};
	if (nextActor) {
		SoundManager.playCursor();
		this.prepareCommandSelectionCN(nextActor.battler(),nextActor);
	} else {
		this.cancelTurnCom();
	};
};

//==============================
// * is Usable Actor
//==============================
Game_Chrono.prototype.isUsableActor = function(battler) {	
    if (!battler.isMaxAtbC()) {return false};
	if (battler.isCastingC()) {return false};
	if (battler.restriction() > 0) {return false};
	if (battler._chrono.action) {return false};
	return true;
};

//==============================
// * select Command
//==============================
Game_Chrono.prototype.selectCommand = function() {	
    if ($gameTemp._chronoCom.index === 0) {
		if (this.canSelectAttackCommand()) {
			this.commandAttack();
		} else {
			SoundManager.playBuzzer();
		};
	} else if ($gameTemp._chronoCom.index === 1) {
	       this.commandSkill(false);
	} else if ($gameTemp._chronoCom.index === 2) {
	       this.commandGuard();
	} else if ($gameTemp._chronoCom.index === 3) {
	     this.commandItem(false);
	};
};

//==============================
// * can Select Attack Command
//==============================
Game_Chrono.prototype.canSelectAttackCommand = function() {
   var actionID = this.comUser()[1]._toolWeaponActionId;	
   if (actionID === 0) {return false};
   if (!$gameMap.toolIsExist(actionID)) {return false};
   var tool = $gameMap.tool(actionID);
   $gameTemp._chronoCom.toolAction = tool;
   if (!tool.skill) {return false};
   $gameTemp._chronoCom.skill = tool.skill;
   return true;
};

//==============================
// * escape
//==============================
Game_Chrono.prototype.escape = function() {	
   return $gameSystem._chronoEscape;
};

//==============================
// * can Escape
//==============================
Game_Chrono.prototype.canEscape = function() {
	if (!this.escape().canEscape) {return false};
	if (this.escape().enabled) {return false};
	if (this.inTurn()) {return false};
	return Input.isPressed(Moghunter.chronoCommandEscapeButton);
};

//==============================
// * is Max Escape Tme
//==============================
Game_Chrono.prototype.isMaxEscapeTime = function() {
    return this.escape().time >= this.escape().maxTime;
};

//==============================
// * command Escape
//==============================
Game_Chrono.prototype.commandEscape = function() {	
     $gameSystem._chronoEscape.pressed = true;
	 $gameSystem._chronoEscape.time += 2;
	 if (this.isMaxEscapeTime()) {this.prepareEscape()};
};

//==============================
// * set Cast Action
//==============================
Game_Chrono.prototype.setCastAction = function() {	
	if (this.toolAction()) {
	     if (this.comUser()[0].isRequiredCast(this.toolAction().id)) {this.comUser()[0].prepareCast(this.toolAction().id)};
	};
};

//==============================
// * command Attack
//==============================
Game_Chrono.prototype.commandAttack = function() {	
    SoundManager.playCursor();
	$gameTemp._chronoCom.phase === 1;
	this.selectAction(this.skill())
	if ($gameTemp._chronoCom.targets.length === 0) {$gameTemp._chronoCom.phase = 0};
};

//==============================
// * command Skill
//==============================
Game_Chrono.prototype.commandSkill = function(cancel) {
    SoundManager.playCursor();
    $gameTemp._chronoCom.phase = 1;
	$gameTemp._chrono.buttonLag = 5;
	this.win()._skillWindow.setActor(this.actor());
	this.win()._skillWindow.show();
	this.win()._skillWindow.activate();
	this.win()._skillWindow.refresh();
    if (cancel) {
		SoundManager.playBuzzer
	} else {
    	SoundManager.playCursor();
		this.win()._skillWindow.select(0);
	};	
};

//==============================

// * command Item
//==============================
Game_Chrono.prototype.commandItem = function(cancel) {
    $gameTemp._chronoCom.phase = 1;
	$gameTemp._chrono.buttonLag = 5;
	this.win()._itemWindow.makeItemList();
	this.win()._itemWindow.show();
	this.win()._itemWindow.activate();
	this.win()._itemWindow.refresh();
    if (cancel) {
		SoundManager.playBuzzer
	} else {
    	SoundManager.playCursor();
		this.win()._itemWindow.select(0);
	};	
};

//==============================
// * get Tool ID
//==============================
Game_Chrono.prototype.getToolId = function(item) {
	var toolID = 0;
	if (item) {
    var item_notes = item.note.split(/[\r\n]+/);
        item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
			if (note_data[0].toLowerCase() == "tool id"){
				toolID = Number(note_data[1]);
			};
	    },this);
	};
    return toolID;
};

//==============================
// * need Selection
//==============================
Game_Chrono.prototype.needSelection = function(item) {
	var tool = $gameMap.tool(this.getToolId(item))
	if (!tool) {return false};
	var scopeSelection = [1,7,9];
	if (!scopeSelection.contains(item.scope)) {return false};
	if (tool.projectile) {return true};
	if (tool.position === 2) {return false};
	return true;
};

//==============================
// * select Action
//==============================
Game_Chrono.prototype.selectAction = function(item) {
	var scopeSelection = [1,7,9];
	var needSelection = scopeSelection.contains(item.scope) ? true : false;
	this._selectionOK = false;
	$gameTemp._chronoCom.skill = item;	 
	if (this.needSelection(item)) {
		$gameTemp._chronoCom.targets = this.makeTargets(this.actor(),this.skill());
		if ($gameTemp._chronoCom.targets  && $gameTemp._chronoCom.targets.length != 0) {
			$gameTemp._chronoCom.phase = 2;
			$gameTemp._autoTarget.enabled = true;
		};
	} else {
		$gameChrono.actor()._chrono.targets = this.makeTargets(this.actor(),item);
		if ($gameChrono.actor()._chrono.targets  && $gameChrono.actor()._chrono.targets.length != 0) {
			$gameChrono.actor()._chrono.actionPhase = 0;
			$gameChrono.actor()._chrono.actionTimes = 1;
			$gameChrono.actor()._chrono.action = item;	
			$gameParty.consumeItem(item);
			var tool = $gameMap.tool(this.getToolId(item))
			if (tool) {
                $gameTemp._chronoCom.toolAction = tool;
			    $gameChrono.setCastAction();
				if (item) {	$gameChrono.setCooperationSkill(item)};	
			};
		    $gameTemp.clearToolCursor();
		    $gameTemp.clearChronoCommand();
			this._selectionOK = true
		};
	};
	if (!$gameTemp._chronoCom.targets || $gameTemp._chronoCom.targets.length === 0) {
		$gameTemp._chronoCom.skill = null;
	};	
}; 

//==============================
// * Make Targets
//==============================
Game_Chrono.prototype.makeTargets = function(battler,item) {
	battler._chrono.targets = [];
	var targets = [];
	var enemiesAlive = [];
	var enemiesDead = [];
	var alliesAlive = [];
	var alliesDead = [];	
	var enemies = battler.isActor() ? $gameMap.enemiesF() : $gameMap.players();
	var allies = battler.isActor() ? $gameMap.players() : $gameMap.enemiesF();
	for (var i = 0; i < enemies.length; i++) {
		if (!enemies[i].battler().isDead()) {
			enemiesAlive.push(enemies[i]);
		} else {
			enemiesDead.push(enemies[i]);
		};
	};	
	for (var i = 0; i < allies.length; i++) {
		if (!allies[i].battler().isDead()) {
			alliesAlive.push(allies[i]);
		} else {
			alliesDead.push(allies[i]);
		};
	};
	var sOpponent = [1, 2, 3, 4, 5, 6];
	var sFriend = [7, 8, 9, 10, 11];
	var scope = item.scope;			
	var scopeOpponent = sOpponent.contains(scope) ? true : false;
	var scopeFriend = sFriend.contains(scope) ? true : false;
    var times = 1;	
	if (scopeFriend) {
		if (scope === 11) { 
		    for (var i = 0; i < allies.length; i++) {
				var abattler = allies[i].battler();
				if (abattler === battler) {targets.push(allies[i])
				};				
			};
		} else if (scope === 9 || scope === 10) {
		    for (var i = 0; i < alliesDead.length; i++) {
				targets.push(alliesDead[i]);
			};			
		} else if (scope === 7 || scope === 8) {
		    for (var i = 0; i < alliesAlive.length; i++) {
				targets.push(alliesAlive[i]);
			};
	    };
	} else {
		if (scope <= 2) {
		    for (var i = 0; i < enemiesAlive.length; i++) {
				targets.push(enemiesAlive[i]);
			};
		} else {
			for (var i = 0; i < scope - 2; i++) {
			     var randIndex = Math.randomInt(enemiesAlive.length);
			     targets.push(enemiesAlive[randIndex]);
			};
			battler._chrono.actionTimes = targets.length;
		};	
	};
    return targets;
};

//==============================
// * command Guard
//==============================
Game_Chrono.prototype.commandGuard = function() {	
    SoundManager.playOk();
	this.actor().atbClearCN();
	this.actor()._ras.guard.chrono = true;
	$gameTemp.clearChronoCommand();
	$gameTemp.clearToolCursor();	
};

//==============================
// * cancel Turn Com
//==============================
Game_Chrono.prototype.cancelTurnCom = function() {	
     SoundManager.playCancel();
	 var datp = this.comUser()[1]._chrono.maxAtb * 70 / 100;
	 this.comUser()[1]._chrono.atb = datp;
	 var preActor = this.comUser()[1];	 
	 $gameTemp.clearChronoCommand();
	 $gameTemp.clearToolCursor();
	 $gameTemp._chrono.buttonLag = 0;
	 for (var i = 0; i < $gameMap.players().length; i++) {
	    var char = $gameMap.players()[i];
		var battler = char.battler();
	    if (battler != preActor && this.canStartCommandCN(battler)) {this.prepareCommandSelectionCN(battler,char)};
	 };
	 $gameTemp._chrono.buttonLag = 5;	 
};

//==============================
// * next Com Index
//==============================
Game_Chrono.prototype.nextComIndex = function(value) {	
    $gameTemp._chronoCom.index += value;
	SoundManager.playCursor();
	if ($gameTemp._chronoCom.index < 0) {$gameTemp._chronoCom.index = 3};
	if ($gameTemp._chronoCom.index > 3) {$gameTemp._chronoCom.index = 0};
};

//=============================================================================
// ** ChronoWindows
//=============================================================================
function ChronoWindows() {
    this.initialize.apply(this, arguments);
};

ChronoWindows.prototype = Object.create(Sprite.prototype);
ChronoWindows.prototype.constructor = ChronoWindows;

//==============================
// * Initialize
//==============================
ChronoWindows.prototype.initialize = function() {
	Sprite.prototype.initialize.call(this);
	this.windowFieldCN = new Sprite();
	this.windowFieldCN.visible = false;
	this.addChild(this.windowFieldCN);
	if (Imported.MOG_BattleHud) {this.create_layout_window()};
    this.createHelpWindow();
	this.createSkillWindow();
	this.createItemWindow();
	this.createCommandWindow();
};

//==============================
// * actor
//==============================
ChronoWindows.prototype.actor = function() {
    return $gameTemp._chronoCom.user[1];
};

//==============================
// * skill
//==============================
ChronoWindows.prototype.skill = function() {
    return $gameTemp._chronoCom.skill
};

//==============================
// * tool Action
//==============================
ChronoWindows.prototype.toolAction = function() {
    return $gameTemp._chronoCom.toolAction;
};

//==============================
// * clear All Windows
//==============================
ChronoWindows.prototype.clearAllWindows = function() {
	 this._skillWindow.hide();
	 this._skillWindow.select(0);
	 this._skillWindow.deactivate();	
	 this._itemWindow.hide();
	 this._itemWindow.select(0);
	 this._itemWindow.deactivate();	
};

//==============================
// ** create Layout Window 
//==============================
ChronoWindows.prototype.create_layout_window = function() {
	if (String(Moghunter.bhud_help_layout) === "true") {
		this._help_layout = new Sprite(ImageManager.loadBHud("Layout_Help"))
		this._help_layout.x = Moghunter.bhud_help_lay_x;
		this._help_layout.y = Moghunter.bhud_help_lay_y;
		this._help_layout.visible = false;
		this.windowFieldCN.addChild(this._help_layout);
	};	
	if (String(Moghunter.bhud_skill_layout) === "true") {

		this._skill_layout = new Sprite(ImageManager.loadBHud("Layout_Skill"))
		this._skill_layout.x = Moghunter.bhud_skill_lay_x;
		this._skill_layout.y = Moghunter.bhud_skill_lay_y;
		this._skill_layout.visible = false;
		this.windowFieldCN.addChild(this._skill_layout);
	};
	if (String(Moghunter.bhud_item_layout) === "true") {
		this._item_layout = new Sprite(ImageManager.loadBHud("Layout_Item"))
		this._item_layout.x = Moghunter.bhud_item_lay_x;
		this._item_layout.y = Moghunter.bhud_item_lay_y;
		this._item_layout.visible = false;
		this.windowFieldCN.addChild(this._item_layout);
	};		
};

//==============================
// * create Help Window
//==============================
ChronoWindows.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this._helpWindow.visible = false;
    this.windowFieldCN.addChild(this._helpWindow);
	if (Imported.MOG_BattleHud) {this.setBattleHudWHelp()};
};

//==============================
// * set Battle hud W Help
//==============================
ChronoWindows.prototype.setBattleHudWHelp = function() {
	this._helpWindow.x = Moghunter.bhud_help_x;
	this._helpWindow.y = Moghunter.bhud_help_y;
	this._helpWindow.org = [this._helpWindow.x,this._helpWindow.y];
	this._helpWindow.org2 = [
	     this._helpWindow.org[0] + Moghunter.bhud_help_slide_x,
		 this._helpWindow.org[1] + Moghunter.bhud_help_slide_y
	];
	this._helpWindow.slide = Moghunter.bhud_help_slide_x === 0 && Moghunter.bhud_help_slide_y === 0 ? false : true;
	this._helpWindow.vis = this._helpWindow.visible;
	this._helpWindow.width = Moghunter.bhud_help_width;
	this._helpWindow.height = Moghunter.bhud_help_height;	
	if (String(Moghunter.bhud_help_layout) === "true") {this._helpWindow.opacity = 0};
};

//==============================
// * create Skill Windows
//==============================
ChronoWindows.prototype.createSkillWindow = function() {
    var wy = this._helpWindow.y + this._helpWindow.height;
    var wh = 32 * 5;
	var ys = Graphics.boxHeight - wh;
    this._skillWindow = new Window_ChronoSkill(0, ys, Graphics.boxWidth, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
	this._skillWindow.visible = false;
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.windowFieldCN.addChild(this._skillWindow);
	if (Imported.MOG_BattleHud) {this.setBattleHudWSkill()};
};

//==============================
// * set Battle Hud WSkill
//==============================
ChronoWindows.prototype.setBattleHudWSkill = function() {
	this._skillWindow.x = Moghunter.bhud_skill_x;
	this._skillWindow.y = Moghunter.bhud_skill_y;
	this._skillWindow.org = [Moghunter.bhud_skill_x,Moghunter.bhud_skill_y];
	this._skillWindow.org2 = [
	     this._skillWindow.org[0] + Moghunter.bhud_skill_slide_x,
		 this._skillWindow.org[1] + Moghunter.bhud_skill_slide_y
	];
	this._skillWindow.slide = Moghunter.bhud_skill_slide_x === 0 && Moghunter.bhud_skill_slide_y === 0 ? false : true;
	this._skillWindow.vis = this._skillWindow.visible;
	this._skillWindow.width = Moghunter.bhud_skill_width;
	this._skillWindow.height = Moghunter.bhud_skill_height;
	if (String(Moghunter.bhud_skill_layout) === "true") {this._skillWindow.opacity = 0};
};

//==============================
// * create Item Windows
//==============================
ChronoWindows.prototype.createItemWindow = function() {
    var wy = this._helpWindow.y + this._helpWindow.height;
    var wh = 32 * 5;
	var ys = Graphics.boxHeight - wh;
    this._itemWindow = new Window_ChronoItem(0, ys, Graphics.boxWidth, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
	this._itemWindow.visible = false;
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.windowFieldCN.addChild(this._itemWindow);
	if (Imported.MOG_BattleHud) {this.setBattleHudWItem()};
};

//==============================
// * set Battle Hud W Item
//==============================
ChronoWindows.prototype.setBattleHudWItem = function() {
	this._itemWindow.x = Moghunter.bhud_item_x;
	this._itemWindow.y = Moghunter.bhud_item_y;
	this._itemWindow.org = [this._itemWindow.x,this._itemWindow.y];
	this._itemWindow.org2 = [
	     this._itemWindow.org[0] + Moghunter.bhud_item_slide_x,
		 this._itemWindow.org[1] + Moghunter.bhud_item_slide_y
	];
	this._itemWindow.slide = Moghunter.bhud_item_slide_x === 0 && Moghunter.bhud_item_slide_y === 0 ? false : true;
	this._itemWindow.vis = this._itemWindow.visible;
	this._itemWindow.width = Moghunter.bhud_item_width;
	this._itemWindow.height = Moghunter.bhud_item_height;	
	if (String(Moghunter.bhud_item_layout) === "true") {this._itemWindow.opacity = 0};
};

//==============================
// * on Skill OK
//==============================
ChronoWindows.prototype.onSkillOk = function() {
	var skill = this._skillWindow.item();
	if (!skill) {SoundManager.playBuzzer();return};
	SoundManager.playCursor();
    $gameChrono.selectAction(skill);
	this._skillWindow.hide();
	if ($gameTemp._chronoCom.targets.length === 0 && $gameChrono.actor()._chrono.targets.length === 0) {
	    if (!$gameChrono._selectionOK) {$gameChrono.commandSkill(true)};
	};	
};

//==============================
// * on Skill Cancel
//==============================
ChronoWindows.prototype.onSkillCancel = function() {
     SoundManager.playCancel();
	 $gameTemp._chronoCom.phase = 0;
	 this._skillWindow.hide();
	 this._skillWindow.select(0);
	 this._skillWindow.deactivate();		 
};

//==============================
// * on Item OK
//==============================
ChronoWindows.prototype.onItemOk = function() {
	var item = this._itemWindow.item();
	if (!item) {SoundManager.playBuzzer();return};
	SoundManager.playCursor();
    $gameChrono.selectAction(item);
	this._itemWindow.hide();
	if ($gameTemp._chronoCom.targets.length === 0 && $gameChrono.actor()._chrono.targets.length === 0) {
	    if (!$gameChrono._selectionOK) {$gameChrono.commandItem(true)};
	};
};

//==============================
// * on Item Cancel
//==============================
ChronoWindows.prototype.onItemCancel = function() {
     SoundManager.playCancel();
	 $gameTemp._chronoCom.phase = 0;
	 this._itemWindow.hide();
	 this._itemWindow.select(0);
	 this._itemWindow.deactivate();
};

//==============================
// * create Command Windows
//==============================
ChronoWindows.prototype.createCommandWindow = function() {
	this._comImg1 = ImageManager.loadRas("Command");
	this._comImg2 = ImageManager.loadRas("Command_list");
	this._comImg3 = ImageManager.loadRas("Command_Arrow");
    this._command1 = new Sprite(this._comImg1);
	this._command1.org = [Moghunter.chronoCommandX,Moghunter.chronoCommandY - 90];
	this._command1.anchor.x = 0.5;
	this._command1.anchor.y = 0.5;
	this._command1.visible = false;
	this.windowFieldCN.addChild(this._command1);
    this._command2 = new Sprite(this._comImg2);
	this._command2.org = [Moghunter.chronoCommandListX,Moghunter.chronoCommandListY];
	this._command2.index = -1;
	this._command2.anchor.x = 0.5;
	this._command2.anchor.y = 0.5;
	this._command2.visible = false;
	this.windowFieldCN.addChild(this._command2);
	this.createComArrow();	
};

//==============================
// * create Com Arrow
//==============================
ChronoWindows.prototype.createComArrow = function() {
    this._comArrow = [];
	for (var i = 0; i < 2; i++) {
		 this._comArrow[i] = new Sprite(this._comImg3);
		 this._comArrow[i].org = [Moghunter.chronoCommandArrowX,Moghunter.chronoCommandArrowY,0,0];
		 this._comArrow[i].anchor.x = 0.5;
		 this._comArrow[i].anchor.y = 0.5;
		 this._comArrow[i].refresh = true;
		 this._comArrow[i].visible = false;
		 this._comArrow[i].slide = [true,0,0,0];

		 this.windowFieldCN.addChild(this._comArrow[i]);
	};
};

//==============================
// * com List Width
//==============================
ChronoWindows.prototype.comListWidth = function() {
    return this._comImg2.width;
};

//==============================
// * com List Height
//==============================
ChronoWindows.prototype.comListHeight = function() {
    return this._comImg2.height / 4; 
};

//==============================
// * comLMLeft
//==============================
ChronoWindows.prototype.comLmLeft = function() {
    return this._command2.x - Math.floor(this.comListWidth() / 2) - 4;
};

//==============================
// * comLMRight
//==============================
ChronoWindows.prototype.comLmRight = function() {
    return this._command2.x + Math.floor(this.comListWidth() / 2) + 4;
};

//==============================
// * comLMBelow
//==============================
ChronoWindows.prototype.comLmBelow = function() {
    return this._command2.y + Math.floor(this.comListHeight() / 2) + 4;
};

//==============================
// * comLMAbove
//==============================
ChronoWindows.prototype.comLmAbove = function() {
    return this._command2.y - Math.floor(this.comListHeight() / 2) - 4;
};

//==============================
// * is Touch Command
//==============================
ChronoWindows.prototype.isTouchCommand = function(x,y) {
   if (x < this.comLmLeft()) {return false};
   if (x > this.comLmRight()) {return false};
   if (y > this.comLmBelow()) {return false};
   if (y < this.comLmAbove()) {return false};
   return true;
};

//==============================
// * update
//==============================
ChronoWindows.prototype.update = function() {
	Sprite.prototype.update.call(this);
    if (this._comImg2.isReady()) {this.updateCommand()};
	if ($gameTemp._chrono.refreshWindow) {this.refreshWindows()};
};

//==============================
// * refresh Window
//==============================
ChronoWindows.prototype.refreshWindows = function() {
    $gameTemp._chrono.refreshWindow = false;
	if (this._skillWindow.active){this._skillWindow.refresh()};
	if (this._itemWindow.active) {this._itemWindow.refresh()};	
};

//==============================
// * update Command
//==============================
ChronoWindows.prototype.updateCommand = function() {
	this.windowFieldCN.visible = true;
	if (Imported.MOG_BattleHud) {this.updateBattleHud()};
	this._command1.visible = this.commandVisible();
	this._command2.visible = this._command1.visible;
    if ( $gameTemp._chronoCom.user) {
		this._command1.x = $gameTemp._chronoCom.user[0].screenX() + this._command1.org[0];
		this._command1.y = $gameTemp._chronoCom.user[0].screenY() + this._command1.org[1] + (this._comImg1.height / 2);
	};
	this._command2.x = this._command1.x + this._command2.org[0];
	this._command2.y = this._command1.y + this._command2.org[1];
	if ($gameTemp._chronoCom.index != this._command2.index) {this.refreshComIndex()};
	if (this._command1.scale.x > 1.00) {
		this._command1.scale.x -= 0.1;
		if (this._command1.scale.x <= 1.00) {this._command1.scale.x = 1.00}
	};
	if (!this._command1.visible) {this._command1.scale.x = 1.5};
	this._command1.scale.y = this._command1.scale.x;
	this._command2.scale.x = this._command1.scale.x;
	this._command2.scale.y = this._command1.scale.y;
	for (var i = 0; i < 2; i++) {
		if (this._comArrow[i].refresh) {
			if (this._comImg3.isReady()) {this.comArrowRefresh(this._comArrow[i],i)};
			return;
		};
		this._comArrow[i].visible = this._command1.visible;
		var xb = this._command2.x + this._comArrow[i].org[0];
		var wb = this._comArrow[i].org[2]
	    if (this._comArrow[i].slide[0]) {this.updateArrowSlide(this._comArrow[i])};
		if (i === 0) {
		    this._comArrow[i].x = xb - wb - this._comArrow[i].slide[1];
		} else {
			this._comArrow[i].x = xb + wb + this._comArrow[i].slide[1];;
		};
		this._comArrow[i].y = this._command2.y + this._comArrow[i].org[1];
		this._comArrow[i].scale.x = this._command1.scale.x;
		this._comArrow[i].scale.y = this._command1.scale.y;
		this._comArrow[i].visible = this._command1.visible;
    };	
};

//==============================
// * update Arrow Slide
//==============================
ChronoWindows.prototype.updateArrowSlide = function(sprite) {
	sprite.slide[3]++;
	if (sprite.slide[3] < 3) {return};
	sprite.slide[3] = 0;
	sprite.slide[2]++;
	if (sprite.slide[2] < 7) {
		sprite.slide[1]++;
	} else if (sprite.slide[2] < 14) {
		sprite.slide[1]--;
	} else {
		sprite.slide[1] = 0;
		sprite.slide[2] = 0;
	};
};

//==============================
// * com Arrow Refresh
//==============================
ChronoWindows.prototype.comArrowRefresh = function(sprite,index) {
	sprite.refresh = false;
	var cw = this.arrowComWidth();
	var ch = this.arrowComHeight();
	var cx = cw * index;
	sprite.setFrame(cx,0,cw,ch);
	sprite.org[2] = (this._comImg1.width / 2) + (this._comImg3.width / 4)
};



//==============================
// * arrow Com Width
//==============================
ChronoWindows.prototype.arrowComWidth = function() {
    return this._comImg3.width / 2;
};

//==============================
// * arrow Com Height
//==============================
ChronoWindows.prototype.arrowComHeight = function() {
    return this._comImg3.height;
};

//==============================
// * arrowLMLeft
//==============================
ChronoWindows.prototype.arrowLmLeft = function(index) {
    return this._comArrow[index].x - Math.floor(this.arrowComWidth() / 2) - 2;
};

//==============================
// * arrowLMRight
//==============================
ChronoWindows.prototype.arrowLmRight = function(index) {
    return this._comArrow[index].x + Math.floor(this.arrowComWidth() / 2) + 2;
};

//==============================
// * arrowLMBelow
//==============================
ChronoWindows.prototype.arrowLmBelow = function(index) {
    return this._comArrow[index].y + Math.floor(this.arrowComHeight() / 2) + 2;
};

//==============================
// * arrowLMBeAbove
//==============================
ChronoWindows.prototype.arrowLmAbove = function(index) {
    return this._comArrow[index].y - Math.floor(this.arrowComHeight() / 2) - 2;
};

//==============================
// * is Touch Arrow Command
//==============================
ChronoWindows.prototype.isTouchArrowCommand = function(index,x,y) {
   if (x < this.arrowLmLeft(index)) {return false};
   if (x > this.arrowLmRight(index)) {return false};
   if (y > this.arrowLmBelow(index)) {return false};
   if (y < this.arrowLmAbove(index)) {return false};
   return true;
};

//==============================
// * command Visible
//==============================
ChronoWindows.prototype.commandVisible = function() {
	if (!$gameTemp._chronoCom.user) {return false};
	if ($gameTemp._chronoCom.phase != 0) {return false};
	return true;
};

//==============================
// * refresh Com Index
//==============================
ChronoWindows.prototype.refreshComIndex = function() {
	this._command2.index = $gameTemp._chronoCom.index;
	var cw = this._comImg2.width;
	var ch = this._comImg2.height / 4;
	var ch2 = ch * $gameTemp._chronoCom.index;
	this._command2.setFrame(0,ch2,cw,ch);
	this._command1.scale.x = 1.50;
	this._command1.scale.y = this._command1.scale.x;
	this._command2.scale.x = this._command1.scale.x;
	this._command2.scale.y = this._command1.scale.y;	
};

//==============================
// ** update Battle Hud
//==============================
ChronoWindows.prototype.updateBattleHud = function() {
	this.updateWindowSlideEffect()
	this.updateLayoutWindow();
};

//==============================
// ** slideWindow
//==============================
ChronoWindows.prototype.slideWindow = function(win,vmode) {
	 var vm = vmode ? win.active : win.visible;
	 if (vm) {
	     var np = [win.org[0],win.org[1]];
		 win.contentsOpacity += 15;	
	 } else {
	     var np = [win.org2[0],win.org2[1]];
		 win.contentsOpacity = 0;	
	 };
	 win.x = this.sprite_move_to(win.x,np[0]);
	 win.y = this.sprite_move_to(win.y,np[1]);	
};

//==============================
// ** updateWindowSlideEffect
//==============================
ChronoWindows.prototype.updateWindowSlideEffect = function() {
	if (this._helpWindow.slide) {this.slideWindow(this._helpWindow,false)};
	if (this._skillWindow.slide){this.slideWindow(this._skillWindow,false)};
	if (this._itemWindow.slide) {this.slideWindow(this._itemWindow,false)};
};	 
	 
//==============================
// ** updateLayoutWindows
//==============================
ChronoWindows.prototype.updateLayoutWindow = function() {
	if (this._help_layout) {
    	this._help_layout.x = Moghunter.bhud_help_lay_x + this._helpWindow.x;
    	this._help_layout.y = Moghunter.bhud_help_lay_y + this._helpWindow.y;
    	this._help_layout.visible = this._helpWindow.visible;
		this._help_layout.opacity = this._helpWindow.contentsOpacity;		
    };	
	if (this._skill_layout) {
    	this._skill_layout.x = Moghunter.bhud_skill_lay_x + this._skillWindow.x;
    	this._skill_layout.y = Moghunter.bhud_skill_lay_y + this._skillWindow.y;
    	this._skill_layout.visible = this._skillWindow.active;
		this._skill_layout.opacity = this._skillWindow.contentsOpacity;
		if (!this._skillWindow.visible) {this._skill_layout.visible = false};
    };	
	if (this._item_layout) {
    	this._item_layout.x = Moghunter.bhud_item_lay_x + this._itemWindow.x;
    	this._item_layout.y = Moghunter.bhud_item_lay_y + this._itemWindow.y;
    	this._item_layout.visible = this._itemWindow.active;
		this._item_layout.opacity = this._itemWindow.contentsOpacity;
		if (!this._itemWindow.visible) {this._item_layout.visible = false};
    };	
};

//==============================
// * Sprite Move To
//==============================
ChronoWindows.prototype.sprite_move_to = function(value,real_value) {
	if (value === real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / 12);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//=============================================================================
// ** Window Chrono Skill
//=============================================================================
function Window_ChronoSkill() {
    this.initialize.apply(this, arguments);
};

Window_ChronoSkill.prototype = Object.create(Window_SkillList.prototype);
Window_ChronoSkill.prototype.constructor = Window_ChronoSkill;

//==============================
// * Initialize
//==============================
Window_ChronoSkill.prototype.initialize = function(x, y, width, height) {
    Window_SkillList.prototype.initialize.call(this, x, y, width, height);
	this._toolID = [];
	this._toolData = [];	
    this.hide();
};

//==============================
// * Show
//==============================
Window_ChronoSkill.prototype.show = function() {
    this.showHelpWindow();
	this.visible = true;
	this.active = true;	
};

//==============================
// * Hide
//==============================
Window_ChronoSkill.prototype.hide = function() {
    this.hideHelpWindow();
	this.visible = false;
	this.active = false;
};

//==============================
// * includes
//==============================
Window_ChronoSkill.prototype.includes = function(item) {
	var enable = false;
	if (!item) {return false};
    var item_notes = item.note.split(/[\r\n]+/);
        item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
			if (note_data[0].toLowerCase() == "tool id"){
					this._toolID[this.itemIndex] = Number(note_data[1]);
					this.itemIndex++;
					enable = true;
			};
	    },this);
    return enable;
};

//==============================
// * Tool
//==============================
Window_ChronoSkill.prototype.tool = function() {
	var actionID = this._toolID[this._index];
	var tool = $gameMap.tool(actionID);
	return tool;
};

//==============================
// * is Enabled
//==============================
Window_ChronoSkill.prototype.isEnabled = function(item) {
	if (!this._actor) {return false}
	if (!this._actor.canUse(item)) {return false};
    if (!$gameChrono.isCooperationMeet(item,true)) {return false};
    return true;
};

//==============================
// * max Item List
//==============================
Window_ChronoSkill.prototype.makeItemList = function() {
	this.itemIndex = 0;
    if (this._actor) {
        this._data = this._actor.skills().filter(function(item) {
            return this.includes(item);
        }, this);
    } else {
        this._data = [];
    };
};

//==============================
// * Update
//==============================
Window_ChronoSkill.prototype.update = function() {
	if ($gameTemp._chrono.buttonLag > 0) {return};
    Window_SkillList.prototype.update.call(this);

};

//=============================================================================
// ** Window Chrono Item
//=============================================================================
function Window_ChronoItem() {
    this.initialize.apply(this, arguments);
}

Window_ChronoItem.prototype = Object.create(Window_ItemList.prototype);
Window_ChronoItem.prototype.constructor = Window_ChronoItem;

//==============================
// * Initialize
//==============================
Window_ChronoItem.prototype.initialize = function(x, y, width, height) {
    Window_ItemList.prototype.initialize.call(this, x, y, width, height);
	this._toolID = [];
	this._toolData = [];		
    this.hide();
};

//==============================
// * is Enabled
//==============================
Window_ChronoItem.prototype.isEnabled = function(item) {
	if (!$gameParty.canUse(item)) {return false}
    if (!$gameChrono.isCooperationMeet(item,true)) {return false};
    return true;
};

//==============================
// * Includes
//==============================
Window_ChronoItem.prototype.includes = function(item) {
	var enable = false
	if (!item) {return false};
	if (!$gameParty.canUse(item)) {return false};
    var item_notes = item.note.split(/[\r\n]+/);
        item_notes.forEach(function(note) {
            var note_data = note.split(' : ')
			if (note_data[0].toLowerCase() == "tool id"){
					this._toolID[this.itemIndex] = Number(note_data[1]);
					this.itemIndex++;
					enable = true;
			};
	    },this);
    return enable;	
};

//==============================
// * Tool
//==============================
Window_ChronoItem.prototype.tool = function() {
	var actionID = this._toolID[this._index];
	var tool = $gameMap.tool(actionID);
	return tool;
};

//==============================
// * Make Item List
//==============================
Window_ItemList.prototype.makeItemList = function() {
	this.itemIndex = 0;
    this._data = $gameParty.allItems().filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) {
        this._data.push(null);
    };
};

//==============================
// * Show
//==============================
Window_ChronoItem.prototype.show = function() {
    this.showHelpWindow();
	this.visible = true;
	this.active = true;	
};

//==============================
// * Hide
//==============================
Window_ChronoItem.prototype.hide = function() {
    this.hideHelpWindow();
	this.visible = false;
	this.active = false;
};

//==============================
// * Update
//==============================
Window_ChronoItem.prototype.update = function() {
	if ($gameTemp._chrono.buttonLag > 0) {return};
    Window_ItemList.prototype.update.call(this);
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_chronoEng_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_chronoEng_pluginCommand.call(this,command, args)
    this.setChronoInterpreter(command, args);
	return true;
};

//==============================
// * command212
//==============================
var _mog_chrono_gint_command212 = Game_Interpreter.prototype.command212;
Game_Interpreter.prototype.command212 = function() {
	if (this._params[0] === 0 && this._eventTool[1]) {
	    this.setCommand212Tool();
	    return	true;
	};
	_mog_chrono_gint_command212.call(this);
	return	true
};

//==============================
// * command215
//==============================
var _mog_chrono_gint_command205 = Game_Interpreter.prototype.command205;
Game_Interpreter.prototype.command205 = function() {
	if (this._params[0] === 0 && this._eventTool[1]) {
	    this.setCommand205Tool();
	    return	true;
	};
	_mog_chrono_gint_command205.call(this);
	return	true
};

//==============================
// * clear
//==============================
var _mog_chrono_gint_clear = Game_Interpreter.prototype.clear;
Game_Interpreter.prototype.clear = function() {
	_mog_chrono_gint_clear.call(this);
	this._eventTool = [false,null];
};

//==============================
// * setup Tool Event
//==============================
Game_Interpreter.prototype.setupToolEvent = function(event) {
	this._eventTool[0] = true;
    if (event._tool && event._tool.enabled) {
		this._eventTool[1] = event;
	} else {
		this._eventTool[1] = null;
	};
};

//==============================
// * set Command 212 Tool
//==============================
Game_Interpreter.prototype.setCommand212Tool = function() {
	this._character = this._eventTool[1];
    if (this._character) {
        this._character.requestAnimation(this._params[1]);
        if (this._params[2]) {
            this.setWaitMode('animation');
        };
    };
};

//==============================
// * set Command 205 Tool
//==============================
Game_Interpreter.prototype.setCommand205Tool= function() {
    $gameMap.refreshIfNeeded();
    this._character = this._eventTool[1];
    if (this._character) {
        this._character.forceMoveRoute(this._params[1]);
        if (this._params[1].wait) {
            this.setWaitMode('route');
        };
    };
};

//==============================
// * user
//==============================
Game_Interpreter.prototype.user = function() {
	 if (this.tool() && this.tool().user()) {return this.tool().user()};
	 return $gamePlayer;
};

//==============================
// * actor
//==============================
Game_Interpreter.prototype.actor = function(actorId) {
	 for (var i = 0; i < $gameMap.players().length; i++) {
	      actor = $gameMap.players()[i];
		  if (actor.battler()._actorId === actorId) {
			  return actor
		  };
	 };
	 return $gamePlayer;
};

//==============================
// * target
//==============================
Game_Interpreter.prototype.target = function() {
     return this.user().battler()._chrono.targets[0];
};

//==============================
// * tool
//==============================
Game_Interpreter.prototype.tool = function() {
     return $gameMap.toolEventOnMap(this._eventId);
};

//==============================
// * tool Event
//==============================
Game_Interpreter.prototype.toolEvent = function() { 
   return this._eventTool[1];
};

//==============================
// * changeHP
//==============================
Game_Interpreter.prototype.changeHp = function(target, value, allowDeath) {
    if (target.isAlive()) {
		if ($gameSystem.isNonBattleMode()) {
			if (target.hp <= -value) {
				value = 1 - target.hp;
			};
		} else { 
			if (!allowDeath && target.hp <= -value) {
				value = 1 - target.hp;
			}	;		
		};
        target.gainHp(value);
        if (target.isDead()) {
            target.performCollapse();
			$gameChrono.selectNextActor();
        };
    };
};

//==============================
// * Set Chrono Interpreter
//==============================
Game_Interpreter.prototype.setChronoInterpreter = function(command, args) {
	var toolEvent = $gameMap.toolEventOnMap(this._eventId);
	if (command === "chrono_mode")  {
			var value = String(args[1]) == "true" ? true : false;
			$gameSystem._chronoMode.enabled = value;
    } else if (command === "tool_collision")  {
		if (toolEvent) {
			var value = String(args[1]) == "true" ? true : false;
			toolEvent._tool.collision = value;
		};
	} else if (command === "tool_turn_end" && $gameChrono.turnBattler())  {
		var char = $gameChrono.turnBattler();
		char.battler()._chrono.actionPhase = 5;
        $gameSystem._chronoMode.turnDuration = 0;
		$gameChrono.prepareMoveBackCN(char,char.battler());
	};
	if (command === "atb_mode")  {
		var value = Number(args[1])
		$gameSystem._chronoMode.waitMode = value;
	};
	if (command === "command_attack")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.attack = value;
	};			
	if (command === "command_shield")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.shield = value;
	};				
	if (command === "command_item")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.item = value;
	};			
	if (command === "command_skill")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.skill = value;
	};		
	if (command === "command_skill_window")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.windowSkill = value;
	};	
	if (command === "command_item_window")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.windowItem = value;
	};	
	if (command === "action_commands")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoCom.attack = value;
		$gameSystem._chronoCom.shield = value;
		$gameSystem._chronoCom.item = value;
		$gameSystem._chronoCom.skill = value;
	};		
	if (command === "set_actor_skill")  {
	    var actorID = Number(args[1]);
		var itemID = Number(args[3]);
		for (var i = 0; i < $gameParty.members().length; i++) {
			var actor = $gameParty.members()[i];
			if (actor._actorId === actorID) {
				actor.equipToolSkillID(itemID);
			};
		};
	} else if (command === "set_actor_item")  {
	    var actorID = Number(args[1]);
		var itemID = Number(args[3]);
		for (var i = 0; i < $gameParty.members().length; i++) {
			var actor = $gameParty.members()[i];
			if (actor._actorId === actorID) {
				actor.equipToolItemID(itemID);
			};
		};			
	};	
	if (command === "set_battler_position")  {
		var indexID = Math.max(Number(args[1]) - 1,0);
		var posX = Number(args[3]);
		var posY = Number(args[5]);
		for (var i = 0; i < $gameMap.players().length; i++) {
			var player = $gameMap.players()[i];
			if (i === indexID && posX && posY) {
				player._chrono.posX = posX;
				player._chrono.posY = posY;
			};
		};		
	} else if (command === "set_battler_direction")  {
		var indexID = Math.max(Number(args[1]) - 1,0);
		var dir = Number(args[3]);
		for (var i = 0; i < $gameMap.players().length; i++) {
			var player = $gameMap.players()[i];
			if (i === indexID && dir ) {
				player._chrono.dir = dir;
				player._chrono.dirF = true;
			};
		};			
	};
	if (command === "can_escape")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._chronoEscape.canEscape	 = value;
	};
	if (command === "force_damage")  {
		var value = 0;
		if (args[1]) {
			if (String(args[1]) == "area") {
		        var value = 1;
		    } else if (String(args[1]) == "all")  {
		  		var value = 2;
			};
		};
	    if (this.toolEvent()) {
			this.toolEvent().forceDamage(value);
		}
	};
	if (command === "tool_position")  {
	    if (this.toolEvent()) {
			var user = this.toolEvent().user();
			var x = user._x + Number(args[1]);
			var y = user._y + Number(args[3]);
			this.toolEvent().locate(x,y);
		}
	};		
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
var _mog_chronoEngine_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_chronoEngine_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	$gameChrono.setSpriteset(this._spriteset);
};

//=============================================================================
// ** Spriteset Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Spriteset_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Spriteset_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_toolSys_sprtMap_initialize = Spriteset_Map.prototype.initialize; 
Spriteset_Map.prototype.initialize = function() {
	if ($gameParty.leader() && $gameParty.leader().isDead()) {$gameChrono.selectNextActor()};
	_mog_toolSys_sprtMap_initialize.call(this);
	this.createToolSysSprites();
};

//==============================
// ** create Lower Layer
//==============================
var _mog_chrono_sprMap_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
    _mog_chrono_sprMap_createLowerLayer.call(this);
	if (!this._hudField) {this.createHudField()};	
};

//==============================
// * create Turn Cursor
//==============================
Spriteset_Map.prototype.createTurnCursor = function() {
	this.turnCursor = new TurnCursor();
	this.turnCursor.mz = 90;
	this._hudField.addChild(this.turnCursor);
};

//==============================
// * create Tool Cursor
//==============================
Spriteset_Map.prototype.createToolCursor = function() {
	this.toolCursor = new ToolCursor();
	this.turnCursor.mz = 90;
	this._hudField.addChild(this.toolCursor);
};

//==============================
// * create Hookshot
//==============================
Spriteset_Map.prototype.createHookshot = function() {
	this._hookshotchain = new Hookshotchain();
	this._hookshotchain.z = 0;
	this._tilemap.addChild(this._hookshotchain);
};

//==============================
// * create Tool Sys Sprites
//==============================
Spriteset_Map.prototype.createToolSysSprites = function() {
	this.createTurnCursor()
	this.createToolCursor();
	this.createHookshot();
	this.sortMz();
};

//==============================
// * Update
//==============================
var _mog_toolSys_sprMap_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	if ($gameTemp._chrono.moveWait > 0) {$gameTemp._chrono.moveWait--}
	if ($gameTemp._autoTarget.enabled) {
		this.updateAutoTarget();
	    if (!$gameSystem.isChronoMode()) {return};
	};	
	_mog_toolSys_sprMap_update.call(this);
	this.updateToolSprite();
    this.updateChronoSprites();
};

//==============================
// * update Chrono Sprites
//==============================
Spriteset_Map.prototype.updateChronoSprites = function() {
	if (!this._chronoField) {this.createChronoField()};
	this.updateChronoFieldVisible();
	if (this._chronoSpriteCache && $gameSystem._chronoMode.needCreateSprites) {this.createChronoSprites()};
	if ($gameSystem._chronoMode.needRemoveSprites) {this.removeChronoSprites()};
	if (!this._chronoSpriteCache) {this.cacheSpriteChronoCache()};
	if ($gameSystem.isChronoMode()) {this.updateChronoSpritesActive()};
	if (!this._chronoPhase) {this.createChronoPhase()};
	if (!this._resultCR) {this.createResultCR()};	
};

//==============================
// * update Chrono Sprites Active
//==============================
Spriteset_Map.prototype.updateChronoSpritesActive = function() {	
	if (this._chronoPhase) {this.updatePhaseSpriteCN()};
	if (this._resultCR) {this.updateResultCR()};
	if (this._escape1CR) {this.updateEscapeCR()};
};

//==============================
// * update Chrono Field Visible
//==============================
Spriteset_Map.prototype.updateChronoFieldVisible = function() {
  if (this.isChronoFieldVisible()) {
	  this._chronoField.opacity += 15;
  } else {
	  this._chronoField.opacity -= 15;
  };
};

//==============================
// * is Chrono Field Visible
//==============================
Spriteset_Map.prototype.isChronoFieldVisible = function() {
   if (!$gameSystem.isChronoMode()) {return false};
   if ($gameSystem._chronoMode.phase != 3) {return false};
   return true;
};

//==============================
// * create Chrono Field
//==============================
Spriteset_Map.prototype.createChronoField = function() {
	this._chronoField = new Sprite();
	this._chronoField.opacity = 0;
	this._chronoField.mz = 100;
	this._chronoField.visible = false;
	this._hudField.addChild(this._chronoField);
	this.sortMz();
};

//==============================
// * Create Chrono Sprites
//==============================
Spriteset_Map.prototype.createChronoSprites = function() {
	$gameSystem._chronoMode.needCreateSprites = false;
	this._chronoField.opacity = 0;
	this._chronoField.visible = true;
    if (Imported.MOG_BattleHud) {this.createBattleHud()};
	if (Imported.MOG_BossHP) {$gameTemp._forceCreateBossHud = true};
	if (Imported.MOG_ChronoATBHud) {this.createATBHud()};
	this.createChronoWindows();
	this.createChronoEscape();
	this.sortMz();
};

//==============================
// * remove Chrono Sprites
//==============================
Spriteset_Map.prototype.removeChronoSprites = function() {
	$gameSystem._chronoMode.needRemoveSprites = false;
	this._chronoField.visible = false;
	if (Imported.MOG_BattleHud) {this.removeBattleHud()};
	if (Imported.MOG_BossHP) {$gameTemp._forceRemoveBossHud = true};
	if (this._atbGaugeCR) {this._chronoField.removeChild(this._atbGaugeCR)};
	if (this._chronoWindow) {this._hudField.removeChild(this._chronoWindow)};
	if (this._escape1CR) {
		this._chronoField.removeChild(this._escape1CR);
		this._chronoField.removeChild(this._escape2CR);
	};
};

//==============================
// * create Chrono Windows
//==============================
Spriteset_Map.prototype.createChronoWindows = function() {
	this._chronoWindow = new ChronoWindows();
	this._chronoWindow.mz = 150;
	this._hudField.addChild(this._chronoWindow);
};

//==============================
// ** create Battle Hud
//==============================
Spriteset_Map.prototype.createBattleHud = function() {
	if (String(Moghunter.bhud_screen_layout) === "true") {this.createBattleHudScreenLayout();};
	$gameTemp.refresh_Bhud = false;
	$gameTemp._battleEnd = false;
	this._com_mode = Number($gameSystem._bhud_pos_mode)
	this._battle_hud = [];
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		this._battle_hud[i] = new Battle_Hud(i);
		this._battle_hud[i].mz = 110;
		this._hudField.addChild(this._battle_hud[i]);
	};	
};

//==============================
// * Create Battle Hud Screen
//==============================
Spriteset_Map.prototype.createBattleHudScreenLayout = function() {	
	this._screen_layout = new Sprite(ImageManager.loadBHud("Layout_Screen"));
	this._screen_layout.opacity = 0;
	this._screen_layout.x = Moghunter.bhud_screen_layout_x;
	this._screen_layout.y = Moghunter.bhud_screen_layout_y;
	this._screen_layout.mz = 100;
	this._hudField.addChild(this._screen_layout);
};

//==============================
// ** remove Battle Hud
//==============================
Spriteset_Map.prototype.removeBattleHud = function() {
	if (!this._battle_hud) {return};
	if (this._screen_layout) {
	    this._hudField.removeChild(this._screen_layout);
	};
	for (var i = 0; i < this._battle_hud.length; i++) {
	     this._hudField.removeChild(this._battle_hud[i]);
	};
	this._battle_hud = null;
};

//==============================
// * create Result CR
//==============================
Spriteset_Map.prototype.createResultCR = function() {
	this._resultCR = new Sprite(ImageManager.loadRas("Result"));
	this._resultCR.org = [Moghunter.toolHud_ResultX,Moghunter.toolHud_ResultY];
	this._resultCR.x = this._resultCR.org[0];
	this._resultCR.y = this._resultCR.org[1];
	this._resultCR.opacity = 0;
	this.addChild(this._resultCR);
	this._resultCRExp = new Sprite(new Bitmap(200,32));
	this._resultCRExp.org = [Moghunter.toolHud_ResultExpX,Moghunter.toolHud_ResultExpY];
	this._resultCRExp.x = this._resultCR.x + this._resultCRExp.org[0];
	this._resultCRExp.y = this._resultCR.y + this._resultCRExp.org[1];
	this._resultCRExp.bitmap.fontSize = Moghunter.toolHud_ResultFontSize;
	this._resultCRExp.opacity = 0;
	this.addChild(this._resultCRExp);
	this._resultCRGold = new Sprite(new Bitmap(200,32));
	this._resultCRGold.org = [Moghunter.toolHud_ResultGoldX,Moghunter.toolHud_ResultGoldY];
	this._resultCRGold.x = this._resultCR.x + this._resultCRGold.org[0];
	this._resultCRGold.y = this._resultCR.y + this._resultCRGold.org[1];
	this._resultCRGold.bitmap.fontSize = Moghunter.toolHud_ResultFontSize;
	this._resultCRGold.opacity = 0;
	this.addChild(this._resultCRGold);
};

//==============================
// * refresh Result CR
//==============================
Spriteset_Map.prototype.refreshResultCR = function() {
	$gameTemp._chrono.victory[1] = false;
	this._resultCR.opacity = 0;
	this._resultCRExp.opacity = 0;
	this._resultCRGold.opacity = 0;
	this._resultCR.x = this._resultCR.org[0] - 50;
	this._resultCRExp.bitmap.clear();
	this._resultCRGold.bitmap.clear()
	var text = $gameTemp._chrono.exp;
	this._resultCRExp.bitmap.drawText(text,0,0,190,32,"center");
	var text = $gameTemp._chrono.gold;
	this._resultCRGold.bitmap.drawText(text,0,0,190,32,"center");
};

//==============================
// * update Result CR
//==============================
Spriteset_Map.prototype.updateResultCR = function() {
	if ($gameTemp._chrono.victory[1]) {this.refreshResultCR()};
	this._resultCRExp.opacity = this._resultCR.opacity;
	this._resultCRGold.opacity = this._resultCR.opacity;
	if ($gameTemp._chrono.victory[0]) {
		if (this._resultCR.x < this._resultCR.org[0]) {this._resultCR.x += 5};
	    this._resultCR.opacity += 5;
	} else {
	    this._resultCR.opacity -= 10;
		if (this._resultCR.opacity > 0) {this._resultCR.x += 5};
	};	
	this._resultCRExp.x = this._resultCRExp.org[0] + this._resultCR.x;
	this._resultCRGold.x = this._resultCRGold.org[0] + this._resultCR.x;
};

//==============================
// * create Chrono Phase
//==============================
Spriteset_Map.prototype.createChronoPhase = function() {
	$gameTemp._chrono.phase = [false,-1,-1];
	this._phaseCN = ImageManager.loadRas("Phase");
    this._chronoPhase = new Sprite(this._phaseCN);
	this.addChild(this._chronoPhase);
	this._chronoPhase.opacity = 0;
	this._chronoPhase.org = [Moghunter.toolHud_PhaseX,Moghunter.toolHud_PhaseY];
	this._chronoPhase.x = this._chronoPhase.org[0];
	this._chronoPhase.y = this._chronoPhase.org[1];
	this.refreshChronoPhase();
};

//==============================
// * refresh Chrono Phase
//==============================
Spriteset_Map.prototype.refreshChronoPhase = function() {
	$gameTemp._chrono.phase[2] = $gameTemp._chrono.phase[1];
	this._chronoPhase.x = this._chronoPhase.org[0] - 150;
	this._chronoPhase.y = this._chronoPhase.org[1];
	this._chronoPhase.opacity = 0;
    var cw = this._phaseCN.width;
	var ch = this._phaseCN.height / 3;
	var ch2 = ch * $gameTemp._chrono.phase[1];
    this._chronoPhase.setFrame(0,ch2,cw,ch);
};

//==============================
// * update Phase Sprite CN
//==============================
Spriteset_Map.prototype.updatePhaseSpriteCN = function() {
    if ($gameTemp._chrono.phase[2] != $gameTemp._chrono.phase[1]) {
	    this.refreshChronoPhase();	
	};
	if ($gameTemp._chrono.phase[0]) {
		if (this._chronoPhase.x < this._chronoPhase.org[0]) {
		    this._chronoPhase.x += 4;
		};
		this._chronoPhase.opacity += 10;
	} else {	
	    if (this._chronoPhase.opacity > 0) {	
  		    this._chronoPhase.opacity -= 10;
		    this._chronoPhase.x += 4;
		};
	};
};



//==============================
// * create Chrono Escape
//==============================
Spriteset_Map.prototype.createChronoEscape = function() {
	this._escape1CR = new Sprite(ImageManager.loadRas("Escape_A"));
	this._escape1CR.org = [Moghunter.toolHud_Escape1X,Moghunter.toolHud_Escape1Y];
	this._escape1CR.x = this._escape1CR.org[0];
	this._escape1CR.y = this._escape1CR.org[1];
	this._chronoField.addChild(this._escape1CR);
	this._escapeGaugeCRImg = ImageManager.loadRas("Escape_B")
	this._escape2CR = new Sprite(this._escapeGaugeCRImg);
	this._escape2CR.org = [Moghunter.toolHud_Escape2X,Moghunter.toolHud_Escape2Y];
	this._escape2CR.x = this._escape1CR.x + this._escape2CR.org[0];
	this._escape2CR.y = this._escape1CR.y + this._escape2CR.org[1];
	this._escape2CR.time = -1;
	this._escape2CR.mtime = $gameSystem._chronoEscape.maxTime;
	this._chronoField.addChild(this._escape2CR);	
};

//==============================
// * update Escape CR
//==============================
Spriteset_Map.prototype.updateEscapeCR = function() {
	if ($gameSystem._chronoEscape.time > 0) {
	    this._escape1CR.opacity += 25;
	} else {
		this._escape1CR.opacity -= 15;
	};
	this._escape2CR.opacity = this._escape1CR.opacity;
	this._escape2CR.x = this._escape1CR.x + this._escape2CR.org[0];
	this._escape2CR.y = this._escape1CR.y + this._escape2CR.org[1];
	if ($gameSystem._chronoEscape.time != this._escape2CR.time || this._escape2CR.mtime != $gameSystem._chronoEscape.maxTime) {
		this.refreshChronoEscapeGauge();
	};
};

//==============================
// * refresh Chrono Escape Gauge
//==============================
Spriteset_Map.prototype.refreshChronoEscapeGauge = function() {
	this._escape2CR.time = $gameSystem._chronoEscape.time;
	this._escape2CR.mtime = $gameSystem._chronoEscape.maxTime;
	var w = this._escapeGaugeCRImg.width;
	var h = this._escapeGaugeCRImg.height;
	var w2 = w * this._escape2CR.time / this._escape2CR.mtime;
	this._escape2CR.setFrame(0,0,w2,h);
};

//==============================
// * cache Sprite Chrono Cache
//==============================
Spriteset_Map.prototype.cacheSpriteChronoCache = function() {
	if (Imported.MOG_BattleHud && !this._bhudImgCache) {this.preCacheImagesBHud()};
    this._chronoSpriteCache = [];
	this._chronoSpriteCache.push(ImageManager.loadRas("Phase"));
	this._chronoSpriteCache.push(ImageManager.loadRas("CursorActor"));
	this._chronoSpriteCache.push(ImageManager.loadRas("CursorTarget"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Command"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Command_list"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Command_Arrow"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Result"));	
	this._chronoSpriteCache.push(ImageManager.loadRas("Escape_A"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Escape_B"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Tool_Item"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Tool_Skill"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Tool_Weapon"));
	this._chronoSpriteCache.push(ImageManager.loadRas("Tool_Shield"));		
};

//==============================
// * pre Cache Images Bhud
//==============================
Spriteset_Map.prototype.preCacheImagesBHud= function() {
	this._bhudImgCache = [];
	this._bhudImgCache.push(ImageManager.loadBHud("Layout"));
	if (String(Moghunter.bhud_layoverlay_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("Layout2"))};
	this._bhudImgCache.push(ImageManager.loadBHud("Turn"));
	this._bhudImgCache.push(ImageManager.loadSystem("IconSet"));
	if (String(Moghunter.bhud_hp_meter_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("HP_Meter"))};
	if (String(Moghunter.bhud_mp_meter_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("MP_Meter"))};
	if (String(Moghunter.bhud_tp_meter_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("TP_Meter"))};
	if (String(Moghunter.bhud_at_meter_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("ATB_Meter"))};
	if (String(Moghunter.bhud_hp_number_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("HP_Number"))};
	if (String(Moghunter.bhud_mp_number_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("MP_Number"))};
	if (String(Moghunter.bhud_tp_number_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("TP_Number"))};
	if (String(Moghunter.bhud_maxhp_number_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("HP_Number2"))};
	if (String(Moghunter.bhud_maxmp_number_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("MP_Number2"))};
	if (String(Moghunter.bhud_maxtp_number_visible) == "true") {this._bhudImgCache.push(ImageManager.loadBHud("TP_Number2"))};	
};

//==============================
// * update Tool Sprite
//==============================
Spriteset_Map.prototype.updateToolSprite = function() {
	if ($gameSystem._eventDataToolRequestAddSprite) {this.addToolSprite()};
	if ($gameSystem._eventDataToolRequestRemoveSprite) {this.removeToolSprite()};
};

//==============================
// * Add Tool Sprite
//==============================
Spriteset_Map.prototype.addToolSprite = function() {
	$gameSystem._eventDataToolRequestAddSprite = false;
    $gameMap.events().forEach(function(event) {
		if (event._tool.addSprite) {
            this._characterSprites.push(new Sprite_Character(event));
			var index = this._characterSprites.length - 1;
			if (this._characterSprites[index]) {
	            this._tilemap.addChild(this._characterSprites[index]);
			};
			event._tool.addSprite = false;
		};
    }, this);	
};

//==============================
// * remove Tool Sprite
//==============================
Spriteset_Map.prototype.removeToolSprite = function() {
	$gameSystem._eventDataToolRequestRemoveSprite = false;
	this.removeToolSpriteTile();
    this.removeToolSpriteChar();
	$gameMap.removeToolEvents();
};

//==============================
// * remove Tool Sprite Tile
//==============================
Spriteset_Map.prototype.removeToolSpriteTile = function() {
	for (var i = 0; i < this._characterSprites.length; i++) {
		var char = this._characterSprites[i];
		if (char && char._character._tool.removeSprite) {
			this._tilemap.removeChild(char);
			char._character.endAnimation();
			char._character.erase();
		};        
    };
};

//==============================
// * remove Tool Sprite Char
//==============================
Spriteset_Map.prototype.removeToolSpriteChar = function() {
	for (var i = 0; i < this._characterSprites.length; i++) {
		var char = this._characterSprites[i];
		if (char && char._character._tool.removeSprite) {
            char.removeSideSprites();
		    this._characterSprites.splice(i,1);
			char._character.erase();
		};        
    };	
};

//=============================================================================
// ** Spriteset Character
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_toolSys_sprtChar_initMembers = Sprite_Character.prototype.initMembers;
Sprite_Character.prototype.initMembers = function() {
	_mog_toolSys_sprtChar_initMembers.call(this);
	this._damages = [];
};

//==============================
// * Set Character
//==============================
var _mog_toolSys_sprtChar_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {
	_mog_toolSys_sprtChar_setCharacter.call(this,character)
	if (this._character.battler()) {this._imgIcon = ImageManager.loadSystem("IconSet")};
};

//==============================
// * Update
//==============================
var _mog_toolSys_sptrChar_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function() {
	_mog_toolSys_sptrChar_update.call(this);
	if (this.bitmap) {this.updateSpriteCharacterCN()};
};

//==============================
// * update Sprite Character CN
//==============================
Sprite_Character.prototype.updateSpriteCharacterCN = function() {
	 if (this.battler()) {this.updateBattler()};
	 if (this.needUpdateToolOffset()) {this.updateToolOffset()};
};

//==============================
// * Update Battler
//==============================
Sprite_Character.prototype.updateBattler = function() {
	 if (!this._character._tool.active) {
		 this.updateDamagePopup();
		 if (!this._stateIconSprite) {this.createStateIconSprite()
		 } else {
			 this.updateStateSprite()
		 };
		 if ($gameSystem.isChronoMode()) {
			if (this._character._user.treasure[0]) {
				this.rotation = 0;
			} else {
			   if (!Imported.MOG_CharacterMotion) {this.rotation = this._character._user.rotation[0]}; 
			};
			if (this._character._user.rotation[1] === 270) {
			   this.x += 32;
			} else if (this._character._user.rotation[1] === 90) {
			   this.x -= 32;
		    };
			if (this._character._user.rotation[1] != 0) {
				this.y -= this.patternHeight() / 2;
			}
		 };	 		 
	 };
	 if (this._character._user.collapse[1] > 0) {this.updateCollapse()};
	 if (this._character._chrono.escaped) {this.faceCharacterCR(-5,true,false)};
};

//==============================
// * Create State Icon Sprite
//==============================
Sprite_Character.prototype.createStateIconSprite = function() {
    this._stateIconSprite = new Sprite_StateIcon();
	this._stateIconSprite.setup(this.battler());
    this.addChild(this._stateIconSprite);
};

//==============================
// * update State Sprite
//==============================
Sprite_Character.prototype.updateStateSprite = function() {
	if (this._character.battler() && this._character.battler()._ras.iconStateY != 0) {
	    this._stateIconSprite.y = -this._character.battler()._ras.iconStateY
		if (Imported.MOG_CharPoses) {this._stateIconSprite.y -= this._character._frames.y};
    } else {
	  var ph = this._isBigCharacter ? 4 : 8; 
      this._stateIconSprite.y = -Math.floor(this.bitmap.height / ph) - 24;
	  if (Imported.MOG_CharPoses) {this._stateIconSprite.y += this._character._frames.y};
	};
};

//==============================
// * fade Character CR
//==============================
Sprite_Character.prototype.faceCharacterCR = function(value,erase,collapse) {
     this._character._opacity += value;
	 if (erase && this._character._opacity === 0) {
		 if (collapse) {this._character._user.collapse[1] = 0;};
		 this._character.erase();
	 };
};

//==============================
// * Update Collapse
//==============================
Sprite_Character.prototype.updateCollapse = function() {
     this.faceCharacterCR(-3,true,true);
};

//==============================
// * Battler
//==============================
Sprite_Character.prototype.battler = function() {
    if (!this._character) {return null};
	return this._character.battler();
};

//==============================
// * Need Update Tool Offset
//==============================
Sprite_Character.prototype.needUpdateToolOffset = function() {
	 if (!this._character) {return false};
	 if (!this._character._tool) {return false};
	 return true;
};

//==============================
// * update Tool Offset
//==============================
Sprite_Character.prototype.updateToolOffset = function() {
	if (this._character._user.hookshotTool) {this.updateHookShotLock()};
	this.x += this._character._tool.offsetX;
    this.y += this._character._tool.offsetY;
	if (this._character.battler()) {
	    this.x += this._character.battler()._ras.offsetX; 
	    this.y += this._character.battler()._ras.offsetY;
	};
	this.y += this._character._user.treasure[3];
	if (this._character._tool.diagonalAngle != 0) {
		this.rotation = this._character._tool.diagonalAngle;
	};
};

//==============================
// * update HookShot Lock
//==============================
Sprite_Character.prototype.updateHookShotLock = function() {
   // this.x = this._character._user.hookshotTool.screenX();
   //this.y = this._character._user.hookshotTool.screenY();
};

//==============================
// * Remove Side Sprites
//==============================
Sprite_Character.prototype.removeSideSprites = function() {
	 this.endAnimation();
	 this.endBalloon();
};

//==============================
// * End Animation
//==============================
Sprite_Character.prototype.endAnimation = function() {
    if (this._animationSprites.length > 0) {
        var sprites = this._animationSprites.clone();
        this._animationSprites = [];
        for (var i = 0; i < sprites.length; i++) {
            var sprite = sprites[i];
                 sprite.remove();
        };
    };
};

//==============================
// * updateDamagePopup
//==============================
Sprite_Character.prototype.updateDamagePopup = function() {
    this.setupDamagePopup();
    if (this._damages.length > 0) {
        for (var i = 0; i < this._damages.length; i++) {
            this._damages[i].update();
			this._damages[i].x = this.x;
			this._damages[i].y = this.y - 16; 			
        };
        if (!this._damages[0].isPlaying()) {
            this.parent.removeChild(this._damages[0]);
            this._damages.shift();
        };
    };
};

//==============================
// * setup Damage Popup
//==============================
Sprite_Character.prototype.setupDamagePopup = function() {
    if (this.battler().isDamagePopupRequested()) {
            var sprite = new Sprite_Damage();
            sprite.x = this.x;
            sprite.y = this.y;
			sprite.z = 500;
            sprite.setup(this.battler());
            this._damages.push(sprite);
            this.parent.addChild(sprite);
        this.battler().clearDamagePopup();
        this.battler().clearResult();
    };
};

//==============================
// * set Character Bitmap Treas
//==============================
Sprite_Character.prototype.setCharacterBitmapTreasure = function() {
	   if (!this._imgIcon) {this._imgIcon = ImageManager.loadSystem("IconSet")};
        this.removeChild(this._upperBody);
		this.removeChild(this._lowerBody);
       this.bitmap = this._imgIcon;
	   var iconIndex = this._character._user.treasure[0].iconIndex;
	   var sx = iconIndex % 16 * 32;
	   var sy = Math.floor(iconIndex / 16) * 32;
	   this.setFrame(sx,sy,32,32);
	   this.scale.x = 0.70;
	   this.scale.y = 0.70;
	   this.scale.rotation = 0;
	   this._character._through = true;
};

//==============================
// * setup Character Bitmap
//==============================
var _mog_toolSys_sprtChar_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function() {
	if (this._character._user.treasure[0]) {
		this.setCharacterBitmapTreasure();
		return;
	};
	_mog_toolSys_sprtChar_setCharacterBitmap.call(this);
};

//==============================
// * set Tile Bitmap 
//==============================
var _mog_toolSys_sprtChar_setTileBitmap = Sprite_Character.prototype.setTileBitmap;
Sprite_Character.prototype.setTileBitmap = function() {
	if (this._character._user.treasure[0]) {
		this.setCharacterBitmapTreasure();
		return;
	};	
    _mog_toolSys_sprtChar_setTileBitmap.call(this)
};

//==============================
// * update Frame
//==============================
var _mog_toolSys_sprtChar_updateFrame = Sprite_Character.prototype.updateFrame ;
Sprite_Character.prototype.updateFrame = function() {
	if (this._character && this._character._user.treasure[0]) {
	    this.updateTreasureSprite();
	    return;
	};
	_mog_toolSys_sprtChar_updateFrame.call(this);
};

//==============================
// * update Treasure Float
//==============================
Sprite_Character.prototype.updateTreasureFloat = function() {
    this._character._user.treasure[2]++;
	if (this._character._user.treasure[2] < 30) {
		this._character._user.treasure[3] -= 0.3;
	} else if (this._character._user.treasure[2] < 60) {
		this._character._user.treasure[3] += 0.3;
	} else {
		this._character._user.treasure[2] = 0;
		this._character._user.treasure[3] = 0;
	};
	this._character._through = true;
};

//==============================
// * set Treasure Sprite
//==============================
Sprite_Character.prototype.updateTreasureSprite = function() {
    this.updateTreasureFloat();
};

//==============================
// * remove Animation Sprite CN
//==============================
Sprite_Base.prototype.removeAnimationSpritesCN = function() {
    if (this._animationSprites.length > 0) {
        var sprites = this._animationSprites.clone();
        this._animationSprites = [];
        for (var i = 0; i < sprites.length; i++) {
            var sprite = sprites[i];
            if (sprite.isPlaying()) {
                this._animationSprites.push(sprite);
            } else {
                sprite.remove();
            };
        };
    };
};

//=============================================================================
// ** Sprite Animation
//=============================================================================

//==============================
// * update 
//==============================
var _mog_chrono_SprAnime_update = Sprite_Animation.prototype.update;
Sprite_Animation.prototype.update = function() {
	_mog_chrono_SprAnime_update.call(this);
	if (this._target && this._target._character) {this.updateChronoAnimation(this._target)}
};

//==============================
// * update Chrono Animation
//==============================
Sprite_Animation.prototype.updateChronoAnimation = function(sprite) {
	  var character = sprite._character;
      if (character._chrono.animation.directionMode) {
		  if (character._direction === 2) {
			  this.y -= 32;
	         this.rotation = character._chrono.animation.rotationP[2];
		  } else if (character._direction === 4) {
			 this.rotation = character._chrono.animation.rotationP[3];
			 this.y -= 32;
		  } else if (character._direction === 6) {  
			 this.rotation = character._chrono.animation.rotationP[1];
			 this.y -= 32;
	      } else {
		     this.rotation = character._chrono.animation.rotationP[0];
		  }
      };
	  if (character._user.rotation[1] === 180) {
		  this.y += sprite.patternHeight();
	  } else if (character._user.rotation[1] === 90) {
		  this.x += sprite.patternWidth() / 2;	
		  this.y += sprite.patternHeight() / 2;	
	  } else if (character._user.rotation[1] === 270) {
		  this.x -= sprite.patternWidth() / 2;	
		  this.y += sprite.patternHeight() / 2;			 
	  };
};

//=============================================================================
// ** Sprite Destination
//=============================================================================

//==============================
// * update
//==============================

var _mog_chrono_sprtDes_update = Sprite_Destination.prototype.update;
Sprite_Destination.prototype.update = function() {
	if ($gameSystem.isChronoMode()) {this.visible = false;return};
	_mog_chrono_sprtDes_update.call(this);
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** Update
//==============================
var _mog_chrono_scmap_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	_mog_chrono_scmap_update.call(this);
	$gameChrono.updateChronoTouchInput();
	if (!Imported.MOG_CharPoses) {
	     $gameTemp._chaPosesEVRunning = $gameMap.isEventRunning();
	};
};

//=============================================================================
// ** Spriteset Character
//=============================================================================

//==============================
// ** update Bitmap
//==============================
var _mog_chrono_sprtCharTouch_updateBitmap = Sprite_Character.prototype.updateBitmap;
Sprite_Character.prototype.updateBitmap = function() {
	if (this.needRefreshSprtPar()) {this.refreshCharSpritePar()};
	_mog_chrono_sprtCharTouch_updateBitmap.call(this);
};

//==============================
// ** set Tile Bitmap
//==============================
var _mog_chrono_sprtCharTouch_setTileBitmap = Sprite_Character.prototype.setTileBitmap;
Sprite_Character.prototype.setTileBitmap = function() {
    _mog_chrono_sprtCharTouch_setTileBitmap.call(this);
	if (this._character) {this._character._spritePar.refresh = true};
};

//==============================
// ** set Character Bitmap
//==============================
var _mog_chrono_sprtCharTouch_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function() {
    _mog_chrono_sprtCharTouch_setCharacterBitmap.call(this);
	if (this._character) {this._character._spritePar.refresh = true};
};

//==============================
// ** Need Refresh Sprt Par
//==============================
Sprite_Character.prototype.needRefreshSprtPar = function() {
    if (!this._character) {return false};
	if (!this._character._spritePar.refresh) {return false};
	if (!this.bitmap) {return false};
	if (!this.bitmap.isReady()) {return false};
	if (!this.bitmap.width === 0) {return false};
    return true;
};

//==============================
// ** Refresh Char Sprite Par
//==============================
Sprite_Character.prototype.refreshCharSpritePar = function() {
     this._character._spritePar.refresh = false;
	 this._character._spritePar.width = this.patternWidth();
	 this._character._spritePar.height = this.patternHeight();
};

//=============================================================================
// ** Game Character
//=============================================================================

//==============================
// ** lm Left
//==============================
Game_CharacterBase.prototype.lmLeft = function() {
     return this.screenX() - Math.floor(this._spritePar.width / 2);
};

//==============================
// ** lm Right
//==============================
Game_CharacterBase.prototype.lmRight = function() {
     return this.screenX() + Math.floor(this._spritePar.width / 2);
};

//==============================
// ** lm Below
//==============================
Game_CharacterBase.prototype.lmBelow = function() {
     return this.screenY();
};

//==============================
// ** lm Above
//==============================
Game_CharacterBase.prototype.lmAbove = function() {
     return this.screenY() - Math.floor(this._spritePar.height / 2);
};

//==============================
// ** is Sprite Touch
//==============================
Game_CharacterBase.prototype.isSpriteTouch = function(x,y) {
     if (x < this.lmLeft()) {return false};
	 if (x > this.lmRight()) {return false};
     if (y > this.lmBelow()) {return false};
	 if (y < this.lmAbove()) {return false};	 
	 return true;
};

//=============================================================================
// ** Game Chrono
//=============================================================================

//==============================
// * update Chrono Touch Input
//==============================
Game_Chrono.prototype.updateChronoTouchInput = function() {
	if (this.canTouchInput()) {this.updateTouchInputBase()};
};

//==============================
// ** canTouchInput
//==============================
Game_Chrono.prototype.canTouchInput = function() {
    if (!$gameSystem._chronoMode.touchInput) {return false};
    if ($gameTemp._chrono.buttonLag > 0) {return false};
    return true;
};

//==============================
// ** Update Chrono Touch Input
//==============================
Game_Chrono.prototype.updateChronoTouchInput = function() {
	if ($gameSystem.isChronoMode()) {
		this.updateTouchInputChrono();
	} else {
	    this.updateTouchInputABS();
    };
};

//==============================
// ** update Chrono Touch Input ABS
//==============================
Game_Chrono.prototype.updateTouchInputABS = function() {

};

//==============================
// ** update Touch Input Chrono
//==============================
Game_Chrono.prototype.updateTouchInputChrono = function() {
	if (TouchInput.isTriggered()) {
		if ($gameChrono.isMainSelection()) {
			this.checkTouchCommand();
		} else if (this.isTargetSelection()) {
			this.checkTargetbyTouch()
		};
	} else if (TouchInput.isCancelled()) {
		if (this.isMainSelection()) {
			this.cancelTurnCom();
		} else if(this.isTargetSelection()) {
			this.cursor().executeCancel();
		};	
	} else {
        this.updateProcessWheelChrono();
	};
};

//==============================
// ** update Process Wheel Chrono
//==============================
Game_Chrono.prototype.updateProcessWheelChrono = function() {
    var threshold = 20;
    if (TouchInput.wheelY >= threshold) {
        if ($gameChrono.isMainSelection()) {
			this.nextComIndex(1);
		} else if (this.isTargetSelection()) {	
			this.cursor().nextIndex(1);
		};
    };
    if (TouchInput.wheelY <= -threshold) {
        if ($gameChrono.isMainSelection()) {
			this.nextComIndex(-1);
        } else if (this.isTargetSelection()) {	
			this.cursor().nextIndex(-1);	
		};
    };
};

//==============================
// * check Target by Touch
//==============================
Game_Chrono.prototype.checkTargetbyTouch = function() {
	for (var i = 0; i < this.targetsSelection().length; i++) {
         var char = this.targetsSelection()[i];
		 if (char.isSpriteTouch(TouchInput.x,TouchInput.y)) {
			 if (i == this.cursor()._index) {
				 this.touchExecuteSelection(char);
			 } else {
                 this.touchMoveIndex(char,i);			 
			 };
			 break;
		 };
	};
};

//==============================
// * touch Execute Selection
//==============================
Game_Chrono.prototype.touchExecuteSelection = function(char) {
     $gameTemp._autoTarget.target = char;
	 this.cursor().executeSelection();
};

//==============================
// * touch Move Index
//==============================
Game_Chrono.prototype.touchMoveIndex = function(char,index) {
	SoundManager.playCursor();
	this.cursor()._index = index;	
	$gameTemp._autoTarget.target = char;
    $gameTemp._autoTarget.index = index;
	$gameTemp._autoTarget.refresh = true;
};

//==============================
// * check Touch Command
//==============================
Game_Chrono.prototype.checkTouchCommand = function() {
    if (this.win().isTouchCommand(TouchInput.x,TouchInput.y)) {
		this.selectCommand();
	} else if (this.win().isTouchArrowCommand(0,TouchInput.x,TouchInput.y)) {
		$gameChrono.nextComIndex(-1);
	} else if (this.win().isTouchArrowCommand(1,TouchInput.x,TouchInput.y)) {
		$gameChrono.nextComIndex(1);	
	};
};

//==============================
// * process Map Touch
//==============================
var _mog_chrono_scmap_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
	if ($gameSystem._chronoMode.phase != 0) {return};
	_mog_chrono_scmap_processMapTouch.call(this);
};