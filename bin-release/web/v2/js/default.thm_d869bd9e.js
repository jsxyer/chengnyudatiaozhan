
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Word":"resource/assets/skin/WordSkin.exml","Begin":"resource/assets/skin/BeginSkin.exml","GameSettingSkin":"resource/assets/skin/GameSettingSkin.exml","Game":"resource/assets/skin/GameSkin.exml","LevelIcon":"resource/assets/skin/LevelIconSkin.exml","Levels":"resource/assets/skin/LevelsSkin.exml"};generateEUI.paths['resource/assets/skin/BeginSkin.exml'] = window.BeginSkin = (function (_super) {
	__extends(BeginSkin, _super);
	var BeginSkin$Skin1 = 	(function (_super) {
		__extends(BeginSkin$Skin1, _super);
		function BeginSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","StartBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeginSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "StartBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeginSkin$Skin1;
	})(eui.Skin);

	var BeginSkin$Skin2 = 	(function (_super) {
		__extends(BeginSkin$Skin2, _super);
		function BeginSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","MoneyBG_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BeginSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "MoneyBG_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BeginSkin$Skin2;
	})(eui.Skin);

	function BeginSkin() {
		_super.call(this);
		this.skinParts = ["btn_begin","btn_setting"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.btn_begin_i(),this.btn_setting_i()];
	}
	var _proto = BeginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "GameBG1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_begin_i = function () {
		var t = new eui.Button();
		this.btn_begin = t;
		t.label = "";
		t.x = 182;
		t.y = 997;
		t.skinName = BeginSkin$Skin1;
		return t;
	};
	_proto.btn_setting_i = function () {
		var t = new eui.Button();
		this.btn_setting = t;
		t.label = "设置";
		t.x = 441.49;
		t.y = 52;
		t.skinName = BeginSkin$Skin2;
		return t;
	};
	return BeginSkin;
})(eui.Skin);generateEUI.paths['resource/assets/skin/GameSettingSkin.exml'] = window.GameSettingSkin = (function (_super) {
	__extends(GameSettingSkin, _super);
	var GameSettingSkin$Skin3 = 	(function (_super) {
		__extends(GameSettingSkin$Skin3, _super);
		function GameSettingSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","YesBtn1_jpg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "YesBtn_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin3;
	})(eui.Skin);

	var GameSettingSkin$Skin4 = 	(function (_super) {
		__extends(GameSettingSkin$Skin4, _super);
		function GameSettingSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_music_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_music_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin4;
	})(eui.Skin);

	var GameSettingSkin$Skin5 = 	(function (_super) {
		__extends(GameSettingSkin$Skin5, _super);
		function GameSettingSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sound_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sound_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin5;
	})(eui.Skin);

	function GameSettingSkin() {
		_super.call(this);
		this.skinParts = ["btn_agree","btn_music","img_music_disable","btn_sound","img_sound_disable"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.btn_agree_i(),this._Group1_i(),this._Group2_i(),this._Label1_i()];
	}
	var _proto = GameSettingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 255;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,8,196,51);
		t.source = "MoneyBG_png";
		t.verticalCenter = 0.5;
		t.width = 400;
		return t;
	};
	_proto.btn_agree_i = function () {
		var t = new eui.Button();
		this.btn_agree = t;
		t.horizontalCenter = 0.5;
		t.y = 623;
		t.skinName = GameSettingSkin$Skin3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 94;
		t.width = 102;
		t.x = 238;
		t.y = 512;
		t.elementsContent = [this.btn_music_i(),this.img_music_disable_i()];
		return t;
	};
	_proto.btn_music_i = function () {
		var t = new eui.Button();
		this.btn_music = t;
		t.x = 0;
		t.y = 0;
		t.skinName = GameSettingSkin$Skin4;
		return t;
	};
	_proto.img_music_disable_i = function () {
		var t = new eui.Image();
		this.img_music_disable = t;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.x = 6;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 94;
		t.width = 102;
		t.x = 403;
		t.y = 512;
		t.elementsContent = [this.btn_sound_i(),this.img_sound_disable_i()];
		return t;
	};
	_proto.btn_sound_i = function () {
		var t = new eui.Button();
		this.btn_sound = t;
		t.x = 0;
		t.y = 0;
		t.skinName = GameSettingSkin$Skin5;
		return t;
	};
	_proto.img_sound_disable_i = function () {
		var t = new eui.Image();
		this.img_sound_disable = t;
		t.source = "btn_disable_png";
		t.touchEnabled = false;
		t.x = 6;
		t.y = 2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "设置";
		t.y = 466;
		return t;
	};
	return GameSettingSkin;
})(eui.Skin);generateEUI.paths['resource/assets/skin/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin6 = 	(function (_super) {
		__extends(GameSkin$Skin6, _super);
		function GameSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin6;
	})(eui.Skin);

	var GameSkin$Skin7 = 	(function (_super) {
		__extends(GameSkin$Skin7, _super);
		function GameSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","ResultBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "ResultBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin7;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["group_words","btn_back","img_question","group_answer","btn_next","lb_from","lb_explain","group_win"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.group_words_i(),this.btn_back_i(),this.img_question_i(),this.group_answer_i(),this.group_win_i()];
	}
	var _proto = GameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "GameBG3_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "WordFrame_png";
		t.x = 39;
		t.y = 120;
		return t;
	};
	_proto.group_words_i = function () {
		var t = new eui.Group();
		this.group_words = t;
		t.height = 417;
		t.width = 538;
		t.x = 108;
		t.y = 637;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Word1_i(),this._Word2_i(),this._Word3_i(),this._Word4_i(),this._Word5_i(),this._Word6_i(),this._Word7_i(),this._Word8_i(),this._Word9_i(),this._Word10_i(),this._Word11_i(),this._Word12_i(),this._Word13_i(),this._Word14_i(),this._Word15_i(),this._Word16_i(),this._Word17_i(),this._Word18_i(),this._Word19_i(),this._Word20_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 30;
		t.verticalGap = 30;
		return t;
	};
	_proto._Word1_i = function () {
		var t = new Word();
		t.x = 80;
		t.y = 106;
		return t;
	};
	_proto._Word2_i = function () {
		var t = new Word();
		t.x = 90;
		t.y = 116;
		return t;
	};
	_proto._Word3_i = function () {
		var t = new Word();
		t.x = 100;
		t.y = 126;
		return t;
	};
	_proto._Word4_i = function () {
		var t = new Word();
		t.x = 110;
		t.y = 136;
		return t;
	};
	_proto._Word5_i = function () {
		var t = new Word();
		t.x = 120;
		t.y = 146;
		return t;
	};
	_proto._Word6_i = function () {
		var t = new Word();
		t.x = 130;
		t.y = 156;
		return t;
	};
	_proto._Word7_i = function () {
		var t = new Word();
		t.x = 140;
		t.y = 166;
		return t;
	};
	_proto._Word8_i = function () {
		var t = new Word();
		t.x = 150;
		t.y = 176;
		return t;
	};
	_proto._Word9_i = function () {
		var t = new Word();
		t.x = 160;
		t.y = 186;
		return t;
	};
	_proto._Word10_i = function () {
		var t = new Word();
		t.x = 170;
		t.y = 196;
		return t;
	};
	_proto._Word11_i = function () {
		var t = new Word();
		t.x = 180;
		t.y = 206;
		return t;
	};
	_proto._Word12_i = function () {
		var t = new Word();
		t.x = 190;
		t.y = 216;
		return t;
	};
	_proto._Word13_i = function () {
		var t = new Word();
		t.x = 200;
		t.y = 226;
		return t;
	};
	_proto._Word14_i = function () {
		var t = new Word();
		t.x = 210;
		t.y = 236;
		return t;
	};
	_proto._Word15_i = function () {
		var t = new Word();
		t.x = 220;
		t.y = 246;
		return t;
	};
	_proto._Word16_i = function () {
		var t = new Word();
		t.x = 230;
		t.y = 256;
		return t;
	};
	_proto._Word17_i = function () {
		var t = new Word();
		t.x = 240;
		t.y = 266;
		return t;
	};
	_proto._Word18_i = function () {
		var t = new Word();
		t.x = 250;
		t.y = 276;
		return t;
	};
	_proto._Word19_i = function () {
		var t = new Word();
		t.x = 260;
		t.y = 286;
		return t;
	};
	_proto._Word20_i = function () {
		var t = new Word();
		t.x = 270;
		t.y = 296;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.x = 11;
		t.y = 8;
		t.skinName = GameSkin$Skin6;
		return t;
	};
	_proto.img_question_i = function () {
		var t = new eui.Image();
		this.img_question = t;
		t.height = 260;
		t.horizontalCenter = 0;
		t.width = 390;
		t.y = 179;
		return t;
	};
	_proto.group_answer_i = function () {
		var t = new eui.Group();
		this.group_answer = t;
		t.height = 95;
		t.width = 373;
		t.x = 177;
		t.y = 468.56;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._AnswerWord1_i(),this._AnswerWord2_i(),this._AnswerWord3_i(),this._AnswerWord4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		return t;
	};
	_proto._AnswerWord1_i = function () {
		var t = new AnswerWord();
		t.x = 185;
		t.y = 478;
		return t;
	};
	_proto._AnswerWord2_i = function () {
		var t = new AnswerWord();
		t.x = 284;
		t.y = 478;
		return t;
	};
	_proto._AnswerWord3_i = function () {
		var t = new AnswerWord();
		t.x = 378;
		t.y = 478;
		return t;
	};
	_proto._AnswerWord4_i = function () {
		var t = new AnswerWord();
		t.x = 475;
		t.y = 478;
		return t;
	};
	_proto.group_win_i = function () {
		var t = new eui.Group();
		this.group_win = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Image3_i(),this.btn_next_i(),this.lb_from_i(),this.lb_explain_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.53;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "Result_png";
		t.verticalCenter = 260;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.x = 432;
		t.y = 941;
		t.skinName = GameSkin$Skin7;
		return t;
	};
	_proto.lb_from_i = function () {
		var t = new eui.Label();
		this.lb_from = t;
		t.height = 65;
		t.multiline = true;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 501;
		t.x = 113;
		t.y = 700;
		return t;
	};
	_proto.lb_explain_i = function () {
		var t = new eui.Label();
		this.lb_explain = t;
		t.height = 127;
		t.multiline = true;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 501;
		t.x = 113;
		t.y = 805;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/assets/skin/LevelIconSkin.exml'] = window.LevelIconSkin = (function (_super) {
	__extends(LevelIconSkin, _super);
	function LevelIconSkin() {
		_super.call(this);
		this.skinParts = ["lb_level"];
		
		this.currentState = "enabled";
		this.height = 77;
		this.width = 77;
		this.elementsContent = [this.lb_level_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image2","",2,"lb_level")
				])
			,
			new eui.State ("enabled",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = LevelIconSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "gs_select_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "gs_select_dis_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lb_level_i = function () {
		var t = new eui.Label();
		this.lb_level = t;
		t.horizontalCenter = 0;
		t.text = "100";
		t.verticalCenter = 0;
		return t;
	};
	return LevelIconSkin;
})(eui.Skin);generateEUI.paths['resource/assets/skin/LevelsSkin.exml'] = window.LevelsSkin = (function (_super) {
	__extends(LevelsSkin, _super);
	var LevelsSkin$Skin8 = 	(function (_super) {
		__extends(LevelsSkin$Skin8, _super);
		function LevelsSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BackBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelsSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelsSkin$Skin8;
	})(eui.Skin);

	function LevelsSkin() {
		_super.call(this);
		this.skinParts = ["group_levels","btn_back"];
		
		this.height = 1136;
		this.width = 720;
		this.elementsContent = [this._Scroller1_i(),this.btn_back_i()];
	}
	var _proto = LevelsSkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this.group_levels_i();
		return t;
	};
	_proto.group_levels_i = function () {
		var t = new eui.Group();
		this.group_levels = t;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.x = 607;
		t.y = 1047;
		t.skinName = LevelsSkin$Skin8;
		return t;
	};
	return LevelsSkin;
})(eui.Skin);generateEUI.paths['resource/assets/skin/WordSkin.exml'] = window.WordSkin = (function (_super) {
	__extends(WordSkin, _super);
	function WordSkin() {
		_super.call(this);
		this.skinParts = ["lb_text"];
		
		this.height = 80;
		this.width = 80;
		this.elementsContent = [this._Rect1_i(),this.lb_text_i()];
	}
	var _proto = WordSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x0276D0;
		t.strokeWeight = 4;
		t.top = 0;
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "字";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return WordSkin;
})(eui.Skin);