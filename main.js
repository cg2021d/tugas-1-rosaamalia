function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const titik_1 = {
        //biru muda
        color_1: [0.396, 0.475, 0.990],
        //biru tua
        color_2: [0.308, 0.372, 0.790],
        //biru lebih tua lagi
        color_3: [0.259, 0.321, 0.720],
        //biru lebih lebih tua lagi
        color_4: [0.218, 0.259, 0.520],

        c: [-0.5, 0.5],
        d: [-0.5, 0.7],
        e: [-0.47078, 0.70244],
        f: [-0.44036, 0.69583],
        g: [-0.41626, 0.69145],
        h: [-0.39435, 0.68269],
        i: [-0.37099, 0.671],
        j: [-0.34835, 0.6564],
        k: [-0.33156, 0.64326],
        l: [-0.31184, 0.62646],
        m: [-0.29797, 0.6104],
        n: [-0.28263, 0.58922],
        o: [-0.2746, 0.56659],
        p: [-0.26949, 0.54395],
        q: [-0.2673, 0.51693],
        r: [-0.26669, 0.49213],
        s: [-0.26669, 0.49213],
        t: [-0.27533, 0.43661],
        u: [-0.28774, 0.41105],
        v: [-0.30308, 0.38477],
        w: [-0.31622, 0.36578],
        z: [-0.3301, 0.34972],
        a_1: [-0.34762, 0.33438],
        b_1: [-0.37245, 0.31686],
        c_1: [-0.4, 0.3],
        d_1: [-0.4294, 0.28911],
        e_1: [-0.4608, 0.28035],
        f_1: [-0.49512, 0.2767],
        g_1: [-0.5382, 0.27743],
        h_1: [-0.57544, 0.28473],
        i_1: [-0.61487, 0.2986],
        j_1: [-0.64602, 0.31155],
        k_1: [-0.67499, 0.33063],
        l_1: [-0.69335, 0.35111],
        m_1: [-0.70819, 0.37937],
        n_1: [-0.7202, 0.40621],
        o_1: [-0.72655, 0.43871],
        p_1: [-0.72585, 0.47191],
        q_1: [-0.72072, 0.50107],
        r_1: [-0.71323, 0.52945],
        s_1: [-0.70062, 0.55763],
        t_1: [-0.68356, 0.58136],
        u_1: [-0.66651, 0.6036],
        v_1: [-0.645, 0.62511],
        w_1: [-0.62276, 0.64365],
        z_1: [-0.59977, 0.65996],
        a_2: [-0.5753, 0.67405],
        b_2: [-0.55157, 0.68517],
        c_2: [-0.52684, 0.69439],
        
        //sisi luar
        d_2: [-0.69002, 0.64736],
        e_2: [-0.6698, 0.66623],
        f_2: [-0.64756, 0.68308],
        g_2: [-0.62195, 0.6979],
        h_2: [-0.59162, 0.71273],
        i_2: [-0.56129, 0.72284],
        j_2: [-0.53299, 0.73092],
        k_2: [-0.50199, 0.73699],
        l_2: [-0.47571, 0.73834],
        m_2: [-0.44605, 0.73766],
        n_2: [-0.41707, 0.73429],
        o_2: [-0.38877, 0.72553],
        p_2: [-0.36181, 0.71677],
        q_2: [-0.33418, 0.70397],
        r_2: [-0.30992, 0.69049],
        s_2: [-0.29105, 0.67499],
        t_2: [-0.2742, 0.65814],
        u_2: [-0.25668, 0.6359],
        v_2: [-0.24252, 0.61029],
        w_2: [-0.23125, 0.58615],
        z_2: [-0.22245, 0.55434],
        a_3: [-0.21907, 0.51509],
        b_3: [-0.22448, 0.47448],
        c_3: [-0.23666, 0.43658],
        d_3: [-0.25235, 0.40541],
        e_3: [-0.27154, 0.3773],
        f_3: [-0.29072, 0.35366],
        g_3: [-0.30901, 0.33448],
        h_3: [-0.33399, 0.31663],
        i_3: [-0.36, 0.3],
        j_3: [-0.38842, 0.2854],
        k_3: [-0.4201, 0.27336],
        l_3: [-0.45623, 0.26221],
        m_3: [-0.49408, 0.25704],
        n_3: [-0.52751, 0.2561],
        o_3: [-0.56755, 0.25739],
        p_3: [-0.60768, 0.26626],
        q_3: [-0.65202, 0.28352],
        r_3: [-0.69075, 0.30732],
        s_3: [-0.72528, 0.33859],
        t_3: [-0.74535, 0.36892],
        u_3: [-0.76, 0.4],
        v_3: [-0.76962, 0.43659],
        w_3: [-0.77288, 0.47299],
        z_3: [-0.76915, 0.50519],
        a_4: [-0.75721, 0.54452],
        b_4: [-0.73897, 0.58257],
        c_4: [-0.71916, 0.61227]
    }

    const titik_2 = {
        //biru muda
        color_1: [0.396, 0.475, 0.990],
        //biru tua
        color_2: [0.308, 0.372, 0.790],
        //biru lebih tua lagi
        color_3: [0.259, 0.321, 0.720],
        //biru lebih lebih tua lagi
        color_4: [0.218, 0.259, 0.520],

        //sisi dalam
        f_4: [0.45927, 0.0058],
        g_4: [0.45886, 0.20777],
        h_4: [0.49638, 0.20492],
        i_4: [0.52677, 0.19589],
        j_4: [0.55894, 0.18088],
        k_4: [0.58594, 0.16793],
        l_4: [0.61246, 0.14807],
        m_4: [0.63128, 0.12611],
        n_4: [0.65, 0.1],
        o_4: [0.66371, 0.07381],
        p_4: [0.67612, 0.04403],
        q_4: [0.68461, 0.01455],
        r_4: [0.68761, -0.01543],
        s_4: [0.68761, -0.04141],
        t_4: [0.6837, -0.06848],
        u_4: [0.67875, -0.09814],
        v_4: [0.66557, -0.1278],
        w_4: [0.65, -0.15],
        z_4: [0.62569, -0.17615],
        a_5: [0.6, -0.2],
        b_5: [0.57104, -0.21987],
        c_5: [0.52831, -0.23775],
        d_5: [0.48857, -0.24471],
        e_5: [0.44882, -0.24371],
        f_5: [0.40709, -0.23477],
        g_5: [0.36436, -0.21192],
        h_5: [0.33157, -0.18509],
        i_5: [0.3, -0.15],
        j_5: [0.27394, -0.11355],
        k_5: [0.25605, -0.0738],
        l_5: [0.24413, -0.02809],
        m_5: [0.24214, 0.01662],
        n_5: [0.25307, 0.06531],
        o_5: [0.27195, 0.10505],
        p_5: [0.29481, 0.13586],
        q_5: [0.32163, 0.16467],
        r_5: [0.35343, 0.18455],
        s_5: [0.39119, 0.20144],
        t_5: [0.42497, 0.20839],

        //sisi luar
        u_5: [0.442, 0.24527],
        v_5: [0.48344, 0.24287],
        w_5: [0.52307, 0.23506],
        z_5: [0.5579, 0.22005],
        a_6: [0.58913, 0.20444],
        b_6: [0.62035, 0.18702],
        c_6: [0.64738, 0.1654],
        d_6: [0.66959, 0.14138],
        e_6: [0.68941, 0.11496],
        f_6: [0.70743, 0.08374],
        g_6: [0.71944, 0.05191],
        h_6: [0.73222, 0.01485],
        i_6: [0.73657, -0.02067],
        j_6: [0.73512, -0.05329],
        k_6: [0.7257, -0.09752],
        l_6: [0.71555, -0.12942],
        m_6: [0.70032, -0.15769],
        n_6: [0.67422, -0.18669],
        o_6: [0.6387, -0.21786],
        p_6: [0.61043, -0.23381],
        q_6: [0.56548, -0.24903],
        r_6: [0.51618, -0.25991],
        s_6: [0.46761, -0.25846],
        t_6: [0.42411, -0.25048],
        u_6: [0.37481, -0.23453],
        v_6: [0.33567, -0.21206],
        w_6: [0.29942, -0.18959],
        z_6: [0.26244, -0.14945],
        a_7: [0.23574, -0.10727],
        b_7: [0.21545, -0.05761],
        c_7: [0.20584, -0.00742],
        d_7: [0.20686, 0.04906],
        e_7: [0.22084, 0.10031],
        f_7: [0.25, 0.15],
        g_7: [0.2783, 0.18211],
        h_7: [0.31816, 0.21317],
        i_7: [0.36113, 0.2318],
        j_7: [0.40254, 0.24164]
        
    }

    var vertices = [
        //kiri dalam
        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.d, ...titik_1.color_2,
        ...titik_1.e, ...titik_1.color_2, //15

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.e, ...titik_1.color_2,
        ...titik_1.f, ...titik_1.color_2, //30

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.f, ...titik_1.color_2,
        ...titik_1.g, ...titik_1.color_2, //45

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.g, ...titik_1.color_2,
        ...titik_1.h, ...titik_1.color_2, //60

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.h, ...titik_1.color_2,
        ...titik_1.i, ...titik_1.color_2, //75

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.i, ...titik_1.color_2,
        ...titik_1.j, ...titik_1.color_2, //90

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.j, ...titik_1.color_2,
        ...titik_1.k, ...titik_1.color_2, //105

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.k, ...titik_1.color_2,
        ...titik_1.l, ...titik_1.color_2, //120

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.l, ...titik_1.color_2,
        ...titik_1.m, ...titik_1.color_2, //135

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.m, ...titik_1.color_2,
        ...titik_1.n, ...titik_1.color_2, //150

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.n, ...titik_1.color_2,
        ...titik_1.o, ...titik_1.color_2, //165

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.o, ...titik_1.color_2,
        ...titik_1.p, ...titik_1.color_2, //180

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.p, ...titik_1.color_2,
        ...titik_1.q, ...titik_1.color_2, //195

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.q, ...titik_1.color_2,
        ...titik_1.r, ...titik_1.color_2, //210

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.r, ...titik_1.color_2,
        ...titik_1.s, ...titik_1.color_2, //225
        
        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.s, ...titik_1.color_2,
        ...titik_1.t, ...titik_1.color_2, //240

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.t, ...titik_1.color_2,
        ...titik_1.u, ...titik_1.color_2, //255

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.u, ...titik_1.color_2,
        ...titik_1.v, ...titik_1.color_2, //270

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.v, ...titik_1.color_2,
        ...titik_1.w, ...titik_1.color_2, //285

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.w, ...titik_1.color_2,
        ...titik_1.z, ...titik_1.color_2, //300

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.z, ...titik_1.color_2,
        ...titik_1.a_1, ...titik_1.color_2, //315

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.a_1, ...titik_1.color_2,
        ...titik_1.b_1, ...titik_1.color_2, //330

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.b_1, ...titik_1.color_2,
        ...titik_1.c_1, ...titik_1.color_2, //345

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.c_1, ...titik_1.color_2,
        ...titik_1.d_1, ...titik_1.color_2, //360

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.d_1, ...titik_1.color_2,
        ...titik_1.e_1, ...titik_1.color_2, //375

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.e_1, ...titik_1.color_2,
        ...titik_1.f_1, ...titik_1.color_2, //390

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.f_1, ...titik_1.color_2,
        ...titik_1.g_1, ...titik_1.color_2, //405

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.g_1, ...titik_1.color_2,
        ...titik_1.h_1, ...titik_1.color_2, //420

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.h_1, ...titik_1.color_2,
        ...titik_1.i_1, ...titik_1.color_2, //435

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.i_1, ...titik_1.color_2,
        ...titik_1.j_1, ...titik_1.color_2, //450

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.j_1, ...titik_1.color_2,
        ...titik_1.k_1, ...titik_1.color_2, //465

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.k_1, ...titik_1.color_2,
        ...titik_1.l_1, ...titik_1.color_2, //480

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.l_1, ...titik_1.color_2,
        ...titik_1.m_1, ...titik_1.color_2, //495

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.m_1, ...titik_1.color_2,
        ...titik_1.n_1, ...titik_1.color_2, //510

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.n_1, ...titik_1.color_2,
        ...titik_1.o_1, ...titik_1.color_2, //525

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.o_1, ...titik_1.color_2,
        ...titik_1.p_1, ...titik_1.color_2, //540

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.p_1, ...titik_1.color_2,
        ...titik_1.q_1, ...titik_1.color_2, //555

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.q_1, ...titik_1.color_2,
        ...titik_1.r_1, ...titik_1.color_2, //570

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.r_1, ...titik_1.color_2,
        ...titik_1.s_1, ...titik_1.color_2, //585

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.s_1, ...titik_1.color_2,
        ...titik_1.t_1, ...titik_1.color_2, //600

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.t_1, ...titik_1.color_2,
        ...titik_1.u_1, ...titik_1.color_2, //615

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.u_1, ...titik_1.color_2,
        ...titik_1.v_1, ...titik_1.color_2, //630

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.v_1, ...titik_1.color_2,
        ...titik_1.w_1, ...titik_1.color_2, //645

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.w_1, ...titik_1.color_2,
        ...titik_1.z_1, ...titik_1.color_2, //660

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.z_1, ...titik_1.color_2,
        ...titik_1.a_2, ...titik_1.color_2, //675

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.a_2, ...titik_1.color_2,
        ...titik_1.b_2, ...titik_1.color_2, //690

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.b_2, ...titik_1.color_2,
        ...titik_1.c_2, ...titik_1.color_2, //705

        ...titik_1.c, ...titik_1.color_1,
        ...titik_1.c_2, ...titik_1.color_2,
        ...titik_1.d, ...titik_1.color_2, //720

        //kiri luar
        ...titik_1.d_2, ...titik_1.color_3,
        ...titik_1.v_1, ...titik_1.color_4,
        ...titik_1.e_2, ...titik_1.color_3, //735

        ...titik_1.e_2, ...titik_1.color_3,
        ...titik_1.w_1, ...titik_1.color_4,
        ...titik_1.f_2, ...titik_1.color_3, //750

        ...titik_1.f_2, ...titik_1.color_3,
        ...titik_1.z_1, ...titik_1.color_4,
        ...titik_1.g_2, ...titik_1.color_3, //765

        ...titik_1.g_2, ...titik_1.color_3,
        ...titik_1.a_2, ...titik_1.color_4,
        ...titik_1.h_2, ...titik_1.color_3, //780

        ...titik_1.h_2, ...titik_1.color_3,
        ...titik_1.b_2, ...titik_1.color_4,
        ...titik_1.i_2, ...titik_1.color_3, //795

        ...titik_1.i_2, ...titik_1.color_3,
        ...titik_1.c_2, ...titik_1.color_4,
        ...titik_1.j_2, ...titik_1.color_3, //810

        ...titik_1.j_2, ...titik_1.color_3,
        ...titik_1.d, ...titik_1.color_4,
        ...titik_1.k_2, ...titik_1.color_3, //825

        ...titik_1.k_2, ...titik_1.color_3,
        ...titik_1.e, ...titik_1.color_4,
        ...titik_1.l_2, ...titik_1.color_3, //840

        ...titik_1.l_2, ...titik_1.color_3,
        ...titik_1.f, ...titik_1.color_4,
        ...titik_1.m_2, ...titik_1.color_3, //855

        ...titik_1.m_2, ...titik_1.color_3,
        ...titik_1.g, ...titik_1.color_4,
        ...titik_1.n_2, ...titik_1.color_3, //870

        ...titik_1.n_2, ...titik_1.color_3,
        ...titik_1.h, ...titik_1.color_4,
        ...titik_1.o_2, ...titik_1.color_3, //885

        ...titik_1.o_2, ...titik_1.color_3,
        ...titik_1.i, ...titik_1.color_4,
        ...titik_1.p_2, ...titik_1.color_3, //900

        ...titik_1.p_2, ...titik_1.color_3,
        ...titik_1.j, ...titik_1.color_4,
        ...titik_1.q_2, ...titik_1.color_3, //915

        ...titik_1.q_2, ...titik_1.color_3,
        ...titik_1.k, ...titik_1.color_4,
        ...titik_1.r_2, ...titik_1.color_3, //930

        ...titik_1.r_2, ...titik_1.color_3,
        ...titik_1.l, ...titik_1.color_4,
        ...titik_1.s_2, ...titik_1.color_3, //945

        ...titik_1.s_2, ...titik_1.color_3,
        ...titik_1.m, ...titik_1.color_4,
        ...titik_1.t_2, ...titik_1.color_3, //960

        ...titik_1.t_2, ...titik_1.color_3,
        ...titik_1.n, ...titik_1.color_4,
        ...titik_1.u_2, ...titik_1.color_3, //975

        ...titik_1.u_2, ...titik_1.color_3,
        ...titik_1.o, ...titik_1.color_4,
        ...titik_1.v_2, ...titik_1.color_3, //990

        ...titik_1.v_2, ...titik_1.color_3,
        ...titik_1.p, ...titik_1.color_4,
        ...titik_1.w_2, ...titik_1.color_3, //1005

        ...titik_1.w_2, ...titik_1.color_3,
        ...titik_1.q, ...titik_1.color_4,
        ...titik_1.z_2, ...titik_1.color_3, //1020

        ...titik_1.z_2, ...titik_1.color_3,
        ...titik_1.r, ...titik_1.color_4,
        ...titik_1.a_3, ...titik_1.color_3, //1035

        ...titik_1.a_3, ...titik_1.color_3,
        ...titik_1.s, ...titik_1.color_4,
        ...titik_1.b_3, ...titik_1.color_3, //1050

        ...titik_1.b_3, ...titik_1.color_3,
        ...titik_1.t, ...titik_1.color_4,
        ...titik_1.c_3, ...titik_1.color_3, //1065

        ...titik_1.c_3, ...titik_1.color_3,
        ...titik_1.u, ...titik_1.color_4,
        ...titik_1.d_3, ...titik_1.color_3, //1080

        ...titik_1.d_3, ...titik_1.color_3,
        ...titik_1.v, ...titik_1.color_4,
        ...titik_1.e_3, ...titik_1.color_3, //1095

        ...titik_1.e_3, ...titik_1.color_3,
        ...titik_1.w, ...titik_1.color_4,
        ...titik_1.f_3, ...titik_1.color_3, //1110

        ...titik_1.f_3, ...titik_1.color_3,
        ...titik_1.z, ...titik_1.color_4,
        ...titik_1.g_3, ...titik_1.color_3, //1125

        ...titik_1.g_3, ...titik_1.color_3,
        ...titik_1.a_1, ...titik_1.color_4,
        ...titik_1.h_3, ...titik_1.color_3, //1140

        ...titik_1.h_3, ...titik_1.color_3,
        ...titik_1.b_1, ...titik_1.color_4,
        ...titik_1.i_3, ...titik_1.color_3, //1155

        ...titik_1.i_3, ...titik_1.color_3,
        ...titik_1.c_1, ...titik_1.color_4,
        ...titik_1.j_3, ...titik_1.color_3, //1170

        ...titik_1.j_3, ...titik_1.color_3,
        ...titik_1.d_1, ...titik_1.color_4,
        ...titik_1.k_3, ...titik_1.color_3, //1185

        ...titik_1.k_3, ...titik_1.color_3,
        ...titik_1.e_1, ...titik_1.color_4,
        ...titik_1.l_3, ...titik_1.color_3, //1200

        ...titik_1.l_3, ...titik_1.color_3,
        ...titik_1.f_1, ...titik_1.color_4,
        ...titik_1.m_3, ...titik_1.color_3, //1215

        ...titik_1.m_3, ...titik_1.color_3,
        ...titik_1.g_1, ...titik_1.color_4,
        ...titik_1.n_3, ...titik_1.color_3, //1230

        ...titik_1.n_3, ...titik_1.color_3,
        ...titik_1.h_1, ...titik_1.color_4,
        ...titik_1.o_3, ...titik_1.color_3, //1245

        ...titik_1.o_3, ...titik_1.color_3,
        ...titik_1.i_1, ...titik_1.color_4,
        ...titik_1.p_3, ...titik_1.color_3, //1260

        ...titik_1.p_3, ...titik_1.color_3,
        ...titik_1.j_1, ...titik_1.color_4,
        ...titik_1.q_3, ...titik_1.color_3, //1275

        ...titik_1.q_3, ...titik_1.color_3,
        ...titik_1.k_1, ...titik_1.color_4,
        ...titik_1.r_3, ...titik_1.color_3, //1290

        ...titik_1.r_3, ...titik_1.color_3,
        ...titik_1.l_1, ...titik_1.color_4,
        ...titik_1.s_3, ...titik_1.color_3, //1305

        ...titik_1.s_3, ...titik_1.color_3,
        ...titik_1.m_1, ...titik_1.color_4,
        ...titik_1.t_3, ...titik_1.color_3, //1320

        ...titik_1.t_3, ...titik_1.color_3,
        ...titik_1.n_1, ...titik_1.color_4,
        ...titik_1.u_3, ...titik_1.color_3, //1335

        ...titik_1.u_3, ...titik_1.color_3,
        ...titik_1.o_1, ...titik_1.color_4,
        ...titik_1.v_3, ...titik_1.color_3, //1350

        ...titik_1.v_3, ...titik_1.color_3,
        ...titik_1.p_1, ...titik_1.color_4,
        ...titik_1.w_3, ...titik_1.color_3, //1365

        ...titik_1.w_3, ...titik_1.color_3,
        ...titik_1.q_1, ...titik_1.color_4,
        ...titik_1.z_3, ...titik_1.color_3, //1380

        ...titik_1.z_3, ...titik_1.color_3,
        ...titik_1.r_1, ...titik_1.color_4,
        ...titik_1.a_4, ...titik_1.color_3, //1395

        ...titik_1.a_4, ...titik_1.color_3,
        ...titik_1.s_1, ...titik_1.color_4,
        ...titik_1.b_4, ...titik_1.color_3, //1410

        ...titik_1.b_4, ...titik_1.color_3,
        ...titik_1.t_1, ...titik_1.color_4,
        ...titik_1.c_4, ...titik_1.color_3, //1425

        ...titik_1.c_4, ...titik_1.color_3,
        ...titik_1.u_1, ...titik_1.color_4,
        ...titik_1.d_2, ...titik_1.color_3, //1440

        ...titik_1.v_1, ...titik_1.color_4,
        ...titik_1.e_2, ...titik_1.color_3,
        ...titik_1.w_1, ...titik_1.color_4, //1455

        ...titik_1.w_1, ...titik_1.color_4,
        ...titik_1.f_2, ...titik_1.color_3,
        ...titik_1.z_1, ...titik_1.color_4, //1470

        ...titik_1.z_1, ...titik_1.color_4,
        ...titik_1.g_2, ...titik_1.color_3,
        ...titik_1.a_2, ...titik_1.color_4, //1485

        ...titik_1.a_2, ...titik_1.color_4,
        ...titik_1.h_2, ...titik_1.color_3,
        ...titik_1.b_2, ...titik_1.color_4, //1500

        ...titik_1.b_2, ...titik_1.color_4,
        ...titik_1.i_2, ...titik_1.color_3,
        ...titik_1.c_2, ...titik_1.color_4, //1515

        ...titik_1.c_2, ...titik_1.color_4,
        ...titik_1.j_2, ...titik_1.color_3,
        ...titik_1.d, ...titik_1.color_4, //1530

        ...titik_1.d, ...titik_1.color_4,
        ...titik_1.k_2, ...titik_1.color_3,
        ...titik_1.e, ...titik_1.color_4, //1545

        ...titik_1.e, ...titik_1.color_4,
        ...titik_1.l_2, ...titik_1.color_3,
        ...titik_1.f, ...titik_1.color_4, //1560

        ...titik_1.f, ...titik_1.color_4,
        ...titik_1.m_2, ...titik_1.color_3,
        ...titik_1.g, ...titik_1.color_4, //1575

        ...titik_1.g, ...titik_1.color_4,
        ...titik_1.n_2, ...titik_1.color_3,
        ...titik_1.h, ...titik_1.color_4, //1590

        ...titik_1.h, ...titik_1.color_4,
        ...titik_1.o_2, ...titik_1.color_3,
        ...titik_1.i, ...titik_1.color_4, //1605

        ...titik_1.i, ...titik_1.color_4,
        ...titik_1.p_2, ...titik_1.color_3,
        ...titik_1.j, ...titik_1.color_4, //1620

        ...titik_1.j, ...titik_1.color_4,
        ...titik_1.q_2, ...titik_1.color_3,
        ...titik_1.k, ...titik_1.color_4, //1635

        ...titik_1.k, ...titik_1.color_4,
        ...titik_1.r_2, ...titik_1.color_3,
        ...titik_1.l, ...titik_1.color_4, //1650

        ...titik_1.l, ...titik_1.color_4,
        ...titik_1.s_2, ...titik_1.color_3,
        ...titik_1.m, ...titik_1.color_4, //1665

        ...titik_1.m, ...titik_1.color_4,
        ...titik_1.t_2, ...titik_1.color_3,
        ...titik_1.n, ...titik_1.color_4, //1680

        ...titik_1.n, ...titik_1.color_4,
        ...titik_1.u_2, ...titik_1.color_3,
        ...titik_1.o, ...titik_1.color_4, //1695

        ...titik_1.o, ...titik_1.color_4,
        ...titik_1.v_2, ...titik_1.color_3,
        ...titik_1.p, ...titik_1.color_4, //1710

        ...titik_1.p, ...titik_1.color_4,
        ...titik_1.w_2, ...titik_1.color_3,
        ...titik_1.q, ...titik_1.color_4, //1725

        ...titik_1.q, ...titik_1.color_4,
        ...titik_1.z_2, ...titik_1.color_3,
        ...titik_1.r, ...titik_1.color_4, //1740

        ...titik_1.r, ...titik_1.color_4,
        ...titik_1.a_3, ...titik_1.color_3,
        ...titik_1.s, ...titik_1.color_4, //1755

        ...titik_1.s, ...titik_1.color_4,
        ...titik_1.b_3, ...titik_1.color_3,
        ...titik_1.t, ...titik_1.color_4, //1770

        ...titik_1.t, ...titik_1.color_4,
        ...titik_1.c_3, ...titik_1.color_3,
        ...titik_1.u, ...titik_1.color_4, //1785

        ...titik_1.u, ...titik_1.color_4,
        ...titik_1.d_3, ...titik_1.color_3,
        ...titik_1.v, ...titik_1.color_4, //1800

        ...titik_1.v, ...titik_1.color_4,
        ...titik_1.e_3, ...titik_1.color_3,
        ...titik_1.w, ...titik_1.color_4, //1815

        ...titik_1.w, ...titik_1.color_4,
        ...titik_1.f_3, ...titik_1.color_3,
        ...titik_1.z, ...titik_1.color_4, //1830

        ...titik_1.z, ...titik_1.color_4,
        ...titik_1.g_3, ...titik_1.color_3,
        ...titik_1.a_1, ...titik_1.color_4, //1845

        ...titik_1.a_1, ...titik_1.color_4,
        ...titik_1.h_3, ...titik_1.color_3,
        ...titik_1.b_1, ...titik_1.color_4, //1860

        ...titik_1.b_1, ...titik_1.color_4,
        ...titik_1.i_3, ...titik_1.color_3,
        ...titik_1.c_1, ...titik_1.color_4, //1875

        ...titik_1.c_1, ...titik_1.color_4,
        ...titik_1.j_3, ...titik_1.color_3,
        ...titik_1.d_1, ...titik_1.color_4, //1890

        ...titik_1.d_1, ...titik_1.color_4,
        ...titik_1.k_3, ...titik_1.color_3,
        ...titik_1.e_1, ...titik_1.color_4, //1905

        ...titik_1.e_1, ...titik_1.color_4,
        ...titik_1.l_3, ...titik_1.color_3,
        ...titik_1.f_1, ...titik_1.color_4, //1920

        ...titik_1.f_1, ...titik_1.color_4,
        ...titik_1.m_3, ...titik_1.color_3,
        ...titik_1.g_1, ...titik_1.color_4, //1935

        ...titik_1.g_1, ...titik_1.color_4,
        ...titik_1.n_3, ...titik_1.color_3,
        ...titik_1.h_1, ...titik_1.color_4, //1950

        ...titik_1.h_1, ...titik_1.color_4,
        ...titik_1.o_3, ...titik_1.color_3,
        ...titik_1.i_1, ...titik_1.color_4, //1965

        ...titik_1.i_1, ...titik_1.color_4,
        ...titik_1.p_3, ...titik_1.color_3,
        ...titik_1.j_1, ...titik_1.color_4, //1980

        ...titik_1.j_1, ...titik_1.color_4,
        ...titik_1.q_3, ...titik_1.color_3,
        ...titik_1.k_1, ...titik_1.color_4, //1995

        ...titik_1.k_1, ...titik_1.color_4,
        ...titik_1.r_3, ...titik_1.color_3,
        ...titik_1.l_1, ...titik_1.color_4, //2010

        ...titik_1.l_1, ...titik_1.color_4,
        ...titik_1.s_3, ...titik_1.color_3,
        ...titik_1.m_1, ...titik_1.color_4, //2025

        ...titik_1.m_1, ...titik_1.color_4,
        ...titik_1.t_3, ...titik_1.color_3,
        ...titik_1.n_1, ...titik_1.color_4, //2040

        ...titik_1.n_1, ...titik_1.color_4,
        ...titik_1.u_3, ...titik_1.color_3,
        ...titik_1.o_1, ...titik_1.color_4, //2055

        ...titik_1.o_1, ...titik_1.color_4,
        ...titik_1.v_3, ...titik_1.color_3,
        ...titik_1.p_1, ...titik_1.color_4, //2070

        ...titik_1.p_1, ...titik_1.color_4,
        ...titik_1.w_3, ...titik_1.color_3,
        ...titik_1.q_1, ...titik_1.color_4, //2085

        ...titik_1.q_1, ...titik_1.color_4,
        ...titik_1.z_3, ...titik_1.color_3,
        ...titik_1.r_1, ...titik_1.color_4, //2100

        ...titik_1.r_1, ...titik_1.color_4,
        ...titik_1.a_4, ...titik_1.color_3,
        ...titik_1.s_1, ...titik_1.color_4, //2115

        ...titik_1.s_1, ...titik_1.color_4,
        ...titik_1.b_4, ...titik_1.color_3,
        ...titik_1.t_1, ...titik_1.color_4, //2145

        ...titik_1.t_1, ...titik_1.color_4,
        ...titik_1.c_4, ...titik_1.color_3,
        ...titik_1.u_1, ...titik_1.color_4, //2160

        ...titik_1.u_1, ...titik_1.color_4,
        ...titik_1.d_2, ...titik_1.color_3,
        ...titik_1.v_1, ...titik_1.color_4, //2175

        //kanan dalam
        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.g_4, ...titik_2.color_2,
        ...titik_2.h_4, ...titik_2.color_2, //2190

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.h_4, ...titik_2.color_2,
        ...titik_2.i_4, ...titik_2.color_2, //2205

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.i_4, ...titik_2.color_2,
        ...titik_2.j_4, ...titik_2.color_2, //2220

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.j_4, ...titik_2.color_2,
        ...titik_2.k_4, ...titik_2.color_2, //2235

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.k_4, ...titik_2.color_2,
        ...titik_2.l_4, ...titik_2.color_2, //2250

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.l_4, ...titik_2.color_2,
        ...titik_2.m_4, ...titik_2.color_2, //2265

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.m_4, ...titik_2.color_2,
        ...titik_2.n_4, ...titik_2.color_2, //2280

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.n_4, ...titik_2.color_2,
        ...titik_2.o_4, ...titik_2.color_2, //2295

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.o_4, ...titik_2.color_2,
        ...titik_2.p_4, ...titik_2.color_2, //2310

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.p_4, ...titik_2.color_2,
        ...titik_2.q_4, ...titik_2.color_2, //2325

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.q_4, ...titik_2.color_2,
        ...titik_2.r_4, ...titik_2.color_2, //2340

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.r_4, ...titik_2.color_2,
        ...titik_2.s_4, ...titik_2.color_2, //2355

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.s_4, ...titik_2.color_2,
        ...titik_2.t_4, ...titik_2.color_2, //2370

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.t_4, ...titik_2.color_2,
        ...titik_2.u_4, ...titik_2.color_2, //2385

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.u_4, ...titik_2.color_2,
        ...titik_2.v_4, ...titik_2.color_2, //2400

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.v_4, ...titik_2.color_2,
        ...titik_2.w_4, ...titik_2.color_2, //2415

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.w_4, ...titik_2.color_2,
        ...titik_2.z_4, ...titik_2.color_2, //2430

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.z_4, ...titik_2.color_2,
        ...titik_2.a_5, ...titik_2.color_2, //2445

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.a_5, ...titik_2.color_2,
        ...titik_2.b_5, ...titik_2.color_2, //2460

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.b_5, ...titik_2.color_2,
        ...titik_2.c_5, ...titik_2.color_2, //2475

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.c_5, ...titik_2.color_2,
        ...titik_2.d_5, ...titik_2.color_2, //2490

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.d_5, ...titik_2.color_2,
        ...titik_2.e_5, ...titik_2.color_2, //2505

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.e_5, ...titik_2.color_2,
        ...titik_2.f_5, ...titik_2.color_2, //2520

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.f_5, ...titik_2.color_2,
        ...titik_2.g_5, ...titik_2.color_2, //2535

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.g_5, ...titik_2.color_2,
        ...titik_2.h_5, ...titik_2.color_2, //2550

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.h_5, ...titik_2.color_2,
        ...titik_2.i_5, ...titik_2.color_2, //2565

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.i_5, ...titik_2.color_2,
        ...titik_2.j_5, ...titik_2.color_2, //2580

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.j_5, ...titik_2.color_2,
        ...titik_2.k_5, ...titik_2.color_2, //2595

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.k_5, ...titik_2.color_2,
        ...titik_2.l_5, ...titik_2.color_2, //2610

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.l_5, ...titik_2.color_2,
        ...titik_2.m_5, ...titik_2.color_2, //2625

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.m_5, ...titik_2.color_2,
        ...titik_2.n_5, ...titik_2.color_2, //2640

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.n_5, ...titik_2.color_2,
        ...titik_2.o_5, ...titik_2.color_2, //2655

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.o_5, ...titik_2.color_2,
        ...titik_2.p_5, ...titik_2.color_2, //2670

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.p_5, ...titik_2.color_2,
        ...titik_2.q_5, ...titik_2.color_2, //2685

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.q_5, ...titik_2.color_2,
        ...titik_2.r_5, ...titik_2.color_2, //2700

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.r_5, ...titik_2.color_2,
        ...titik_2.s_5, ...titik_2.color_2, //2715

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.s_5, ...titik_2.color_2,
        ...titik_2.t_5, ...titik_2.color_2, //2730

        ...titik_2.f_4, ...titik_2.color_1,
        ...titik_2.t_5, ...titik_2.color_2,
        ...titik_2.g_4, ...titik_2.color_2, //2745

        //kanan luar
        ...titik_2.u_5, ...titik_2.color_3,
        ...titik_2.g_4, ...titik_2.color_4,
        ...titik_2.v_5, ...titik_2.color_3, //2760

        ...titik_2.v_5, ...titik_2.color_3,
        ...titik_2.h_4, ...titik_2.color_4,
        ...titik_2.w_5, ...titik_2.color_3, //2775

        ...titik_2.w_5, ...titik_2.color_3,
        ...titik_2.i_4, ...titik_2.color_4,
        ...titik_2.z_5, ...titik_2.color_3, //2790

        ...titik_2.z_5, ...titik_2.color_3,
        ...titik_2.j_4, ...titik_2.color_4,
        ...titik_2.a_6, ...titik_2.color_3, //2805

        ...titik_2.a_6, ...titik_2.color_3,
        ...titik_2.k_4, ...titik_2.color_4,
        ...titik_2.b_6, ...titik_2.color_3, //2820

        ...titik_2.b_6, ...titik_2.color_3,
        ...titik_2.l_4, ...titik_2.color_4,
        ...titik_2.c_6, ...titik_2.color_3, //285

        ...titik_2.c_6, ...titik_2.color_3,
        ...titik_2.m_4, ...titik_2.color_4,
        ...titik_2.d_6, ...titik_2.color_3, //2850

        ...titik_2.d_6, ...titik_2.color_3,
        ...titik_2.n_4, ...titik_2.color_4,
        ...titik_2.e_6, ...titik_2.color_3, //2865

        ...titik_2.e_6, ...titik_2.color_3,
        ...titik_2.o_4, ...titik_2.color_4,
        ...titik_2.f_6, ...titik_2.color_3, //2880

        ...titik_2.f_6, ...titik_2.color_3,
        ...titik_2.p_4, ...titik_2.color_4,
        ...titik_2.g_6, ...titik_2.color_3, //2895

        ...titik_2.g_6, ...titik_2.color_3,
        ...titik_2.q_4, ...titik_2.color_4,
        ...titik_2.h_6, ...titik_2.color_3, //2910

        ...titik_2.h_6, ...titik_2.color_3,
        ...titik_2.r_4, ...titik_2.color_4,
        ...titik_2.i_6, ...titik_2.color_3, //2925

        ...titik_2.i_6, ...titik_2.color_3,
        ...titik_2.s_4, ...titik_2.color_4,
        ...titik_2.j_6, ...titik_2.color_3, //2940

        ...titik_2.j_6, ...titik_2.color_3,
        ...titik_2.t_4, ...titik_2.color_4,
        ...titik_2.k_6, ...titik_2.color_3, //2955

        ...titik_2.k_6, ...titik_2.color_3,
        ...titik_2.u_4, ...titik_2.color_4,
        ...titik_2.l_6, ...titik_2.color_3, //2970

        ...titik_2.l_6, ...titik_2.color_3,
        ...titik_2.v_4, ...titik_2.color_4,
        ...titik_2.m_6, ...titik_2.color_3, //2985

        ...titik_2.m_6, ...titik_2.color_3,
        ...titik_2.w_4, ...titik_2.color_4,
        ...titik_2.n_6, ...titik_2.color_3, //3000

        ...titik_2.n_6, ...titik_2.color_3,
        ...titik_2.z_4, ...titik_2.color_4,
        ...titik_2.o_6, ...titik_2.color_3, //3015

        ...titik_2.o_6, ...titik_2.color_3,
        ...titik_2.a_5, ...titik_2.color_4,
        ...titik_2.p_6, ...titik_2.color_3, //3030

        ...titik_2.p_6, ...titik_2.color_3,
        ...titik_2.b_5, ...titik_2.color_4,
        ...titik_2.q_6, ...titik_2.color_3, //3045

        ...titik_2.q_6, ...titik_2.color_3,
        ...titik_2.c_5, ...titik_2.color_4,
        ...titik_2.r_6, ...titik_2.color_3, //3060

        ...titik_2.r_6, ...titik_2.color_3,
        ...titik_2.d_5, ...titik_2.color_4,
        ...titik_2.s_6, ...titik_2.color_3, //3075

        ...titik_2.s_6, ...titik_2.color_3,
        ...titik_2.e_5, ...titik_2.color_4,
        ...titik_2.t_6, ...titik_2.color_3, //3090

        ...titik_2.t_6, ...titik_2.color_3,
        ...titik_2.f_5, ...titik_2.color_4,
        ...titik_2.u_6, ...titik_2.color_3, //3105

        ...titik_2.u_6, ...titik_2.color_3,
        ...titik_2.g_5, ...titik_2.color_4,
        ...titik_2.v_6, ...titik_2.color_3, //3120

        ...titik_2.v_6, ...titik_2.color_3,
        ...titik_2.h_5, ...titik_2.color_4,
        ...titik_2.w_6, ...titik_2.color_3, //3135

        ...titik_2.w_6, ...titik_2.color_3,
        ...titik_2.i_5, ...titik_2.color_4,
        ...titik_2.z_6, ...titik_2.color_3, //3150

        ...titik_2.z_6, ...titik_2.color_3,
        ...titik_2.j_5, ...titik_2.color_4,
        ...titik_2.a_7, ...titik_2.color_3, //3165

        ...titik_2.a_7, ...titik_2.color_3,
        ...titik_2.k_5, ...titik_2.color_4,
        ...titik_2.b_7, ...titik_2.color_3, //3180

        ...titik_2.b_7, ...titik_2.color_3,
        ...titik_2.l_5, ...titik_2.color_4,
        ...titik_2.c_7, ...titik_2.color_3, //3195

        ...titik_2.c_7, ...titik_2.color_3,
        ...titik_2.m_5, ...titik_2.color_4,
        ...titik_2.d_7, ...titik_2.color_3, //3210

        ...titik_2.d_7, ...titik_2.color_3,
        ...titik_2.n_5, ...titik_2.color_4,
        ...titik_2.e_7, ...titik_2.color_3, //3225

        ...titik_2.e_7, ...titik_2.color_3,
        ...titik_2.o_5, ...titik_2.color_4,
        ...titik_2.f_7, ...titik_2.color_3, //3240

        ...titik_2.f_7, ...titik_2.color_3,
        ...titik_2.p_5, ...titik_2.color_4,
        ...titik_2.g_7, ...titik_2.color_3, //3255

        ...titik_2.g_7, ...titik_2.color_3,
        ...titik_2.q_5, ...titik_2.color_4,
        ...titik_2.h_7, ...titik_2.color_3, //3270

        ...titik_2.h_7, ...titik_2.color_3,
        ...titik_2.r_5, ...titik_2.color_4,
        ...titik_2.i_7, ...titik_2.color_3, //3285

        ...titik_2.i_7, ...titik_2.color_3,
        ...titik_2.s_5, ...titik_2.color_4,
        ...titik_2.j_7, ...titik_2.color_3, //3300

        ...titik_2.j_7, ...titik_2.color_3,
        ...titik_2.t_5, ...titik_2.color_4,
        ...titik_2.u_5, ...titik_2.color_3, //3315

        ...titik_2.g_4, ...titik_2.color_4,
        ...titik_2.v_5, ...titik_2.color_3,
        ...titik_2.h_4, ...titik_2.color_4, //3330

        ...titik_2.h_4, ...titik_2.color_4,
        ...titik_2.w_5, ...titik_2.color_3,
        ...titik_2.i_4, ...titik_2.color_4, //3345

        ...titik_2.i_4, ...titik_2.color_4,
        ...titik_2.z_5, ...titik_2.color_3,
        ...titik_2.j_4, ...titik_2.color_4, //3360

        ...titik_2.j_4, ...titik_2.color_4,
        ...titik_2.a_6, ...titik_2.color_3,
        ...titik_2.k_4, ...titik_2.color_4, //3375

        ...titik_2.k_4, ...titik_2.color_4,
        ...titik_2.b_6, ...titik_2.color_3,
        ...titik_2.l_4, ...titik_2.color_4, //3390

        ...titik_2.l_4, ...titik_2.color_4,
        ...titik_2.c_6, ...titik_2.color_3,
        ...titik_2.m_4, ...titik_2.color_4, //3405

        ...titik_2.m_4, ...titik_2.color_4,
        ...titik_2.d_6, ...titik_2.color_3,
        ...titik_2.n_4, ...titik_2.color_4, //3420

        ...titik_2.n_4, ...titik_2.color_4,
        ...titik_2.e_6, ...titik_2.color_3,
        ...titik_2.o_4, ...titik_2.color_4, //3435

        ...titik_2.o_4, ...titik_2.color_4,
        ...titik_2.f_6, ...titik_2.color_3,
        ...titik_2.p_4, ...titik_2.color_4, //3450

        ...titik_2.p_4, ...titik_2.color_4,
        ...titik_2.g_6, ...titik_2.color_3,
        ...titik_2.q_4, ...titik_2.color_4, //3465

        ...titik_2.q_4, ...titik_2.color_4,
        ...titik_2.h_6, ...titik_2.color_3,
        ...titik_2.r_4, ...titik_2.color_4, //3480

        ...titik_2.r_4, ...titik_2.color_4,
        ...titik_2.i_6, ...titik_2.color_3,
        ...titik_2.s_4, ...titik_2.color_4, //3495

        ...titik_2.s_4, ...titik_2.color_4,
        ...titik_2.j_6, ...titik_2.color_3,
        ...titik_2.t_4, ...titik_2.color_4, //3510

        ...titik_2.t_4, ...titik_2.color_4,
        ...titik_2.k_6, ...titik_2.color_3,
        ...titik_2.u_4, ...titik_2.color_4, //3525

        ...titik_2.u_4, ...titik_2.color_4,
        ...titik_2.l_6, ...titik_2.color_3,
        ...titik_2.v_4, ...titik_2.color_4, //3540

        ...titik_2.v_4, ...titik_2.color_4,
        ...titik_2.m_6, ...titik_2.color_3,
        ...titik_2.w_4, ...titik_2.color_4, //3555

        ...titik_2.w_4, ...titik_2.color_4,
        ...titik_2.n_6, ...titik_2.color_3,
        ...titik_2.z_4, ...titik_2.color_4, //3570

        ...titik_2.z_4, ...titik_2.color_4,
        ...titik_2.o_6, ...titik_2.color_3,
        ...titik_2.a_5, ...titik_2.color_4, //3585

        ...titik_2.a_5, ...titik_2.color_4,
        ...titik_2.p_6, ...titik_2.color_3,
        ...titik_2.b_5, ...titik_2.color_4, //3600

        ...titik_2.b_5, ...titik_2.color_4,
        ...titik_2.q_6, ...titik_2.color_3,
        ...titik_2.c_5, ...titik_2.color_4, //3615

        ...titik_2.c_5, ...titik_2.color_4,
        ...titik_2.r_6, ...titik_2.color_3,
        ...titik_2.d_5, ...titik_2.color_4, //3630

        ...titik_2.d_5, ...titik_2.color_4,
        ...titik_2.s_6, ...titik_2.color_3,
        ...titik_2.e_5, ...titik_2.color_4, //3645

        ...titik_2.e_5, ...titik_2.color_4,
        ...titik_2.t_6, ...titik_2.color_3,
        ...titik_2.f_5, ...titik_2.color_4, //3660

        ...titik_2.f_5, ...titik_2.color_4,
        ...titik_2.u_6, ...titik_2.color_3,
        ...titik_2.g_5, ...titik_2.color_4, //3675

        ...titik_2.g_5, ...titik_2.color_4,
        ...titik_2.v_6, ...titik_2.color_3,
        ...titik_2.h_5, ...titik_2.color_4, //3690

        ...titik_2.h_5, ...titik_2.color_4,
        ...titik_2.w_6, ...titik_2.color_3,
        ...titik_2.i_5, ...titik_2.color_4, //3705

        ...titik_2.i_5, ...titik_2.color_4,
        ...titik_2.z_6, ...titik_2.color_3,
        ...titik_2.j_5, ...titik_2.color_4, //3720

        ...titik_2.j_5, ...titik_2.color_4,
        ...titik_2.a_7, ...titik_2.color_3,
        ...titik_2.k_5, ...titik_2.color_4, //3735

        ...titik_2.k_5, ...titik_2.color_4,
        ...titik_2.b_7, ...titik_2.color_3,
        ...titik_2.l_5, ...titik_2.color_4, //3750

        ...titik_2.l_5, ...titik_2.color_4,
        ...titik_2.c_7, ...titik_2.color_3,
        ...titik_2.m_5, ...titik_2.color_4, //3765

        ...titik_2.m_5, ...titik_2.color_4,
        ...titik_2.d_7, ...titik_2.color_3,
        ...titik_2.n_5, ...titik_2.color_4, //3780

        ...titik_2.n_5, ...titik_2.color_4,
        ...titik_2.e_7, ...titik_2.color_3,
        ...titik_2.o_5, ...titik_2.color_4, //3795

        ...titik_2.o_5, ...titik_2.color_4,
        ...titik_2.f_7, ...titik_2.color_3,
        ...titik_2.p_5, ...titik_2.color_4, //3810

        ...titik_2.p_5, ...titik_2.color_4,
        ...titik_2.g_7, ...titik_2.color_3,
        ...titik_2.q_5, ...titik_2.color_4, //3825

        ...titik_2.q_5, ...titik_2.color_4,
        ...titik_2.h_7, ...titik_2.color_3,
        ...titik_2.r_5, ...titik_2.color_4, //3840

        ...titik_2.r_5, ...titik_2.color_4,
        ...titik_2.i_7, ...titik_2.color_3,
        ...titik_2.s_5, ...titik_2.color_4, //3855

        ...titik_2.s_5, ...titik_2.color_4,
        ...titik_2.j_7, ...titik_2.color_3,
        ...titik_2.t_5, ...titik_2.color_4, //3870

        ...titik_2.t_5, ...titik_2.color_4,
        ...titik_2.g_4, ...titik_2.color_3,
        ...titik_2.u_5, ...titik_2.color_4 //3885
    ]

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0106;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        if (change < -0.73 || change > 0.77) {
            speed = speed * -1;
        }
        for (let i = 2161; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(1, 1, 1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 870;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

