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

        c: [-0.5+1, 0.5-0.5],
        d: [-0.5+1, 0.7-0.5],
        e: [-0.47078+1, 0.70244-0.5],
        f: [-0.44036+1, 0.69583-0.5],
        g: [-0.41626+1, 0.69145-0.5],
        h: [-0.39435+1, 0.68269-0.5],
        i: [-0.37099+1, 0.671-0.5],
        j: [-0.34835+1, 0.6564-0.5],
        k: [-0.33156+1, 0.64326-0.5],
        l: [-0.31184+1, 0.62646-0.5],
        m: [-0.29797+1, 0.6104-0.5],
        n: [-0.28263+1, 0.58922-0.5],
        o: [-0.2746+1, 0.56659-0.5],
        p: [-0.26949+1, 0.54395-0.5],
        q: [-0.2673+1, 0.51693-0.5],
        r: [-0.26669+1, 0.49213-0.5],
        s: [-0.26669+1, 0.49213-0.5],
        t: [-0.27533+1, 0.43661-0.5],
        u: [-0.28774+1, 0.41105-0.5],
        v: [-0.30308+1, 0.38477-0.5],
        w: [-0.31622+1, 0.36578-0.5],
        z: [-0.3301+1, 0.34972-0.5],
        a_1: [-0.34762+1, 0.33438-0.5],
        b_1: [-0.37245+1, 0.31686-0.5],
        c_1: [-0.4+1, 0.3-0.5],
        d_1: [-0.4294+1, 0.28911-0.5],
        e_1: [-0.4608+1, 0.28035-0.5],
        f_1: [-0.49512+1, 0.2767-0.5],
        g_1: [-0.5382+1, 0.27743-0.5],
        h_1: [-0.57544+1, 0.28473-0.5],
        i_1: [-0.61487+1, 0.2986-0.5],
        j_1: [-0.64602+1, 0.31155-0.5],
        k_1: [-0.67499+1, 0.33063-0.5],
        l_1: [-0.69335+1, 0.35111-0.5],
        m_1: [-0.70819+1, 0.37937-0.5],
        n_1: [-0.7202+1, 0.40621-0.5],
        o_1: [-0.72655+1, 0.43871-0.5],
        p_1: [-0.72585+1, 0.47191-0.5],
        q_1: [-0.72072+1, 0.50107-0.5],
        r_1: [-0.71323+1, 0.52945-0.5],
        s_1: [-0.70062+1, 0.55763-0.5],
        t_1: [-0.68356+1, 0.58136-0.5],
        u_1: [-0.66651+1, 0.6036-0.5],
        v_1: [-0.645+1, 0.62511-0.5],
        w_1: [-0.62276+1, 0.64365-0.5],
        z_1: [-0.59977+1, 0.65996-0.5],
        a_2: [-0.5753+1, 0.67405-0.5],
        b_2: [-0.55157+1, 0.68517-0.5],
        c_2: [-0.52684+1, 0.69439-0.5],
        
        //sisi luar
        d_2: [-0.69002+1, 0.64736-0.5],
        e_2: [-0.6698+1, 0.66623-0.5],
        f_2: [-0.64756+1, 0.68308-0.5],
        g_2: [-0.62195+1, 0.6979-0.5],
        h_2: [-0.59162+1, 0.71273-0.5],
        i_2: [-0.56129+1, 0.72284-0.5],
        j_2: [-0.53299+1, 0.73092-0.5],
        k_2: [-0.50199+1, 0.73699-0.5],
        l_2: [-0.47571+1, 0.73834-0.5],
        m_2: [-0.44605+1, 0.73766-0.5],
        n_2: [-0.41707+1, 0.73429-0.5],
        o_2: [-0.38877+1, 0.72553-0.5],
        p_2: [-0.36181+1, 0.71677-0.5],
        q_2: [-0.33418+1, 0.70397-0.5],
        r_2: [-0.30992+1, 0.69049-0.5],
        s_2: [-0.29105+1, 0.67499-0.5],
        t_2: [-0.2742+1, 0.65814-0.5],
        u_2: [-0.25668+1, 0.6359-0.5],
        v_2: [-0.24252+1, 0.61029-0.5],
        w_2: [-0.23125+1, 0.58615-0.5],
        z_2: [-0.22245+1, 0.55434-0.5],
        a_3: [-0.21907+1, 0.51509-0.5],
        b_3: [-0.22448+1, 0.47448-0.5],
        c_3: [-0.23666+1, 0.43658-0.5],
        d_3: [-0.25235+1, 0.40541-0.5],
        e_3: [-0.27154+1, 0.3773-0.5],
        f_3: [-0.29072+1, 0.35366-0.5],
        g_3: [-0.30901+1, 0.33448-0.5],
        h_3: [-0.33399+1, 0.31663-0.5],
        i_3: [-0.36+1, 0.3-0.5],
        j_3: [-0.38842+1, 0.2854-0.5],
        k_3: [-0.4201+1, 0.27336-0.5],
        l_3: [-0.45623+1, 0.26221-0.5],
        m_3: [-0.49408+1, 0.25704-0.5],
        n_3: [-0.52751+1, 0.2561-0.5],
        o_3: [-0.56755+1, 0.25739-0.5],
        p_3: [-0.60768+1, 0.26626-0.5],
        q_3: [-0.65202+1, 0.28352-0.5],
        r_3: [-0.69075+1, 0.30732-0.5],
        s_3: [-0.72528+1, 0.33859-0.5],
        t_3: [-0.74535+1, 0.36892-0.5],
        u_3: [-0.76+1, 0.4-0.5],
        v_3: [-0.76962+1, 0.43659-0.5],
        w_3: [-0.77288+1, 0.47299-0.5],
        z_3: [-0.76915+1, 0.50519-0.5],
        a_4: [-0.75721+1, 0.54452-0.5],
        b_4: [-0.73897+1, 0.58257-0.5],
        c_4: [-0.71916+1, 0.61227-0.5]
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
        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.d, ...titik_2.color_2,
        ...titik_2.e, ...titik_2.color_2, //15

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.e, ...titik_2.color_2,
        ...titik_2.f, ...titik_2.color_2, //30

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.f, ...titik_2.color_2,
        ...titik_2.g, ...titik_2.color_2, //45

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.g, ...titik_2.color_2,
        ...titik_2.h, ...titik_2.color_2, //60

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.h, ...titik_2.color_2,
        ...titik_2.i, ...titik_2.color_2, //75

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.i, ...titik_2.color_2,
        ...titik_2.j, ...titik_2.color_2, //90

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.j, ...titik_2.color_2,
        ...titik_2.k, ...titik_2.color_2, //105

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.k, ...titik_2.color_2,
        ...titik_2.l, ...titik_2.color_2, //120

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.l, ...titik_2.color_2,
        ...titik_2.m, ...titik_2.color_2, //135

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.m, ...titik_2.color_2,
        ...titik_2.n, ...titik_2.color_2, //150

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.n, ...titik_2.color_2,
        ...titik_2.o, ...titik_2.color_2, //165

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.o, ...titik_2.color_2,
        ...titik_2.p, ...titik_2.color_2, //180

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.p, ...titik_2.color_2,
        ...titik_2.q, ...titik_2.color_2, //195

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.q, ...titik_2.color_2,
        ...titik_2.r, ...titik_2.color_2, //210

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.r, ...titik_2.color_2,
        ...titik_2.s, ...titik_2.color_2, //225
        
        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.s, ...titik_2.color_2,
        ...titik_2.t, ...titik_2.color_2, //240

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.t, ...titik_2.color_2,
        ...titik_2.u, ...titik_2.color_2, //255

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.u, ...titik_2.color_2,
        ...titik_2.v, ...titik_2.color_2, //270

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.v, ...titik_2.color_2,
        ...titik_2.w, ...titik_2.color_2, //285

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.w, ...titik_2.color_2,
        ...titik_2.z, ...titik_2.color_2, //300

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.z, ...titik_2.color_2,
        ...titik_2.a_1, ...titik_2.color_2, //315

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.a_1, ...titik_2.color_2,
        ...titik_2.b_1, ...titik_2.color_2, //330

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.b_1, ...titik_2.color_2,
        ...titik_2.c_1, ...titik_2.color_2, //345

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.c_1, ...titik_2.color_2,
        ...titik_2.d_1, ...titik_2.color_2, //360

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.d_1, ...titik_2.color_2,
        ...titik_2.e_1, ...titik_2.color_2, //375

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.e_1, ...titik_2.color_2,
        ...titik_2.f_1, ...titik_2.color_2, //390

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.f_1, ...titik_2.color_2,
        ...titik_2.g_1, ...titik_2.color_2, //405

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.g_1, ...titik_2.color_2,
        ...titik_2.h_1, ...titik_2.color_2, //420

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.h_1, ...titik_2.color_2,
        ...titik_2.i_1, ...titik_2.color_2, //435

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.i_1, ...titik_2.color_2,
        ...titik_2.j_1, ...titik_2.color_2, //450

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.j_1, ...titik_2.color_2,
        ...titik_2.k_1, ...titik_2.color_2, //465

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.k_1, ...titik_2.color_2,
        ...titik_2.l_1, ...titik_2.color_2, //480

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.l_1, ...titik_2.color_2,
        ...titik_2.m_1, ...titik_2.color_2, //495

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.m_1, ...titik_2.color_2,
        ...titik_2.n_1, ...titik_2.color_2, //510

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.n_1, ...titik_2.color_2,
        ...titik_2.o_1, ...titik_2.color_2, //525

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.o_1, ...titik_2.color_2,
        ...titik_2.p_1, ...titik_2.color_2, //540

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.p_1, ...titik_2.color_2,
        ...titik_2.q_1, ...titik_2.color_2, //555

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.q_1, ...titik_2.color_2,
        ...titik_2.r_1, ...titik_2.color_2, //570

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.r_1, ...titik_2.color_2,
        ...titik_2.s_1, ...titik_2.color_2, //585

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.s_1, ...titik_2.color_2,
        ...titik_2.t_1, ...titik_2.color_2, //600

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.t_1, ...titik_2.color_2,
        ...titik_2.u_1, ...titik_2.color_2, //615

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.u_1, ...titik_2.color_2,
        ...titik_2.v_1, ...titik_2.color_2, //630

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.v_1, ...titik_2.color_2,
        ...titik_2.w_1, ...titik_2.color_2, //645

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.w_1, ...titik_2.color_2,
        ...titik_2.z_1, ...titik_2.color_2, //660

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.z_1, ...titik_2.color_2,
        ...titik_2.a_2, ...titik_2.color_2, //675

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.a_2, ...titik_2.color_2,
        ...titik_2.b_2, ...titik_2.color_2, //690

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.b_2, ...titik_2.color_2,
        ...titik_2.c_2, ...titik_2.color_2, //705

        ...titik_2.c, ...titik_2.color_1,
        ...titik_2.c_2, ...titik_2.color_2,
        ...titik_2.d, ...titik_2.color_2, //720

        //kanan luar
        ...titik_2.d_2, ...titik_2.color_3,
        ...titik_2.v_1, ...titik_2.color_4,
        ...titik_2.e_2, ...titik_2.color_3, //735

        ...titik_2.e_2, ...titik_2.color_3,
        ...titik_2.w_1, ...titik_2.color_4,
        ...titik_2.f_2, ...titik_2.color_3, //750

        ...titik_2.f_2, ...titik_2.color_3,
        ...titik_2.z_1, ...titik_2.color_4,
        ...titik_2.g_2, ...titik_2.color_3, //765

        ...titik_2.g_2, ...titik_2.color_3,
        ...titik_2.a_2, ...titik_2.color_4,
        ...titik_2.h_2, ...titik_2.color_3, //780

        ...titik_2.h_2, ...titik_2.color_3,
        ...titik_2.b_2, ...titik_2.color_4,
        ...titik_2.i_2, ...titik_2.color_3, //795

        ...titik_2.i_2, ...titik_2.color_3,
        ...titik_2.c_2, ...titik_2.color_4,
        ...titik_2.j_2, ...titik_2.color_3, //810

        ...titik_2.j_2, ...titik_2.color_3,
        ...titik_2.d, ...titik_2.color_4,
        ...titik_2.k_2, ...titik_2.color_3, //825

        ...titik_2.k_2, ...titik_2.color_3,
        ...titik_2.e, ...titik_2.color_4,
        ...titik_2.l_2, ...titik_2.color_3, //840

        ...titik_2.l_2, ...titik_2.color_3,
        ...titik_2.f, ...titik_2.color_4,
        ...titik_2.m_2, ...titik_2.color_3, //855

        ...titik_2.m_2, ...titik_2.color_3,
        ...titik_2.g, ...titik_2.color_4,
        ...titik_2.n_2, ...titik_2.color_3, //870

        ...titik_2.n_2, ...titik_2.color_3,
        ...titik_2.h, ...titik_2.color_4,
        ...titik_2.o_2, ...titik_2.color_3, //885

        ...titik_2.o_2, ...titik_2.color_3,
        ...titik_2.i, ...titik_2.color_4,
        ...titik_2.p_2, ...titik_2.color_3, //900

        ...titik_2.p_2, ...titik_2.color_3,
        ...titik_2.j, ...titik_2.color_4,
        ...titik_2.q_2, ...titik_2.color_3, //915

        ...titik_2.q_2, ...titik_2.color_3,
        ...titik_2.k, ...titik_2.color_4,
        ...titik_2.r_2, ...titik_2.color_3, //930

        ...titik_2.r_2, ...titik_2.color_3,
        ...titik_2.l, ...titik_2.color_4,
        ...titik_2.s_2, ...titik_2.color_3, //945

        ...titik_2.s_2, ...titik_2.color_3,
        ...titik_2.m, ...titik_2.color_4,
        ...titik_2.t_2, ...titik_2.color_3, //960

        ...titik_2.t_2, ...titik_2.color_3,
        ...titik_2.n, ...titik_2.color_4,
        ...titik_2.u_2, ...titik_2.color_3, //975

        ...titik_2.u_2, ...titik_2.color_3,
        ...titik_2.o, ...titik_2.color_4,
        ...titik_2.v_2, ...titik_2.color_3, //990

        ...titik_2.v_2, ...titik_2.color_3,
        ...titik_2.p, ...titik_2.color_4,
        ...titik_2.w_2, ...titik_2.color_3, //1005

        ...titik_2.w_2, ...titik_2.color_3,
        ...titik_2.q, ...titik_2.color_4,
        ...titik_2.z_2, ...titik_2.color_3, //1020

        ...titik_2.z_2, ...titik_2.color_3,
        ...titik_2.r, ...titik_2.color_4,
        ...titik_2.a_3, ...titik_2.color_3, //1035

        ...titik_2.a_3, ...titik_2.color_3,
        ...titik_2.s, ...titik_2.color_4,
        ...titik_2.b_3, ...titik_2.color_3, //1050

        ...titik_2.b_3, ...titik_2.color_3,
        ...titik_2.t, ...titik_2.color_4,
        ...titik_2.c_3, ...titik_2.color_3, //1065

        ...titik_2.c_3, ...titik_2.color_3,
        ...titik_2.u, ...titik_2.color_4,
        ...titik_2.d_3, ...titik_2.color_3, //1080

        ...titik_2.d_3, ...titik_2.color_3,
        ...titik_2.v, ...titik_2.color_4,
        ...titik_2.e_3, ...titik_2.color_3, //1095

        ...titik_2.e_3, ...titik_2.color_3,
        ...titik_2.w, ...titik_2.color_4,
        ...titik_2.f_3, ...titik_2.color_3, //1110

        ...titik_2.f_3, ...titik_2.color_3,
        ...titik_2.z, ...titik_2.color_4,
        ...titik_2.g_3, ...titik_2.color_3, //1125

        ...titik_2.g_3, ...titik_2.color_3,
        ...titik_2.a_1, ...titik_2.color_4,
        ...titik_2.h_3, ...titik_2.color_3, //1140

        ...titik_2.h_3, ...titik_2.color_3,
        ...titik_2.b_1, ...titik_2.color_4,
        ...titik_2.i_3, ...titik_2.color_3, //1155

        ...titik_2.i_3, ...titik_2.color_3,
        ...titik_2.c_1, ...titik_2.color_4,
        ...titik_2.j_3, ...titik_2.color_3, //1170

        ...titik_2.j_3, ...titik_2.color_3,
        ...titik_2.d_1, ...titik_2.color_4,
        ...titik_2.k_3, ...titik_2.color_3, //1185

        ...titik_2.k_3, ...titik_2.color_3,
        ...titik_2.e_1, ...titik_2.color_4,
        ...titik_2.l_3, ...titik_2.color_3, //1200

        ...titik_2.l_3, ...titik_2.color_3,
        ...titik_2.f_1, ...titik_2.color_4,
        ...titik_2.m_3, ...titik_2.color_3, //1215

        ...titik_2.m_3, ...titik_2.color_3,
        ...titik_2.g_1, ...titik_2.color_4,
        ...titik_2.n_3, ...titik_2.color_3, //1230

        ...titik_2.n_3, ...titik_2.color_3,
        ...titik_2.h_1, ...titik_2.color_4,
        ...titik_2.o_3, ...titik_2.color_3, //1245

        ...titik_2.o_3, ...titik_2.color_3,
        ...titik_2.i_1, ...titik_2.color_4,
        ...titik_2.p_3, ...titik_2.color_3, //1260

        ...titik_2.p_3, ...titik_2.color_3,
        ...titik_2.j_1, ...titik_2.color_4,
        ...titik_2.q_3, ...titik_2.color_3, //1275

        ...titik_2.q_3, ...titik_2.color_3,
        ...titik_2.k_1, ...titik_2.color_4,
        ...titik_2.r_3, ...titik_2.color_3, //1290

        ...titik_2.r_3, ...titik_2.color_3,
        ...titik_2.l_1, ...titik_2.color_4,
        ...titik_2.s_3, ...titik_2.color_3, //1305

        ...titik_2.s_3, ...titik_2.color_3,
        ...titik_2.m_1, ...titik_2.color_4,
        ...titik_2.t_3, ...titik_2.color_3, //1320

        ...titik_2.t_3, ...titik_2.color_3,
        ...titik_2.n_1, ...titik_2.color_4,
        ...titik_2.u_3, ...titik_2.color_3, //1335

        ...titik_2.u_3, ...titik_2.color_3,
        ...titik_2.o_1, ...titik_2.color_4,
        ...titik_2.v_3, ...titik_2.color_3, //1350

        ...titik_2.v_3, ...titik_2.color_3,
        ...titik_2.p_1, ...titik_2.color_4,
        ...titik_2.w_3, ...titik_2.color_3, //1365

        ...titik_2.w_3, ...titik_2.color_3,
        ...titik_2.q_1, ...titik_2.color_4,
        ...titik_2.z_3, ...titik_2.color_3, //1380

        ...titik_2.z_3, ...titik_2.color_3,
        ...titik_2.r_1, ...titik_2.color_4,
        ...titik_2.a_4, ...titik_2.color_3, //1395

        ...titik_2.a_4, ...titik_2.color_3,
        ...titik_2.s_1, ...titik_2.color_4,
        ...titik_2.b_4, ...titik_2.color_3, //1410

        ...titik_2.b_4, ...titik_2.color_3,
        ...titik_2.t_1, ...titik_2.color_4,
        ...titik_2.c_4, ...titik_2.color_3, //1425

        ...titik_2.c_4, ...titik_2.color_3,
        ...titik_2.u_1, ...titik_2.color_4,
        ...titik_2.d_2, ...titik_2.color_3, //1440

        ...titik_2.v_1, ...titik_2.color_4,
        ...titik_2.e_2, ...titik_2.color_3,
        ...titik_2.w_1, ...titik_2.color_4, //1455

        ...titik_2.w_1, ...titik_2.color_4,
        ...titik_2.f_2, ...titik_2.color_3,
        ...titik_2.z_1, ...titik_2.color_4, //1470

        ...titik_2.z_1, ...titik_2.color_4,
        ...titik_2.g_2, ...titik_2.color_3,
        ...titik_2.a_2, ...titik_2.color_4, //1485

        ...titik_2.a_2, ...titik_2.color_4,
        ...titik_2.h_2, ...titik_2.color_3,
        ...titik_2.b_2, ...titik_2.color_4, //1500

        ...titik_2.b_2, ...titik_2.color_4,
        ...titik_2.i_2, ...titik_2.color_3,
        ...titik_2.c_2, ...titik_2.color_4, //1515

        ...titik_2.c_2, ...titik_2.color_4,
        ...titik_2.j_2, ...titik_2.color_3,
        ...titik_2.d, ...titik_2.color_4, //1530

        ...titik_2.d, ...titik_2.color_4,
        ...titik_2.k_2, ...titik_2.color_3,
        ...titik_2.e, ...titik_2.color_4, //1545

        ...titik_2.e, ...titik_2.color_4,
        ...titik_2.l_2, ...titik_2.color_3,
        ...titik_2.f, ...titik_2.color_4, //1560

        ...titik_2.f, ...titik_2.color_4,
        ...titik_2.m_2, ...titik_2.color_3,
        ...titik_2.g, ...titik_2.color_4, //1575

        ...titik_2.g, ...titik_2.color_4,
        ...titik_2.n_2, ...titik_2.color_3,
        ...titik_2.h, ...titik_2.color_4, //1590

        ...titik_2.h, ...titik_2.color_4,
        ...titik_2.o_2, ...titik_2.color_3,
        ...titik_2.i, ...titik_2.color_4, //1605

        ...titik_2.i, ...titik_2.color_4,
        ...titik_2.p_2, ...titik_2.color_3,
        ...titik_2.j, ...titik_2.color_4, //1620

        ...titik_2.j, ...titik_2.color_4,
        ...titik_2.q_2, ...titik_2.color_3,
        ...titik_2.k, ...titik_2.color_4, //1635

        ...titik_2.k, ...titik_2.color_4,
        ...titik_2.r_2, ...titik_2.color_3,
        ...titik_2.l, ...titik_2.color_4, //1650

        ...titik_2.l, ...titik_2.color_4,
        ...titik_2.s_2, ...titik_2.color_3,
        ...titik_2.m, ...titik_2.color_4, //1665

        ...titik_2.m, ...titik_2.color_4,
        ...titik_2.t_2, ...titik_2.color_3,
        ...titik_2.n, ...titik_2.color_4, //1680

        ...titik_2.n, ...titik_2.color_4,
        ...titik_2.u_2, ...titik_2.color_3,
        ...titik_2.o, ...titik_2.color_4, //1695

        ...titik_2.o, ...titik_2.color_4,
        ...titik_2.v_2, ...titik_2.color_3,
        ...titik_2.p, ...titik_2.color_4, //1710

        ...titik_2.p, ...titik_2.color_4,
        ...titik_2.w_2, ...titik_2.color_3,
        ...titik_2.q, ...titik_2.color_4, //1725

        ...titik_2.q, ...titik_2.color_4,
        ...titik_2.z_2, ...titik_2.color_3,
        ...titik_2.r, ...titik_2.color_4, //1740

        ...titik_2.r, ...titik_2.color_4,
        ...titik_2.a_3, ...titik_2.color_3,
        ...titik_2.s, ...titik_2.color_4, //1755

        ...titik_2.s, ...titik_2.color_4,
        ...titik_2.b_3, ...titik_2.color_3,
        ...titik_2.t, ...titik_2.color_4, //1770

        ...titik_2.t, ...titik_2.color_4,
        ...titik_2.c_3, ...titik_2.color_3,
        ...titik_2.u, ...titik_2.color_4, //1785

        ...titik_2.u, ...titik_2.color_4,
        ...titik_2.d_3, ...titik_2.color_3,
        ...titik_2.v, ...titik_2.color_4, //1800

        ...titik_2.v, ...titik_2.color_4,
        ...titik_2.e_3, ...titik_2.color_3,
        ...titik_2.w, ...titik_2.color_4, //1815

        ...titik_2.w, ...titik_2.color_4,
        ...titik_2.f_3, ...titik_2.color_3,
        ...titik_2.z, ...titik_2.color_4, //1830

        ...titik_2.z, ...titik_2.color_4,
        ...titik_2.g_3, ...titik_2.color_3,
        ...titik_2.a_1, ...titik_2.color_4, //1845

        ...titik_2.a_1, ...titik_2.color_4,
        ...titik_2.h_3, ...titik_2.color_3,
        ...titik_2.b_1, ...titik_2.color_4, //1860

        ...titik_2.b_1, ...titik_2.color_4,
        ...titik_2.i_3, ...titik_2.color_3,
        ...titik_2.c_1, ...titik_2.color_4, //1875

        ...titik_2.c_1, ...titik_2.color_4,
        ...titik_2.j_3, ...titik_2.color_3,
        ...titik_2.d_1, ...titik_2.color_4, //1890

        ...titik_2.d_1, ...titik_2.color_4,
        ...titik_2.k_3, ...titik_2.color_3,
        ...titik_2.e_1, ...titik_2.color_4, //1905

        ...titik_2.e_1, ...titik_2.color_4,
        ...titik_2.l_3, ...titik_2.color_3,
        ...titik_2.f_1, ...titik_2.color_4, //1920

        ...titik_2.f_1, ...titik_2.color_4,
        ...titik_2.m_3, ...titik_2.color_3,
        ...titik_2.g_1, ...titik_2.color_4, //1935

        ...titik_2.g_1, ...titik_2.color_4,
        ...titik_2.n_3, ...titik_2.color_3,
        ...titik_2.h_1, ...titik_2.color_4, //1950

        ...titik_2.h_1, ...titik_2.color_4,
        ...titik_2.o_3, ...titik_2.color_3,
        ...titik_2.i_1, ...titik_2.color_4, //1965

        ...titik_2.i_1, ...titik_2.color_4,
        ...titik_2.p_3, ...titik_2.color_3,
        ...titik_2.j_1, ...titik_2.color_4, //1980

        ...titik_2.j_1, ...titik_2.color_4,
        ...titik_2.q_3, ...titik_2.color_3,
        ...titik_2.k_1, ...titik_2.color_4, //1995

        ...titik_2.k_1, ...titik_2.color_4,
        ...titik_2.r_3, ...titik_2.color_3,
        ...titik_2.l_1, ...titik_2.color_4, //2010

        ...titik_2.l_1, ...titik_2.color_4,
        ...titik_2.s_3, ...titik_2.color_3,
        ...titik_2.m_1, ...titik_2.color_4, //2025

        ...titik_2.m_1, ...titik_2.color_4,
        ...titik_2.t_3, ...titik_2.color_3,
        ...titik_2.n_1, ...titik_2.color_4, //2040

        ...titik_2.n_1, ...titik_2.color_4,
        ...titik_2.u_3, ...titik_2.color_3,
        ...titik_2.o_1, ...titik_2.color_4, //2055

        ...titik_2.o_1, ...titik_2.color_4,
        ...titik_2.v_3, ...titik_2.color_3,
        ...titik_2.p_1, ...titik_2.color_4, //2070

        ...titik_2.p_1, ...titik_2.color_4,
        ...titik_2.w_3, ...titik_2.color_3,
        ...titik_2.q_1, ...titik_2.color_4, //2085

        ...titik_2.q_1, ...titik_2.color_4,
        ...titik_2.z_3, ...titik_2.color_3,
        ...titik_2.r_1, ...titik_2.color_4, //2100

        ...titik_2.r_1, ...titik_2.color_4,
        ...titik_2.a_4, ...titik_2.color_3,
        ...titik_2.s_1, ...titik_2.color_4, //2115

        ...titik_2.s_1, ...titik_2.color_4,
        ...titik_2.b_4, ...titik_2.color_3,
        ...titik_2.t_1, ...titik_2.color_4, //2145

        ...titik_2.t_1, ...titik_2.color_4,
        ...titik_2.c_4, ...titik_2.color_3,
        ...titik_2.u_1, ...titik_2.color_4, //2160

        ...titik_2.u_1, ...titik_2.color_4,
        ...titik_2.d_2, ...titik_2.color_3,
        ...titik_2.v_1, ...titik_1.color_4 //2175
    ];

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

        if (vertices[4131] < -1.0 || vertices[3711] > 1.0) {
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
