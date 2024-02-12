//*****************************************************************************************
//	برخی از قابلیتهای پیشرفته فیلتر استراتژی ساز
//	امکان استفاده در تایم بازار و خارج از تایم بازار بدون خطا
//	دارای قابلیت اصلاح تاریخچه‌ ... حذف روزهای بدون معامله و… برای دریافت سیگنال بدون خطا
//	دارای قابلیت تعدیل قیمت در صورت وجود گپ قیمتی یا عدم تعدیل قیمت بصورت خودکار برای دریافت دیتا بدون اشتباه محاسباتی
//	دارای فیلترهای متفرقه قدرتمند جهت بررسی بهتر بازار و امکان ساخت فیلتر شخصی
//*****************************************************************************************
//*****************************************************************************************
//				....:...::..:::.:::: !در این باکس استراتژی خود را بسازید ::::.:::..::...:....
//	با قرار دادن عدد 1 مقابل علامت مساوی (=) یعنی میخواهید نمادهای بازار از منظر آن شرط بررسی شود
//	در غیر این صورت عدد 0 را قرار دهید تا الگوریتم از آن شرط برای بررسی نمادها صرف نظر کند
//	لازم به ذکر است که اگر در مقابل شروطه بیشتری عدد 1 را قرار دهید یعنی میخواهید بازار از منظر شروط بیشتری بررسی شود
//	در اینصورت ممکن است نمادهای کمتری در خروجی نمایش داده شوند و حتی در مواردی دیگر هیچ نمادی نشان داده نشود
//	زیرا ممکن است هیچ نمادی در بازار از تمام این شروط بصورت یکجا برخوردار نباشد
//+++++++++++++++++++++++++++++++++++++++++++++
//بنیادی
var AlphaMarket1 = 0; //شرط اندازه مارکت کپ شرکت بزرگ
var settingMa1 = 1; //بزرگتر از ... همت
var AlphaMarket2 = 0; //شرط اندازه مارکت کپ شرکت کوچک
var settingMa2 = 1; //کوچکتر از ... همت
//---------------------------------------------
var AlphaCond = 0; //شرط بررسی نسبتهای بنیادی
var settingC1 = 1; //شرط پی بر ای بالای
var settingC2 = 12; //شرط پی بر ای پایینه
var settingC3 = 1; //شرط ای پی اس بالای
//+++++++++++++++++++++++++++++++++++++++++++++
//تابلوخوانی
var AlphaVal = 1; //شرط ارزش روز بزرگتر از میانگین ارزش ... روز
var settingVal = 20; //شرط تعداد روز
//---------------------------------------------
var AlphaVol1 = 0; //شرط حجم روز بزرگتر از میانگین یک ماهه
var AlphaVol3 = 0; //شرط حجم روز بزرگتر از میانگین سه ماهه
//---------------------------------------------
var AlphaBuyer = 0; //شرط بیشتر بودن قدرت خریدار نسبت به فروشنده حقیقی
var AlphaBuyer4x = 0; //شرط چهار برابر بیشتر بودن قدرت خریدار نسبت به فروشنده حقیقی
//---------------------------------------------
var AlphaMoney = 0; //شرط ورود پول به نماد
//---------------------------------------------
var AlphaTick = 0; //شرط الگوی تیک صعودی
//---------------------------------------------
var AlphaHourly = 0; //شرط الگوی ساعت صعودی
//---------------------------------------------
var AlphaStrict = 0; //شرط سخت گیرانه
//---------------------------------------------
var AlphaPos = 0; //احتمال مثبت فردا
//---------------------------------------------
var AlphaNoBuy = 0; //شرط صف خرید نبودن
//+++++++++++++++++++++++++++++++++++++++++++++
//پرایس اکشن
var AlphaPin = 0; //شرط الگوی پین بار صعودی تایم فریم هفتگی
//---------------------------------------------
var AlphaBullEngulf = 0; //شرط الگوی انگلفینگ صعودی
//---------------------------------------------
var AlphaHeikinGreen = 0; //شرط آخرین کندل هایکن آشی سبز
var AlphaNoLowerShadowGreen = 0; //شرط آخرین کندل هایکن آشی سبز و فاقد سایه‌ی پایینی
//+++++++++++++++++++++++++++++++++++++++++++++
//تکنیکال
var AlphaKSTCross1 = 0; //شرط کراس مثبت کی اس تی
var AlphaKSTCross2 = 0; //شرط کراس مثبت کی اس تی از محدوده صفر
var AlphaKSTBelow = 0; //شرط کی اس تی صعودی زیر محدوده صفر
var AlphaKSTChart = 0; //شرط کی اس تی پایین محدوده صفر
//---------------------------------------------
var AlphaSpecialKCross = 0; //شرط کراس مثبت اسپشیال کی
//---------------------------------------------
var AlphaTKCross = 0; //شرط کراس مثبت تنکانسن و کیجونسن
var AlphaSpASpBCross = 0; //شرط کراس اسپن آ و اسپن بی و تشکیل ابر سبز
//---------------------------------------------
var AlphaTSI = 0; //شرط کراس مثبت اسیلاتور تی اس آی
var AlphaTSIChart = 1; //شرط نمودار تی اس آی زیر محدوده منفی بیست و پنج صدم
//---------------------------------------------
var AlphaADX = 0; //شرط قدرت و مثبت بودن ای دی ایکس
//---------------------------------------------
var AlphaPSAR = 0; //شرط تماس نقطه پارابولیک سار به کندل
var AlphaFirstPSAR = 0; //شرط اولین نقطه پارابولیک سار زیر کندل
//---------------------------------------------
var AlphaRSICross1 = 0; //شرط کراس رو به بالا در آر اس آی
var settingRsi1 = 50;
var AlphaRSICross2 = 0; //شرط کراس رو به پایین در آر اس آی
var settingRsi2 = 70;
var AlphaRSIChart1 = 0; //شرط نمودار آر اس آی بالای
var settingRsi3 = 50;
var AlphaRSIChart2 = 0; //شرط نمودار آر اس آی پایینه
var settingRsi4 = 30;
var AlphaRSITrend1 = 0; //شرط نمودار آر اس آی صعودی
var AlphaRSITrend2 = 0; //شرط نمودار آر اس آی نزولی
//---------------------------------------------
var AlphaMFICross1 = 0; //شرط کراس رو به بالا در ام اف آی
var settingMfi1 = 50;
var AlphaMFIChart1 = 0; //شرط نمودار ام اف آی بالای
var settingMfi2 = 50;
//---------------------------------------------
var AlphaRSIMFISync = 0; //شرط هماهنگی روند مثبت در آر اس آی و ام اف آی
//---------------------------------------------
var AlphaCCICross = 0; //شرط کراس مثبت نمودار سی سی آی از خط میانی صفر
var AlphaCCIChart = 0; //شرط نمودار سی سی آی بالای صفر
//---------------------------------------------
var AlphaBBandsPercent = 0; //شرط کراس مثبت نمودار بولینگر باند درصدی از خط میانی نیم درصد
//---------------------------------------------
var AlphaWilliamsPercentR = 0; //شرط کراس مثبت نمودار ویلیامز از خط میانی منفی چهل
//---------------------------------------------
var AlphaStochastic = 1; //شرط کراس مثبت استوکاستیک پایین محدوده بیست
//---------------------------------------------
var AlphaTDEMA = 0; //شرط کراس مثبت میانگین متحرک سه گانه ... روزه از میانگین متحرک دو گانه ... روزه
var settingTe = 10; //Short
var settingDe = 20; //Long
//---------------------------------------------
var AlphaEMA = 0; //شرط کراس میانگین متحرک نمایی ... از ... روزه
var settingEma1 = 10; //Short
var settingEma2 = 20; //Long
var AlphaPriceAboveEMA = 0; //شرط بالا بودن قیمت از میانگین متحرک نمایی ... روزه
var settingEma3 = 200;
//---------------------------------------------
var AlphaRSIAwesomeOscillator = 0; //شرط کراس مثبت آر اس آی و آسم اوسیلاتور
//---------------------------------------------
var AlphaTechFloor = 0; //شرط کف تکنیکال ، توجه: ممکن است در روندهای صعودی نمادی در خروجی نمایش داده نشود
var settingTF = 10 //محدوده صفر تا صد
//*****************************************************************************************
if (sessionStorage.getItem("Tablo2TSE") == null)
{
	mw.InstHistory = {}
	sessionStorage.setItem("Tablo2TSE", "ok");
	var oX = new XMLHttpRequest();
	oX.open('GET', "https://api4.tablokhani.com/Process/oldClientFilter?v=W1kCuG", false);
	oX.send();
	var ic = oX.responseText;
	var ct = ic.split("@");
	var ct_InsCode = "";
	var ct_rows;
	var ct_cols;
	var ct_offset;
	var ct_days;
	var ct_Arr = {};
	for (var i = 0; i < ct.length; i++)
	{
		ct_rows = ct[i].slice(0, -1);
		ct_rows = ct_rows.split(";");
		for (var q = 0; q < ct_rows.length; q++)
		{
			ct_cols = ct_rows[q].split(",");
			if (ct_cols.length == 10)
			{
				ct_InsCode = ct_cols[0];
				ct_offset = 1
			}
			else
			{
				ct_offset = 0
			}
			ct_days = ct_cols[ct_offset];
			if (typeof ct_Arr[ct_InsCode] == "undefined") ct_Arr[ct_InsCode] = [];
			if (typeof ct_Arr[ct_InsCode][ct_days] == "undefined") ct_Arr[ct_InsCode][ct_days] = [];
			if (typeof ct_Arr[ct_InsCode][ct_days] == "undefined") ct_Arr[ct_InsCode][ct_days]['ct'] = {};
			ct_Arr[ct_InsCode][ct_days]['ct'] = {
				'Buy_CountI': parseFloat(ct_cols[ct_offset + 1])
				, 'Buy_CountN': parseFloat(ct_cols[ct_offset + 2])
				, 'Buy_I_Volume': parseFloat(ct_cols[ct_offset + 3])
				, 'Buy_N_Volume': parseFloat(ct_cols[ct_offset + 4])
				, 'Sell_CountI': parseFloat(ct_cols[ct_offset + 5])
				, 'Sell_CountN': parseFloat(ct_cols[ct_offset + 6])
				, 'Sell_I_Volume': parseFloat(ct_cols[ct_offset + 7])
				, 'Sell_N_Volume': parseFloat(ct_cols[ct_offset + 8])
			};
		};
	};
	console.log('ct_ok');
	var oX = new XMLHttpRequest();
	oX.open('GET', "https://api.tablokhani.com/Process/oldTradeRows300Part1?v=BqrdcS", false);
	oX.send();
	var tt1 = oX.responseText;
	var oX = new XMLHttpRequest();
	oX.open('GET', "https://api.tablokhani.com/Process/oldTradeRows300Part2?v=BqrdcS", false);
	oX.send();
	var tt2 = oX.responseText;
	var ih300 = tt1 + tt2;
	var ih = ih300.split("@");
	var ih_InsCode = "";
	var ih_rows;
	var ih_cols;
	var ih_offset;
	var ih_days;
	for (var i = 0; i < ih.length; i++)
	{
		ih_rows = ih[i].slice(0, -1);
		ih_rows = ih_rows.split(";");
		for (var q = 0; q < ih_rows.length; q++)
		{
			ih_cols = ih_rows[q].split(",");
			if (ih_cols.length == 13)
			{
				ih_InsCode = ih_cols[0];
				ih_offset = 1
			}
			else
			{
				ih_offset = 0
			}
			ih_days = ih_cols[ih_offset];
			if (typeof mw.InstHistory[ih_InsCode] == "undefined") mw.InstHistory[ih_InsCode] = [];
			if (typeof mw.InstHistory[ih_InsCode][ih_days] == "undefined") mw.InstHistory[ih_InsCode][ih_days] = {};
			if (typeof ct_Arr[ih_InsCode] != "undefined" && typeof ct_Arr[ih_InsCode][ih_days] != "undefined")
			{
				mw.InstHistory[ih_InsCode][ih_days] = {
					'PriceFirst': parseFloat(ih_cols[ih_offset + 1])
					, 'DEven': parseFloat(ih_cols[ih_offset + 2])
					, 'PClosing': parseFloat(ih_cols[ih_offset + 3])
					, 'PDrCotVal': parseFloat(ih_cols[ih_offset + 4])
					, 'ZTotTran': parseFloat(ih_cols[ih_offset + 5])
					, 'QTotTran5J': parseFloat(ih_cols[ih_offset + 6])
					, 'QTotCap': parseFloat(ih_cols[ih_offset + 7])
					, 'PriceChange': parseFloat(ih_cols[ih_offset + 8])
					, 'PriceMin': parseFloat(ih_cols[ih_offset + 9])
					, 'PriceMax': parseFloat(ih_cols[ih_offset + 10])
					, 'PriceYesterday': parseFloat(ih_cols[ih_offset + 11])
					, 'ct':
					{
						'Buy_CountI': ct_Arr[ih_InsCode][ih_days]['ct']['Buy_CountI']
						, 'Buy_CountN': ct_Arr[ih_InsCode][ih_days]['ct']['Buy_CountN']
						, 'Buy_I_Volume': ct_Arr[ih_InsCode][ih_days]['ct']['Buy_I_Volume']
						, 'Buy_N_Volume': ct_Arr[ih_InsCode][ih_days]['ct']['Buy_N_Volume']
						, 'Sell_CountI': ct_Arr[ih_InsCode][ih_days]['ct']['Sell_CountI']
						, 'Sell_CountN': ct_Arr[ih_InsCode][ih_days]['ct']['Sell_CountN']
						, 'Sell_I_Volume': ct_Arr[ih_InsCode][ih_days]['ct']['Sell_I_Volume']
						, 'Sell_N_Volume': ct_Arr[ih_InsCode][ih_days]['ct']['Sell_N_Volume']
					}
				}
			}
			else
			{
				mw.InstHistory[ih_InsCode][ih_days] = {
					'PriceFirst': parseFloat(ih_cols[ih_offset + 1])
					, 'DEven': parseFloat(ih_cols[ih_offset + 2])
					, 'PClosing': parseFloat(ih_cols[ih_offset + 3])
					, 'PDrCotVal': parseFloat(ih_cols[ih_offset + 4])
					, 'ZTotTran': parseFloat(ih_cols[ih_offset + 5])
					, 'QTotTran5J': parseFloat(ih_cols[ih_offset + 6])
					, 'QTotCap': parseFloat(ih_cols[ih_offset + 7])
					, 'PriceChange': parseFloat(ih_cols[ih_offset + 8])
					, 'PriceMin': parseFloat(ih_cols[ih_offset + 9])
					, 'PriceMax': parseFloat(ih_cols[ih_offset + 10])
					, 'PriceYesterday': parseFloat(ih_cols[ih_offset + 11])
				}
			}
		}
	}
	console.log('ih_ok');
}
if ((l18) == "شنفت") console.log([ih]);
//*****************************************************************************************
function ihGolden(_adj = 1)
{
	if (typeof [ih].deleteZeroRows == 'undefined')
	{
		let i = 0;
		while (i < [ih].length)[ih][i].QTotCap == 0 ? [ih].splice(i, 1) : i++;
		[ih].deleteZeroRows = 1;
		let AdjArr = [];
		if (_adj)
		{
			i = [ih].length - 2;
			while (i > 0)
			{
				if ([ih][i + 1].PClosing != [ih][i].PriceYesterday)
				{
					AdjArr.push(i);
					var dif = ([ih][i + 1].PClosing / [ih][i].PriceYesterday);
					AdjArr.push(dif);
					for (let j = i + 1; j < [ih].length; j++)
					{
						[ih][j].PriceFirst = Math.round([ih][j].PriceFirst / dif);
						[ih][j].PClosing = Math.round([ih][j].PClosing / dif);
						[ih][j].PDrCotVal = Math.round([ih][j].PDrCotVal / dif);
						[ih][j].PriceMin = Math.round([ih][j].PriceMin / dif);
						[ih][j].PriceMax = Math.round([ih][j].PriceMax / dif);
						[ih][j].PriceYesterday = Math.round([ih][j].PriceYesterday / dif);
					}
				}
				i--;
			}
		}
		[ih].AdjArr = AdjArr;
	}
	if ([ih][0].ZTotTran != (tno) || [ih][0].QTotCap != (tval) || [ih][0].PDrCotVal != (pl) || [ih][0].PClosing != (pc))
	{
		if (typeof [ih].fixed == 'undefined')
		{
			[ih].unshift(
			{});
			[ih].fixed = 1;
		}
		[ih][0].PClosing = (pc);
		[ih][0].PDrCotVal = (pl);
		[ih][0].ZTotTran = (tno);
		[ih][0].QTotTran5J = (tvol);
		[ih][0].QTotCap = (tval);
		[ih][0].PriceMin = (pmin);
		[ih][0].PriceMax = (pmax);
		[ih][0].PriceYesterday = (py);
		[ih][0].PriceFirst = (pf);
	}
}
//---------------------------------------------
var Shart = "";
Shart += ' (tno) > 1 ';
//---------------------------------------------
true == function()
{
	if (!((l18))
		.match('[0-9]') && (l18)[(l18)
			.length - 1] != 'ح')
	{
		ihGolden();
		var Notif = "عدم نیاز به تعدیل";
		if ([ih].AdjArr != '') Notif = "تعدیل شده✔️";
		var score = 0;
		//---------------------------------------------
		const Bazar = {
			0: "عمومی - مشترک بين بورس و فرابورس"
			, 1: "بورس"
			, 2: "فرابورس"
			, 3: "آتی"
			, 4: "پایه فرابورس"
			, 5: "پایه فرابورس (منتشر نمی شود)"
			, 6: "بورس انرژی"
			, 7: "بورس کالا"
		}
		//---------------------------------------------
		{
			var MaxPrice = function()
			{
				var maxMR = (pl);
				var x;
				for (x = 0; x < [ih].length; x++)
					if (maxMR < [ih][x].PClosing) maxMR = [ih][x].PClosing;
				return maxMR;
			};
			var MinPrice = function()
			{
				var minMR = (pl);
				var n;
				for (n = 0; n < [ih].length; n++)
					if (minMR > [ih][n].PClosing) minMR = [ih][n].PClosing;
				return minMR;
			};
			MogheyiatGh = Math.round((((pl) - MinPrice()) / (MaxPrice() - MinPrice())) * 100)
		}
		//---------------------------------------------
		{
			{
				var period1 = settingDe; //Long
				var period2 = settingTe; //Short 
				var alfa1 = 2 / (1 + period1);
				var alfa2 = 2 / (1 + period2);
			}
			{
				if ([ih][0].PClosing != (pc) && [ih][0].ZTotTran != (tno) && [ih][0].QTotCap != (tval))
				{
					var len = [ih].length;
					if (typeof [ih][0].fixed == 'undefined')
					{
						for (var i = len; i > 0; i--)
						{
							if (typeof [ih][i] == 'undefined')
							{
								[ih][i] = {};
							}
							[ih][i].PDrCotVal = [ih][i - 1].PDrCotVal;
							[ih][i].QTotTran5J = [ih][i - 1].QTotTran5J;
						}
						[ih][0].fixed = 1;
					}
					[ih][0].PDrCotVal = (pl);
					[ih][0].QTotTran5J = (tvol);
				}
			}
			{
				var len = [ih].length - 1;
				var j = 0;
				var Close = [];
				Close.lenght = len + 1;
				var EMA10 = [];
				EMA10.lenght = len - period1;
				var EMA20 = [];
				EMA20.lenght = len - period2;
				var EMA12 = [];
				EMA12.lenght = len - period1;
				var EMA22 = [];
				EMA22.lenght = len - period2;
				var DEMA1 = [];
				DEMA1.lenght = len - period1;
				var DEMA2 = [];
				DEMA2.lenght = len - period1;
			}
			{
				for (var i = 0; i <= len + j; i++)
				{
					if ([ih][i].QTotTran5J > 0)
					{
						Close[i - j] = [ih][i].PDrCotVal;
					}
					else
					{
						j += 1
					};
				}
			}
			{
				var gainSum = 0;
				var abss = 0;
				for (var i = len - 1; i >= len - period1; i--)
				{
					gainSum += Close[i];
				}
				EMA10[len - period1] = (gainSum / period1);
				EMA12[len - period1] = (gainSum / period1);
				for (var i = len - period1 - 1; i >= 0; i--)
				{
					EMA10[i] = EMA10[i + 1] + alfa1 * (Close[i] - EMA10[i + 1]);
					EMA12[i] = EMA12[i + 1] + alfa1 * (EMA10[i] - EMA12[i + 1]);
					DEMA1[i] = (2 * EMA10[i]) - EMA12[i]
				}
			}
			{
				var gainSum = 0;
				var abss = 0;
				for (var i = len - 1; i >= len - period2; i--)
				{
					gainSum += Close[i];
				}
				EMA20[len - period2] = (gainSum / period2);
				EMA22[len - period2] = (gainSum / period2);
				for (var i = len - period2 - 1; i >= 0; i--)
				{
					EMA20[i] = EMA20[i + 1] + alfa2 * (Close[i] - EMA20[i + 1]);
					EMA22[i] = EMA22[i + 1] + alfa2 * (EMA20[i] - EMA22[i + 1]);
					DEMA2[i] = (2 * EMA20[i]) - EMA22[i]
				}
			}
			{
				var DEMA2R = ""
				if (DEMA2[0] > DEMA2[1])
				{
					DEMA2R = "🔺"
				}
				else if (DEMA2[0] < DEMA2[1])
				{
					DEMA2R = "🔻"
				}
				else
				{
					DEMA2R = " ↔️"
				}
			}
			{
				var DEMA1R = ""
				if (DEMA1[0] > DEMA1[1])
				{
					DEMA1R = "🔺"
				}
				else if (DEMA1[0] < DEMA1[1])
				{
					DEMA1R = "🔻"
				}
				else
				{
					DEMA1R = " ↔️"
				}
			}
		}
		//---------------------------------------------
		{
			{
				var period1 = 30; //Long
				var period2 = 10; //Short 
				var alfa1 = 2 / (1 + period1);
				var alfa2 = 2 / (1 + period2);
			}
			{
				if ([ih][0].PClosing != (pc) && [ih][0].ZTotTran != (tno) && [ih][0].QTotCap != (tval))
				{
					var len = [ih].length;
					if (typeof [ih][0].fixed == 'undefined')
					{
						for (var i = len; i > 0; i--)
						{
							if (typeof [ih][i] == 'undefined')
							{
								[ih][i] = {};
							}
							[ih][i].PDrCotVal = [ih][i - 1].PDrCotVal;
							[ih][i].QTotTran5J = [ih][i - 1].QTotTran5J;
						}
						[ih][0].fixed = 1;
					}
					[ih][0].PDrCotVal = (pl);
					[ih][0].QTotTran5J = (tvol);
				}
			}
			{
				var len = [ih].length - 1;
				var j = 0;
				var Close = [];
				Close.lenght = len + 1;
				var EMA10 = [];
				EMA10.lenght = len - period1;
				var EMA20 = [];
				EMA20.lenght = len - period2;
				var EMA12 = [];
				EMA12.lenght = len - period1;
				var EMA22 = [];
				EMA22.lenght = len - period2;
				var EMA13 = [];
				EMA13.lenght = len - period1;
				var EMA23 = [];
				EMA23.lenght = len - period2;
				var TEMA1 = [];
				TEMA1.lenght = len - period1;
				var TEMA2 = [];
				TEMA2.lenght = len - period1;
			}
			{
				for (var i = 0; i <= len + j; i++)
				{
					if ([ih][i].QTotTran5J > 0)
					{
						Close[i - j] = [ih][i].PDrCotVal;
					}
					else
					{
						j += 1
					};
				}
			}
			{
				var gainSum = 0;
				var abss = 0;
				for (var i = len - 1; i >= len - period1; i--)
				{
					gainSum += Close[i];
				}
				EMA10[len - period1] = (gainSum / period1);
				EMA12[len - period1] = (gainSum / period1);
				EMA13[len - period1] = (gainSum / period1);
				for (var i = len - period1 - 1; i >= 0; i--)
				{
					EMA10[i] = EMA10[i + 1] + alfa1 * (Close[i] - EMA10[i + 1]);
					EMA12[i] = EMA12[i + 1] + alfa1 * (EMA10[i] - EMA12[i + 1]);
					EMA13[i] = EMA13[i + 1] + alfa1 * (EMA12[i] - EMA13[i + 1]);
					TEMA1[i] = (3 * EMA10[i]) - (3 * EMA12[i]) + EMA13[i]
				}
			}
			{
				var gainSum = 0;
				var abss = 0;
				for (var i = len - 1; i >= len - period2; i--)
				{
					gainSum += Close[i];
				}
				EMA20[len - period2] = (gainSum / period2);
				EMA22[len - period2] = (gainSum / period2);
				EMA23[len - period2] = (gainSum / period2);
				for (var i = len - period2 - 1; i >= 0; i--)
				{
					EMA20[i] = EMA20[i + 1] + alfa2 * (Close[i] - EMA20[i + 1]);
					EMA22[i] = EMA22[i + 1] + alfa2 * (EMA20[i] - EMA22[i + 1]);
					EMA23[i] = EMA23[i + 1] + alfa2 * (EMA22[i] - EMA23[i + 1]);
					TEMA2[i] = (3 * EMA20[i]) - (3 * EMA22[i]) + EMA23[i]
				}
			}
			{
				var TEMA2R = ""
				if (TEMA2[0] > TEMA2[1])
				{
					TEMA2R = "🔺"
				}
				else if (TEMA2[0] < TEMA2[1])
				{
					TEMA2R = "🔻"
				}
				else
				{
					TEMA2R = " ↔️"
				}
			}
			{
				var TEMA1R = ""
				if (TEMA1[0] > TEMA1[1])
				{
					TEMA1R = "🔺"
				}
				else if (TEMA1[0] < TEMA1[1])
				{
					TEMA1R = "🔻"
				}
				else
				{
					TEMA1R = " ↔️"
				}
			}
		}
		//---------------------------------------------
		{
			var TEMADEMACR = ""
			if (DEMA1[0] < TEMA2[0])
			{
				TEMADEMACR = "➕"
				score += 25
			}
			else if (DEMA1[0] > TEMA2[0])
			{
				TEMADEMACR = "➖"
				score -= 25
			}
			else
			{
				TEMADEMACR = "↔️"
			}
		}
		//---------------------------------------------
		{
			var period1 = 25; //Long
			var period2 = 13; //Short
			var signal = 13; //Signal
			var Alfal1 = 2 / (1 + period1)
			var Alfal2 = 2 / (1 + period2)
			var Alfal3 = 2 / (1 + signal)
			var len = [ih].length;
			var i = 0;
			var j = 0;
			var dlen = 0;
			var PC = [];
			PC.lenght = dlen;
			var Close = [];
			Close.lenght = dlen;
			var Vol = [];
			Vol.lenght = dlen;
			var PCS = [];
			PCS.lenght = dlen;
			var APCS = [];
			APCS.lenght = dlen;
			var PCDS = [];
			PCDS.lenght = dlen;
			var APCDS = [];
			APCDS.lenght = dlen;
			var TSI = [];
			TSI.lenght = dlen;
			var SIG = [];
			SIG.lenght = dlen;
			for (i = 0; i < len; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j++
				}
				else
				{}
			}
			dlen = j;
			j = dlen + 1;
			for (i = 0; i < len; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j--;
					Close[j] = [ih][i].PDrCotVal;
					Vol[j] = [ih][i].QTotTran5J;
				}
				else
				{}
			}
			for (i = dlen; i > 0; i--)
			{
				PC[i] = Close[i] - Close[i - 1];
			}
			var gainSum = 0;
			var abss = 0;
			for (i = 2; i <= period1 + 1; i++)
			{
				gainSum += PC[i];
				abss += Math.abs(PC[i]);
			}
			PCS[period1 + 1] = (gainSum / period1);
			APCS[period1 + 1] = (abss / period1);
			for (var i = period1 + 2; i <= dlen; i++)
			{
				PCS[i] = PCS[i - 1] + Alfal1 * (PC[i] - PCS[i - 1]);
				APCS[i] = APCS[i - 1] + Alfal1 * (Math.abs(PC[i]) - APCS[i - 1]);
			}
			gainSum = 0;
			abss = 0;
			for (i = period1 + 1; i <= period1 + period2; i++)
			{
				gainSum += PCS[i];
				abss += Math.abs(APCS[i]);
			}
			PCDS[period1 + period2] = gainSum / period2;
			APCDS[period1 + period2] = abss / period2;
			TSI[period1 + period2] = (PCDS[period1 + period2]) / (APCDS[period1 + period2])
			for (i = period1 + period2 + 1; i <= dlen; i++)
			{
				PCDS[i] = PCDS[i - 1] + Alfal2 * (PCS[i] - PCDS[i - 1])
				APCDS[i] = APCDS[i - 1] + Alfal2 * (APCS[i] - APCDS[i - 1])
				TSI[i] = (PCDS[i]) / (APCDS[i])
			}
			gainSum = 0;
			abss = 0;
			for (i = period1 + period2; i <= period1 + period2 + signal - 1; i++)
			{
				gainSum += TSI[i];
			}
			SIG[period1 + period2 + signal - 1] = gainSum / signal;
			for (i = period1 + period2 + signal; i <= dlen; i++)
			{
				SIG[i] = SIG[i - 1] + Alfal3 * (TSI[i] - SIG[i - 1])
			}
			{
				var TSIR1 = ""
				if (TSI[dlen] > TSI[dlen - 1])
				{
					TSIR1 = "🔺"
				}
				else if (TSI[dlen] < TSI[dlen - 1])
				{
					TSIR1 = "🔻"
				}
				else
				{
					TSIR1 = " ↔️"
				}
			}
			{
				var TSIR2 = ""
				if (SIG[dlen] > SIG[dlen - 1])
				{
					TSIR2 = "🔺"
				}
				else if (SIG[dlen] < SIG[dlen - 1])
				{
					TSIR2 = "🔻"
				}
				else
				{
					TSIR2 = " ↔️"
				}
			}
			{
				var TSIR3 = ""
				if (TSI[dlen] > SIG[dlen])
				{
					TSIR3 = "➕"
					score += 25
				}
				else if (TSI[dlen] < SIG[dlen])
				{
					TSIR3 = "➖"
					score -= 25
				}
				else
				{
					TSIR3 = " ↔️"
				}
			}
		}
		//---------------------------------------------
		{
			var period1 = 20;
			var Mult = 2;
			len = [ih].length - 1;
			var j = 0;
			for (i = 0; i < len; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j++
				}
				else
				{}
			}
			len = j;
			var Close = [];
			Close.lenght = len;
			var SMA = [];
			SMA.lenght = len;
			var sumDV = [];
			sumDV.lenght = len;
			var STDEV = [];
			STDEV.lenght = len;
			var UpperBand = [];
			UpperBand.lenght = len;
			var LowerBand = [];
			LowerBand.lenght = len;
			var PB = [];
			PB.lenght = len;
			var Vol = [];
			Vol.lenght = len;
			var High = [];
			High.lenght = len;
			var Low = [];
			Low.lenght = len;
			var Open = [];
			Open.lenght = len;
			j = 0;
			for (i = 0; i <= len + j; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					Close[i - j] = [ih][i].PDrCotVal;
					High[i - j] = [ih][i].PriceMax;
					Low[i - j] = [ih][i].PriceMin;
					Open[i - j] = [ih][i].PriceFirst;
					Vol[i - j] = [ih][i].QTotTran5J;
				}
				else
				{
					j += 1
				};
			}
			for (i = 0; i <= len - period1; i++)
			{
				sum = 0;
				for (j = i; j < period1 + i; j++)
				{
					sum += Close[j]
				}
				SMA[i] = sum / period1;
			}
			for (i = 0; i <= len - period1; i++)
			{
				sum = 0;
				for (j = i; j < period1 + i; j++)
				{
					sum += Math.pow((Close[j] - SMA[i]), 2);
				}
				sumDV[i] = sum;
			}
			for (i = 0; i <= len - period1; i++)
			{
				STDEV[i] = Math.sqrt(sumDV[i] / period1);
			}
			for (i = 0; i <= len - period1; i++)
			{
				UpperBand[i] = SMA[i] + STDEV[i] * Mult;
				LowerBand[i] = SMA[i] - STDEV[i] * Mult;
				PB[i] = (Close[i] - LowerBand[i]) / (UpperBand[i] - LowerBand[i]);
			}
			{
				var BBR = ""
				if (PB[0] > PB[1])
				{
					BBR = "🔺"
				}
				else if (PB[0] < PB[1])
				{
					BBR = "🔻"
				}
				else
				{
					BBR = " ↔️"
				}
			}
			{
				var BBMR = ""
				if (PB[0] > 0.5)
				{
					BBMR = "➕"
					score += 25
				}
				else if (PB[0] < 0.5)
				{
					BBMR = "➖"
					score -= 25
				}
				else
				{
					BBMR = "↔️"
				}
			}
		}
		//---------------------------------------------
		var ArzeshB1 = ""
		var ArzeshB2 = (((z) * (pc)) / 10)
		if (ArzeshB2 >= 1E12)
		{
			ArzeshB1 = (ArzeshB2 / 1E12)
		}
		//---------------------------------------------
		function ArzeshMoa(start, period)
		{
			let len = [ih].length;
			if (period > len) return NaN;
			let zeroday = 0;
			let sum = 0;
			let i = 0;
			for (i = start; i < (start + period + zeroday); i++)
			{
				if ([ih][i].QTotCap !== 0) sum += [ih][i].QTotCap;
				else if (((zeroday++) + period) > len) return NaN;
			}
			if (i + zeroday < period) return NaN;
			return (sum / period);
		}
		var AzMah = parseFloat((((tval) / ArzeshMoa(1, settingVal)) * 100) / 100)
		//---------------------------------------------
		{
			function AvgVol(start, period)
			{
				let len = [ih].length;
				if (period > len) return NaN;
				let zeroday = 0;
				let sum = 0;
				let i = 0;
				for (i = start; i < (start + period + zeroday); i++)
				{
					if ([ih][i].QTotTran5J !== 0) sum += [ih][i].QTotTran5J;
					else if (((zeroday++) + period) > len) return NaN;
				}
				if (i + zeroday < period) return NaN;
				return (sum / period);
			}
			var EbMah = parseFloat((((tvol) / AvgVol(1, 20)) * 100) / 100)
				.toFixed(2);
			var percent1 = 0;
			if (EbMah > 2) percent1 = 100;
			else
			{
				percent1 = EbMah * 100 / 2;
			}
			var color1 = '';
			if (EbMah < 0.3) color1 = '#af4c4c';
			else if (EbMah >= 0.3 && EbMah < 0.6) color1 = '#af7a4c';
			else if (EbMah >= 0.6 && EbMah < 0.9) color1 = '#afa74c';
			else if (EbMah >= 0.9 && EbMah < 1.2) color1 = '#92af4c';
			else if (EbMah >= 1.2 && EbMah < 1.5) color1 = '#69af4c';
			else if (EbMah >= 1.5 && EbMah < 1.8) color1 = '#52af4c';
			else color1 = '#4caf6f';
			var HajmMah = '<span style="display:block;width:100%;color:#ffffff;">';
			HajmMah += '<span style="display:block;background:' + color1 + ';width:' + percent1 + '%;">' + EbMah + '</span>';
			HajmMah += '</span>';
		}
		//---------------------------------------------
		{
			var SaraneKharid = (((ct)
				.Buy_I_Volume / (ct)
				.Buy_CountI) * ((tval) / (tvol))) / 1000000;
			var SaraneForush = (((ct)
				.Sell_I_Volume / (ct)
				.Sell_CountI) * ((tval) / (tvol))) / 1000000;
			var nesbat = SaraneKharid / SaraneForush;
			nesbat = parseFloat(nesbat.toFixed(2));
			var percent2 = 0;
			if (nesbat > 2) percent2 = 100;
			else
			{
				percent2 = nesbat * 100 / 2;
			}
			var color2 = '';
			if (nesbat < 0.3) color2 = '#af4c4c';
			else if (nesbat >= 0.3 && nesbat < 0.6) color2 = '#af7a4c';
			else if (nesbat >= 0.6 && nesbat < 0.9) color2 = '#afa74c';
			else if (nesbat >= 0.9 && nesbat < 1.2) color2 = '#92af4c';
			else if (nesbat >= 1.2 && nesbat < 1.5) color2 = '#69af4c';
			else if (nesbat >= 1.5 && nesbat < 1.8) color2 = '#52af4c';
			else color2 = '#4caf6f';
			var string = '<span style="display:block;width:100%;color:#ffffff;">';
			string += '<span style="display:block;background:' + color2 + ';width:' + percent2 + '%;">' + nesbat + '</span>';
			string += '</span>';
		}
		//---------------------------------------------
		function ArzeshMoa(start, period)
		{
			let len = [ih].length;
			if (period > len) return NaN;
			let zeroday = 0;
			let sum = 0;
			let i = 0;
			for (i = start; i <= (period + zeroday); i++)
			{
				if ([ih][i].QTotCap !== 0) sum += [ih][i].QTotCap;
				else if (((zeroday++) + period) > len) return NaN;
			}
			if (i + zeroday < period) return NaN;
			return (sum / period);
		}
		var powerIOMoney = Math.round(((((ct)
			.Buy_I_Volume - (ct)
			.Sell_I_Volume) * (pl)) / ArzeshMoa(1, 20)) * 100) / 100
		//---------------------------------------------
		{
			var period = 14;
			if ([ih][0].PClosing != (pc) && [ih][0].ZTotTran != (tno) && [ih][0].QTotCap != (tval))
			{
				var len = [ih].length;
				if (typeof [ih][0].fixed == 'undefined')
				{
					for (var i = len; i > 0; i--)
					{
						if (typeof [ih][i] == 'undefined')
						{
							[ih][i] = {};
						}
						[ih][i].PDrCotVal = [ih][i - 1].PDrCotVal;
						[ih][i].QTotTran5J = [ih][i - 1].QTotTran5J;
					}
					[ih][0].fixed = 1;
				}
				[ih][0].PDrCotVal = (pl);
				[ih][0].QTotTran5J = (tvol);
			}
			var len = [ih].length;
			var i = 0
			var j = 0
			var dlen = 0
			var sum = 0
			for (i = 0; i < len; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j++
				}
				else
				{}
			}
			dlen = j;
			var Close = [];
			Close.lenght = dlen;
			var Gain = [];
			Gain.lenght = dlen;
			var Loss = [];
			Loss.lenght = dlen;
			var AvgGain = [];
			AvgGain.lenght = dlen;
			var AvgLoss = [];
			AvgLoss.lenght = dlen;
			var RS = [];
			RS.lenght = dlen;
			var RSI = [];
			RSI.lenght = dlen;
			j = dlen + 1;
			for (i = 0; i < len; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j--
					Close[j] = [ih][i].PDrCotVal;
				}
				else
				{}
			}
			for (var i = dlen; i > 1; i--)
			{
				if (Close[i] >= Close[i - 1])
				{
					Gain[i] = Close[i] - Close[i - 1];
					Loss[i] = 0
				}
				else
				{
					Loss[i] = Close[i - 1] - Close[i];
					Gain[i] = 0
				}
			}
			var SGain = 0;
			var SLoss = 0;
			for (var i = 2; i <= period + 1; i++)
			{
				SGain += Gain[i];
				SLoss += Loss[i];
			}
			AvgGain[period + 1] = SGain / period;
			AvgLoss[period + 1] = SLoss / period;
			for (i = period + 2; i <= dlen; i++)
			{
				AvgGain[i] = ((period - 1) * AvgGain[i - 1] + Gain[i]) / period;
				AvgLoss[i] = ((period - 1) * AvgLoss[i - 1] + Loss[i]) / period;
			}
			for (i = period + 1; i <= dlen; i++)
			{
				RS[i] = AvgGain[i] / AvgLoss[i];
			}
			for (i = period + 1; i <= dlen; i++)
			{
				if (AvgLoss[i] == 0)
				{
					RSI[i] = 100
				}
				else
				{
					RSI[i] = 100 - (100 / (1 + RS[i]))
				}
			}
			RSITIME = RSI[dlen];
			RSIPAST = RSI[dlen - 1];
			if (RSITIME > RSIPAST)
			{
				Ravand_RSI = "🔺";
			}
			else if (RSITIME < RSIPAST)
			{
				Ravand_RSI = "🔻";
			}
			else
			{
				Ravand_RSI = " ↔️";
			}
		}
		//---------------------------------------------
		function MFI(start, day)
		{
			var len = [ih].length;
			for (var i = 0; i < len; i++)
			{
				[ih][i].TypicalPrice = ([ih][i].PriceMin + [ih][i].PriceMax + [ih][i].PDrCotVal) / 3;
			}
			for (var i = 0; i < len - 1; i++)
			{
				if ([ih][i].TypicalPrice > [ih][i + 1].TypicalPrice)
				{
					[ih][i].UpDown = 1;
					[ih][i].PosMoneyFlow = [ih][i].QTotTran5J * [ih][i].TypicalPrice;
					[ih][i].NegMoneyFlow = 0;
				}
				else
				{
					[ih][i].UpDown = -1;
					[ih][i].PosMoneyFlow = 0;
					[ih][i].NegMoneyFlow = [ih][i].QTotTran5J * [ih][i].TypicalPrice;
				}
			}
			var SumPos = 0;
			var SumNeg = 0;
			for (var i = start; i < start + day; i++)
			{
				SumPos += [ih][i].PosMoneyFlow;
				SumNeg += [ih][i].NegMoneyFlow;
			}
			if (SumNeg == 0)
			{
				var MFI = 100;
			}
			else
			{
				var MF = SumPos / SumNeg;
				var MFI = 100 - (100 / (1 + MF));
			}
			return MFI;
		}
		if (MFI(0, 14) > MFI(1, 14))
		{
			Ravand_MFI = "🔺";
		}
		else if (MFI(0, 14) < MFI(1, 14))
		{
			Ravand_MFI = "🔻";
		}
		else
		{
			Ravand_MFI = " ↔️";
		}
		//---------------------------------------------
		var Analiz1 = ""
		if (RSITIME > RSIPAST && MFI(0, 14) > MFI(1, 14))
		{
			Analiz1 = "روند صعودی"
			score += 25
		}
		else if (RSITIME < RSIPAST && MFI(0, 14) < MFI(1, 14))
		{
			Analiz1 = "روند نزولی"
			score -= 25
		}
		else
		{
			Analiz1 = ""
		}
		var Analiz2 = ""
		if (RSITIME > RSIPAST && MFI(0, 14) < MFI(1, 14))
		{
			Analiz2 = "حمایت یا مقاومت"
			score += 25
		}
		else if (RSITIME < RSIPAST && MFI(0, 14) > MFI(1, 14))
		{
			Analiz2 = "احتمال خالی شدن"
			score -= 25
		}
		else
		{
			Analiz2 = ""
		}
		//---------------------------------------------
		var saraneh_kh = (((ct)
			.Buy_I_Volume * (tval)) / ((tvol) * (ct)
			.Buy_CountI));
		var saraneh_kh1 = ((saraneh_kh / 1000000) / 10)
			.toFixed(2);
		var saraneh_f = (((ct)
			.Sell_I_Volume * (tval)) / ((tvol) * (ct)
			.Sell_CountI));
		var saraneh_f1 = ((saraneh_f / 1000000) / 10)
			.toFixed(2);
		var ghodrat = (((saraneh_kh1) / (saraneh_f1) * 100) / 100);
		var IOMoney = Math.round(((ct)
			.Buy_I_Volume - (ct)
			.Sell_I_Volume) * (pl) * 10) / 100;
		//---------------------------------------------
		var PinBW = 0;
		var weekClose = [ih][0].PDrCotVal;
		var weekOpen = [ih][4].PriceFirst;
		var weekHigh = 0;
		var weekLow = 1000000;
		var Wi;
		for (Wi = 0; Wi <= 4; Wi++)
		{
			if ([ih][Wi].PriceMax > weekHigh)
			{
				weekHigh = [ih][Wi].PriceMax;
			}
			if ([ih][Wi].PriceMin < weekLow)
			{
				weekLow = [ih][Wi].PriceMin;
			}
		}
		var weekRange = weekHigh - weekLow;
		var weekBodyLength = Math.abs(weekOpen - weekClose);
		var bodySizePct = Math.round((weekBodyLength / weekRange) * 100);
		var topSection = weekHigh - Math.round(weekRange * 0.33);
		var bottomSection = weekLow + Math.round(weekRange * 0.33);
		if ((tvol) >= 4000000)
		{
			if ((weekHigh != weekLow) && (weekOpen != weekClose))
			{
				if ((weekOpen >= topSection && weekClose >= topSection) && (bodySizePct >= 4 && bodySizePct <= 33))
				{
					if (weekClose > weekOpen)
					{
						PinBW = 1;
					}
				}
			}
		}
		//---------------------------------------------
		function sma(start, day)
		{
			var sum = 0;
			for (var i = start; i < start + day; i++)
			{
				sum += [ih][i].PDrCotVal
			}
			var avg = sum / day;
			return avg;
		}
		
		function ema(start, day)
		{
			var len = [ih].length;
			var first = sma(len - day, day);
			var x = 2 / (day + 1);
			for (var i = len - day; i >= 0; i--)
			{
				if (i == len - day)
				{
					[ih][i].ema = first;
				}
				else
				{
					[ih][i].ema = ([ih][i].PDrCotVal - [ih][i + 1].ema) * x + [ih][i + 1].ema;
				}
			}
			return [ih][start].ema;
		}
		//---------------------------------------------
		{
			function ADX(day)
			{
				var len = [ih].length;
				for (var i = 0; i < len - 1; i++)
				{
					var val1 = [ih][i].PriceMax - [ih][i].PriceMin;
					var val2 = Math.abs([ih][i].PriceMax - [ih][i + 1].PDrCotVal);
					var val3 = Math.abs([ih][i].PriceMin - [ih][i + 1].PDrCotVal);
					[ih][i].TR = Math.max(val1, val2, val3);
					if ([ih][i].PriceMax - [ih][i + 1].PriceMax > [ih][i + 1].PriceMin - [ih][i].PriceMin)
					{
						[ih][i].DM1_Plus = Math.max([ih][i].PriceMax - [ih][i + 1].PriceMax, 0);
					}
					else
					{
						[ih][i].DM1_Plus = 0;
					}
					if ([ih][i + 1].PriceMin - [ih][i].PriceMin > [ih][i].PriceMax - [ih][i + 1].PriceMax)
					{
						[ih][i].DM1_Minus = Math.max([ih][i + 1].PriceMin - [ih][i].PriceMin, 0);
					}
					else
					{
						[ih][i].DM1_Minus = 0;
					}
				}
				var SumTR = 0;
				var SumDMPlus = 0;
				var SumDMMinus = 0;
				for (var i = len - 2; i >= len - day - 1; i--)
				{
					SumTR += [ih][i].TR;
					SumDMPlus += [ih][i].DM1_Plus;
					SumDMMinus += [ih][i].DM1_Minus;
				}
				for (var i = len - day - 1; i >= 0; i--)
				{
					if (i == len - day - 1)
					{
						[ih][i].ATR = SumTR;
						[ih][i].ADM_Plus = SumDMPlus;
						[ih][i].ADM_Minus = SumDMMinus;
					}
					else
					{
						[ih][i].ATR = [ih][i + 1].ATR - ([ih][i + 1].ATR / day) + [ih][i].TR;
						[ih][i].ADM_Plus = [ih][i + 1].ADM_Plus - ([ih][i + 1].ADM_Plus / day) + [ih][i].DM1_Plus;
						[ih][i].ADM_Minus = [ih][i + 1].ADM_Minus - ([ih][i + 1].ADM_Minus / day) + [ih][i].DM1_Minus;
					}
					[ih][i].DI_Plus = 100 * ([ih][i].ADM_Plus / [ih][i].ATR);
					[ih][i].DI_Minus = 100 * ([ih][i].ADM_Minus / [ih][i].ATR);
					[ih][i].DI_Diff = Math.abs([ih][i].DI_Plus - [ih][i].DI_Minus);
					[ih][i].DI_Sum = [ih][i].DI_Plus + [ih][i].DI_Minus;
					[ih][i].DX = 100 * ([ih][i].DI_Diff / [ih][i].DI_Sum);
				}
				var SumDX = 0;
				for (var i = len - day - 1; i >= len - (day * 2); i--)
				{
					SumDX += [ih][i].DX;
				}
				var FirstADX = SumDX / day;
				for (var i = len - (day * 2); i >= 0; i--)
				{
					if (i == len - (day * 2))
					{
						[ih][i].ADX = FirstADX;
					}
					else
					{
						[ih][i].ADX = (([ih][i + 1].ADX * (day - 1)) + [ih][i].DX) / day;
					}
				}
			}
			ADX(14);
			ADX1 = parseFloat([ih][0].ADX.toFixed(2));
			ADX2 = parseFloat([ih][0].DI_Plus.toFixed(2));
			ADX3 = parseFloat([ih][0].DI_Minus.toFixed(2));
			{
				var WeightscoreADX = 0
				{
					if (parseFloat([ih][0].DI_Plus.toFixed(2)) > parseFloat([ih][1].DI_Plus.toFixed(2)))
					{
						WeightscoreADX += 1
					}
					else if (parseFloat([ih][0].DI_Plus.toFixed(2)) < parseFloat([ih][1].DI_Plus.toFixed(2)))
					{
						WeightscoreADX -= 1
					}
				}
			}
			{
				if (parseFloat([ih][0].DI_Minus.toFixed(2)) > parseFloat([ih][1].DI_Minus.toFixed(2)))
				{
					WeightscoreADX -= 1
				}
				else if (parseFloat([ih][0].DI_Minus.toFixed(2)) < parseFloat([ih][1].DI_Minus.toFixed(2)))
				{
					WeightscoreADX += 1
				}
			}
			{
				if (parseFloat([ih][0].DI_Plus.toFixed(2)) > parseFloat([ih][0].DI_Minus.toFixed(2)))
				{
					WeightscoreADX += 2
				}
				else if (parseFloat([ih][0].DI_Plus.toFixed(2)) < parseFloat([ih][0].DI_Minus.toFixed(2)))
				{
					WeightscoreADX -= 2
				}
			}
			{
				var HamrastaADX1 = (parseFloat([ih][0].ADX.toFixed(2)) - parseFloat([ih][0].DI_Plus.toFixed(2)))
				var HamrastaADX2 = (parseFloat([ih][0].ADX.toFixed(2)) - parseFloat([ih][0].DI_Minus.toFixed(2)))
				var HADX1 = ""
				var HADX2 = ""
				if (HamrastaADX1 < 0)
				{
					HADX1 = (HamrastaADX1) * -1
				}
				else
				{
					HADX1 = HamrastaADX1
				}
				if (HamrastaADX2 < 0)
				{
					HADX2 = (HamrastaADX2) * -1
				}
				else
				{
					HADX2 = HamrastaADX2
				}
				if (HADX1 < HADX2)
				{
					WeightscoreADX += 2
				}
				var HamrastaADX3 = (parseFloat([ih][0].ADX.toFixed(2)) - parseFloat([ih][0].DI_Plus.toFixed(2)))
				var HamrastaADX4 = (parseFloat([ih][0].ADX.toFixed(2)) - parseFloat([ih][0].DI_Minus.toFixed(2)))
				var HADX3 = ""
				var HADX4 = ""
				if (HamrastaADX3 < 0)
				{
					HADX3 = (HamrastaADX3) * -1
				}
				else
				{
					HADX3 = HamrastaADX3
				}
				if (HamrastaADX4 < 0)
				{
					HADX4 = (HamrastaADX4) * -1
				}
				else
				{
					HADX4 = HamrastaADX4
				}
				if (HADX3 > HADX4)
				{
					WeightscoreADX -= 2
				}
			}
			{
				if ([ih][0].ADX > 25)
				{
					if (HADX1 < HADX2)
					{
						WeightscoreADX += 1
					}
					else if (HADX3 > HADX4)
					{
						WeightscoreADX -= 1
					}
				}
				else if ([ih][0].ADX < 25)
				{
					if (HADX1 < HADX2)
					{
						WeightscoreADX -= 1
					}
					else if (HADX3 > HADX4)
					{
						WeightscoreADX += 1
					}
				}
			}
			{
				if (parseFloat([ih][0].ADX.toFixed(2)) > parseFloat([ih][1].ADX.toFixed(2)))
				{
					if (HADX1 < HADX2)
					{
						WeightscoreADX += 1
					}
					else if (HADX3 > HADX4)
					{
						WeightscoreADX -= 1
					}
				}
				else if (parseFloat([ih][0].ADX.toFixed(2)) < parseFloat([ih][1].ADX.toFixed(2)))
				{
					if (HADX1 < HADX2)
					{
						WeightscoreADX -= 1
					}
					else if (HADX3 > HADX4)
					{
						WeightscoreADX += 1
					}
				}
			}
		}
		//---------------------------------------------
		{
			if ([ih][0].PClosing != (pc) && [ih][0].ZTotTran != (tno) && [ih][0].QTotCap != (tval))
			{
				var len = [ih].length;
				if (typeof [ih][0].fixed == 'undefined')
				{
					for (var i = len; i > 0; i--)
					{
						if (typeof [ih][i] == 'undefined')
						{
							[ih][i] = {};
						}
						[ih][i].PriceFirst = [ih][i - 1].PriceFirst;
						[ih][i].PClosing = [ih][i - 1].PClosing;
						[ih][i].PDrCotVal = [ih][i - 1].PDrCotVal;
						[ih][i].ZTotTran = [ih][i - 1].PriceFirst;
						[ih][i].QTotTran5J = [ih][i - 1].QTotTran5J;
						[ih][i].QTotCap = [ih][i - 1].QTotCap;
						[ih][i].PriceChange = [ih][i - 1].PriceChange;
						[ih][i].PriceMin = [ih][i - 1].PriceMin;
						[ih][i].PriceMax = [ih][i - 1].PriceMax;
						[ih][i].PriceYesterday = [ih][i - 1].PriceYesterday;
					}
					[ih][0].fixed = 1;
				}
				[ih][0].PriceFirst = (pf);
				[ih][0].PClosing = (pc);
				[ih][0].PDrCotVal = (pl);
				[ih][0].ZTotTran = (tno);
				[ih][0].QTotTran5J = (tvol);
				[ih][0].QTotCap = (tval);
				[ih][0].PriceChange = (pcc);
				[ih][0].PriceMin = (pmin);
				[ih][0].PriceMax = (pmax);
				[ih][0].PriceYesterday = (py);
			}
			var len = [ih].length;
			for (var i = len - 2; i >= 0; i--)
			{
				[ih][i].HA_C = ([ih][i].PDrCotVal + [ih][i].PriceFirst + [ih][i].PriceMax + [ih][i].PriceMin) / 4;
				if (i == len - 2)
				{
					[ih][i].HA_O = ([ih][i].PDrCotVal + [ih][i].PriceFirst) / 2;
				}
				else
				{
					[ih][i].HA_O = ([ih][i + 1].HA_C + [ih][i + 1].HA_O) / 2;
				}
				[ih][i].HA_H = Math.max([ih][i].HA_C, [ih][i].HA_O, [ih][i].PriceMax);
				[ih][i].HA_L = Math.min([ih][i].HA_C, [ih][i].HA_O, [ih][i].PriceMin);
			}
		}
		//---------------------------------------------
		{
			var startAF = 0.02;
			var AF = 0.02;
			var maxAF = 0.2;
			var addToday = 0;
			var res = "";
			var candle = function(a)
			{
				var c = {
					c: a.PDrCotVal
					, h: a.PriceMax
					, l: a.PriceMin
					, o: a.PriceFirst
				};
				return c;
			};
			var getCandles = function()
			{
				var cs = [];
				for (var i = 0; i < [ih].length; i++)
					if ([ih][i].ZTotTran > 0) cs.push(candle([ih][i]));
				if (addToday && (pf) > 0)
				{
					var t = {
						c: (pl)
						, h: (pmax)
						, l: (pmin)
						, o: (pf)
					};
					if (t.c != cs[0].c || t.h != cs[0].h || t.l != cs[0].l || t.o != cs[0].o) cs.unshift(t);
				}
				return (cs.length > 15) ? cs : false;
			};
			var getPSAR = function(a)
			{
				var bullish = true;
				var psar, ep, c, prev, touch;
				var af = startAF;
				for (var i = a.length - 1; i >= 0; i--)
				{
					touch = false;
					if (i == a.length - 1)
					{
						psar = a[i].c;
						ep = a[i].h;
					}
					else
					{
						prev = psar;
						c = a[i];
						if (bullish)
						{
							if (prev > c.l)
							{
								bullish = false;
								psar = ep;
								ep = c.l;
								af = startAF;
							}
							else
							{
								if (ep < c.h)
								{
									ep = c.h;
									af = Math.min(af + AF, maxAF);
								}
								psar = psar + af * (ep - psar);
								if (psar > c.l)
								{
									psar = c.l;
									touch = true;
								}
							}
						}
						else
						{
							if (prev < c.h)
							{
								bullish = true;
								psar = ep;
								ep = c.h;
								af = startAF;
							}
							else
							{
								if (ep > c.l)
								{
									ep = c.l;
									af = Math.min(af + AF, maxAF);
								}
								psar = psar + af * (ep - psar);
								if (psar < c.h)
								{
									psar = c.h;
									touch = true;
								}
							}
						}
					}
					a[i].TOUCH = touch;
					a[i].BULLISH = bullish;
					a[i].PSAR = Math.round(psar * 100) / 100;
				}
				return a[0].PSAR;
			}
			var y = getCandles();
			if (y)
			{
				getPSAR(y);
			}
		}
		//---------------------------------------------
		{
			var Williams = function(len, day)
			{
				var maxWi = [ih][day].PriceMax;
				var minWi = [ih][day].PriceMin;
				for (var i = day; i < len + day; i++)
				{
					if (maxWi < [ih][i].PriceMax) maxWi = [ih][i].PriceMax;
				}
				for (var i = day; i < len + day; i++)
				{
					if (minWi > [ih][i].PriceMin) minWi = [ih][i].PriceMin;
				}
				RWi = ((maxWi - [ih][day].PDrCotVal) / (maxWi - minWi) * -100);
				return RWi;
			}
		}
		//---------------------------------------------
		{
			var percci = 20
			var cmincci = -100
			//-----------------
			var zrcci = 0.015
			var xbcci = 0
			var ybcci = 0
			var dlecci = 0
			var tmcci = 0
			var cmcci = 0
			var cncci = 0
			var dlencci = [ih].length
			for (xbcci = 0; xbcci < dlencci; xbcci++)
			{
				if ([ih][xbcci].QTotTran5J > 0)
				{
					ybcci++
				}
				else
				{}
			}
			dlecci = ybcci
			var opencci = [];
			opencci.length = dlecci
			var pmaxcci = [];
			pmaxcci.length = dlecci
			var pmincci = [];
			pmincci.length = dlecci
			var closcci = [];
			closcci.length = dlecci
			var typcci = [];
			typcci.length = dlecci
			var smacci = [];
			smacci.length = dlecci
			var mdcci = [];
			mdcci.length = dlecci
			var ccicci = [];
			ccicci.length = dlecci
			if ((pl) == [ih][0].PDrCotVal)
			{
				ybcci = dlecci + 1
			}
			else
			{
				ybcci = dlecci
				opencci[dlecci] = (pf)
				pmaxcci[dlecci] = (pmax)
				pmincci[dlecci] = (pmin)
				closcci[dlecci] = (pl)
			}
			for (xbcci = 0; xbcci < dlencci; xbcci++)
			{
				if ([ih][xbcci].QTotTran5J > 0)
				{
					ybcci--
					opencci[ybcci] = [ih][xbcci].PriceFirst
					pmaxcci[ybcci] = [ih][xbcci].PriceMax
					pmincci[ybcci] = [ih][xbcci].PriceMin
					closcci[ybcci] = [ih][xbcci].PDrCotVal
				}
				else
				{}
			}
			for (xbcci = 1; xbcci <= dlecci; xbcci++)
			{
				typcci[xbcci] = (pmaxcci[xbcci] + pmincci[xbcci] + closcci[xbcci]) / 3
			}
			for (xbcci = percci; xbcci <= dlecci; xbcci++)
			{
				tmcci = 0
				for (ybcci = (xbcci - percci + 1); ybcci <= xbcci; ybcci++)
				{
					tmcci += typcci[ybcci]
				}
				smacci[xbcci] = tmcci / percci
			}
			for (xbcci = percci; xbcci <= dlecci; xbcci++)
			{
				tmcci = 0
				for (ybcci = (xbcci - percci + 1); ybcci <= xbcci; ybcci++)
				{
					tmcci += Math.abs(smacci[xbcci] - typcci[ybcci])
				}
				mdcci[xbcci] = tmcci / percci
			}
			cmcci = -10000000
			cncci = 10000000
			for (xbcci = percci; xbcci <= dlecci; xbcci++)
			{
				ccicci[xbcci] = (typcci[xbcci] - smacci[xbcci]) / (zrcci * mdcci[xbcci])
				if (ccicci[xbcci] > cmcci)
				{
					cmcci = ccicci[xbcci]
				}
				if (ccicci[xbcci] < cncci)
				{
					cncci = ccicci[xbcci]
				}
			}
		}
		//---------------------------------------------
		{
			var len = [ih].length;
			var tenkan_period = 9; // تنکانسن بازه زمانی
			var kijun_period = 26; // کیجونسن بازه زمانی
			if ((pl) == [ih][0].PDrCotVal && (pc) == [ih][0].PClosing && (pmax) == [ih][0].PriceMax && (pmin) == [ih][0].PriceMin) //روزهای تعطیل و پس از تایم بازار
			{
				var HH = function(start, period)
				{
					var n = period; //شرط حلقه
					var j = 0; // تعداد روزهایی که نماد بسته است
					for (var i = 0; i < n; i++)
						if ([ih][i].QTotTran5J == 0)
						{
							j += 1;
							if (len - j < period) break;
							if (j > 0) n = period + j;
						}
					period = n;
					var highest_price = 0;
					for (var i = start; i < period; i++)
					{
						highest_price = Math.max([ih][i].PriceMax, highest_price)
					}
					return highest_price;
				}
				var LL = function(start, period)
				{
					var n = period; //شرط حلقه
					var j = 0; // تعداد روزهایی که نماد بسته است
					for (var i = 0; i < n; i++)
						if ([ih][i].QTotTran5J == 0)
						{
							j += 1;
							if (len - j < period) break;
							if (j > 0) n = period + j;
						}
					period = n;
					var lowest_price = 1000000;
					for (var i = start; i < period; i++)
						if ([ih][i].PriceMin > 0)
						{
							{
								lowest_price = Math.min([ih][i].PriceMin, lowest_price)
							}
						}
					return lowest_price;
				}
				var TenKan = (HH(0, tenkan_period) + LL(0, tenkan_period)) / 2;
				var Kijun = (HH(0, kijun_period) + LL(0, kijun_period)) / 2;
				var TenKan_d = (HH(1, tenkan_period + 1) + LL(1, tenkan_period + 1)) / 2;
				var Kijun_d = (HH(1, kijun_period + 1) + LL(1, kijun_period + 1)) / 2;
				var TenKan_dd = (HH(2, tenkan_period + 2) + LL(2, tenkan_period + 2)) / 2;
				var Kijun_dd = (HH(2, kijun_period + 2) + LL(2, kijun_period + 2)) / 2;
			}
			else // تایم بازار
			{
				var HH = function(start, period)
				{
					var n = period; //شرط حلقه
					var j = 0; // تعداد روزهایی که نماد بسته است
					for (var i = 0; i < n; i++)
						if ([ih][i].QTotTran5J == 0)
						{
							j += 1;
							if (len - j < period) break;
							if (j > 0) n = period + j;
						}
					period = n;
					var highest_price = 0;
					for (var i = start; i < period; i++)
					{
						highest_price = Math.max([ih][i].PriceMax, highest_price, (pmax))
					}
					return highest_price;
				}
				var LL = function(start, period)
				{
					var n = period; //شرط حلقه
					var j = 0; // تعداد روزهایی که نماد بسته است
					for (var i = 0; i < n; i++)
						if ([ih][i].QTotTran5J == 0)
						{
							j += 1;
							if (len - j < period) break;
							if (j > 0) n = period + j;
						}
					period = n;
					var lowest_price = 1000000;
					for (var i = start; i < period; i++)
						if ([ih][i].PriceMin > 0)
						{
							{
								lowest_price = Math.min([ih][i].PriceMin, lowest_price, (pmin))
							}
						}
					return lowest_price;
				}
				var TenKan = (HH(0, tenkan_period - 1) + LL(0, tenkan_period - 1)) / 2;
				var Kijun = (HH(0, kijun_period - 1) + LL(0, kijun_period - 1)) / 2;
				var TenKan_d = (HH(0, tenkan_period) + LL(0, tenkan_period)) / 2;
				var Kijun_d = (HH(0, kijun_period) + LL(0, kijun_period)) / 2;
				var TenKan_dd = (HH(1, tenkan_period + 1) + LL(1, tenkan_period + 1)) / 2;
				var Kijun_dd = (HH(1, kijun_period + 1) + LL(1, kijun_period + 1)) / 2;
			}
		}
		//---------------------------------------------
		var PH = function(period, d)
		{
			var len = period + d;
			var max_PH = 0;
			for (var i = 0 + d; i < len; i++)
			{
				max_PH = Math.max([ih][i].PriceMax, (pmax), max_PH);
			}
			return max_PH;
		}
		var PL = function(period, d)
		{
			var len = period + d;
			var min_PL = 1000000;
			for (var i = 0 + d; i < len; i++)
			{
				if ([ih][i].PriceMin > 0)
				{
					min_PL = Math.min([ih][i].PriceMin, (pmin), min_PL);
				}
			}
			return min_PL;
		}
		var LSA = function(d)
		{
			var LSA = (((PH(9, d) + PL(9, d)) / 2) + (PH(26, d) + PL(26, d)) / 2) / 2;
			return LSA;
		}
		var LSB = function(d)
		{
			var LSB = (PH(52, d) + PL(52, d)) / 2;
			return LSB;
		}
		//---------------------------------------------
		var period1ao = 5
		var period2ao = 34
		var dlenao = [ih].length
		var xbao = 0
		var ybao = 0
		var dleao = 0
		var sumao = 0
		for (xbao = 0; xbao < dlenao; xbao++)
		{
			if ([ih][xbao].QTotTran5J > 0)
			{
				ybao++
			}
			else
			{}
		}
		dleao = ybao
		var sma1ao = [];
		sma1ao.length = dleao
		var sma2ao = [];
		sma2ao.length = dleao
		var mxao = [];
		mxao.length = dleao
		var mnao = [];
		mnao.length = dleao
		var midao = [];
		midao.length = dleao
		var aoao = [];
		aoao.length = dleao
		ybao = dleao + 1
		for (xbao = 0; xbao < dlenao; xbao++)
		{
			if ([ih][xbao].QTotTran5J > 0)
			{
				ybao--
				mxao[ybao] = [ih][xbao].PriceMax
				mnao[ybao] = [ih][xbao].PriceMin
				midao[ybao] = (mxao[ybao] + mnao[ybao]) / 2
			}
			else
			{}
		}
		for (xbao = period1ao; xbao <= dleao; xbao++)
		{
			sumao = 0
			for (ybao = (xbao - period1ao + 1); ybao <= xbao; ybao++)
			{
				sumao += midao[ybao]
			}
			sma1ao[xbao] = sumao / period1ao
			sma1ao[xbao] = Math.round(sma1ao[xbao] * 100) / 100
		}
		for (xbao = period2ao; xbao <= dleao; xbao++)
		{
			sumao = 0
			for (ybao = (xbao - period2ao + 1); ybao <= xbao; ybao++)
			{
				sumao += midao[ybao]
			}
			sma2ao[xbao] = sumao / period2ao
			sma2ao[xbao] = Math.round(sma2ao[xbao] * 100) / 100
			aoao[xbao] = sma1ao[xbao] - sma2ao[xbao]
			aoao[xbao] = Math.round(aoao[xbao] * 100) / 100
		}
		//---------------------------------------------
		{
			var period1st = 14; //Length: default = 14
			var period2st = 3; //Length: default = 3
			//شیفت داده‌ها
			if ([ih][0].PClosing != (pc) && [ih][0].ZTotTran != (tno) && [ih][0].QTotCap != (tval))
			{
				var lenst = [ih].length;
				if (typeof [ih][0].fixed == 'undefined')
				{
					for (var i = lenst; i > 0; i--)
					{
						if (typeof [ih][i] == 'undefined')
						{
							[ih][i] = {};
						}
						[ih][i].QTotTran5J = [ih][i - 1].QTotTran5J;
						[ih][i].PDrCotVal = [ih][i - 1].PDrCotVal;
						[ih][i].PriceMin = [ih][i - 1].PriceMin;
						[ih][i].PriceMax = [ih][i - 1].PriceMax;
					}
					[ih][0].fixed = 1;
				}
				[ih][0].QTotTran5J = (tvol);
				[ih][0].PDrCotVal = (pl);
				[ih][0].PriceMin = (pmin);
				[ih][0].PriceMax = (pmax);
			}
			var lenst = [ih].length;
			var i = 0;
			var j = 0;
			var dlenst = 0;
			var sumK = 0;
			var HHst //Highest High 
			var LLst //Lowest Low 
			for (i = 0; i < lenst; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j++
				}
				else
				{}
			}
			dlenst = j;
			var PMaxst = [];
			PMaxst.lenght = dlenst
			var PMinst = [];
			PMinst.lenght = dlenst
			var Closest = [];
			Closest.lenght = dlenst
			var Kst = [];
			Kst.lenght = dlenst
			var Dst = [];
			Dst.lenght = dlenst
			var i = 0;
			var j = 0;
			j = dlenst + 1;
			for (i = 0; i < lenst; i++)
			{
				if ([ih][i].QTotTran5J > 0)
				{
					j--;
					PMaxst[j] = [ih][i].PriceMax;
					PMinst[j] = [ih][i].PriceMin;
					Closest[j] = [ih][i].PDrCotVal;
				}
				else
				{}
			}
			for (i = period1st; i <= dlenst; i++)
			{
				HHst = 0;
				LLst = 1000000
				for (j = (i - period1st + 1); j <= i; j++)
				{
					if (PMaxst[j] > HHst)
					{
						HHst = PMaxst[j]
					}
					else
					{}
					if (PMinst[j] < LLst)
					{
						LLst = PMinst[j]
					}
					else
					{}
				}
				Kst[i] = ((Closest[i] - LLst) / (HHst - LLst)) * 100;
			}
			for (i = dlenst; i >= period1st; i--)
			{
				sumK = 0;
				for (j = i; j >= (i - period2st + 1); j--)
				{
					sumK += Kst[j]
				}
				Dst[i] = sumK / period2st;
			}
		}
		//---------------------------------------------
		var roclen1 = 10;
		var roclen2 = 15;
		var roclen3 = 20;
		var roclen4 = 30;
		var smalen1kst = 10;
		var smalen2kst = 10;
		var smalen3kst = 10;
		var smalen4kst = 15;
		var siglenkst = 9;
		var lenkst = [ih].length - 1;
		var j = 0;
		for (var i = 0; i < lenkst; i++)
		{
			if ([ih][i].QTotTran5J > 0)
			{
				j++
			}
			else
			{}
		}
		lenkst = j;
		var Ykst = [];
		Ykst.lenght = lenkst;
		var ROC1 = [];
		ROC1.lenght = lenkst;
		var ROC2 = [];
		ROC2.lenght = lenkst;
		var ROC3 = [];
		ROC3.lenght = lenkst;
		var ROC4 = [];
		ROC4.lenght = lenkst;
		var SMA1kst = [];
		SMA1kst.lenght = lenkst;
		var SMA2kst = [];
		SMA2kst.lenght = lenkst;
		var SMA3kst = [];
		SMA3kst.lenght = lenkst;
		var SMA4kst = [];
		SMA4kst.lenght = lenkst;
		var KST = [];
		KST.lenght = lenkst;
		var SIGkst = [];
		SIGkst.lenght = lenkst;
		var j = 0;
		for (var i = 0; i <= lenkst + j; i++)
		{
			if ([ih][i].QTotTran5J > 0)
			{
				Ykst[i - j] = [ih][i].PDrCotVal;
			}
			else
			{
				j += 1
			};
		}
		for (i = 0; i <= lenkst - roclen1; i++)
		{
			if (Ykst[i + roclen1] != 0)
			{
				ROC1[i] = (((Ykst[i] - Ykst[i + roclen1]) / Ykst[i + roclen1])) * 100;
			}
			else
			{
				ROC1[i] = 0;
			}
		}
		for (i = 0; i <= lenkst - roclen2; i++)
		{
			if (Ykst[i + roclen2] != 0)
			{
				ROC2[i] = (((Ykst[i] - Ykst[i + roclen2]) / Ykst[i + roclen2])) * 100;
			}
			else
			{
				ROC2[i] = 0;
			}
		}
		for (i = 0; i <= lenkst - roclen3; i++)
		{
			if (Ykst[i + roclen3] != 0)
			{
				ROC3[i] = (((Ykst[i] - Ykst[i + roclen3]) / Ykst[i + roclen3])) * 100;
			}
			else
			{
				ROC3[i] = 0;
			}
		}
		for (i = 0; i <= lenkst - roclen4; i++)
		{
			if (Ykst[i + roclen4] != 0)
			{
				ROC4[i] = (((Ykst[i] - Ykst[i + roclen4]) / Ykst[i + roclen4])) * 100;
			}
			else
			{
				ROC4[i] = 0;
			}
		}
		var sum1kst = 0;
		var sum2kst = 0;
		var sum3kst = 0;
		var sum4kst = 0;
		for (i = 0; i <= lenkst - smalen1kst; i++)
		{
			sum1kst = 0;
			for (j = i; j < i + smalen1kst; j++)
			{
				sum1kst += ROC1[j];
			}
			SMA1kst[i] = sum1kst / smalen1kst;
		}
		for (i = 0; i <= lenkst - smalen2kst; i++)
		{
			sum2kst = 0;
			for (j = i; j < i + smalen2kst; j++)
			{
				sum2kst += ROC2[j];
			}
			SMA2kst[i] = sum2kst / smalen2kst;
		}
		for (i = 0; i <= lenkst - smalen3kst; i++)
		{
			sum3kst = 0;
			for (j = i; j < i + smalen3kst; j++)
			{
				sum3kst += ROC3[j];
			}
			SMA3kst[i] = sum3kst / smalen3kst;
		}
		for (i = 0; i <= lenkst - smalen4kst; i++)
		{
			sum4kst = 0;
			for (j = i; j < i + smalen4kst; j++)
			{
				sum4kst += ROC4[j];
			}
			SMA4kst[i] = sum4kst / smalen4kst;
		}
		for (i = 0; i <= lenkst - Math.max(roclen1, roclen2, roclen3, roclen4) - Math.max(smalen1kst, smalen2kst, smalen3kst, smalen4kst); i++)
		{
			KST[i] = SMA1kst[i] * 1 + SMA2kst[i] * 2 + SMA3kst[i] * 3 + SMA4kst[i] * 4;
		}
		var sum5kst = 0;
		for (i = 0; i <= lenkst - Math.max(roclen1, roclen2, roclen3, roclen4) - Math.max(smalen1kst, smalen2kst, smalen3kst, smalen4kst) - siglenkst; i++)
		{
			sum5kst = 0;
			for (j = i; j < i + siglenkst; j++)
			{
				sum5kst += KST[j];
			}
			SIGkst[i] = sum5kst / siglenkst;
		}
		//---------------------------------------------
		var roclen1 = 10;
		var roclen2 = 15;
		var roclen3 = 20;
		var roclen4 = 30;
		var smalen1 = 6;
		var smalen2 = 6;
		var smalen3 = 6;
		var smalen4 = 9;
		var siglen = 10;
		var len = [ih].length - 1;
		var Y = [];
		Y.length = len;
		var ROC1 = [];
		ROC1.length = len;
		var ROC2 = [];
		ROC2.length = len;
		var ROC3 = [];
		ROC3.length = len;
		var ROC4 = [];
		ROC4.length = len;
		var SMA1 = [];
		SMA1.length = len;
		var SMA2 = [];
		SMA2.length = len;
		var SMA3 = [];
		SMA3.length = len;
		var SMA4 = [];
		SMA4.length = len;
		var Special_K = [];
		Special_K.length = len;
		var Signal = [];
		Signal.length = len;
		for (var i = 0; i <= len; i++)
		{
			Y[i] = [ih][i].PDrCotVal;
		}
		for (i = roclen1; i <= len; i++)
		{
			if (Y[i - roclen1] != 0)
			{
				ROC1[i] = (((Y[i] - Y[i - roclen1]) / Y[i - roclen1])) * 100;
			}
			else
			{
				ROC1[i] = 0;
			}
		}
		for (i = roclen2; i <= len; i++)
		{
			if (Y[i - roclen2] != 0)
			{
				ROC2[i] = (((Y[i] - Y[i - roclen2]) / Y[i - roclen2])) * 100;
			}
			else
			{
				ROC2[i] = 0;
			}
		}
		for (i = roclen3; i <= len; i++)
		{
			if (Y[i - roclen3] != 0)
			{
				ROC3[i] = (((Y[i] - Y[i - roclen3]) / Y[i - roclen3])) * 100;
			}
			else
			{
				ROC3[i] = 0;
			}
		}
		for (i = roclen4; i <= len; i++)
		{
			if (Y[i - roclen4] != 0)
			{
				ROC4[i] = (((Y[i] - Y[i - roclen4]) / Y[i - roclen4])) * 100;
			}
			else
			{
				ROC4[i] = 0;
			}
		}
		for (i = smalen1; i <= len; i++)
		{
			SMA1[i] = average(ROC1, i - smalen1, i - 1);
		}
		for (i = smalen2; i <= len; i++)
		{
			SMA2[i] = average(ROC2, i - smalen2, i - 1);
		}
		for (i = smalen3; i <= len; i++)
		{
			SMA3[i] = average(ROC3, i - smalen3, i - 1);
		}
		for (i = smalen4; i <= len; i++)
		{
			SMA4[i] = average(ROC4, i - smalen4, i - 1);
		}
		for (i = Math.max(roclen1, roclen2, roclen3, roclen4) + Math.max(smalen1, smalen2, smalen3, smalen4); i <= len; i++)
		{
			Special_K[i] = SMA1[i] * 1 + SMA2[i] * 2 + SMA3[i] * 3 + SMA4[i] * 4;
		}
		for (i = Math.max(roclen1, roclen2, roclen3, roclen4) + Math.max(smalen1, smalen2, smalen3, smalen4) + siglen; i <= len; i++)
		{
			Signal[i] = average(Special_K, i - siglen, i - 1);
		}
		
		function average(array, start, end)
		{
			var sum = 0;
			var count = 0;
			for (var i = start; i <= end; i++)
			{
				sum += array[i];
				count++;
			}
			if (count > 0)
			{
				return sum / count;
			}
			else
			{
				return 0;
			}
		}
		//---------------------------------------------
		var column1 = "⚠️ دیتا"
			, column2 = "بازار"
			, column3 = "چارت"
			, column4 = "آخرین قیمت"
			, column5 = "TEMA - - - - - DEMA"
			, column6 = "TSI"
			, column7 = "Bollinger Bands %B"
			, column8 = "حجم به میانگین ماه"
			, column9 = "قدرت خریدار حقیقی"
			, column10 = "RSI"
			, column11 = "MFI"
			, column12 = "رفتار"
			, column13 = "امتیاز";
		var my_data_title0 = '<div style = "direction:rtl;";><span style = "border: 1px solid gray;width: 8%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column1 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 6%;display: inline-block;text-align: center;color: #000;background: #FFC65C;font-weight: normal;"> ' + column2 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 3%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column3 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 8%;display: inline-block;text-align: center;color: #000;background: #FFC65C;font-weight: normal;"> ' + column4 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 14%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column5 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 12%;display: inline-block;text-align: center;color: #000;background: #FFC65C;font-weight: normal;"> ' + column6 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 10%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column7 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 9%;display: inline-block;text-align: center;color: #000;background: #FFC65C;font-weight: normal;"> ' + column8 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 9%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column9 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 5%;display: inline-block;text-align: center;color: #000;background: #FFC65C;font-weight: normal;"> ' + column10 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 5%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column11 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 8%;display: inline-block;text-align: center;color: #000;background: #FFC65C;font-weight: normal;"> ' + column12 + '</span>'
		my_data_title0 += '<span style = "border: 1px solid gray;width: 3%;display: inline-block;text-align: center;color: #000;background: #BFBFBF;font-weight: normal;"> ' + column13 + '</span>'
		my_data_title0 += '<span style = "left: 10px;direction: rtl; display: inline-block; background: #F6F7BF;font-weight: normal; text-align: center;border: 0 solid red;border-radius: 6px; padding: 3px;top: 50%;position: fixed;font-family: Tahoma; font-size: 12px; background-color: #ff5;  box-shadow: 0 2px 5px rgb(0 0 0 / 50%);color: Blue; width: 236px;animation: NotificationAnim 2s infinite linear;"><a href="https://t.me/BourseXtreme" title="کانال تلگرام BourseXtreme" target="_blank">Source Code By: @BourseXtreme</a> </span>'
		my_data_title0 += '<span style="left: 10px;direction: rtl;display: inline-block;background: #F6F7BF;font-weight: normal;text-align: center;border: 0 solid red;border-radius: 6px;padding: 3px;top: 55%;position: fixed;font-family: Tahoma;font-size: 12px;background-color: #ff5;box-shadow: 0 2px 5px rgb(0 0 0 / 50%);color: Blue;width: 236px;animation: NotificationAnim 2s infinite linear;">آموزش‌های رایگان ما را <br> در کانال تلگرام <a href="https://t.me/BourseXtreme" title="کانال تلگرام BourseXtreme" target="_blank"><span style="font-weight: bold;color: red;">BourseXtreme</span></a> دنبال کنید.</span></div>'
		var my_data_title1 = " "
		var my_data_title2 = " "
		var cfield0_title = my_data_title0
			, cfield1_title = my_data_title1
			, cfield2_title = my_data_title2;
		var wc0 = "1200px"
			, wc1 = "100px"
			, wc2 = "300px";
		var title = document.getElementsByClassName("t0head");
		for (var i = 0; i < title.length; i++)
		{
			if (title[i].outerHTML.includes("cfield0"))
			{
				title[i].innerHTML = cfield0_title;
				title[i].style.width = wc0;
				title[i].style.fontWeight = "normal";
			}
			else if (title[i].outerHTML.includes("cfield1"))
			{
				title[i].innerHTML = cfield1_title;
				title[i].style.width = wc1;
				title[i].style.fontWeight = "normal";
			}
			else if (title[i].outerHTML.includes("cfield2"))
			{
				title[i].innerHTML = cfield2_title;
				title[i].style.width = wc2;
				title[i].style.fontWeight = "normal";
			}
		}
		var c0 = document.getElementsByClassName("ch{_cfield0}");
		var c1 = document.getElementsByClassName("ch{_cfield1}");
		var c2 = document.getElementsByClassName("ch{_cfield2}");
		for (var i = 0; i < c0.length; i++)
		{
			c0[i].style.width = wc0;
			c1[i].style.width = wc1;
			c2[i].style.width = wc2;
		}
		var my_data = '<div style = "direction:rtl;";><span style = "border: 1px solid gray;width: 8%;display: inline-block;color: #000;background: #D9D9D9;font-weight: normal;direction: ltr;"> ' + (Notif) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 6%;display: inline-block;color: #000;background: #FFE2AD;font-weight: normal;direction: ltr;"> ' + (Bazar[row.flow]) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 3%;display: inline-block;color: #000;background: #D9D9D9;font-weight: normal;direction: ltr;"> ' + (MogheyiatGh) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 8%;display: inline-block;color: #000;background: #FFE2AD;font-weight: normal;direction: ltr;"> ' + (pl) + " (" + (plp) + "%)" + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 14%;display: inline-block;color: #000;background: #D9D9D9;font-weight: normal;direction: ltr;"> ' + '🔵' + Math.round(TEMA2[0]) + (TEMA2R) + '🔴' + Math.round(DEMA1[0]) + (DEMA1R) + (TEMADEMACR) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 12%;display: inline-block;color: #000;background: #FFE2AD;font-weight: normal;direction: ltr;"> ' + '🔵' + (TSI[dlen])
			.toFixed(2) + (TSIR1) + '🔴' + (SIG[dlen])
			.toFixed(2) + (TSIR2) + (TSIR3) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 10%;display: inline-block;color: #000;background: #D9D9D9;font-weight: normal;direction: ltr;"> ' + PB[0].toFixed(2) + (BBR) + (BBMR) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 9%;display: inline-block;color: #000;background: #FFFFFF;font-weight: normal;direction: ltr;"> ' + (HajmMah) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 9%;display: inline-block;color: #000;background: #FFFFFF;font-weight: normal;direction: ltr;"> ' + (string) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 5%;display: inline-block;color: #000;background: #FFE2AD;font-weight: normal;direction: ltr;"> ' + (RSITIME)
			.toFixed(2) + (Ravand_RSI) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 5%;display: inline-block;color: #000;background: #D9D9D9;font-weight: normal;direction: ltr;"> ' + MFI(0, 14)
			.toFixed(2) + (Ravand_MFI) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 8%;display: inline-block;color: #000;background: #FFE2AD;font-weight: normal;direction: ltr;"> ' + (Analiz1) + (Analiz2) + '</span>'
		my_data += '<span style = "border: 1px solid gray;width: 3%;display: inline-block;color: #000;background: #D9D9D9;font-weight: normal;direction: ltr;"> ' + (score) + '</span></div>'
		//---------------------------------------------
		if (AlphaMarket1 == 1)
		{
			Shart += ' && (ArzeshB1) > (settingMa1) ';
		}
		//---------------------------------------------
		if (AlphaMarket2 == 1)
		{
			Shart += ' && (ArzeshB1) < (settingMa2) ';
		}
		//---------------------------------------------
		if (AlphaCond == 1)
		{
			Shart += ' && (pe) > (settingC1) && (pe) <= (settingC2) && (eps) > (settingC3) ';
		}
		//---------------------------------------------
		if (AlphaVal == 1)
		{
			Shart += ' && (AzMah) > 1 ';
		}
		//---------------------------------------------
		if (AlphaVol1 == 1)
		{
			Shart += ' && (EbMah) > 1 ';
		}
		//---------------------------------------------
		if (AlphaVol3 == 1)
		{
			Shart += ' && (tvol) > [is5] ';
		}
		//---------------------------------------------
		if (AlphaBuyer == 1)
		{
			Shart += ' && (ghodrat) > 1 ';
		}
		//---------------------------------------------
		if (AlphaBuyer4x == 1)
		{
			Shart += ' && (ghodrat) > 4 ';
		}
		//---------------------------------------------
		if (AlphaMoney == 1)
		{
			Shart += ' && (IOMoney) > 0 ';
		}
		//---------------------------------------------
		if (AlphaTick == 1)
		{
			Shart += ' && 0.98 * (pl) > (pf) && 0.98 * (pf) > (pmin) && (pl) == (pmax) && (plp) - (pcp) > 2 ';
		}
		//---------------------------------------------
		if (AlphaHourly == 1)
		{
			Shart += ' && (plp) - (pcp) > 2 ';
		}
		//---------------------------------------------
		if (AlphaStrict == 1)
		{
			Shart += ' && (string) > 2 && (SaraneKharid) > 300 && (powerIOMoney) > 0.5 && (HajmMah) > 1 && (IOMoney) > 1000000000 ';
		}
		//---------------------------------------------
		if (AlphaPos == 1)
		{
			Shart += ' && (tno) > 50 && (plp) >= (pcp) + 1.5 ';
		}
		//---------------------------------------------
		if (AlphaNoBuy == 1)
		{
			Shart += ' && (pl) != (tmax) ';
		}
		//---------------------------------------------
		if (AlphaPin == 1)
		{
			Shart += ' && PinBW == 1 ';
		}
		//---------------------------------------------
		if (AlphaBullEngulf == 1)
		{
			Shart += ' && ((pl) > (pf)) && (((pl) - (pf)) / (pf) > 0.05) && ([ih][1].PDrCotVal < [ih][1].PriceFirst) && ((pl) >= [ih][1].PriceMax) && ((pf) <= [ih][1].PriceMin) ';
		}
		//---------------------------------------------
		if (AlphaHeikinGreen == 1)
		{
			Shart += ' && [ih][0].HA_C > [ih][0].HA_O ';
		}
		//---------------------------------------------
		if (AlphaNoLowerShadowGreen == 1)
		{
			Shart += ' && [ih][0].HA_L == [ih][0].HA_O ';
		}
		//---------------------------------------------
		if (AlphaKSTCross1 == 1)
		{
			Shart += ' && KST[1] < SIGkst[1] && KST[0] > SIGkst[0] ';
		}
		//---------------------------------------------
		if (AlphaKSTCross2 == 1)
		{
			Shart += ' && KST[1] < 0 && KST[0] > 0 ';
		}
		//---------------------------------------------
		if (AlphaKSTBelow == 1)
		{
			Shart += ' && KST[0] > SIGkst[0] && KST[0] < 0 && SIGkst[0] < 0 ';
		}
		//---------------------------------------------
		if (AlphaKSTChart == 1)
		{
			Shart += ' && KST[0] < 0 && SIGkst[0] < 0 ';
		}
		//---------------------------------------------
		if (AlphaSpecialKCross == 1)
		{
			Shart += ' && Special_K[len - 1] < Signal[len - 1] && Special_K[len] > Signal[len] ';
		}
		//---------------------------------------------
		if (AlphaTKCross == 1)
		{
			Shart += ' && TenKan_dd < Kijun_dd && TenKan_d < Kijun_d && TenKan >= Kijun ';
		}
		//---------------------------------------------
		if (AlphaSpASpBCross == 1)
		{
			Shart += ' && LSA(0) >= LSB(0) && (LSA(1) <= LSB(1) || LSA(2) <= LSB(2) || LSA(3) <= LSB(3) || LSA(4) <= LSB(4)) ';
		}
		//---------------------------------------------
		if (AlphaTSI == 1)
		{
			Shart += ' && TSI[dlen - 2] < SIG[dlen - 2] && TSI[dlen - 1] < SIG[dlen - 1] && TSI[dlen] >= SIG[dlen] ';
		}
		//---------------------------------------------
		if (AlphaTSIChart == 1)
		{
			Shart += ' && TSI[dlen] < -0.25 ';
		}
		//---------------------------------------------
		if (AlphaADX == 1)
		{
			Shart += ' && parseFloat([ih][0].DI_Plus.toFixed(2)) > parseFloat([ih][0].DI_Minus.toFixed(2)) && ([ih][0].ADX > 25) && (HADX1 < HADX2) && (WeightscoreADX >= 4) ';
		}
		//---------------------------------------------
		if (AlphaPSAR == 1)
		{
			Shart += ' && (y[0].TOUCH || y[1].TOUCH) ';
		}
		//---------------------------------------------
		if (AlphaFirstPSAR == 1)
		{
			Shart += ' && (!y[1].BULLISH && y[0].BULLISH) ';
		}
		//---------------------------------------------
		if (AlphaRSICross1 == 1)
		{
			Shart += ' && RSI[dlen - 1] < (settingRsi1) && RSI[dlen] > (settingRsi1) ';
		}
		//---------------------------------------------
		if (AlphaRSICross2 == 1)
		{
			Shart += ' && RSI[dlen - 1] > (settingRsi2) && RSI[dlen] < (settingRsi2) ';
		}
		//---------------------------------------------
		if (AlphaRSIChart1 == 1)
		{
			Shart += ' && (RSI[dlen] > (settingRsi3)) ';
		}
		//---------------------------------------------
		if (AlphaRSIChart2 == 1)
		{
			Shart += ' && (RSI[dlen] < (settingRsi4)) ';
		}
		//---------------------------------------------
		if (AlphaRSITrend1 == 1)
		{
			Shart += ' && RSI[dlen] > RSI[dlen - 1] ';
		}
		//---------------------------------------------
		if (AlphaRSITrend2 == 1)
		{
			Shart += ' && RSI[dlen] < RSI[dlen - 1] ';
		}
		//---------------------------------------------
		if (AlphaMFICross1 == 1)
		{
			Shart += ' && MFI(1, 14) < (settingMfi1) && MFI(0, 14) > (settingMfi1) ';
		}
		//---------------------------------------------
		if (AlphaMFIChart1 == 1)
		{
			Shart += ' && MFI(0, 14) > (settingMfi2) ';
		}
		//---------------------------------------------
		if (AlphaRSIMFISync == 1)
		{
			Shart += ' && RSITIME > RSIPAST && MFI(0, 14) > MFI(1, 14) ';
		}
		//---------------------------------------------
		if (AlphaCCICross == 1)
		{
			Shart += ' && ccicci[dlecci-1] < 0 && ccicci[dlecci] > 0 ';
		}
		//---------------------------------------------
		if (AlphaCCIChart == 1)
		{
			Shart += ' && ccicci[dlecci] > 0 ';
		}
		//---------------------------------------------
		if (AlphaBBandsPercent == 1)
		{
			Shart += ' && PB[1] < 0.5 && PB[0] > 0.5 ';
		}
		//---------------------------------------------
		if (AlphaWilliamsPercentR == 1)
		{
			Shart += ' && Williams(14,1) < -40 && Williams(14,0) > -40 ';
		}
		//---------------------------------------------
		if (AlphaStochastic == 1)
		{
			Shart += ' && Kst[dlenst - 1] < Dst[dlenst - 1] && Kst[dlenst] < 20 && Dst[dlenst] < 20 && Kst[dlenst] > Dst[dlenst] ';
		}
		//---------------------------------------------
		if (AlphaTDEMA == 1)
		{
			Shart += ' && DEMA1[1] > TEMA2[1] && DEMA1[0] < TEMA2[0] ';
		}
		//---------------------------------------------
		if (AlphaEMA == 1)
		{
			Shart += ' && ema(0,(settingEma1)) > ema(0,(settingEma2)) && ema(1,(settingEma1)) < ema(1,(settingEma2)) ';
		}
		//---------------------------------------------
		if (AlphaPriceAboveEMA == 1)
		{
			Shart += ' && (pl) > ema(0,(settingEma3)) ';
		}
		//---------------------------------------------
		if (AlphaRSIAwesomeOscillator == 1)
		{
			Shart += ' && (RSI[dlen - 1] < 30 || RSI[dlen - 1] === 30 || RSI[dlen - 1] < 50 || RSI[dlen - 1] === 50) && (RSI[dlen] > 30 || RSI[dlen] > 50) && RSI[dlen] > RSI[dlen - 1] && aoao[dleao] < 0 && aoao[dleao - 1] < aoao[dleao - 2] && aoao[dleao] > aoao[dleao - 1] ';
		}
		//---------------------------------------------
		if (AlphaTechFloor == 1)
		{
			Shart += ' && (MogheyiatGh) < (settingTF) ';
		}
		//---------------------------------------------
		if (eval(Shart))
		{
			//---------------------------------------------
			function msgRepeat(_text, _count)
			{
				Speech = sessionStorage.getItem("repeatMSG")
				if (Number(Speech) >= _count) return;
				var msg = new SpeechSynthesisUtterance();
				msg.text = _text;
				if (msg.text !== "undefined") window.speechSynthesis.speak(msg);
				sessionStorage.setItem("repeatMSG", ++Speech);
			}
			//---------------------------------------------
			(cfield0) = my_data;
			(cfield1) = "";
			(cfield2) = "";
			msgRepeat("Hello. Welcome to BourseXtreme Strategy Smart Code", 1);
			return true;
		}
	}
}();