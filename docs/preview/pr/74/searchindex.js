Search.setIndex({"docnames": ["basics", "convert", "generated/pypose.Act", "generated/pypose.Adj", "generated/pypose.AdjT", "generated/pypose.Exp", "generated/pypose.Inv", "generated/pypose.Jinvp", "generated/pypose.Jr", "generated/pypose.LieTensor", "generated/pypose.Log", "generated/pypose.Parameter", "generated/pypose.Retr", "generated/pypose.RxSO3", "generated/pypose.SE3", "generated/pypose.SO3", "generated/pypose.Sim3", "generated/pypose.cummul", "generated/pypose.cummul_", "generated/pypose.cumops", "generated/pypose.cumops_", "generated/pypose.cumprod", "generated/pypose.cumprod_", "generated/pypose.euler2SO3", "generated/pypose.identity_RxSO3", "generated/pypose.identity_SE3", "generated/pypose.identity_SO3", "generated/pypose.identity_Sim3", "generated/pypose.identity_like", "generated/pypose.identity_rxso3", "generated/pypose.identity_se3", "generated/pypose.identity_sim3", "generated/pypose.identity_so3", "generated/pypose.mat2SO3", "generated/pypose.module.IMUPreintegrator", "generated/pypose.optim.modjac", "generated/pypose.randn_SE3", "generated/pypose.randn_SO3", "generated/pypose.randn_like", "generated/pypose.randn_se3", "generated/pypose.randn_so3", "generated/pypose.rxso3", "generated/pypose.se3", "generated/pypose.sim3", "generated/pypose.so3", "generated/pypose.vec2skew", "index", "lietensor", "modules", "optim"], "filenames": ["basics.rst", "convert.rst", "generated/pypose.Act.rst", "generated/pypose.Adj.rst", "generated/pypose.AdjT.rst", "generated/pypose.Exp.rst", "generated/pypose.Inv.rst", "generated/pypose.Jinvp.rst", "generated/pypose.Jr.rst", "generated/pypose.LieTensor.rst", "generated/pypose.Log.rst", "generated/pypose.Parameter.rst", "generated/pypose.Retr.rst", "generated/pypose.RxSO3.rst", "generated/pypose.SE3.rst", "generated/pypose.SO3.rst", "generated/pypose.Sim3.rst", "generated/pypose.cummul.rst", "generated/pypose.cummul_.rst", "generated/pypose.cumops.rst", "generated/pypose.cumops_.rst", "generated/pypose.cumprod.rst", "generated/pypose.cumprod_.rst", "generated/pypose.euler2SO3.rst", "generated/pypose.identity_RxSO3.rst", "generated/pypose.identity_SE3.rst", "generated/pypose.identity_SO3.rst", "generated/pypose.identity_Sim3.rst", "generated/pypose.identity_like.rst", "generated/pypose.identity_rxso3.rst", "generated/pypose.identity_se3.rst", "generated/pypose.identity_sim3.rst", "generated/pypose.identity_so3.rst", "generated/pypose.mat2SO3.rst", "generated/pypose.module.IMUPreintegrator.rst", "generated/pypose.optim.modjac.rst", "generated/pypose.randn_SE3.rst", "generated/pypose.randn_SO3.rst", "generated/pypose.randn_like.rst", "generated/pypose.randn_se3.rst", "generated/pypose.randn_so3.rst", "generated/pypose.rxso3.rst", "generated/pypose.se3.rst", "generated/pypose.sim3.rst", "generated/pypose.so3.rst", "generated/pypose.vec2skew.rst", "index.rst", "lietensor.rst", "modules.rst", "optim.rst"], "titles": ["Basics", "Convert", "pypose.Act", "pypose.Adj", "pypose.AdjT", "pypose.Exp", "pypose.Inv", "pypose.Jinvp", "pypose.Jr", "pypose.LieTensor", "pypose.Log", "pypose.Parameter", "pypose.Retr", "pypose.RxSO3", "pypose.SE3", "pypose.SO3", "pypose.Sim3", "pypose.cummul", "pypose.cummul_", "pypose.cumops", "pypose.cumops_", "pypose.cumprod", "pypose.cumprod_", "pypose.euler2SO3", "pypose.identity_RxSO3", "pypose.identity_SE3", "pypose.identity_SO3", "pypose.identity_Sim3", "pypose.identity_like", "pypose.identity_rxso3", "pypose.identity_se3", "pypose.identity_sim3", "pypose.identity_so3", "pypose.mat2SO3", "pypose.module.IMUPreintegrator", "pypose.optim.modjac", "pypose.randn_SE3", "pypose.randn_SO3", "pypose.randn_like", "pypose.randn_se3", "pypose.randn_so3", "pypose.rxso3", "pypose.se3", "pypose.sim3", "pypose.so3", "pypose.vec2skew", "PyPose Documentation", "LieTensor", "Modules", "Optimization"], "terms": {"x": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 28, 33, 35, 38, 45], "p": [2, 3, 4, 7, 9, 34, 35], "sourc": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45], "appli": [2, 34], "batch": [2, 8, 9, 12, 13, 14, 15, 16, 23, 33, 34, 41, 42, 43, 44, 45], "transform": [2, 3, 7], "point": [2, 3, 7], "euclidean": [2, 38], "homogen": 2, "coordin": 2, "y_i": [2, 12, 17, 19, 21], "x_i": [2, 12, 17, 19, 21], "p_i": [2, 34], "where": [2, 3, 5, 7, 10, 12, 13, 14, 15, 16, 17, 19, 21, 23, 34, 35, 40, 41, 42, 43, 44], "mathbb": [2, 3, 5, 7, 10, 13, 14, 16, 41], "r": [2, 3, 5, 7, 8, 10, 13, 14, 16, 34, 40, 41], "times3": [2, 3, 5, 7, 10], "times4": [2, 3, 5, 7, 10], "denot": [2, 40], "paramet": [2, 3, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], "lietensor": [2, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 46], "input": [2, 3, 5, 7, 8, 10, 12, 17, 18, 19, 20, 21, 22, 23, 33, 34, 35, 45], "lie": [2, 3, 5, 7, 8, 10, 11, 12], "group": [2, 3, 5, 7, 8, 10, 11, 12, 38], "tensor": [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "return": [2, 3, 5, 7, 8, 9, 10, 12, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45], "type": [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "exampl": [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "mathrm": [2, 8, 12, 13, 14, 15, 16, 19, 34, 36, 37, 39, 40, 41, 42, 43, 44], "so3": [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 17, 21, 26, 32, 34, 38, 41, 42, 46], "mapsto": [2, 3, 5, 7, 8, 10, 12], "torch": [2, 3, 5, 9, 10, 11, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "randn": [2, 9, 13, 14, 15, 16, 23, 35, 38, 41, 42, 43, 44, 45], "3": [2, 3, 5, 7, 8, 9, 10, 14, 16, 23, 28, 33, 34, 37, 40, 44, 45], "size": [2, 9, 13, 14, 15, 16, 17, 19, 21, 24, 28, 29, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "1": [2, 3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "pp": [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "identity_so3": [2, 15, 34, 44, 46], "2": [2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45], "equival": [2, 3, 5, 7, 9, 10, 12, 38], "7576": 2, "1503": 2, "0": [2, 3, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "9920": 2, "se3": [2, 3, 5, 7, 9, 10, 11, 12, 17, 21, 25, 30, 43, 46], "randn_se3": [2, 3, 5, 7, 9, 10, 12, 14, 17, 19, 21, 38, 42, 46], "same": [2, 3, 7, 9, 28, 35, 38], "5676": 2, "0452": 2, "0929": 2, "0000": [2, 35, 45], "sim3": [2, 3, 5, 7, 9, 10, 11, 12, 27, 31, 46], "randn_sim3": [2, 3, 5, 7, 10, 12, 16, 38, 43], "respect": [2, 5, 7, 10, 16, 17, 19, 21, 23, 34, 35], "1551": 2, "2930": 2, "4531": 2, "6140": 2, "1263": 2, "7607": 2, "rxso3": [2, 3, 5, 7, 9, 10, 11, 12, 16, 24, 29, 43, 46], "randn_rxso3": [2, 3, 5, 7, 10, 12, 13, 38, 41], "The": [3, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 21, 23, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], "dot": [3, 7], "product": [3, 7, 21], "between": [3, 7, 34, 40], "adjoint": [3, 7], "matrix": [3, 5, 7, 9, 10, 33, 34], "given": [3, 5, 7, 10, 12, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 40], "an": [3, 5, 7, 10, 16, 35], "second": [3, 7], "algebra": [3, 5, 7, 8, 10, 11, 12], "mathcal": [3, 5, 7, 8, 10, 17, 19, 21, 36, 37, 39, 40], "g": [3, 5, 7, 9, 10, 11, 19, 34], "output": [3, 5, 7, 10, 17, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45], "ltype": [3, 5, 7, 10, 13, 14, 15, 16, 28, 34, 41, 42, 43, 44], "so3_typ": [3, 5, 7, 9, 10, 26, 32, 37, 38, 40], "se3_typ": [3, 5, 7, 9, 10, 25, 30, 36, 38, 39], "times7": [3, 5, 7, 10], "times6": [3, 5, 7, 10], "sim3_typ": [3, 5, 7, 9, 10, 27, 31, 38], "times8": [3, 5, 7, 10], "rxso3_typ": [3, 5, 7, 9, 10, 24, 29, 38], "times5": [3, 5, 7, 10], "let": [3, 5, 7, 10], "mathbf": [3, 5, 7, 10, 23, 34, 35, 36, 37, 39, 40, 45], "y": [3, 5, 7, 10, 23, 45], "_i": [3, 5, 7, 10, 23, 36, 37, 39, 40, 45], "If": [3, 5, 7, 10, 13, 14, 15, 16, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "s": [3, 5, 7, 10, 13, 16, 35, 40, 41, 43], "ar": [3, 7, 9, 11, 13, 14, 15, 16, 17, 19, 21, 23, 34, 35, 38, 41, 42, 43, 44], "instanc": [3, 5, 7, 10], "textrm": 3, "so": [3, 40], "In": [3, 7, 9], "case": [3, 9, 35], "element": [3, 5, 10, 13, 14, 15, 16, 41, 42, 43, 44], "rotat": [3, 5, 9, 10, 13, 14, 33, 34, 41, 42, 43, 44], "us": [3, 5, 7, 9, 11, 13, 14, 15, 16, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44], "repres": [3, 5, 9, 10, 13, 14, 34, 43], "tangent": [3, 7, 40], "vector": [3, 9, 10, 14, 16, 35, 40, 41, 42, 43, 45], "move": 3, "from": [3, 5, 7, 9, 10, 13, 14, 15, 16, 34, 35, 39, 41, 42, 43, 44], "space": [3, 7, 40], "right": [3, 5, 7, 8, 10, 15, 17, 21, 34], "side": 3, "left": [3, 5, 7, 9, 10, 17, 21], "t": [3, 7, 10, 13, 14, 16, 19, 34, 41, 42, 43, 44], "translat": [3, 5, 7, 9, 10, 14, 16, 42, 43], "part": [3, 5, 7, 9, 10], "_": [3, 5, 35, 36, 37, 39, 40], "i": [3, 5, 7, 10, 17, 19, 21, 23, 34, 35, 45], "time": [3, 8, 17, 19, 21, 34, 36, 37, 39, 40], "skew": [3, 5, 7, 10, 34, 45], "vec2skew": [3, 7, 34, 46], "begin": [3, 5, 7, 10, 13, 14, 16, 23, 34, 35, 41, 42, 43, 44, 45], "arrai": [3, 5, 7, 10], "cc": [3, 7], "end": [3, 5, 7, 10, 13, 14, 16, 23, 34, 35, 41, 42, 43, 44, 45], "6": [3, 5, 7, 9, 10, 35, 36, 39, 42], "se": 3, "s_i": [3, 5, 10], "scale": [3, 5, 9, 10, 13, 16, 38, 40, 41, 43], "7": [3, 5, 7, 9, 10, 14, 34, 43], "sim": [3, 7], "4": [3, 5, 7, 9, 15, 17, 23, 33, 34, 41], "rxso": 3, "e": [3, 5, 7, 9, 10, 11, 19], "oper": [3, 13, 14, 15, 16, 19, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40, 41, 42, 43, 44], "linear": [3, 34, 35], "which": [3, 5, 9, 10, 13, 14, 15, 16, 34, 35, 41, 42, 43, 44], "exp": [3, 7, 9, 12, 34, 35, 36, 37, 41, 42, 43, 44, 46], "It": [3, 13, 14, 15, 16, 41, 42, 43, 44], "can": [3, 5, 7, 9, 10, 24, 25, 26, 27, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40], "easili": 3, "verifi": 3, "randn_so3": [3, 5, 7, 8, 9, 10, 11, 12, 15, 17, 21, 28, 35, 38, 44, 46], "allclos": 3, "true": [3, 5, 8, 9, 11, 17, 21, 23, 28, 34, 35, 37, 39, 40], "One": [3, 7], "refer": [3, 7, 34], "eq": [3, 5, 7, 10, 34], "8": [3, 5, 9, 16, 17, 34, 35], "follow": [3, 9, 38], "paper": [3, 5, 7, 10, 34], "zachari": 3, "teed": [3, 7], "et": [3, 7, 10, 34], "al": [3, 7, 10, 34], "backpropag": [3, 7], "3d": [3, 7], "ieee": [3, 7], "cvf": [3, 7], "confer": [3, 7], "comput": [3, 5, 7, 10, 15, 35], "vision": [3, 7], "pattern": [3, 7], "recognit": [3, 7], "cvpr": [3, 7], "2021": [3, 7], "gener": [3, 10, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "around": 3, "one": [3, 13, 14, 15, 16, 34, 35, 41, 42, 43, 44], "anoth": 3, "thi": [3, 5, 7, 9, 10, 13, 14, 15, 16, 17, 19, 21, 34, 35, 41, 42, 43, 44], "more": [3, 5, 7, 9, 10, 12, 13, 14, 15, 16, 34, 35, 41, 42, 43, 44], "detail": [3, 5, 7, 9, 10, 12, 24, 25, 26, 27, 29, 30, 31, 32, 34, 40], "j": [3, 5, 7, 10, 34, 35], "sola": [3, 7], "A": [3, 5, 7, 9, 10, 11, 13, 14, 15, 16, 34, 41, 42, 43, 44], "micro": [3, 7], "theori": [3, 7], "state": [3, 7, 10, 34, 40], "estim": [3, 7, 34], "robot": [3, 7], "arxiv": [3, 7], "preprint": [3, 7], "1812": [3, 7], "01537": [3, 7], "2018": [3, 7], "thesi": 3, "tutori": 3, "serv": 3, "good": 3, "read": 3, "materi": 3, "learn": 3, "about": [3, 5, 7, 10], "deriv": 3, "matric": [3, 7, 8, 33, 45], "differ": [3, 5, 9, 10, 34], "strasdat": [3, 5, 10], "h": [3, 5, 10], "2012": [3, 5, 10], "local": [3, 5, 10], "accuraci": [3, 5, 10], "global": [3, 5, 10, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "consist": [3, 5, 10], "effici": [3, 5, 10], "visual": [3, 5, 10, 34], "slam": [3, 5, 10], "doctor": 3, "dissert": [3, 5, 10], "depart": [3, 5, 10], "imperi": [3, 5, 10], "colleg": [3, 5, 10], "london": [3, 5, 10], "2d": 3, "ethan": 3, "ead": 3, "so3typ": [3, 5, 7, 9, 10, 12, 15, 17, 21, 23, 26, 28, 32, 33, 34, 37, 38, 40, 44], "4171": 3, "1218": 3, "9951": 3, "8415": 3, "2185": 3, "4082": 3, "se3typ": [3, 5, 7, 10, 12, 14, 17, 19, 21, 25, 30, 36, 39, 42], "8536": 3, "1984": 3, "4554": [3, 35], "4868": 3, "3231": 3, "8535": 3, "1577": 3, "7625": 3, "7997": 3, "5085": 3, "2098": 3, "3538": 3, "sim3typ": [3, 5, 7, 10, 12, 16, 27, 31, 43], "1455": 3, "5653": 3, "1845": 3, "0502": 3, "3125": [3, 42], "5217": 3, "8964": 3, "8724": 3, "5254": 3, "9559": 3, "5170": 3, "7610": 3, "4375": 3, "4248": 3, "rxso3typ": [3, 5, 7, 10, 12, 13, 24, 29, 41], "3590": 3, "4314": 3, "0297": [3, 16], "0166": 3, "3378": 3, "4942": 3, "0083": 3, "4321": 3, "exponenti": [5, 36, 37], "function": [5, 10, 17, 19, 21, 34, 35, 38], "new": [5, 9, 10], "text": [5, 7, 10, 17, 21], "ep": [5, 7, 10], "theta_i": [5, 7, 10], "co": [5, 7, 10, 23], "frac": [5, 7, 10, 40], "sin": [5, 7, 10, 23], "otherwis": [5, 9, 10, 13, 14, 15, 16, 35, 41, 42, 43, 44], "384": 5, "48": 5, "3840": 5, "bm": [5, 35], "tau": [5, 7], "phi": [5, 7, 10], "jacobian": [5, 7, 8, 10, 34, 35], "sigma_i": [5, 10], "n": [5, 7, 10, 17, 19, 21, 33, 35, 36, 37, 39, 40], "boldsymbol": [5, 7, 10], "w": [5, 10], "b": [5, 10, 19, 34], "c": [5, 10, 34], "geq": 5, "ll": [5, 7, 10], "quad": [5, 7, 10], "sigma": [5, 10, 36, 37, 38, 39, 40], "explan": [5, 40], "abov": [5, 13, 14, 15, 16, 40, 41, 42, 43, 44], "calcul": [5, 34, 35], "found": [5, 10, 40], "grassia": 5, "f": [5, 35], "sebastian": 5, "practic": 5, "parameter": 5, "journal": 5, "graphic": 5, "tool": 5, "1998": 5, "assum": [5, 10], "we": [5, 10, 35, 38, 40], "have": [5, 10, 11, 35, 38], "unit": [5, 10, 13, 14, 15, 16], "axi": [5, 10, 41, 42, 44], "angl": [5, 10, 23, 41, 42, 44], "theta": [5, 7, 10, 35, 44], "leq": [5, 7, 10], "pi": [5, 10], "correspond": [5, 7, 9, 10, 13, 14, 15, 16, 35, 38, 40, 41, 42, 43, 44], "quaternion": [5, 9, 10, 13, 14, 15, 16, 19, 40], "norm": [5, 10], "q": [5, 7, 10], "find": [5, 10], "its": [5, 7, 9, 11], "first": [5, 34, 40], "Then": [5, 38, 40], "small": [5, 34], "le": 5, "taylor": 5, "expans": [5, 7], "form": [5, 9, 35], "5": [5, 7, 9, 10, 13, 17], "6627": 5, "0447": 5, "3492": [5, 9], "6610": 5, "requires_grad": [5, 8, 9, 11, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40], "1912": 5, "2425": 5, "9696": 5, "9540": 5, "4061": 5, "7204": 5, "5964": 5, "1894": 5, "6451": 5, "1373": 5, "6733": 5, "4142": 5, "6575": 5, "8838": 5, "1499": 5, "4459": 5, "1898": 5, "3367": 5, "8073": 5, "2654": 5, "3860": 5, "2852": 5, "3855": 5, "9061": 5, "1404": 5, "1034": 5, "grad_fn": [5, 8, 9, 23], "aliasbackward0": [5, 9, 23], "5633": 5, "4281": 5, "1112": 5, "6979": 5, "7408": 5, "5089": 5, "2016": 5, "2015": [5, 34], "8122": 5, "1692": 5, "5811": 5, "8128": 5, "5835": 5, "5849": 5, "1142": 5, "3438": 5, "7257": 5, "4443": 5, "9574": 5, "9265": 5, "2385": 5, "7309": 5, "3875": 5, "5440": [5, 13], "1945": 5, "invers": 7, "coef": 7, "ident": [7, 9, 24, 25, 26, 27, 28, 29, 30, 31, 32], "dimens": [7, 9, 13, 14, 15, 16, 17, 19, 21, 23, 41, 42, 43, 44, 45], "12": 7, "align": [7, 34], "c_1": 7, "phi_i": 7, "tau_i": 7, "c_2": 7, "c_3": 7, "120": 7, "24": [7, 34], "720": 7, "2520": 7, "approxim": 7, "sum_": 7, "b_n": 7, "xi": 7, "curlywedg": 7, "bernoulli": 7, "number": [7, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "b_0": 7, "b_1": 7, "b_2": 7, "b_3": 7, "b_4": 7, "30": 7, "adj": [7, 9, 13, 14, 15, 16, 46], "wedg": [7, 34], "mathfrak": 7, "notic": 7, "notat": 7, "nice": 7, "properti": [7, 9, 11], "usual": [7, 35], "baker": 7, "campbel": 7, "hausdorff": 7, "formula": 7, "bch": 7, "when": [7, 9, 11, 35], "perform": [7, 12, 17, 21, 35], "multipl": [7, 17, 34], "particular": 7, "146": 7, "math": 7, "scenario": 7, "179b": 7, "180": 7, "For": [7, 9, 35], "analyt": 7, "express": 7, "numer": 7, "base": [7, 10, 34], "seri": 7, "26": 7, "z": 7, "obtain": [7, 10], "72": 7, "famou": 7, "book": 7, "barfoot": 7, "cambridg": 7, "univers": 7, "press": 7, "2017": 7, "0248": 7, "1116": 7, "0251": 7, "4304": 7, "0565": 7, "0256": 7, "0666": 7, "2252": 7, "7425": 7, "9317": 7, "7806": 7, "8660": 7, "0028": 7, "6098": 7, "6517": 7, "7231": 7, "6650": 7, "0202": 7, "3731": 7, "8441": 7, "5438": 7, "2879": 7, "9965": 7, "6337": 7, "7320": 7, "1874": 7, "6312": 7, "3919": 7, "6938": 7, "9308": 7, "4965": 7, "1347": 7, "4894": 7, "6558": 7, "2221": 7, "8190": 7, "2108": 7, "either": [8, 9], "jocobian": 8, "9289": 8, "3053": 8, "0895": 8, "3180": 8, "9082": 8, "1667": 8, "0104": 8, "1889": 8, "9757": 8, "swherebackward0": 8, "class": [9, 11, 13, 14, 15, 16, 34, 35, 41, 42, 43, 44], "data": [9, 11, 13, 14, 15, 16, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40, 41, 42, 43, 44], "sub": 9, "int": [9, 13, 14, 15, 16, 17, 19, 21, 24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40, 41, 42, 43, 44], "object": [9, 13, 14, 15, 16, 34, 41, 42, 43, 44], "construct": [9, 13, 14, 15, 16, 41, 42, 43, 44], "defin": [9, 13, 14, 15, 16, 19, 24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40, 41, 42, 43, 44], "shape": [9, 13, 14, 15, 16, 23, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45], "should": [9, 13, 14, 15, 16, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "compat": 9, "error": [9, 13, 14, 15, 16, 35, 41, 42, 43, 44], "rais": [9, 13, 14, 15, 16, 35, 41, 42, 43, 44], "below": [9, 13, 14, 15, 16, 41, 42, 43, 44], "represent": [9, 10, 41, 42], "alia": [9, 13, 14, 15, 16, 41, 42, 43, 44], "most": 9, "onli": [9, 35], "need": [9, 40], "optim": [9, 46], "back": [9, 15], "propag": [9, 34], "via": 9, "gradient": [9, 11, 35], "taken": 9, "modul": [9, 11, 35, 46], "pytorch": [9, 35], "tradit": 9, "two": [9, 34, 38], "attribut": [9, 11], "lshape": [9, 13, 14, 15, 16, 24, 25, 26, 27, 29, 30, 31, 32, 34, 38, 41, 42, 43, 44], "avail": 9, "differec": 9, "hide": 9, "last": [9, 13, 14, 15, 16, 23, 34, 41, 42, 43, 44, 45], "sinc": 9, "take": [9, 34, 35], "singl": [9, 24, 25, 26, 27, 29, 30, 31, 32, 35], "item": [9, 17, 19, 21, 23, 24, 25, 26, 27, 29, 30, 31, 32, 34], "see": [9, 12, 13, 14, 15, 16, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 39, 40, 41, 42, 43, 44], "method": 9, "lview": 9, "import": [9, 34, 38], "devic": [9, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40], "cuda": [9, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "9520": 9, "4517": 9, "5834": 9, "8106": 9, "8197": 9, "7077": 9, "5743": 9, "8182": 9, "2104": 9, "specif": 9, "recommend": [9, 11], "tabl": 9, "other": 9, "constructor": 9, "usag": [9, 38], "prefer": [9, 35], "all": [9, 35], "dtype": [9, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40], "float64": [9, 23, 37, 39, 40], "5948": 9, "3113": 9, "9807": 9, "act": [9, 13, 14, 15, 16, 46], "adjt": [9, 13, 14, 15, 16, 46], "inv": [9, 13, 14, 15, 16, 41, 42, 43, 44, 46], "jinvp": [9, 13, 14, 15, 16, 46], "jr": [9, 34, 46], "log": [9, 13, 14, 15, 16, 17, 19, 21, 41, 42, 43, 46], "retr": [9, 13, 14, 15, 16, 46], "cummul": [9, 18, 46], "dim": [9, 17, 18, 19, 20, 21, 22], "cummul_": [9, 46], "inplac": [9, 18, 20, 22], "version": [9, 18, 20, 22], "cumop": [9, 20, 46], "op": [9, 19, 20], "cumops_": [9, 46], "cumprod": [9, 19, 22, 46], "cumprod_": [9, 46], "identity_": 9, "set": [9, 17, 21, 35], "self": [9, 35], "zero": [9, 34, 35, 40], "while": 9, "0724": 9, "1970": 9, "0022": 9, "9777": 9, "4998": 9, "5310": 9, "5885": 9, "ignor": 9, "hidden": 9, "also": [9, 11, 34, 39, 40], "access": 9, "desir": [9, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40], "liegroup": [9, 28], "share": 9, "view": 9, "9285": 9, "0040": 9, "3713": 9, "2503": 9, "7454": 9, "6178": 9, "2743": 9, "6666": 9, "6931": 9, "4805": 9, "8602": 9, "1706": 9, "7465": 9, "2991": 9, "5944": 9, "4603": 9, "4130": 9, "7858": 9, "without": [9, 34], "chang": 9, "1196": 9, "2339": 9, "6824": 9, "6822": 9, "9198": 9, "2704": 9, "2395": 9, "1532": 9, "extract": 9, "5358": 9, "5421": 9, "7224": 9, "8331": 9, "4412": 9, "0863": 9, "logarithm": [10, 42], "w_i": 10, "nu": 10, "scalar": 10, "arctan": 10, "sign": 10, "3w_i": 10, "implement": [10, 13, 14, 15, 16, 24, 25, 26, 27, 29, 30, 31, 32, 34, 40, 41, 42, 43, 44], "thank": 10, "hertzberg": 10, "integr": [10, 34], "sensor": 10, "fusion": 10, "algorithm": 10, "sound": 10, "through": 10, "encapsul": 10, "manifold": [10, 34, 38], "inform": [10, 35], "2013": 10, "therefor": 10, "henc": 10, "3060": 10, "2344": 10, "2724": 10, "2958": 10, "0840": 10, "4733": 10, "7004": 10, "4483": 10, "9009": 10, "0850": 10, "1020": 10, "2616": 10, "0524": 10, "2031": 10, "8377": 10, "3755": 10, "3525": [10, 12], "2367": 10, "5409": 10, "5929": 10, "3250": 10, "7394": 10, "0965": 10, "1747": 10, "3698": 10, "2000": 10, "1735": 10, "6220": 10, "1852": 10, "6402": 10, "8685": 10, "1717": 10, "2139": 10, "8385": 10, "2957": 10, "9545": 10, "8474": 10, "none": [11, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40], "kind": 11, "consid": [11, 13, 14, 15, 16, 41, 42, 43, 44], "nn": [11, 35], "veri": 11, "special": 11, "thei": 11, "assign": 11, "automat": 11, "ad": [11, 35], "list": [11, 13, 14, 15, 16, 24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40, 41, 42, 43, 44], "appear": 11, "iter": 11, "bool": [11, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40], "option": [11, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40], "requir": [11, 15, 35], "default": [11, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40], "highli": 11, "although": 11, "applic": 11, "sum": 11, "backward": 11, "just": 11, "test": 11, "There": 11, "physic": 11, "mean": [11, 12, 36, 37, 39], "grad": [11, 35], "retract": 12, "direct": 12, "a_i": 12, "exponeti": 12, "map": [12, 36, 37], "6399": 12, "0898": 12, "1656": 12, "7451": 12, "6754": 12, "8240": 12, "2109": 12, "4649": 12, "7254": 12, "0943": [12, 38], "4987": 12, "6057": 12, "6370": 12, "1379": 12, "7037": 12, "6164": 12, "0262": 12, "3141": 12, "rxsso3": 12, "0787": 12, "4052": 12, "7509": 12, "5155": [12, 13], "1217": 12, "functool": [13, 14, 15, 16, 34, 41, 42, 43, 44], "partial": [13, 14, 15, 16, 34, 35, 41, 42, 43, 44], "must": [13, 14, 15, 16, 41, 42, 43, 44], "empti": [13, 14, 15, 16, 41, 42, 43, 44], "intern": [13, 14, 15, 16, 41, 42, 43, 44], "store": [13, 14, 15, 16, 41, 42, 43, 44], "concaten": [13, 14, 16, 35, 41, 42, 43], "factor": [13, 16, 40, 41], "q_x": [13, 14, 15, 16], "q_y": [13, 14, 15, 16], "q_z": [13, 14, 15, 16], "q_w": [13, 14, 15, 16], "pmatrix": [13, 14, 16, 41, 42, 43, 44], "3693": 13, "5384": 13, "8119": 13, "4798": 13, "4058": 13, "5909": 13, "4918": 13, "2994": 13, "like": [13, 14, 15, 16, 24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40, 41, 42, 43, 44], "embed": [13, 14, 15, 16, 41, 42, 43, 44], "advis": [13, 14, 15, 16, 41, 42, 43, 44], "specifi": [13, 14, 15, 16, 41, 42, 43, 44], "storag": [13, 14, 15, 16, 41, 42, 43, 44], "doe": [13, 14, 15, 16, 41, 42, 43, 44], "initi": [13, 14, 15, 16, 34, 41, 42, 43, 44], "identity_rxso3": [13, 41, 46], "instead": [13, 14, 15, 16, 41, 42, 43, 44], "relev": [13, 14, 15, 16, 41, 42, 43, 44], "t_x": [14, 16, 42, 43], "t_y": [14, 16, 42, 43], "t_z": [14, 16, 42, 43], "1626": 14, "6349": 14, "3607": 14, "2848": 14, "0948": [14, 40], "1541": 14, "0003": 14, "4034": 14, "3085": 14, "8886": 14, "6703": 14, "7381": 14, "5575": 14, "6280": 14, "identity_se3": [14, 42, 46], "normal": [15, 36, 37, 39], "done": 15, "librari": 15, "befor": [15, 34], "further": [15, 34], "howev": 15, "written": [15, 40], "prevent": 15, "place": 15, "alter": 15, "0722": 15, "9440": 15, "9437": 15, "8485": 15, "2725": 15, "8414": 15, "0730": 15, "3270": 15, "0175": 16, "8657": 16, "2274": 16, "2380": 16, "3799": 16, "0664": 16, "9995": 16, "8744": 16, "4114": 16, "2041": 16, "5687": 16, "5630": 16, "6025": 16, "6137": 16, "1185": 16, "identity_sim3": [16, 43, 46], "cumul": [17, 19, 21], "along": [17, 19, 21], "x_": [17, 21, 45], "cdot": [17, 19, 21, 34, 35], "x_1": [17, 19, 21], "x_2": [17, 19, 21], "th": [17, 19, 21, 23, 34, 35], "lietyp": [17, 19, 21], "do": [17, 19, 21], "over": [17, 19, 21, 34], "whether": [17, 19, 21, 35], "fals": [17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40], "defaul": [17, 21], "complex": [17, 19, 21], "o": [17, 19, 21], "9615": [17, 21], "1246": [17, 21], "3666": [17, 21], "0165": [17, 21], "2853": [17, 21], "3126": [17, 21], "9059": [17, 21], "7139": [17, 21], "3988": [17, 21], "1909": [17, 21], "1780": [17, 21], "4405": [17, 21], "6571": [17, 21], "5852": [17, 21], "8252e": 17, "01": 17, "6198e": 17, "3683e": 17, "9007e": 17, "0905e": 17, "04": [17, 34], "2031e": 17, "4301e": 17, "3642e": 17, "user": 19, "circ": 19, "func": [19, 35], "suppos": 19, "provid": [19, 34], "meaning": 19, "doesn": 19, "check": 19, "result": [19, 35], "valid": 19, "mathemat": [19, 35], "definit": 19, "6466": 19, "2956": 19, "4055": 19, "4428": 19, "1893": 19, "3933": 19, "7833": 19, "2711": 19, "2020": 19, "0651": 19, "0685": 19, "6732": 19, "7331": 19, "lambda": 19, "5798": 21, "1189": 21, "2429": 21, "7686": 21, "7515": 21, "1920": 21, "5072": 21, "3758": 21, "euler": 23, "convert": [23, 33, 45, 46], "roll": 23, "pitch": 23, "yaw": 23, "displaystyl": [23, 35, 45], "bmatrix": [23, 34, 35, 45], "alpha_i": 23, "beta_i": 23, "gamma_i": 23, "ha": [23, 35, 45], "4873": 23, "1162": 23, "4829": 23, "7182": 23, "3813": 23, "4059": 23, "2966": 23, "7758": 23, "kwarg": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40], "lsize": [24, 25, 26, 27, 28, 29, 30, 31, 32], "sequenc": [24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40], "integ": [24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40], "variabl": [24, 25, 26, 27, 29, 30, 31, 32, 34, 36, 37, 39, 40], "argument": [24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40], "collect": [24, 25, 26, 27, 29, 30, 31, 32, 36, 37, 39, 40], "tupl": [24, 25, 26, 27, 29, 30, 31, 32, 35, 36, 37, 39, 40], "autograd": [24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40], "record": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40], "pseudorandom": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "sampl": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "set_default_tensor_typ": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "layout": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40], "stride": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "current": [24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 39, 40], "cpu": [24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 40], "determin": [28, 35, 38], "doubl": 28, "rotation_matrix": 33, "3x3": 33, "3x4": 33, "ey": [33, 34], "repeat": 33, "posit": 34, "veloc": [34, 42], "graviti": 34, "9": 34, "81007": 34, "preintegr": 34, "imu": 34, "signal": 34, "updat": 34, "durat": 34, "delta": [34, 44], "angular": 34, "rate": 34, "omega": 34, "acceler": 34, "bodi": 34, "frame": 34, "well": 34, "measur": 34, "covari": 34, "c_": 34, "known": 34, "better": 34, "precis": 34, "postion": 34, "float": [34, 36, 37, 39, 40], "classmethod": 34, "batch_imu_integr": 34, "init_st": 34, "dt": 34, "ang": 34, "acc": 34, "rot": 34, "0x7f1f38f95f40": 34, "cov": 34, "dict": 34, "dr": 34, "dp": 34, "dv": 34, "increment": 34, "interv": 34, "incre_r": 34, "incre_p": 34, "incre_v": 34, "start": 34, "cov_propog": 34, "init_cov": 34, "ang_cov": 34, "8791302400000007e": 34, "08": 34, "acc_cov": 34, "4e": 34, "06": 34, "propog": 34, "forward": [34, 35], "reset": 34, "statu": 34, "r_j": 34, "r_": 34, "ij": 34, "r_i": 34, "v_j": 34, "v_": 34, "v_i": 34, "t_": 34, "p_j": 34, "p_": 34, "step": 34, "contain": [34, 35], "ation": 34, "vel": 34, "ociti": 34, "po": 34, "ition": 34, "arianc": 34, "order": 34, "38": 34, "tro": 34, "uncertainti": 34, "6968": 34, "10": 34, "adapt": 34, "euroc": 34, "dataset": 34, "ik": 34, "w_k": 34, "b_i": 34, "a_k": 34, "k": 34, "diag": 34, "c_g": 34, "c_a": 34, "b_g": 34, "b_a": 34, "0_": 34, "i_": 34, "j_r": 34, "a7": 34, "a8": 34, "a9": 34, "a10": 34, "report": 34, "christian": 34, "forster": 34, "ecient": 34, "inerti": 34, "maximum": 34, "posteriori": 34, "technic": 34, "gt": 34, "irim": 34, "cp": 34, "001": 34, "v": 34, "get": 34, "mat2so3": [34, 46], "002": 34, "valu": [34, 35], "note": [34, 35], "call": [34, 35, 39], "0000e": 34, "00": 34, "0004": 34, "0388": 34, "9608e": 34, "07": 34, "0392e": 34, "7681e": 34, "05": 34, "1517e": 34, "1376e": 34, "18": 34, "1377e": 34, "3820e": 34, "17": 34, "1523e": 34, "14": 34, "1510e": 34, "20": 34, "1371e": 34, "1373e": 34, "1375e": 34, "1370e": 34, "6000e": 34, "2395e": 34, "5163e": 34, "2000e": 34, "11": 34, "0812e": 34, "21": 34, "8846e": 34, "4096e": 34, "0727e": 34, "8247e": 34, "8848e": 34, "1689e": 34, "4546e": 34, "0030e": 34, "8351e": 34, "3062e": 34, "5428e": 34, "1770e": 34, "0055e": 34, "5685e": 34, "4488e": 34, "0256e": 34, "2277e": 34, "2312e": 34, "5284e": 34, "0607e": 34, "9413e": 34, "odometri": 34, "kitti": 34, "fig": 34, "model": 35, "create_graph": 35, "strict": 35, "strategi": 35, "revers": 35, "mode": 35, "flatten": 35, "parametr": 35, "learnabl": 35, "dfrac": 35, "amp": 35, "vdot": 35, "ddot": 35, "m": 35, "differenti": 35, "manner": 35, "disconnect": 35, "detect": 35, "exist": 35, "independ": 35, "said": 35, "expect": [35, 40], "invok": 35, "onc": 35, "per": 35, "row": 35, "flag": 35, "batched_grad": 35, "vmap": 35, "prototyp": 35, "featur": 35, "though": 35, "lead": 35, "improv": 35, "mani": 35, "becaus": [35, 40], "still": 35, "experiment": 35, "mai": 35, "cliff": 35, "str": 35, "than": 35, "tend": 35, "thu": 35, "even": 35, "nest": 35, "contrast": 35, "python": 35, "conv2d": 35, "in_channel": 35, "out_channel": 35, "kernel_s": 35, "3365": 35, "combin": 35, "4162": 35, "0968": 35, "6042": 35, "1886": 35, "4623": 35, "7389": 35, "0716": 35, "4293": 35, "posetransform": 35, "def": 35, "__init__": 35, "super": 35, "4670": 35, "7041": 35, "0029": 35, "6591": 35, "2566": 35, "2477": 35, "0670": 35, "9535": 35, "8593": 35, "2672": 35, "3446": 35, "2417": 35, "9503": 35, "1154": 35, "3630": 35, "0179": 35, "9055": 35, "fill": [36, 37, 38, 39, 40], "random": [36, 37, 39, 40], "distribut": [36, 37, 39, 40], "varianc": [36, 37, 39], "out": [36, 37, 39, 40], "0522": 36, "0456": 36, "1996": 36, "0266": 36, "0240": 36, "0375": 36, "9987": 36, "1344": 36, "1673": 36, "1111": 36, "0219": 36, "0454": 36, "0710": 36, "9962": 36, "0060": 37, "0517": 37, "0070": 37, "9986": 37, "0015": 37, "0753": 37, "0503": 37, "9959": 37, "satisfi": [38, 40], "name": 38, "orthogon": 38, "similar": 38, "memory_format": 38, "memori": 38, "format": [38, 44], "preserve_format": 38, "8970": 38, "1399": 38, "standard": [39, 40], "0599": 39, "0593": 39, "0809": 39, "0352": 39, "2173": 39, "0342": 39, "0226": 39, "1081": 39, "0270": 39, "1368": 39, "0327": 39, "2052": 39, "distanc": 40, "calcult": 40, "deviat": 40, "individu": 40, "compon": 40, "perturb": 40, "sigma_": 40, "sqrt": 40, "due": 40, "wai": 40, "matt": 40, "mason": 40, "lectur": 40, "necessari": 40, "dimension": 40, "gaussian": 40, "length": 40, "ompl": 40, "code": 40, "line": 40, "119": 40, "0427": 40, "0149": 40, "0607": 40, "0473": 40, "0703": 40, "delta_x": [41, 42, 43, 44], "delta_i": [41, 42, 43, 44], "delta_z": [41, 42, 43, 44], "3752": 41, "1576": 41, "2057": 41, "6086": 41, "8434": 41, "2449": 41, "0488": 41, "1202": 41, "wise": 42, "8710": 42, "4994": 42, "2843": 42, "0185": 42, "3932": 42, "4839": 42, "4750": 42, "4804": 42, "7083": 42, "8141": 42, "4409": 42, "1477": 43, "3500": 43, "1571": [43, 44], "8893": 43, "7821": 43, "9889": 43, "7887": 43, "2251": 43, "3512": 43, "0485": 43, "0163": 43, "7090": 43, "0417": 43, "3842": 43, "being": 44, "2203": 44, "2457": 44, "3311": 44, "5412": 44, "7028": 44, "2059": 45, "2761": 45, "2929": 45, "basic": 46, "randn_lik": 46, "identity_lik": 46, "euler2so3": 46, "imupreintegr": 46, "modjac": 46, "index": 46, "search": 46, "page": 46}, "objects": {"pypose": [[2, 0, 1, "", "Act"], [3, 0, 1, "", "Adj"], [4, 0, 1, "", "AdjT"], [5, 0, 1, "", "Exp"], [6, 0, 1, "", "Inv"], [7, 0, 1, "", "Jinvp"], [8, 0, 1, "", "Jr"], [9, 1, 1, "", "LieTensor"], [10, 0, 1, "", "Log"], [11, 1, 1, "", "Parameter"], [12, 0, 1, "", "Retr"], [13, 4, 1, "", "RxSO3"], [14, 4, 1, "", "SE3"], [15, 4, 1, "", "SO3"], [16, 4, 1, "", "Sim3"], [17, 0, 1, "", "cummul"], [18, 0, 1, "", "cummul_"], [19, 0, 1, "", "cumops"], [20, 0, 1, "", "cumops_"], [21, 0, 1, "", "cumprod"], [22, 0, 1, "", "cumprod_"], [23, 0, 1, "", "euler2SO3"], [24, 0, 1, "", "identity_RxSO3"], [25, 0, 1, "", "identity_SE3"], [26, 0, 1, "", "identity_SO3"], [27, 0, 1, "", "identity_Sim3"], [28, 0, 1, "", "identity_like"], [29, 0, 1, "", "identity_rxso3"], [30, 0, 1, "", "identity_se3"], [31, 0, 1, "", "identity_sim3"], [32, 0, 1, "", "identity_so3"], [33, 0, 1, "", "mat2SO3"], [36, 0, 1, "", "randn_SE3"], [37, 0, 1, "", "randn_SO3"], [38, 0, 1, "", "randn_like"], [39, 0, 1, "", "randn_se3"], [40, 0, 1, "", "randn_so3"], [41, 4, 1, "", "rxso3"], [42, 4, 1, "", "se3"], [43, 4, 1, "", "sim3"], [44, 4, 1, "", "so3"], [45, 0, 1, "", "vec2skew"]], "pypose.LieTensor": [[9, 2, 1, "", "Act"], [9, 2, 1, "", "Adj"], [9, 2, 1, "", "AdjT"], [9, 2, 1, "", "Exp"], [9, 2, 1, "", "Inv"], [9, 2, 1, "", "Jinvp"], [9, 2, 1, "", "Jr"], [9, 2, 1, "", "Log"], [9, 2, 1, "", "Retr"], [9, 2, 1, "", "cummul"], [9, 2, 1, "", "cummul_"], [9, 2, 1, "", "cumops"], [9, 2, 1, "", "cumops_"], [9, 2, 1, "", "cumprod"], [9, 2, 1, "", "cumprod_"], [9, 2, 1, "", "identity_"], [9, 3, 1, "", "lshape"], [9, 2, 1, "", "lview"], [9, 2, 1, "", "matrix"], [9, 2, 1, "", "tensor"], [9, 2, 1, "", "translation"]], "pypose.module": [[34, 1, 1, "", "IMUPreintegrator"]], "pypose.module.IMUPreintegrator": [[34, 2, 1, "", "batch_imu_integrate"], [34, 2, 1, "", "cov_propogate"], [34, 2, 1, "", "forward"], [34, 2, 1, "", "update"]], "pypose.optim": [[35, 1, 1, "", "modjac"]]}, "objtypes": {"0": "py:function", "1": "py:class", "2": "py:method", "3": "py:property", "4": "py:data"}, "objnames": {"0": ["py", "function", "Python function"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "property", "Python property"], "4": ["py", "data", "Python data"]}, "titleterms": {"basic": 0, "convert": 1, "pypos": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], "act": 2, "adj": 3, "list": [3, 5, 7, 9, 10, 38], "support": [3, 5, 7, 10], "mathrm": [3, 5, 7, 10], "map": [3, 5, 7, 10], "adjt": 4, "exp": 5, "inv": 6, "jinvp": 7, "jr": 8, "lietensor": [9, 38, 47], "ltype": [9, 38], "lie": 9, "group": 9, "algebra": 9, "log": 10, "paramet": 11, "retr": 12, "rxso3": [13, 41], "se3": [14, 42], "so3": [15, 44], "sim3": [16, 43], "cummul": 17, "cummul_": 18, "cumop": 19, "cumops_": 20, "cumprod": 21, "cumprod_": 22, "euler2so3": 23, "identity_rxso3": [24, 29], "identity_se3": [25, 30], "identity_so3": [26, 32], "identity_sim3": [27, 31], "identity_lik": 28, "mat2so3": 33, "modul": [34, 48], "imupreintegr": 34, "optim": [35, 49], "modjac": 35, "randn_se3": [36, 39], "randn_so3": [37, 40], "randn_lik": 38, "avail": 38, "random": 38, "gener": 38, "input": 38, "vec2skew": 45, "document": 46, "content": 46, "indic": 46, "tabl": 46}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})