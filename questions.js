// questions.js - Ngân hàng đề thi giữa kỳ hoàn chỉnh 15 mã học phần Bách Khoa (15 câu/mã)
const EXAM_BANK = {
    // ========================================================
    // 1. ĐẠI SỐ - MI1141 (Nhóm ngành 1: Nặng lý thuyết & cấu trúc)
    // ========================================================
    'MI1141': [
        {
            q: '1. Cho ma trận vuông $A \\in \\mathcal{M}_3(\\mathbb{R})$ có $\\det(A) = 3$. Giá trị của $\\det(2A \\cdot A^T)$ bằng:',
            options: ['$24$', '$72$', '$144$', '$216$'],
            correct: 1,
            explain: '$\\det(2A \\cdot A^T) = \\det(2A) \\cdot \\det(A^T) = 2^3 \\cdot \\det(A)^2 = 8 \\cdot 9 = 72$.'
        },
        {
            q: '2. Cho hai véctơ $\\vec{u} = (3, 1)$ và $\\vec{v} = (1, 3)$ trên mặt phẳng $Oxy$ như hình vẽ bên dưới. Diện tích hình bình hành sinh bởi $\\vec{u}$ và $\\vec{v}$ bằng:',
            svg: '<svg class="w-56 h-36 mx-auto bg-slate-950 rounded-xl p-2 border border-slate-800" viewBox="-10 -10 140 90"><line x1="0" y1="70" x2="120" y2="70" stroke="#475569" stroke-width="1.5"/><line x1="10" y1="80" x2="10" y2="5" stroke="#475569" stroke-width="1.5"/><text x="115" y="65" fill="#94a3b8" font-size="8">x</text><text x="15" y="10" fill="#94a3b8" font-size="8">y</text><line x1="10" y1="70" x2="70" y2="50" stroke="#06b6d4" stroke-width="2.5"/><text x="72" y="48" fill="#06b6d4" font-size="8" font-weight="bold">u(3,1)</text><line x1="10" y1="70" x2="30" y2="10" stroke="#10b981" stroke-width="2.5"/><text x="32" y="12" fill="#10b981" font-size="8" font-weight="bold">v(1,3)</text><polygon points="10,70 70,50 90,-10 30,10" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" stroke-dasharray="2,2"/></svg>',
            options: ['$6$', '$8$', '$10$', '$4$'],
            correct: 1,
            explain: 'Diện tích $S = |\\det([\\vec{u}, \\vec{v}])| = |3 \\cdot 3 - 1 \\cdot 1| = 8$.'
        },
        {
            q: '3. Cho hệ phương trình thuần nhất $AX = 0$ với ma trận $A$ kích thước $4 \\times 6$ và hạng $\\text{rank}(A) = 3$. Số chiều của không gian nghiệm $\\dim(\\text{Ker}(A))$ bằng:',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correct: 2,
            explain: '$\\dim(\\text{Ker}(A)) = n - \\text{rank}(A) = 6 - 3 = 3$.'
        },
        {
            q: '4. Dạng toàn phương $\\omega(x) = x_1^2 + 2x_2^2 + 4x_3^2 - 2x_1x_2$ có ma trận liên kết $A$ là:',
            options: [
                '$\\begin{bmatrix} 1 & -1 & 0 \\\\ -1 & 2 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}$',
                '$\\begin{bmatrix} 1 & -2 & 0 \\\\ -2 & 2 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}$',
                '$\\begin{bmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}$',
                '$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{bmatrix}$'
            ],
            correct: 0,
            explain: 'Hệ số bình phương nằm trên đường chéo, hệ số $x_1x_2$ chia đôi: $a_{12}=a_{21}=-1$.'
        },
        {
            q: '5. Cho ma trận vuông $A$ cấp $n$ trực giao ($A^T A = I$). Khẳng định nào sau đây là SAI?',
            options: ['$A^T = A^{-1}$', '$\\det(A) = 1$ hoặc $-1$', 'Các véctơ cột của $A$ trực chuẩn', '$\\det(A)$ có thể bằng $2$'],
            correct: 3,
            explain: '$\\det(A^T A) = \\det(A)^2 = 1 \\implies \\det(A) = \\pm 1$, không thể bằng 2.'
        },
        {
            q: '6. Cho ma trận $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$. Vết $\\text{tr}(A)$ và định thức $\\det(A)$ lần lượt là:',
            options: ['$\\text{tr}=5, \\det=-2$', '$\\text{tr}=5, \\det=2$', '$\\text{tr}=4, \\det=-2$', '$\\text{tr}=5, \\det=10$'],
            correct: 0,
            explain: '$\\text{tr}(A) = 1 + 4 = 5$, $\\det(A) = 1 \\cdot 4 - 2 \\cdot 3 = -2$.'
        },
        {
            q: '7. Điều kiện cần và đủ để ma trận vuông $A$ cấp $n$ chéo hóa được là:',
            options: ['$\\det(A) \\neq 0$', '$A$ có đủ $n$ véctơ riêng độc lập tuyến tính', '$A$ đối xứng', '$\\text{tr}(A) = 0$'],
            correct: 1,
            explain: '$A$ chéo hóa được khi và chỉ khi không gian $\\mathbb{R}^n$ có một cơ sở gồm các véctơ riêng của $A$.'
        },
        {
            q: '8. Chuẩn Euclid của véctơ $x = (2, -1, 2) \\in \\mathbb{R}^3$ là:',
            options: ['$3$', '$5$', '$9$', '$\\sqrt{5}$'],
            correct: 0,
            explain: '$\\|x\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$.'
        },
        {
            q: '9. Cho ánh xạ tuyến tính $f: V \\to W$. Nếu $\\text{Ker}(f) = \\{\\vec{0}\\}$ thì khẳng định nào luôn ĐÚNG?',
            options: ['$f$ là đơn ánh', '$f$ là toàn ánh', '$f$ là song ánh', '$\\dim(V) > \\dim(W)$'],
            correct: 0,
            explain: 'Hạt nhân chỉ chứa véctơ không tương đương với việc $f$ là đơn ánh.'
        },
        {
            q: '10. Nếu ma trận $A$ lũy linh (tồn tại $k$ sao cho $A^k = 0$) thì mọi giá trị riêng $\\lambda$ của $A$ bằng:',
            options: ['$0$', '$1$', '$-1$', 'Không xác định'],
            correct: 0,
            explain: '$AX = \\lambda X \\implies A^k X = \\lambda^k X = 0 \\implies \\lambda = 0$.'
        },
        {
            q: '11. Ma trận phụ hợp $A^*$ của ma trận vuông $A$ thỏa mãn công thức nào dưới đây?',
            options: ['$A \\cdot A^* = \\det(A) \\cdot I$', '$A \\cdot A^* = I$', '$A^* = A^{-1}$', '$A^* = \\det(A) \\cdot A$'],
            correct: 0,
            explain: 'Theo định lý mở rộng phần bù đại số: $A \\cdot A^* = A^* \\cdot A = \\det(A) \\cdot I$.'
        },
        {
            q: '12. Ma trận vuông $A$ cấp 3 có các giá trị riêng là $1, 2, -3$. Định thức $\\det(A)$ bằng:',
            options: ['$-6$', '$0$', '$6$', '$-5$'],
            correct: 0,
            explain: 'Định thức ma trận bằng tích các giá trị riêng: $1 \\cdot 2 \\cdot (-3) = -6$.'
        },
        {
            q: '13. Phép biến đổi sơ cấp nào sau đây làm ĐỔI DẤU định thức của ma trận?',
            options: ['Đổi chỗ hai hàng cho nhau', 'Cộng vào một hàng bội hàng khác', 'Nhân một hàng với $k > 0$', 'Chuyển vị ma trận'],
            correct: 0,
            explain: 'Đổi chỗ hai hàng hoặc hai cột bất kỳ làm định thức đổi dấu.'
        },
        {
            q: '14. Cho hệ véctơ $S = \\{u_1, u_2, u_3\\}$ trong $\\mathbb{R}^3$. Nếu $\\det([u_1, u_2, u_3]) = 0$ thì hệ $S$:',
            options: ['Phụ thuộc tuyến tính', 'Độc lập tuyến tính', 'Là một cơ sở của $\\mathbb{R}^3$', 'Có hạng bằng 3'],
            correct: 0,
            explain: 'Định thức bằng 0 suy ra hạng ma trận bé hơn 3, do đó hệ phụ thuộc tuyến tính.'
        },
        {
            q: '15. Hệ phương trình tuyến tính $AX = B$ với $A$ vuông cấp $n$ có nghiệm duy nhất khi và chỉ khi:',
            options: ['$\\det(A) \\neq 0$', '$\\det(A) = 0$', '$\\text{rank}(A) < n$', '$B = 0$'],
            correct: 0,
            explain: 'Hệ Cramer có nghiệm duy nhất khi định thức ma trận hệ số khác không.'
        }
    ],

    // ========================================================
    // 2. ĐẠI SỐ - MI1142 (Nhóm ngành 2: Tính toán ma trận & Hệ PT)
    // ========================================================
    'MI1142': [
        {
            q: '1. Tính định thức cấp 2: $\\det \\begin{bmatrix} 3 & -2 \\\\ 5 & 4 \\end{bmatrix}$:',
            options: ['$22$', '$2$', '$-2$', '$14$'],
            correct: 0,
            explain: '$\\det = 3 \\cdot 4 - (-2) \\cdot 5 = 12 + 10 = 22$.'
        },
        {
            q: '2. Cho $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$. Ma trận chuyển vị $A^T$ là:',
            options: ['$\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 3 \\\\ 2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} -1 & -2 \\\\ -3 & -4 \\end{bmatrix}$'],
            correct: 0,
            explain: 'Đổi hàng thành cột: hàng 1 thành cột 1, hàng 2 thành cột 2.'
        },
        {
            q: '3. Tìm tham số $m$ để hệ phương trình $\\begin{cases} x + y = 1 \\\\ 2x + 2y = m \\end{cases}$ có nghiệm:',
            options: ['$m = 2$', '$m \\neq 2$', '$m = 1$', 'Mọi $m$'],
            correct: 0,
            explain: 'Nhân đôi phương trình đầu được $2x + 2y = 2$, vậy hệ có nghiệm khi $m = 2$.'
        },
        {
            q: '4. Vết của ma trận $B = \\begin{bmatrix} 2 & 1 & 0 \\\\ 0 & -3 & 5 \\\\ 1 & 1 & 4 \\end{bmatrix}$ là:',
            options: ['$3$', '$6$', '$2$', '$-1$'],
            correct: 0,
            explain: '$\\text{tr}(B) = 2 + (-3) + 4 = 3$.'
        },
        {
            q: '5. Cho $A$ cấp $2 \\times 3$ và $B$ cấp $3 \\times 4$. Ma trận tích $AB$ có kích thước:',
            options: ['$2 \\times 4$', '$3 \\times 3$', '$4 \\times 2$', 'Không xác định'],
            correct: 0,
            explain: 'Kích thước $(2 \\times 3) \\times (3 \\times 4) = 2 \\times 4$.'
        },
        {
            q: '6. Điều kiện để ma trận vuông $A$ có nghịch đảo $A^{-1}$ là:',
            options: ['$\\det(A) \\neq 0$', '$\\det(A) = 0$', '$A$ là ma trận đường chéo', 'Số hàng lớn hơn số cột'],
            correct: 0,
            explain: 'Ma trận vuông khả nghịch khi và chỉ khi định thức của nó khác không.'
        },
        {
            q: '7. Nghiệm của phương trình ma trận $AX = B$ với $\\det(A) \\neq 0$ là:',
            options: ['$X = A^{-1} B$', '$X = B A^{-1}$', '$X = B / A$', '$X = A B^{-1}$'],
            correct: 0,
            explain: 'Nhân $A^{-1}$ vào bên trái hai vế: $A^{-1}AX = A^{-1}B \\implies X = A^{-1}B$.'
        },
        {
            q: '8. Hạng của ma trận $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ bằng:',
            options: ['$1$', '$2$', '$0$', 'Không xác định'],
            correct: 0,
            explain: 'Hàng 2 tỉ lệ với hàng 1 ($H_2 = 2H_1$) nên hạng chỉ bằng 1.'
        },
        {
            q: '9. Véctơ nào sau đây là tổ hợp tuyến tính của $\\vec{u} = (1, 0)$ và $\\vec{v} = (0, 1)$?',
            options: ['Mọi véctơ $(x, y) \\in \\mathbb{R}^2$', 'Chỉ véctơ $(0, 0)$', 'Chỉ véctơ $(1, 1)$', 'Không có véctơ nào'],
            correct: 0,
            explain: 'Hệ $\\{\\vec{u}, \\vec{v}\\}$ là cơ sở chính tắc của $\\mathbb{R}^2$ nên biểu diễn được mọi véctơ.'
        },
        {
            q: '10. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$ với $\\vec{u} = (1, 3)$ và $\\vec{v} = (-2, 4)$:',
            options: ['$10$', '$-10$', '$14$', '$6$'],
            correct: 0,
            explain: '$\\vec{u} \\cdot \\vec{v} = 1(-2) + 3(4) = -2 + 12 = 10$.'
        },
        {
            q: '11. Ma trận nghịch đảo của ma trận $\\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$ là:',
            options: ['$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1/2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -2 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 2 & 0 \\end{bmatrix}$'],
            correct: 0,
            explain: 'Ma trận đường chéo nghịch đảo bằng nghịch đảo các phần tử đường chéo.'
        },
        {
            q: '12. Cho $A$ là ma trận vuông cấp 2 có $\\det(A) = 5$. Giá trị của $\\det(3A)$ là:',
            options: ['$45$', '$15$', '$25$', '$30$'],
            correct: 0,
            explain: '$\\det(3A) = 3^2 \\cdot \\det(A) = 9 \\cdot 5 = 45$.'
        },
        {
            q: '13. Đổi chỗ 2 cột của ma trận thì định thức của nó:',
            options: ['Đổi dấu', 'Không đổi', 'Bằng 0', 'Nhân 2'],
            correct: 0,
            explain: 'Đổi chỗ hai dòng hoặc hai cột làm định thức đổi dấu.'
        },
        {
            q: '14. Định thức của ma trận tam giác trên bằng:',
            options: ['Tích các phần tử trên đường chéo chính', 'Tổng các phần tử chéo', 'Bằng 0', 'Bằng 1'],
            correct: 0,
            explain: 'Định thức ma trận tam giác bằng tích các phần tử đường chéo chính.'
        },
        {
            q: '15. Đa thức đặc trưng của ma trận $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$ là:',
            options: ['$(\\lambda - 2)(\\lambda - 3)$', '$(\\lambda + 2)(\\lambda + 3)$', '$\\lambda^2 - 5$', '$\\lambda^2 - 6$'],
            correct: 0,
            explain: '$\\det(A - \\lambda I) = (2 - \\lambda)(3 - \\lambda) = (\\lambda - 2)(\\lambda - 3)$.'
        }
    ],

    // ========================================================
    // 3. ĐẠI SỐ - MI1143 (Nhóm ngành 3: Ứng dụng & Kinh tế)
    // ========================================================
    'MI1143': [
        {
            q: '1. Trong mô hình Input - Output của Leontief $X = AX + D$, ma trận $A$ được gọi là:',
            options: ['Ma trận hệ số kỹ thuật', 'Ma trận cầu cuối', 'Ma trận tổng sản lượng', 'Ma trận nghịch đảo'],
            correct: 0,
            explain: '$A$ phản ánh lượng chi phí đầu vào cần thiết cho mỗi đơn vị sản lượng.'
        },
        {
            q: '2. Cho ma trận chi phí $A = \\begin{bmatrix} 0.2 & 0.3 \\\\ 0.4 & 0.1 \\end{bmatrix}$. Ma trận $(I - A)$ bằng:',
            options: ['$\\begin{bmatrix} 0.8 & -0.3 \\\\ -0.4 & 0.9 \\end{bmatrix}$', '$\\begin{bmatrix} 0.8 & 0.3 \\\\ 0.4 & 0.9 \\end{bmatrix}$', '$\\begin{bmatrix} 1.2 & 0.3 \\\\ 0.4 & 1.1 \\end{bmatrix}$', '$\\begin{bmatrix} -0.2 & -0.3 \\\\ -0.4 & -0.1 \\end{bmatrix}$'],
            correct: 0,
            explain: '$I - A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} - \\begin{bmatrix} 0.2 & 0.3 \\\\ 0.4 & 0.1 \\end{bmatrix} = \\begin{bmatrix} 0.8 & -0.3 \\\\ -0.4 & 0.9 \\end{bmatrix}$.'
        },
        {
            q: '3. Định thức của ma trận $M = \\begin{bmatrix} 100 & 200 \\\\ 300 & 400 \\end{bmatrix}$ bằng:',
            options: ['$-20000$', '$20000$', '$-200$', '$0$'],
            correct: 0,
            explain: '$\\det(M) = 100(400) - 200(300) = 40000 - 60000 = -20000$.'
        },
        {
            q: '4. Hệ phương trình tuyến tính $AX = B$ có ma trận hệ số $A$ khả nghịch thì tổng sản lượng $X$ tính bằng:',
            options: ['$X = A^{-1} B$', '$X = B A^{-1}$', '$X = A B$', '$X = A - B$'],
            correct: 0,
            explain: 'Nhân ma trận nghịch đảo vào vế trái: $X = A^{-1}B$.'
        },
        {
            q: '5. Doanh thu của 2 mặt hàng có véctơ giá $P = (20, 30)$ và sản lượng $Q = (50, 40)$ được tính bằng tích vô hướng $P \\cdot Q$ là:',
            options: ['$2200$', '$2000$', '$1800$', '$2500$'],
            correct: 0,
            explain: '$20(50) + 30(40) = 1000 + 1200 = 2200$.'
        },
        {
            q: '6. Điều kiện để mô hình Leontief có nghiệm sản lượng không âm $X \\ge 0$ với mọi cầu $D \\ge 0$ là:',
            options: ['Ma trận $(I - A)$ khả nghịch và $(I - A)^{-1} \\ge 0$', '$\\det(A) = 0$', '$A$ là ma trận đối xứng', 'Tổng các cột của $A$ lớn hơn 1'],
            correct: 0,
            explain: 'Đây là điều kiện chuẩn của ma trận khả sinh (productive matrix).'
        },
        {
            q: '7. Cho ma trận sản lượng $A$ cấp $3 \\times 3$. Nếu nhân tất cả các phần tử của $A$ với $2$ thì định thức tăng gấp:',
            options: ['$8$ lần', '$2$ lần', '$4$ lần', '$6$ lần'],
            correct: 0,
            explain: 'Với cấp $n = 3$: $\\det(2A) = 2^3 \\det(A) = 8 \\det(A)$.'
        },
        {
            q: '8. Giá trị riêng của ma trận $\\begin{bmatrix} 5 & 0 \\\\ 0 & 2 \\end{bmatrix}$ là:',
            options: ['$\\lambda_1 = 5, \\lambda_2 = 2$', '$\\lambda = 7$', '$\\lambda = 10$', '$\\lambda_1 = -5, \\lambda_2 = -2$'],
            correct: 0,
            explain: 'Giá trị riêng của ma trận đường chéo chính là các phần tử trên đường chéo.'
        },
        {
            q: '9. Nếu một ngành kinh tế không tiêu thụ sản phẩm của chính nó thì phần tử tương ứng trên đường chéo chính của ma trận chi phí kỹ thuật $a_{ii}$ bằng:',
            options: ['$0$', '$1$', '$-1$', 'Không xác định'],
            correct: 0,
            explain: '$a_{ii}$ là chi phí sản phẩm ngành $i$ dùng cho ngành $i$. Nếu không tiêu thụ thì $a_{ii} = 0$.'
        },
        {
            q: '10. Cho hệ phương trình kinh tế có 3 ẩn và hạng của ma trận hệ số $r(A) = 3$. Hệ này có:',
            options: ['Duy nhất 1 nghiệm', 'Vô số nghiệm', 'Vô nghiệm', 'Tùy thuộc vào véctơ cầu'],
            correct: 0,
            explain: 'Hạng bằng số ẩn nên hệ có nghiệm duy nhất.'
        },
        {
            q: '11. Ma trận nào sau đây là ma trận không (zero matrix)?',
            options: ['$\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$'],
            correct: 0,
            explain: 'Ma trận không là ma trận có tất cả các phần tử đều bằng 0.'
        },
        {
            q: '12. Chuẩn độ dài của véctơ giỏ hàng $X = (3, 4)$ là:',
            options: ['$5$', '$7$', '$25$', '$1$'],
            correct: 0,
            explain: '$\\|X\\| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.'
        },
        {
            q: '13. Vết của ma trận hệ số $\\begin{bmatrix} 10 & 2 \\\\ 3 & 15 \\end{bmatrix}$ là:',
            options: ['$25$', '$150$', '$144$', '$5$'],
            correct: 0,
            explain: '$\\text{tr} = 10 + 15 = 25$.'
        },
        {
            q: '14. Nếu $\\det(I - A) = 0$ thì phương trình Leontief $(I - A)X = D$ có nghiệm duy nhất không?',
            options: ['Không, hệ không có nghiệm duy nhất', 'Có, luôn có nghiệm', 'Nghiệm bằng 0', 'Tùy thuộc vào $D$'],
            correct: 0,
            explain: 'Định thức bằng 0 thì ma trận không khả nghịch, do đó không có nghiệm duy nhất.'
        },
        {
            q: '15. Hệ hai véctơ giá $P_1 = (1, 2)$ và $P_2 = (3, 6)$ là hệ:',
            options: ['Phụ thuộc tuyến tính', 'Độc lập tuyến tính', 'Cơ sở', 'Trực giao'],
            correct: 0,
            explain: '$P_2 = 3P_1$, hai véctơ cùng phương nên phụ thuộc tuyến tính.'
        }
    ],

    // ========================================================
    // 4. ĐẠI SỐ CTTT - MI1036 (Advanced Program: English 100%)
    // ========================================================
    'MI1036': [
        {
            q: '1. Let $A \\in \\mathcal{M}_3(\\mathbb{R})$ be a square matrix with $\\det(A) = 4$. What is $\\det(2A)$?',
            options: ['$32$', '$16$', '$8$', '$64$'],
            correct: 0,
            explain: 'Using property $\\det(kA) = k^n \\det(A)$ with $n = 3$: $\\det(2A) = 2^3 \\cdot 4 = 32$.'
        },
        {
            q: '2. Which condition guarantees that a square matrix $A$ of order $n$ is diagonalizable?',
            options: [
                '$A$ has $n$ linearly independent eigenvectors',
                '$\\det(A) \\neq 0$',
                '$\\text{tr}(A) = 0$',
                '$A$ is upper triangular'
            ],
            correct: 0,
            explain: 'A matrix of order $n$ is diagonalizable if and only if it has $n$ linearly independent eigenvectors.'
        },
        {
            q: '3. What is the dimension of the null space $\\dim(\\text{Null}(A))$ of a $3 \\times 5$ matrix with $\\text{rank}(A) = 2$?',
            options: ['$3$', '$2$', '$1$', '$5$'],
            correct: 0,
            explain: 'By the Rank-Nullity Theorem: $\\text{nullity} = n - \\text{rank} = 5 - 2 = 3$.'
        },
        {
            q: '4. If matrix $A$ is orthogonal ($A^T A = I$), then its determinant $\\det(A)$ must be:',
            options: ['$1$ or $-1$', '$0$', 'Any positive number', 'Undefined'],
            correct: 0,
            explain: '$\\det(A^T A) = (\\det A)^2 = 1 \\implies \\det(A) = \\pm 1$.'
        },
        {
            q: '5. The Euclidean distance between $u = (1, 2)$ and $v = (4, 6)$ in $\\mathbb{R}^2$ is:',
            options: ['$5$', '$\\sqrt{7}$', '$25$', '$7$'],
            correct: 0,
            explain: '$d(u, v) = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$.'
        },
        {
            q: '6. The characteristic polynomial of $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 5 \\end{bmatrix}$ is:',
            options: ['$(\\lambda - 2)(\\lambda - 5)$', '$\\lambda^2 - 7$', '$(\\lambda + 2)(\\lambda + 5)$', '$\\lambda^2 - 10$'],
            correct: 0,
            explain: '$\\det(A - \\lambda I) = (2 - \\lambda)(5 - \\lambda) = (\\lambda - 2)(\\lambda - 5)$.'
        },
        {
            q: '7. The trace of matrix $M = \\begin{bmatrix} 3 & 1 & 4 \\\\ 0 & -2 & 5 \\\\ 2 & 1 & 7 \\end{bmatrix}$ is:',
            options: ['$8$', '$12$', '$10$', '$6$'],
            correct: 0,
            explain: 'The trace is the sum of main diagonal entries: $3 + (-2) + 7 = 8$.'
        },
        {
            q: '8. If $\\lambda$ is an eigenvalue of $A$, then an eigenvalue of $A^2$ is:',
            options: ['$\\lambda^2$', '$2\\lambda$', '$\\lambda$', '$\\sqrt{\\lambda}$'],
            correct: 0,
            explain: '$AX = \\lambda X \\implies A^2 X = A(AX) = A(\\lambda X) = \\lambda(AX) = \\lambda^2 X$.'
        },
        {
            q: '9. If a square matrix $A$ is invertible, then $\\det(A^{-1})$ equals:',
            options: ['$\\frac{1}{\\det(A)}$', '$\\det(A)$', '$-\\det(A)$', '$1$'],
            correct: 0,
            explain: '$\\det(A \\cdot A^{-1}) = \\det(I) = 1 \\implies \\det(A^{-1}) = \\frac{1}{\\det(A)}$.'
        },
        {
            q: '10. The dot product of vectors $u = (1, 0, 3)$ and $v = (-2, 4, 1)$ in $\\mathbb{R}^3$ is:',
            options: ['$1$', '$-2$', '$3$', '$5$'],
            correct: 0,
            explain: '$u \\cdot v = 1(-2) + 0(4) + 3(1) = -2 + 3 = 1$.'
        },
        {
            q: '11. A set of vectors containing the zero vector is always:',
            options: ['Linearly dependent', 'Linearly independent', 'A basis', 'Orthogonal'],
            correct: 0,
            explain: 'Any set containing the zero vector is linearly dependent because $c \\cdot \\vec{0} = \\vec{0}$ with $c \\neq 0$.'
        },
        {
            q: '12. If $A$ is a $4 \\times 4$ matrix and $\\text{rank}(A) = 4$, then the system $AX = B$ has:',
            options: ['A unique solution', 'Infinitely many solutions', 'No solution', 'Trivial solution only'],
            correct: 0,
            explain: 'Full rank for a square matrix implies invertibility, hence a unique solution.'
        },
        {
            q: '13. Two matrices $A$ and $B$ are similar if there exists an invertible matrix $P$ such that:',
            options: ['$B = P^{-1} A P$', '$B = P A P$', '$B = A P$', '$B = P A$'],
            correct: 0,
            explain: 'By definition of matrix similarity: $B = P^{-1} A P$.'
        },
        {
            q: '14. The determinant of an upper triangular matrix equals:',
            options: [
                'The product of its diagonal elements',
                'The sum of its diagonal elements',
                'Zero',
                'The trace of the matrix'
            ],
            correct: 0,
            explain: 'The determinant of any triangular matrix is the product of its diagonal entries.'
        },
        {
            q: '15. Which of the following transformations $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ is linear?',
            options: ['$T(x, y) = (2x, 3y)$', '$T(x, y) = (x + 1, y)$', '$T(x, y) = (xy, 0)$', '$T(x, y) = (x^2, y)$'],
            correct: 0,
            explain: '$T(x, y) = (2x, 3y)$ satisfies both additivity and homogeneity: $T(cu + v) = cT(u) + T(v)$.'
        }
    ],

    // ========================================================
    // 5. GIẢI TÍCH I - MI1111 (Nhóm ngành 1: VCB, Chuỗi & Tích phân suy rộng)
    // ========================================================
    'MI1111': [
        {
            q: '1. Tính giới hạn: $L = \\lim_{x \\to 0} \\frac{\\sin(4x)}{\\ln(1 + 2x)}$:',
            options: ['$2$', '$4$', '$1$', '$0$'],
            correct: 0,
            explain: 'Áp dụng VCB tương đương: $\\sin(4x) \\sim 4x$ và $\\ln(1 + 2x) \\sim 2x \\implies L = 4/2 = 2$.'
        },
        {
            q: '2. Cho miền phẳng giới hạn bởi parabol $y = x^2$, trục hoành $Ox$ và đường thẳng $x = 2$ như hình minh họa. Diện tích $S$ của phần gạch sọc bằng:',
            svg: '<svg class="w-56 h-36 mx-auto bg-slate-950 rounded-xl p-2 border border-slate-800" viewBox="-10 -10 140 90"><line x1="0" y1="70" x2="120" y2="70" stroke="#475569" stroke-width="1.5"/><line x1="10" y1="80" x2="10" y2="5" stroke="#475569" stroke-width="1.5"/><path d="M 10 70 Q 50 68 90 10" fill="none" stroke="#06b6d4" stroke-width="2"/><path d="M 10 70 Q 50 68 90 10 L 90 70 Z" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" stroke-dasharray="2,2"/><line x1="90" y1="70" x2="90" y2="10" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3"/><text x="88" y="80" fill="#f59e0b" font-size="8">x=2</text><text x="45" y="30" fill="#06b6d4" font-size="8">y = x²</text></svg>',
            options: ['$\\frac{8}{3}$', '$\\frac{4}{3}$', '$\\frac{16}{3}$', '$4$'],
            correct: 0,
            explain: 'Diện tích $S = \\int_0^2 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{8}{3}$.'
        },
        {
            q: '3. Tích phân suy rộng $I = \\int_1^{+\\infty} \\frac{1}{x^3} dx$ có giá trị bằng:',
            options: ['$\\frac{1}{2}$', '$1$', '$\\frac{1}{3}$', 'Phân kỳ'],
            correct: 0,
            explain: '$I = \\left[ -\\frac{1}{2x^2} \\right]_1^{+\\infty} = 0 - (-1/2) = 1/2$.'
        },
        {
            q: '4. Chuỗi số $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ hội tụ khi và chỉ khi:',
            options: ['$p > 1$', '$p \\ge 1$', '$p < 1$', 'Mọi $p$'],
            correct: 0,
            explain: 'Tiêu chuẩn chuỗi Riemann hội tụ khi và chỉ khi $p > 1$.'
        },
        {
            q: '5. Khai triển Maclaurin của $f(x) = \\cos(x)$ đến lũy thừa bậc 2 là:',
            options: ['$1 - \\frac{x^2}{2} + o(x^2)$', '$1 - x + \\frac{x^2}{2} + o(x^2)$', '$1 + \\frac{x^2}{2}$', '$x - \\frac{x^2}{2}$'],
            correct: 0,
            explain: '$\\cos(x) = 1 - \\frac{x^2}{2!} + o(x^2)$.'
        },
        {
            q: '6. Họ nguyên hàm của hàm số $f(x) = x \\cdot e^{x}$ là:',
            options: ['$e^x(x - 1) + C$', '$e^x(x + 1) + C$', '$x e^x + C$', '$\\frac{x^2}{2} e^x + C$'],
            correct: 0,
            explain: 'Tích phân từng phần: $\\int x e^x dx = x e^x - \\int e^x dx = e^x(x - 1) + C$.'
        },
        {
            q: '7. Tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 1}{x + 1}$ khi $x \\to +\\infty$ là:',
            options: ['$y = x + 1$', '$y = x + 2$', '$y = x$', '$y = 2x + 1$'],
            correct: 0,
            explain: 'Chia đa thức: $y = (x + 1) - \\frac{2}{x + 1} \\implies y = x + 1$.'
        },
        {
            q: '8. Bán kính hội tụ $R$ của chuỗi lũy thừa $\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 2^n}$ bằng:',
            options: ['$2$', '$1$', '$\\frac{1}{2}$', '$+\\infty$'],
            correct: 0,
            explain: '$R = \\lim_{n \\to \\infty} \\frac{(n+1)2^{n+1}}{n 2^n} = 2$.'
        },
        {
            q: '9. Giới hạn $L = \\lim_{x \\to 0} (1 + 3x)^{1/x}$ bằng:',
            options: ['$e^3$', '$e$', '$1$', '$e^{1/3}$'],
            correct: 0,
            explain: '$L = e^{\\lim_{x \\to 0} \\frac{3x}{x}} = e^3$.'
        },
        {
            q: '10. Điểm cực đại của hàm số $y = -x^3 + 3x + 2$ là:',
            options: ['$x = 1$', '$x = -1$', '$x = 0$', '$x = 3$'],
            correct: 0,
            explain: '$y\' = -3x^2 + 3 = 0 \\iff x = \\pm 1$; $y\'\'(1) = -6 < 0$ nên đạt cực đại tại $x = 1$.'
        },
        {
            q: '11. Tích phân $\\int_{-1}^1 \\frac{x^5}{\\sqrt{1 + x^4}} dx$ có giá trị bằng:',
            options: ['$0$', '$1$', '$\\pi$', '$\\frac{1}{2}$'],
            correct: 0,
            explain: 'Hàm số dưới dấu tích phân là hàm lẻ, cận đối xứng $[-1, 1]$ nên tích phân bằng 0.'
        },
        {
            q: '12. Khẳng định nào sau đây về tính liên tục của hàm số $f(x) = |x|$ tại $x = 0$ là ĐÚNG?',
            options: ['Liên tục nhưng không khả vi tại $x = 0$', 'Khả vi tại $x = 0$', 'Gián đoạn loại 1', 'Gián đoạn loại 2'],
            correct: 0,
            explain: 'Đạo hàm trái và phải khác nhau ($-1$ và $1$) nên hàm không khả vi tại $0$.'
        },
        {
            q: '13. Độ dài cung tròn $x^2 + y^2 = 4$ nằm trong góc phần tư thứ nhất bằng:',
            options: ['$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$4\\pi$'],
            correct: 0,
            explain: 'Bán kính $R = 2$, chu vi bằng $2\\pi R = 4\\pi \\implies$ 1/4 đường tròn bằng $\\pi$.'
        },
        {
            q: '14. Khẳng định nào về tích phân suy rộng $\\int_0^1 \\frac{dx}{x^\\alpha}$ là ĐÚNG?',
            options: ['Hội tụ khi $\\alpha < 1$', 'Hội tụ khi $\\alpha > 1$', 'Hội tụ khi $\\alpha \\ge 1$', 'Phân kỳ với mọi $\\alpha$'],
            correct: 0,
            explain: 'Tích phân loại 2 tại cận 0 hội tụ khi $\\alpha < 1$.'
        },
        {
            q: '15. Theo định lý Lagrange, nếu $f(x)$ liên tục trên $[a, b]$ và khả vi trên $(a, b)$ thì:',
            options: [
                'Tồn tại $c \\in (a, b)$ sao cho $f(b) - f(a) = f\'(c)(b - a)$',
                '$f(a) = f(b)$',
                '$f\'(c) = 0$ với mọi $c$',
                'Không tồn tại $c$'
            ],
            correct: 0,
            explain: 'Công thức số gia hữu hạn Lagrange: $f(b) - f(a) = f\'(c)(b - a)$.'
        }
    ],

    // ========================================================
    // 6. GIẢI TÍCH I - MI1112 (Nhóm ngành 2: Kỹ năng đạo hàm & tích phân)
    // ========================================================
    'MI1112': [
        {
            q: '1. Đạo hàm của hàm số $y = \\ln(x^2 + 1)$ là:',
            options: ['$\\frac{2x}{x^2 + 1}$', '$\\frac{1}{x^2 + 1}$', '$\\frac{2}{x^2 + 1}$', '$\\frac{x}{x^2 + 1}$'],
            correct: 0,
            explain: '$y\' = \\frac{(x^2 + 1)\'}{x^2 + 1} = \\frac{2x}{x^2 + 1}$.'
        },
        {
            q: '2. Nguyên hàm $\\int e^{3x} dx$ bằng:',
            options: ['$\\frac{1}{3} e^{3x} + C$', '$3 e^{3x} + C$', '$e^{3x} + C$', '$\\frac{1}{9} e^{3x} + C$'],
            correct: 0,
            explain: '$\\int e^{ax} dx = \\frac{1}{a} e^{ax} + C$.'
        },
        {
            q: '3. Giới hạn $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$ bằng:',
            options: ['$2$', '$1$', '$0$', '$e$'],
            correct: 0,
            explain: 'VCB tương đương $e^{2x} - 1 \\sim 2x \\implies L = 2$.'
        },
        {
            q: '4. Tích phân xác định $\\int_0^1 x^3 dx$ có giá trị bằng:',
            options: ['$1/4$', '$1/3$', '$1/2$', '$1$'],
            correct: 0,
            explain: '$\\left[ \\frac{x^4}{4} \\right]_0^1 = \\frac{1}{4}$.'
        },
        {
            q: '5. Tiệm cận ngang của đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ là:',
            options: ['$y = 2$', '$y = 3$', '$x = 3$', '$y = -1/3$'],
            correct: 0,
            explain: '$\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3} = 2$.'
        },
        {
            q: '6. Đạo hàm của hàm số $y = \\sin(2x)$ là:',
            options: ['$2\\cos(2x)$', '$\\cos(2x)$', '$-2\\cos(2x)$', '$\\frac{1}{2}\\cos(2x)$'],
            correct: 0,
            explain: '$(\\sin u)\' = u\' \\cos u = 2\\cos(2x)$.'
        },
        {
            q: '7. Tích phân $\\int_1^e \\frac{1}{x} dx$ bằng:',
            options: ['$1$', '$0$', '$e$', '$\\ln(2)$'],
            correct: 0,
            explain: '$[\\ln x]_1^e = \\ln e - \\ln 1 = 1$.'
        },
        {
            q: '8. Giới hạn $\\lim_{x \\to 0} \\frac{\\tan(x)}{x}$ bằng:',
            options: ['$1$', '$0$', '$\\infty$', 'Không tồn tại'],
            correct: 0,
            explain: '$\\tan x \\sim x$ khi $x \\to 0$.'
        },
        {
            q: '9. Họ nguyên hàm của hàm số $f(x) = \\cos(x)$ là:',
            options: ['$\\sin(x) + C$', '$-\\sin(x) + C$', '$\\cos(x) + C$', '$-\\cos(x) + C$'],
            correct: 0,
            explain: '$\\int \\cos x dx = \\sin x + C$.'
        },
        {
            q: '10. Điểm dừng của hàm số $y = x^2 - 6x + 8$ là:',
            options: ['$x = 3$', '$x = 6$', '$x = 0$', '$x = -3$'],
            correct: 0,
            explain: '$y\' = 2x - 6 = 0 \\iff x = 3$.'
        },
        {
            q: '11. Giá trị nhỏ nhất của hàm số $y = x^2 + 2$ trên $\\mathbb{R}$ bằng:',
            options: ['$2$', '$0$', '$1$', 'Không có'],
            correct: 0,
            explain: '$x^2 \\ge 0 \\implies y \\ge 2$. Đạt tại $x = 0$.'
        },
        {
            q: '12. Khai triển Taylor của $e^x$ quanh $x = 0$ đến bậc 1 là:',
            options: ['$1 + x$', '$1 - x$', '$x$', '$1 + \\frac{x^2}{2}$'],
            correct: 0,
            explain: '$e^x = 1 + x + o(x)$.'
        },
        {
            q: '13. Tích phân $\\int_0^2 (2x + 1) dx$ có giá trị bằng:',
            options: ['$6$', '$4$', '$5$', '$8$'],
            correct: 0,
            explain: '$[x^2 + x]_0^2 = 4 + 2 = 6$.'
        },
        {
            q: '14. Hàm số $y = x^3$ có điểm uốn tại:',
            options: ['$(0, 0)$', '$(1, 1)$', '$(-1, -1)$', 'Không có điểm uốn'],
            correct: 0,
            explain: '$y\'\' = 6x = 0 \\iff x = 0$ và đổi dấu qua điểm này.'
        },
        {
            q: '15. Đạo hàm cấp 2 của $y = e^{2x}$ là:',
            options: ['$4e^{2x}$', '$2e^{2x}$', '$e^{2x}$', '$8e^{2x}$'],
            correct: 0,
            explain: '$y\' = 2e^{2x} \\implies y\'\' = 4e^{2x}$.'
        }
    ],

    // ========================================================
    // 7. GIẢI TÍCH I - MI1113 (Nhóm ngành 3: Cơ bản & Tối ưu)
    // ========================================================
    'MI1113': [
        {
            q: '1. Giới hạn $\\lim_{x \\to 2} (x^2 - 3x + 2)$ bằng:',
            options: ['$0$', '$2$', '$-1$', '$4$'],
            correct: 0,
            explain: 'Thay trực tiếp $x = 2$: $2^2 - 3(2) + 2 = 0$.'
        },
        {
            q: '2. Đạo hàm của hàm tổng chi phí $C(x) = x^4 - 2x^2 + 5$ là hàm chi phí biên tế:',
            options: ['$4x^3 - 4x$', '$4x^3 - 2x$', '$x^3 - 4x$', '$4x^3 - 4$'],
            correct: 0,
            explain: '$C\'(x) = 4x^3 - 4x$.'
        },
        {
            q: '3. Điểm dừng của hàm doanh thu $R(x) = -x^2 + 40x$ là:',
            options: ['$x = 20$', '$x = 40$', '$x = 0$', '$x = 10$'],
            correct: 0,
            explain: '$R\'(x) = -2x + 40 = 0 \\iff x = 20$.'
        },
        {
            q: '4. Tích phân $\\int_1^2 2x dx$ biểu thị lượng thay đổi sản lượng bằng:',
            options: ['$3$', '$4$', '$2$', '$5$'],
            correct: 0,
            explain: '$[x^2]_1^2 = 4 - 1 = 3$.'
        },
        {
            q: '5. Đạo hàm của hàm số $y = e^x$ là:',
            options: ['$e^x$', '$x e^{x-1}$', '$e$', '$1$'],
            correct: 0,
            explain: 'Hàm số mũ tự nhiên có đạo hàm là chính nó.'
        },
        {
            q: '6. Giới hạn $\\lim_{x \\to \\infty} \\frac{3x + 1}{x - 2}$ bằng:',
            options: ['$3$', '$1$', '$-1/2$', '$\\infty$'],
            correct: 0,
            explain: 'Chia cả tử và mẫu cho $x$: $\\lim \\frac{3 + 1/x}{1 - 2/x} = 3$.'
        },
        {
            q: '7. Nguyên hàm $\\int (3x^2 + 2x) dx$ là:',
            options: ['$x^3 + x^2 + C$', '$6x + 2 + C$', '$x^3 + 2x^2 + C$', '$3x^3 + x^2 + C$'],
            correct: 0,
            explain: '$\\int 3x^2 dx = x^3$, $\\int 2x dx = x^2$.'
        },
        {
            q: '8. Hàm số $y = 2x - 5$ đồng biến trên khoảng nào?',
            options: ['$(-\\infty, +\\infty)$', '$(0, +\\infty)$', '$(-\\infty, 0)$', 'Không đồng biến'],
            correct: 0,
            explain: '$y\' = 2 > 0$ với mọi $x$, do đó hàm luôn đồng biến.'
        },
        {
            q: '9. Đạo hàm của $y = \\sqrt{x}$ với $x > 0$ là:',
            options: ['$\\frac{1}{2\\sqrt{x}}$', '$\\frac{1}{\\sqrt{x}}$', '$2\\sqrt{x}$', '$\\frac{2}{\\sqrt{x}}$'],
            correct: 0,
            explain: 'Công thức đạo hàm căn cơ bản: $(\\sqrt{x})\' = \\frac{1}{2\\sqrt{x}}$.'
        },
        {
            q: '10. Tính giới hạn $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$:',
            options: ['$2$', '$0$', '$1$', '$\\infty$'],
            correct: 0,
            explain: 'Rút gọn: $\\frac{(x-1)(x+1)}{x-1} = x + 1 \\implies \\lim = 2$.'
        },
        {
            q: '11. Tích phân $\\int_0^1 e^x dx$ bằng:',
            options: ['$e - 1$', '$e$', '$1$', '$e + 1$'],
            correct: 0,
            explain: '$[e^x]_0^1 = e^1 - e^0 = e - 1$.'
        },
        {
            q: '12. Điểm cực tiểu của hàm số $y = x^2 - 4x + 5$ là:',
            options: ['$(2, 1)$', '$(4, 5)$', '$(0, 5)$', '$(1, 2)$'],
            correct: 0,
            explain: '$y\' = 2x - 4 = 0 \\iff x = 2; y(2) = 4 - 8 + 5 = 1$.'
        },
        {
            q: '13. Đạo hàm của hàm số $y = \\ln(x)$ ($x > 0$) là:',
            options: ['$\\frac{1}{x}$', '$-\\frac{1}{x^2}$', '$x$', '$\\frac{1}{2x}$'],
            correct: 0,
            explain: '$(\\ln x)\' = \\frac{1}{x}$.'
        },
        {
            q: '14. Diện tích hình chữ nhật có chu vi không đổi $20$ đạt lớn nhất khi chiều rộng bằng:',
            options: ['$5$', '$4$', '$6$', '$10$'],
            correct: 0,
            explain: 'Hình chữ nhật có diện tích lớn nhất khi nó là hình vuông cạnh $20/4 = 5$.'
        },
        {
            q: '15. Hệ số góc tiếp tuyến của đồ thị $y = x^2$ tại điểm có hoành độ $x = 3$ là:',
            options: ['$6$', '$9$', '$3$', '$12$'],
            correct: 0,
            explain: '$k = y\'(3) = 2(3) = 6$.'
        }
    ],

    // ========================================================
    // 8. GIẢI TÍCH I - MI1016 (CTTT: Calculus I - 100% English)
    // ========================================================
    'MI1016': [
        {
            q: '1. Evaluate the trigonometric limit: $\\lim_{x \\to 0} \\frac{\\tan(3x)}{x}$:',
            options: ['$3$', '$1$', '$0$', 'Does not exist'],
            correct: 0,
            explain: 'By equivalent infinitesimals: $\\tan(3x) \\sim 3x$ as $x \\to 0$, hence $\\lim = 3$.'
        },
        {
            q: '2. The derivative of $f(x) = x \\cdot \\ln(x)$ with respect to $x$ for $x > 0$ is:',
            options: ['$\\ln(x) + 1$', '$\\ln(x)$', '$1/x$', '$x + 1$'],
            correct: 0,
            explain: 'Apply the product rule: $f\'(x) = 1 \\cdot \\ln(x) + x \\cdot (1/x) = \\ln(x) + 1$.'
        },
        {
            q: '3. The improper integral $\\int_1^{+\\infty} \\frac{1}{x^2} dx$ converges to:',
            options: ['$1$', '$2$', '$0$', 'Diverges'],
            correct: 0,
            explain: '$\\lim_{t \\to \\infty} \\left[ -\\frac{1}{x} \\right]_1^t = 0 - (-1) = 1$.'
        },
        {
            q: '4. The horizontal asymptote of the rational function $f(x) = \\frac{3x^2 - 1}{x^2 + 4}$ is:',
            options: ['$y = 3$', '$y = 0$', '$x = 3$', 'No asymptote'],
            correct: 0,
            explain: '$\\lim_{x \\to \\pm \\infty} \\frac{3x^2 - 1}{x^2 + 4} = 3$.'
        },
        {
            q: '5. What is the value of the exponential limit $\\lim_{x \\to 0} (1 + 2x)^{1/x}$?',
            options: ['$e^2$', '$e$', '$1$', '$e^{1/2}$'],
            correct: 0,
            explain: 'Standard form $1^\\infty$: $e^{\\lim_{x \\to 0} \\frac{2x}{x}} = e^2$.'
        },
        {
            q: '6. The critical point of the cubic polynomial $f(x) = x^3 - 3x^2 + 2$ on $(0, 3)$ is:',
            options: ['$x = 2$', '$x = 1$', '$x = 0$', '$x = -1$'],
            correct: 0,
            explain: '$f\'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \\implies x = 2 \\in (0, 3)$.'
        },
        {
            q: '7. The radius of convergence $R$ for the power series $\\sum_{n=0}^{\\infty} \\frac{x^n}{3^n}$ is:',
            options: ['$3$', '$1/3$', '$1$', '$\\infty$'],
            correct: 0,
            explain: 'Using the ratio test: $R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right| = 3$.'
        },
        {
            q: '8. If $f\'(x) > 0$ for all $x \\in (a, b)$, then on that interval the function $f(x)$ is strictly:',
            options: ['Increasing', 'Decreasing', 'Constant', 'Concave down'],
            correct: 0,
            explain: 'A positive first derivative implies a strictly monotonically increasing function.'
        },
        {
            q: '9. Evaluate the definite integral: $\\int_0^{\\pi/2} \\sin(x) dx$:',
            options: ['$1$', '$0$', '$\\pi$', '$-1$'],
            correct: 0,
            explain: '$[-\\cos x]_0^{\\pi/2} = -\\cos(\\pi/2) - (-\\cos 0) = 0 + 1 = 1$.'
        },
        {
            q: '10. The Maclaurin series expansion for $e^{2x}$ up to degree 2 is:',
            options: ['$1 + 2x + 2x^2$', '$1 + 2x + 4x^2$', '$1 + x + x^2$', '$1 + 2x + x^2$'],
            correct: 0,
            explain: '$e^{2x} = 1 + (2x) + \\frac{(2x)^2}{2!} = 1 + 2x + 2x^2$.'
        },
        {
            q: '11. Find the inflection point of the curve $y = x^3 - 3x$:',
            options: ['$(0, 0)$', '$(1, -2)$', '$(-1, 2)$', '$(2, 2)$'],
            correct: 0,
            explain: '$y\'\' = 6x = 0 \\iff x = 0$; with $y(0) = 0$, the inflection point is $(0, 0)$.'
        },
        {
            q: '12. Using L\'Hôpital\'s Rule, evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$:',
            options: ['$1/2$', '$1$', '$0$', '$2$'],
            correct: 0,
            explain: 'Differentiating twice: $\\lim_{x \\to 0} \\frac{e^x - 1}{2x} = \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}$.'
        },
        {
            q: '13. The area of the region enclosed between $y = x$ and $y = x^2$ is:',
            options: ['$1/6$', '$1/3$', '$1/2$', '$1/12$'],
            correct: 0,
            explain: '$\\int_0^1 (x - x^2) dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.'
        },
        {
            q: '14. According to Rolle\'s Theorem, if $f(0) = f(2) = 0$ and $f$ is differentiable, there exists $c \\in (0, 2)$ such that:',
            options: ['$f\'(c) = 0$', '$f\'(c) = 1$', '$f\'\'(c) = 0$', '$f(c) = 2$'],
            correct: 0,
            explain: 'Rolle\'s Theorem guarantees at least one point where the instantaneous rate of change is zero.'
        },
        {
            q: '15. Which of the following series diverges by the $p$-series test?',
            options: ['$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$', '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$', '$\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$', '$\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.5}}$'],
            correct: 0,
            explain: 'For $\\frac{1}{\\sqrt{n}} = \\frac{1}{n^{1/2}}$, the exponent $p = 1/2 \\le 1$, which diverges.'
        }
    ],

    // ========================================================
    // 9. GIẢI TÍCH II - MI1121 (Nhóm ngành 1: Cực trị, Vi phân & Tích phân bội)[cite: 3]
    // ========================================================
    'MI1121': [
        {
            q: '1. Cho hàm số $z = x^2 y^3$. Đạo hàm riêng cấp một $\\frac{\\partial z}{\\partial x}$ bằng:',
            options: ['$2x y^3$', '$3x^2 y^2$', '$2x + 3y^2$', '$6xy$'],
            correct: 0,
            explain: 'Coi $y$ là hằng số: $\\frac{\\partial}{\\partial x}(x^2 y^3) = 2x y^3$.'
        },
        {
            q: '2. Cho miền phẳng $D$ giới hạn bởi đường tròn $x^2 + y^2 = 4$ nằm trong góc phần tư thứ nhất như hình vẽ bên dưới. Giá trị của $\\iint_D dxdy$ bằng:',
            svg: '<svg class="w-56 h-36 mx-auto bg-slate-950 rounded-xl p-2 border border-slate-800" viewBox="-10 -10 140 90"><line x1="0" y1="70" x2="120" y2="70" stroke="#475569" stroke-width="1.5"/><line x1="10" y1="80" x2="10" y2="5" stroke="#475569" stroke-width="1.5"/><text x="115" y="65" fill="#94a3b8" font-size="8">x</text><text x="15" y="10" fill="#94a3b8" font-size="8">y</text><path d="M 10 10 A 60 60 0 0 1 70 70 L 10 70 Z" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" stroke-width="2"/><text x="72" y="78" fill="#06b6d4" font-size="8">R=2</text><text x="25" y="45" fill="#10b981" font-size="8">x²+y²≤4</text></svg>',
            options: ['$\\pi$', '$4\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$'],
            correct: 0,
            explain: 'Tích phân $\\iint_D dxdy$ chính là diện tích $1/4$ hình tròn bán kính $R = 2$: $S = \\frac{1}{4} \\pi R^2 = \\frac{1}{4} \\pi (4) = \\pi$.'
        },
        {
            q: '3. Điểm dừng của hàm số $z = x^2 + y^2 - 4x + 6y + 1$ là:',
            options: ['$(2, -3)$', '$(-2, 3)$', '$(4, -6)$', '$(0, 0)$'],
            correct: 0,
            explain: 'Giải hệ: $z\'_x = 2x - 4 = 0 \\implies x = 2$; $z\'_y = 2y + 6 = 0 \\implies y = -3$.'
        },
        {
            q: '4. Đổi tích phân kép $\\iint_D f(x, y) dxdy$ sang tọa độ cực $(r, \\varphi)$. Định thức Jacobi $J$ của phép đổi biến bằng:',
            options: ['$r$', '$r^2$', '$1$', '$\\frac{1}{r}$'],
            correct: 0,
            explain: 'Định thức Jacobi khi chuyển sang tọa độ cực: $J = r$.'
        },
        {
            q: '5. Cho hàm số $z = f(x, y)$ khả vi tại $(x_0, y_0)$. Véctơ gradient $\\nabla f$ chỉ hướng nào?',
            options: ['Hàm số tăng nhanh nhất', 'Hàm số giảm nhanh nhất', 'Tiếp tuyến của đường mức', 'Không đổi'],
            correct: 0,
            explain: 'Véctơ gradient $\\nabla f$ luôn chỉ hướng hàm số có tốc độ biến thiên tăng nhanh nhất.'
        },
        {
            q: '6. Cho $z = e^{x^2 + y}$. Đạo hàm riêng cấp hai $\\frac{\\partial^2 z}{\\partial y^2}$ bằng:',
            options: ['$e^{x^2 + y}$', '$2x e^{x^2 + y}$', '$4x^2 e^{x^2 + y}$', '$0$'],
            correct: 0,
            explain: '$z\'_y = e^{x^2 + y} \\implies z\'\'_{yy} = e^{x^2 + y}$.'
        },
        {
            q: '7. Vi phân toàn phần $dz$ của hàm số $z = xy$ là:',
            options: ['$y dx + x dy$', '$x dx + y dy$', '$y dx - x dy$', '$dx dy$'],
            correct: 0,
            explain: '$dz = z\'_x dx + z\'_y dy = y dx + x dy$.'
        },
        {
            q: '8. Thể tích khối trụ tròn xoay $x^2 + y^2 \\le 4$ giới hạn bởi $0 \\le z \\le 3$ bằng:',
            options: ['$12\\pi$', '$4\\pi$', '$6\\pi$', '$8\\pi$'],
            correct: 0,
            explain: '$V = \\iint_{x^2+y^2 \\le 4} 3 dxdy = 3 \\cdot \\pi (2^2) = 12\\pi$.'
        },
        {
            q: '9. Điều kiện đủ để hàm hai biến $z = f(x, y)$ đạt CỰC TIỂU tại điểm dừng $M_0$ với $\\Delta = AC - B^2$ là:',
            options: ['$\\Delta > 0$ và $A > 0$', '$\\Delta > 0$ và $A < 0$', '$\\Delta < 0$', '$\\Delta = 0$'],
            correct: 0,
            explain: '$\\Delta > 0$ thì hàm có cực trị; $A > 0$ xác định điểm cực tiểu.'
        },
        {
            q: '10. Tính tích phân đường loại một $\\int_L (x + y) ds$ với $L$ là đoạn thẳng từ $(0,0)$ đến $(1,1)$:',
            options: ['$\\sqrt{2}$', '$2\\sqrt{2}$', '$1$', '$\\frac{\\sqrt{2}}{2}$'],
            correct: 0,
            explain: 'Tham số $x = t, y = t$ ($0 \\le t \\le 1$), $ds = \\sqrt{2} dt \\implies \\int_0^1 2t \\sqrt{2} dt = \\sqrt{2}$.'
        },
        {
            q: '11. Cho hàm số $z = \\ln(x^2 + y^2)$. Biểu thức $x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y}$ bằng:',
            options: ['$2$', '$1$', '$0$', '$x + y$'],
            correct: 0,
            explain: '$x \\frac{2x}{x^2+y^2} + y \\frac{2y}{x^2+y^2} = \\frac{2(x^2+y^2)}{x^2+y^2} = 2$.'
        },
        {
            q: '12. Theo định lý Green trên miền kín $D$ có biên trơn từng khúc $\\partial D$ định hướng dương:',
            options: [
                '$\\oint_{\\partial D} P dx + Q dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dxdy$',
                '$\\oint_{\\partial D} P dx + Q dy = \\iint_D \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} \\right) dxdy$',
                '$\\oint_{\\partial D} P dx + Q dy = 0$',
                '$\\oint_{\\partial D} P dx + Q dy = \\iint_D P Q dxdy$'
            ],
            correct: 0,
            explain: 'Công thức định lý Green chuẩn liên hệ tích phân đường loại 2 và tích phân kép.'
        },
        {
            q: '13. Đạo hàm theo hướng của véctơ đơn vị $\\vec{l} = (1, 0)$ của hàm $z = f(x, y)$ tại điểm $M_0$ chính là:',
            options: ['$\\frac{\\partial z}{\\partial x}(M_0)$', '$\\frac{\\partial z}{\\partial y}(M_0)$', '$\\|\\nabla z\\|$', '$0$'],
            correct: 0,
            explain: 'Hướng $(1, 0)$ cùng phương với trục hoành $Ox$, do đó đạo hàm theo hướng bằng đạo hàm riêng theo $x$.'
        },
        {
            q: '14. Mặt phẳng tiếp diện của mặt cong paraboloid $z = x^2 + y^2$ tại điểm $(1, 1, 2)$ có phương trình:',
            options: ['$2x + 2y - z - 2 = 0$', '$x + y - z = 0$', '$2x + 2y + z = 6$', '$x + y + z = 4$'],
            correct: 0,
            explain: '$F(x,y,z) = x^2 + y^2 - z = 0 \\implies \\nabla F(1,1,2) = (2, 2, -1) \\implies 2x + 2y - z - 2 = 0$.'
        },
        {
            q: '15. Tích phân ba lớp $\\iiint_V dxdydz$ biểu thị đại lượng nào của miền $V$?',
            options: ['Thể tích của khối $V$', 'Khối lượng với khối lượng riêng biến thiên', 'Diện tích bề mặt', 'Trọng tâm'],
            correct: 0,
            explain: 'Khi hàm dưới dấu tích phân bằng 1, tích phân ba lớp chính là thể tích của miền $V$.'
        }
    ],

    // ========================================================
    // 10. GIẢI TÍCH II - MI1122 (Nhóm ngành 2: Tính toán tích phân kép & bội 3)[cite: 3]
    // ========================================================
    'MI1122': [
        {
            q: '1. Cho hàm hai biến $z = 3x^2 - 2xy + y^2$. Đạo hàm riêng $\\frac{\\partial z}{\\partial y}$ là:',
            options: ['$-2x + 2y$', '$6x - 2y$', '$-2x$', '$2y$'],
            correct: 0,
            explain: '$\\frac{\\partial}{\\partial y}(3x^2 - 2xy + y^2) = -2x + 2y$.'
        },
        {
            q: '2. Tích phân kép $\\int_0^1 \\int_0^1 (x + y) dx dy$ có giá trị bằng:',
            options: ['$1$', '$1/2$', '$2$', '$3/2$'],
            correct: 0,
            explain: '$\\int_0^1 (1/2 + y) dy = \\left[ \\frac{y}{2} + \\frac{y^2}{2} \\right]_0^1 = 1$.'
        },
        {
            q: '3. Thể tích hình hộp chữ nhật giới hạn bởi $0 \\le x \\le 1, 0 \\le y \\le 2, 0 \\le z \\le 3$ bằng:',
            options: ['$6$', '$5$', '$1$', '$12$'],
            correct: 0,
            explain: '$V = 1 \\cdot 2 \\cdot 3 = 6$.'
        },
        {
            q: '4. Đạo hàm riêng cấp hai hỗn hợp $\\frac{\\partial^2 z}{\\partial x \\partial y}$ của $z = x^3 y^2$ bằng:',
            options: ['$6x^2 y$', '$3x^2 y^2$', '$2x^3 y$', '$6xy$'],
            correct: 0,
            explain: '$z\'_x = 3x^2 y^2 \\implies z\'\'_{xy} = (3x^2 y^2)\'_y = 6x^2 y$.'
        },
        {
            q: '5. Cho vi phân toàn phần $dz = (2x + y) dx + (x + 2y) dy$. Hàm số $z(x, y)$ có dạng:',
            options: ['$x^2 + xy + y^2 + C$', '$x^2 + 2xy + y^2 + C$', '$2x^2 + 2y^2 + C$', '$x^2 - xy + y^2 + C$'],
            correct: 0,
            explain: 'Lấy nguyên hàm: $\\int (2x + y) dx = x^2 + xy + C(y) \\implies C(y) = y^2 + C$.'
        },
        {
            q: '6. Tích phân $\\int_0^{\\pi/2} dx \\int_0^1 r dr$ bằng:',
            options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$', '$1$'],
            correct: 0,
            explain: '$\\frac{\\pi}{2} \\cdot \\left[ \\frac{r^2}{2} \\right]_0^1 = \\frac{\\pi}{4}$.'
        },
        {
            q: '7. Giá trị của $\\frac{\\partial z}{\\partial x}$ tại $(1, 0)$ của hàm $z = e^{2x + 3y}$ là:',
            options: ['$2e^2$', '$e^2$', '$3e^2$', '$6e^2$'],
            correct: 0,
            explain: '$z\'_x = 2e^{2x + 3y} \\implies z\'_x(1, 0) = 2e^2$.'
        },
        {
            q: '8. Điều kiện để biểu thức $P(x,y) dx + Q(x,y) dy$ là vi phân toàn phần của một hàm số $U(x, y)$ trên miền đơn liên là:',
            options: ['$\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$', '$\\frac{\\partial P}{\\partial x} = \\frac{\\partial Q}{\\partial y}$', '$\\frac{\\partial P}{\\partial y} = -\\frac{\\partial Q}{\\partial x}$', '$P = Q$'],
            correct: 0,
            explain: 'Điều kiện đối xứng đạo hàm chéo (định lý vi phân toàn phần).'
        },
        {
            q: '9. Điểm dừng của hàm số $z = x^2 + 2y^2 - 4x$ là:',
            options: ['$(2, 0)$', '$(0, 2)$', '$(4, 0)$', '$(0, 0)$'],
            correct: 0,
            explain: '$z\'_x = 2x - 4 = 0 \\implies x = 2$; $z\'_y = 4y = 0 \\implies y = 0$.'
        },
        {
            q: '10. Đổi biến sang tọa độ cầu $(\\rho, \\theta, \\varphi)$, phần tử thể tích $dV = dxdydz$ bằng:',
            options: ['$\\rho^2 \\sin\\theta d\\rho d\\theta d\\varphi$', '$\\rho d\\rho d\\theta d\\varphi$', '$\\rho^2 d\\rho d\\theta d\\varphi$', '$\\sin\\theta d\\rho d\\theta d\\varphi$'],
            correct: 0,
            explain: 'Định thức Jacobi của tọa độ cầu là $J = \\rho^2 \\sin\\theta$.'
        },
        {
            q: '11. Tích phân kép $\\iint_D 1 dxdy$ trên miền $D$ có diện tích bằng $10$ thì giá trị tích phân bằng:',
            options: ['$10$', '$5$', '$20$', '$0$'],
            correct: 0,
            explain: 'Tích phân của hàm $1$ trên miền $D$ chính bằng diện tích miền $D$.'
        },
        {
            q: '12. Cực trị của hàm số $z = x^2 + y^2$ là:',
            options: ['Cực tiểu tại $(0, 0)$ với $z_{min} = 0$', 'Cực đại tại $(0, 0)$', 'Không có cực trị', 'Cực tiểu tại $(1, 1)$'],
            correct: 0,
            explain: '$x^2 + y^2 \\ge 0$ với mọi $(x, y)$, đạt giá trị nhỏ nhất bằng $0$ tại $(0, 0)$.'
        },
        {
            q: '13. Phương trình pháp tuyến của mặt cong $z = x^2 + y^2$ tại điểm $(1, 1, 2)$ có véctơ chỉ phương là:',
            options: ['$(2, 2, -1)$', '$(1, 1, 2)$', '$(2, 2, 1)$', '$(1, 1, -1)$'],
            correct: 0,
            explain: 'Véctơ pháp tuyến $\\vec{n} = (z\'_x, z\'_y, -1) = (2, 2, -1)$.'
        },
        {
            q: '14. Tích phân đường loại hai $\\int_L x dx + y dy$ dọc theo đường tròn kín tâm $O$ bán kính $R$ bằng:',
            options: ['$0$', '$2\\pi R$', '$\\pi R^2$', '$R$'],
            correct: 0,
            explain: 'Biểu thức $x dx + y dy = d\\left(\\frac{x^2 + y^2}{2}\\right)$ là vi phân toàn phần, tích phân trên đường cong kín luôn bằng $0$.'
        },
        {
            q: '15. Độ dài vi phân cung trong không gian $ds$ của đường cong $r(t) = (x(t), y(t), z(t))$ là:',
            options: ['$\\sqrt{(x\')^2 + (y\')^2 + (z\')^2} dt$', '$\\sqrt{x^2 + y^2 + z^2} dt$', '$(x\' + y\' + z\') dt$', '$\\sqrt{x\' + y\' + z\'} dt$'],
            correct: 0,
            explain: 'Công thức vi phân cung không gian Euclid chuẩn.'
        }
    ],

    // ========================================================
    // 11. GIẢI TÍCH II - MI1026 (CTTT: Calculus II - 100% English)[cite: 3]
    // ========================================================
    'MI1026': [
        {
            q: '1. Find the partial derivative $\\frac{\\partial f}{\\partial x}$ for $f(x, y) = e^{xy}$:',
            options: ['$y e^{xy}$', '$x e^{xy}$', '$e^{xy}$', '$xy e^{xy}$'],
            correct: 0,
            explain: 'Treat $y$ as a constant: $\\frac{\\partial}{\\partial x}(e^{xy}) = y e^{xy}$.'
        },
        {
            q: '2. The gradient vector of $f(x, y) = x^2 + y^2$ at the point $(1, 2)$ is:',
            options: ['$(2, 4)$', '$(1, 2)$', '$(4, 2)$', '$(2, 2)$'],
            correct: 0,
            explain: '$\\nabla f = (2x, 2y) \\implies \\nabla f(1, 2) = (2, 4)$.'
        },
        {
            q: '3. In polar coordinates, the differential area element $dA = dx dy$ is transformed into:',
            options: ['$r dr d\\theta$', '$dr d\\theta$', '$r^2 dr d\\theta$', '$\\frac{1}{r} dr d\\theta$'],
            correct: 0,
            explain: 'The Jacobian determinant of the polar coordinate transformation is $r$, so $dA = r dr d\\theta$.'
        },
        {
            q: '4. What is the value of the double integral $\\int_0^2 \\int_0^1 1 dx dy$?',
            options: ['$2$', '$1$', '$3$', '$0$'],
            correct: 0,
            explain: 'The integral represents the area of the rectangle $[0, 1] \\times [0, 2]$, which is $1 \\times 2 = 2$.'
        },
        {
            q: '5. A stationary (critical) point of a differentiable function $f(x, y)$ satisfies:',
            options: [
                '$\\nabla f(x, y) = \\vec{0}$',
                '$f(x, y) = 0$',
                '$\\frac{\\partial^2 f}{\\partial x^2} = 0$',
                '$\\det(f) = 0$'
            ],
            correct: 0,
            explain: 'Critical points are found by setting both first partial derivatives simultaneously to zero: $\\nabla f = \\vec{0}$.'
        },
        {
            q: '6. The total differential $df$ of $f(x, y) = x^2 y$ is given by:',
            options: ['$2xy dx + x^2 dy$', '$x^2 dx + 2xy dy$', '$2x dx + y dy$', '$2xy (dx + dy)$'],
            correct: 0,
            explain: '$df = \\frac{\\partial f}{\\partial x} dx + \\frac{\\partial f}{\\partial y} dy = 2xy dx + x^2 dy$.'
        },
        {
            q: '7. By Green\'s Theorem, if $\\vec{F} = (P, Q)$ and $C$ is a positively oriented simple closed boundary of $D$:',
            options: [
                '$\\oint_C P dx + Q dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA$',
                '$\\oint_C P dx + Q dy = \\iint_D \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y}\\right) dA$',
                '$\\oint_C P dx + Q dy = 0$',
                '$\\oint_C P dx + Q dy = \\int_C (P + Q) ds$'
            ],
            correct: 0,
            explain: 'This is the standard circulation form of Green\'s Theorem.'
        },
        {
            q: '8. If the discriminant $D = f_{xx} f_{yy} - (f_{xy})^2 > 0$ and $f_{xx} < 0$ at critical point $(a, b)$, then $f$ has:',
            options: ['A local maximum', 'A local minimum', 'A saddle point', 'No conclusion'],
            correct: 0,
            explain: 'The second derivative test dictates that $D > 0$ with $f_{xx} < 0$ confirms a local maximum.'
        },
        {
            q: '9. Evaluate the line integral $\\int_C 1 ds$ where $C$ is the line segment from $(0,0)$ to $(3,4)$:',
            options: ['$5$', '$7$', '$25$', '$1$'],
            correct: 0,
            explain: 'The integral evaluates the arc length of the straight line segment: $\\sqrt{3^2 + 4^2} = 5$.'
        },
        {
            q: '10. The directional derivative of $f(x, y)$ in the direction of unit vector $\\vec{u}$ is given by:',
            options: ['$\\nabla f \\cdot \\vec{u}$', '$\\nabla f \\times \\vec{u}$', '$\\|\\nabla f\\| \\|\\vec{u}\\|$', '$\\frac{\\nabla f}{\\vec{u}}$'],
            correct: 0,
            explain: 'By definition: $D_{\\vec{u}} f = \\nabla f \\cdot \\vec{u}$.'
        },
        {
            q: '11. The Jacobian determinant $J$ of the transformation $x = 2u, y = 3v$ is:',
            options: ['$6$', '$5$', '$1$', '$0$'],
            correct: 0,
            explain: '$J = \\left| \\begin{matrix} 2 & 0 \\\\ 0 & 3 \\end{matrix} \\right| = 6$.'
        },
        {
            q: '12. Which of the following vector fields is conservative (irrotational) in $\\mathbb{R}^2$?',
            options: ['$\\vec{F} = (2x, 2y)$', '$\\vec{F} = (-y, x)$', '$\\vec{F} = (y^2, x)$', '$\\vec{F} = (2y, x)$'],
            correct: 0,
            explain: 'For $\\vec{F} = (2x, 2y)$, $\\frac{\\partial Q}{\\partial x} = 0 = \\frac{\\partial P}{\\partial y}$, meaning $\\text{curl}(\\vec{F}) = 0$.'
        },
        {
            q: '13. The volume of a sphere of radius $R$ computed by spherical coordinates is:',
            options: ['$\\frac{4}{3}\\pi R^3$', '$4\\pi R^2$', '$2\\pi R^3$', '$\\frac{1}{3}\\pi R^3$'],
            correct: 0,
            explain: 'Triple integral: $\\int_0^{2\\pi} d\\varphi \\int_0^\\pi \\sin\\theta d\\theta \\int_0^R \\rho^2 d\\rho = \\frac{4}{3}\\pi R^3$.'
        },
        {
            q: '14. A normal vector to the surface $z - x^2 - y^2 = 0$ at the point $(1, 2, 5)$ is:',
            options: ['$(2, 4, -1)$', '$(1, 2, 5)$', '$(2, 4, 1)$', '$(1, 1, 1)$'],
            correct: 0,
            explain: '$\\nabla G = (2x, 2y, -1) \\implies \\nabla G(1, 2, 5) = (2, 4, -1)$.'
        },
        {
            q: '15. Using Lagrange multipliers to find extrema of $f(x, y)$ subject to constraint $g(x, y) = 0$, we solve:',
            options: ['$\\nabla f = \\lambda \\nabla g$ and $g = 0$', '$\\nabla f \\cdot \\nabla g = 0$', '$\\nabla f + \\nabla g = \\vec{0}$', '$f = \\lambda g$'],
            correct: 0,
            explain: 'The gradient of $f$ must be collinear with the gradient of the constraint function $g$.'
        }
    ],

    // ========================================================
    // 12. GIẢI TÍCH III - MI1131 (Nhóm ngành 1: PTPV & Chuỗi hàm nâng cao)[cite: 4]
    // ========================================================
    'MI1131': [
        {
            q: '1. Nghiệm tổng quát của phương trình vi phân Bernoulli $y\' + \\frac{y}{x} = y^2$ ($x > 0$) là:',
            options: ['$y = \\frac{1}{x(C - \\ln x)}$', '$y = C x - \\ln x$', '$y = \\frac{x}{C - x}$', '$y = \\frac{1}{C x + \\ln x}$'],
            correct: 0,
            explain: 'Chia 2 vế cho $y^2$ và đặt $z = y^{-1}$, ta đưa về phương trình tuyến tính $z\' - \\frac{z}{x} = -1$. Nghiệm là $z = x(C - \\ln x) \\implies y = \\frac{1}{x(C - \\ln x)}$.'
        },
        {
            q: '2. Cho phương trình vi phân cấp hai thuần nhất $y\'\' - 4y\' + 4y = 0$. Một hệ nghiệm cơ bản của phương trình là:',
            options: ['$e^{2x}$ và $x e^{2x}$', '$e^{2x}$ và $e^{-2x}$', '$\\cos(2x)$ và $\\sin(2x)$', '$e^{4x}$ và $x e^{4x}$'],
            correct: 0,
            explain: 'Phương trình đặc trưng $k^2 - 4k + 4 = 0$ có nghiệm kép $k_1 = k_2 = 2$. Do đó hệ nghiệm cơ bản là $y_1 = e^{2x}$ và $y_2 = x e^{2x}$.'
        },
        {
            q: '3. Khai triển Fourier của hàm số chẵn $f(x)$ tuần hoàn chu kỳ $2\\pi$ trên $[-\\pi, \\pi]$ có đặc điểm:',
            options: ['Hệ số $b_n = 0$ với mọi $n \\ge 1$', 'Hệ số $a_n = 0$ với mọi $n \\ge 0$', 'Chỉ chứa các hàm số $\\sin(nx)$', '$a_0 = 0$ và $b_n = 0$'],
            correct: 0,
            explain: 'Với hàm chẵn, tích phân xác định tính hệ số $b_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(x) \\sin(nx) dx = 0$ vì tích phân của hàm lẻ đối xứng qua gốc tọa độ luôn triệt tiêu.'
        },
        {
            q: '4. Biến đổi Laplace của hàm số $f(t) = t \\cdot e^{3t}$ là:',
            options: ['$\\frac{1}{(s - 3)^2}$', '$\\frac{1}{s - 3}$', '$\\frac{1}{(s + 3)^2}$', '$\\frac{6}{(s - 3)^2}$'],
            correct: 0,
            explain: 'Ta có $\\mathcal{L}\\{t\\} = \\frac{1}{s^2}$. Áp dụng định lý dịch chuyển tần số: $\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a) \\implies \\mathcal{L}\\{t e^{3t}\\} = \\frac{1}{(s - 3)^2}$.'
        },
        {
            q: '5. Miền hội tụ của chuỗi hàm số $\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot 3^n}$ là:',
            options: ['[-3, 3)', '(-3, 3)', '[-3, 3]', '(-3, 3]'],
            correct: 0,
            explain: 'Bán kính hội tụ $R = 3$. Tại $x = -3$, chuỗi trở thành $\\sum \\frac{(-1)^n}{n}$ hội tụ (theo Leibniz). Tại $x = 3$, chuỗi $\\sum \\frac{1}{n}$ phân kỳ (chuỗi điều hòa). Vậy miền hội tụ là $[-3, 3)$.'
        },
        {
            q: '6. Nghiệm riêng của phương trình $y\'\' + y = \\sin(x)$ tìm theo phương pháp hệ số bất định có dạng:',
            options: ['$x(A \\cos x + B \\sin x)$', '$A \\cos x + B \\sin x$', '$A x \\sin x$', '$A e^x \\sin x$'],
            correct: 0,
            explain: 'Phương trình đặc trưng có nghiệm $k = \\pm i$. Vế phải có dạng $e^{\\alpha x} \\sin(\\beta x)$ với $\\alpha + i\\beta = i$ là nghiệm đơn của PTĐT (bội $r = 1$), do đó nghiệm riêng phải nhân thêm $x^1$.'
        },
        {
            q: '7. Biến đổi Laplace của đạo hàm cấp một $\\mathcal{L}\\{f\'(t)\\}$ với điều kiện $f(0) = y_0$ là:',
            options: ['$s F(s) - y_0$', '$s F(s) + y_0$', '$\\frac{F(s)}{s} - y_0$', '$s^2 F(s) - s y_0$'],
            correct: 0,
            explain: 'Theo tính chất biến đổi Laplace của đạo hàm: $\\mathcal{L}\\{f\'(t)\\} = s F(s) - f(0) = s F(s) - y_0$.'
        },
        {
            q: '8. Điều kiện cần để chuỗi hàm $\\sum_{n=1}^{\\infty} u_n(x)$ hội tụ đều trên đoạn $[a, b]$ theo tiêu chuẩn Weierstrass là:',
            options: ['Tồn tại chuỗi số dương $\\sum a_n$ hội tụ sao cho $|u_n(x)| \\le a_n, \\forall x \\in [a, b]$', '$u_n(x)$ liên tục với mọi $n$', '$\\lim u_n(x) = 0$', 'Tích phân từng số hạng bằng 0'],
            correct: 0,
            explain: 'Định lý Weierstrass (tiêu chuẩn hội tụ trội): nếu chuỗi số $\\sum a_n$ hội tụ và $|u_n(x)| \\le a_n$ trên $[a, b]$ thì chuỗi hàm hội tụ đều và tuyệt đối trên $[a, b]$.'
        },
        {
            q: '9. Nghiệm tổng quát của phương trình vi phân Euler - Cauchy $x^2 y\'\' - 2x y\' + 2y = 0$ ($x > 0$) là:',
            options: ['$y = C_1 x + C_2 x^2$', '$y = C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)$', '$y = C_1 x^2 + C_2 x^{-1}$', '$y = C_1 e^x + C_2 e^{2x}$'],
            correct: 0,
            explain: 'Phương trình chỉ số: $r(r - 1) - 2r + 2 = 0 \\iff r^2 - 3r + 2 = 0 \\implies r_1 = 1, r_2 = 2$. Nghiệm là $y = C_1 x + C_2 x^2$.'
        },
        {
            q: '10. Biến đổi Laplace ngược $\\mathcal{L}^{-1}\\left\\{\\frac{1}{s^2 + 9}\\right\\}$ bằng:',
            options: ['$\\frac{1}{3} \\sin(3t)$', '$\\sin(3t)$', '$\\cos(3t)$', '$\\frac{1}{3} \\cos(3t)$'],
            correct: 0,
            explain: 'Công thức chuẩn: $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2} \\implies \\mathcal{L}^{-1}\\left\\{\\frac{1}{s^2 + 3^2}\\right\\} = \\frac{1}{3} \\sin(3t)$.'
        },
        {
            q: '11. Cho chuỗi lũy thừa $\\sum_{n=0}^{\\infty} a_n (x - 2)^n$ có bán kính hội tụ $R = 4$. Khoảng hội tụ chắc chắn của chuỗi là:',
            options: ['(-2, 6)', '(-4, 4)', '(2, 6)', '(-6, 2)'],
            correct: 0,
            explain: 'Khoảng hội tụ là $|x - 2| < 4 \\iff -4 < x - 2 < 4 \\iff -2 < x < 6$.'
        },
        {
            q: '12. Phương trình vi phân cấp một $y\' + P(x)y = Q(x)$ có thừa số tích phân $\\mu(x)$ bằng:',
            options: ['$e^{\\int P(x) dx}$', '$e^{-\\int P(x) dx}$', '$\\int P(x) dx$', '$e^{\\int Q(x) dx}$'],
            correct: 0,
            explain: 'Nhân 2 vế với $\\mu(x) = e^{\\int P(x) dx}$ để vế trái trở thành đạo hàm của tích $[y \\cdot \\mu(x)]\'$.'
        },
        {
            q: '13. Đẳng thức Parseval trong chuỗi Fourier liên hệ giữa hàm số $f(x)$ và các hệ số Fourier biểu thị nguyên lý:',
            options: ['Bảo toàn năng lượng của tín hiệu dao động', 'Tính liên tục của hàm số', 'Bảo toàn số chiều không gian', 'Điều kiện khả vi bậc hai'],
            correct: 0,
            explain: 'Đẳng thức Parseval $\\frac{1}{\\pi} \\int_{-\\pi}^\\pi f^2(x) dx = \\frac{a_0^2}{2} + \\sum (a_n^2 + b_n^2)$ biểu diễn sự bảo toàn năng lượng trung bình giữa miền thời gian và miền tần số.'
        },
        {
            q: '14. Nghiệm của phương trình vi phân $y\' = \\frac{y}{x} + \\tan\\left(\\frac{y}{x}\\right)$ là phương trình vi phân cấp một loại:',
            options: ['Phương trình thuần nhất (đẳng cấp bậc 0)', 'Phương trình tuyến tính', 'Phương trình vi phân toàn phần', 'Phương trình Clairaut'],
            correct: 0,
            explain: 'Vế phải là hàm số phụ thuộc vào tỉ số $u = \\frac{y}{x}$, đây là phương trình thuần nhất cấp 1 (homogeneous ODE).'
        },
        {
            q: '15. Hệ phương trình vi phân tuyến tính cấp một $\\begin{cases} x\' = 2x + y \\\\ y\' = x + 2y \\end{cases}$ có ma trận hệ số $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$. Các giá trị riêng của ma trận $A$ là:',
            options: ['$\\lambda_1 = 1, \\lambda_2 = 3$', '$\\lambda_1 = 2, \\lambda_2 = 2$', '$\\lambda_1 = -1, \\lambda_2 = 3$', '$\\lambda_1 = 0, \\lambda_2 = 4$'],
            correct: 0,
            explain: '$\\det(A - \\lambda I) = (2 - \\lambda)^2 - 1 = 0 \\iff \\lambda^2 - 4\\lambda + 3 = 0 \\implies \\lambda_1 = 1, \\lambda_2 = 3$.'
        }
    ],

    // ========================================================
    // 13. GIẢI TÍCH III - MI1132 (Nhóm ngành 2: Giải PTPV & Fourier chuẩn)[cite: 4]
    // ========================================================
    'MI1132': [
        {
            q: '1. Nghiệm tổng quát của phương trình vi phân phân ly biến số $y\' = 3x^2 y$ là:',
            options: ['$y = C e^{x^3}$', '$y = C e^{3x}$', '$y = x^3 + C$', '$y = C e^{x^2}$'],
            correct: 0,
            explain: '$\\frac{dy}{y} = 3x^2 dx \\implies \\ln|y| = x^3 + C_1 \\implies y = C e^{x^3}$.'
        },
        {
            q: '2. Phương trình đặc trưng của $y\'\' - 5y\' + 6y = 0$ có các nghiệm là:',
            options: ['$k_1 = 2, k_2 = 3$', '$k_1 = -2, k_2 = -3$', '$k_1 = 1, k_2 = 6$', '$k_1 = -1, k_2 = -6$'],
            correct: 0,
            explain: '$k^2 - 5k + 6 = 0 \\iff (k - 2)(k - 3) = 0 \\implies k_1 = 2, k_2 = 3$.'
        },
        {
            q: '3. Nghiệm tổng quát của phương trình $y\'\' + 9y = 0$ là:',
            options: ['$y = C_1 \\cos(3x) + C_2 \\sin(3x)$', '$y = C_1 e^{3x} + C_2 e^{-3x}$', '$y = C_1 \\cos(9x) + C_2 \\sin(9x)$', '$y = (C_1 + C_2 x)e^{3x}$'],
            correct: 0,
            explain: 'Phương trình đặc trưng $k^2 + 9 = 0 \\implies k = \\pm 3i$. Nghiệm là tổ hợp lượng giác chu kỳ $\\omega = 3$.'
        },
        {
            q: '4. Biến đổi Laplace của hàm số $f(t) = e^{4t}$ bằng:',
            options: ['$\\frac{1}{s - 4}$', '$\\frac{1}{s + 4}$', '$\\frac{4}{s}$', '$\\frac{1}{s^2 + 16}$'],
            correct: 0,
            explain: 'Công thức chuẩn: $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s - a}$ với $a = 4$.'
        },
        {
            q: '5. Cho phương trình $y\' + 2y = 4$. Nghiệm riêng không đổi (hằng số) của phương trình là:',
            options: ['$y = 2$', '$y = 4$', '$y = 0$', '$y = 1$'],
            correct: 0,
            explain: 'Đặt $y = c \\implies y\' = 0 \\implies 2c = 4 \\implies c = 2$.'
        },
        {
            q: '6. Nghiệm của bài toán Cauchy $y\' = 2x$ với điều kiện đầu $y(0) = 5$ là:',
            options: ['$y = x^2 + 5$', '$y = x^2$', '$y = 2x + 5$', '$y = x^2 - 5$'],
            correct: 0,
            explain: '$y = \\int 2x dx = x^2 + C$. Thay $x = 0, y = 5 \\implies C = 5 \\implies y = x^2 + 5$.'
        },
        {
            q: '7. Khai triển Fourier của hàm số lẻ tuần hoàn chu kỳ $2\\pi$ chỉ chứa:',
            options: ['Các số hạng $\\sin(nx)$', 'Các số hạng $\\cos(nx)$', 'Cả $\\sin$ và $\\cos$', 'Chỉ hằng số $a_0$'],
            correct: 0,
            explain: 'Với hàm số lẻ thì $a_0 = 0$ và $a_n = 0$, chuỗi Fourier chỉ còn các số hạng dạng $\\sin(nx)$.'
        },
        {
            q: '8. Biến đổi Laplace ngược $\\mathcal{L}^{-1}\\left\\{\\frac{s}{s^2 + 4}\\right\\}$ bằng:',
            options: ['$\\cos(2t)$', '$\\sin(2t)$', '$\\frac{1}{2}\\sin(2t)$', '$e^{2t}$'],
            correct: 0,
            explain: 'Công thức chuẩn: $\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$ với $\\omega = 2$.'
        },
        {
            q: '9. Cấp của phương trình vi phân $y\'\'\' + 2(y\')^4 - y = x^2$ là:',
            options: ['$3$', '$4$', '$1$', '$2$'],
            correct: 0,
            explain: 'Cấp của phương trình vi phân là bậc của đạo hàm cao nhất xuất hiện trong phương trình (ở đây là $y\'\'\'$, tức cấp 3).'
        },
        {
            q: '10. Bán kính hội tụ của chuỗi lũy thừa $\\sum_{n=1}^{\\infty} \\frac{x^n}{5^n}$ là:',
            options: ['$5$', '$1/5$', '$1$', '$\\infty$'],
            correct: 0,
            explain: '$R = \\lim_{n \\to \\infty} \\left|\\frac{a_n}{a_{n+1}}\\right| = \\lim \\frac{5^{n+1}}{5^n} = 5$.'
        },
        {
            q: '11. Phương trình vi phân tuyến tính cấp hai có hệ số hằng số thuần nhất có dạng tổng quát là:',
            options: ['$y\'\' + p y\' + q y = 0$', '$y\'\' + p(x) y\' + q(x) y = f(x)$', '$y\'\' + y^2 = 0$', '$y\'\' + (y\')^2 = 0$'],
            correct: 0,
            explain: 'Dạng chuẩn có các hệ số $p, q$ là các hằng số thực và vế phải bằng 0.'
        },
        {
            q: '12. Biến đổi Laplace của hàm số $f(t) = t^2$ là:',
            options: ['$\\frac{2}{s^3}$', '$\\frac{1}{s^3}$', '$\\frac{2}{s^2}$', '$\\frac{6}{s^4}$'],
            correct: 0,
            explain: 'Công thức: $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}} \\implies \\mathcal{L}\\{t^2\\} = \\frac{2!}{s^3} = \\frac{2}{s^3}$.'
        },
        {
            q: '13. Cho phương trình $y\'\' - y = 0$. Nghiệm tổng quát của phương trình là:',
            options: ['$y = C_1 e^x + C_2 e^{-x}$', '$y = C_1 \\cos x + C_2 \\sin x$', '$y = C_1 e^x$', '$y = C_1 + C_2 x$'],
            correct: 0,
            explain: 'Phương trình đặc trưng $k^2 - 1 = 0 \\implies k = \\pm 1$. Nghiệm là tổ hợp hàm mũ $e^x$ và $e^{-x}$.'
        },
        {
            q: '14. Hệ số Fourier $a_0$ của hàm số $f(x) = 1$ trên đoạn $[-\\pi, \\pi]$ bằng:',
            options: ['$2$', '$1$', '$0$', '$\\pi$'],
            correct: 0,
            explain: '$a_0 = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi 1 dx = \\frac{1}{\\pi} (2\\pi) = 2$.'
        },
        {
            q: '15. Nghiệm của phương trình vi phân $y\' = 0$ là:',
            options: ['$y = C$ (hằng số)', '$y = x + C$', '$y = 0$', '$y = x$'],
            correct: 0,
            explain: 'Hàm số có đạo hàm bằng 0 trên một khoảng luôn là một hàm hằng số.'
        }
    ],

    // ========================================================
    // 14. GIẢI TÍCH III - MI1133 (Nhóm ngành 3: Mô hình hóa & Ứng dụng thực tế)[cite: 4]
    // ========================================================
    'MI1133': [
        {
            q: '1. Phương trình vi phân biểu thị định luật tăng trưởng tự nhiên (hoặc lãi kép liên tục) là:',
            options: ['$\\frac{dy}{dt} = k y$', '$\\frac{dy}{dt} = k t$', '$\\frac{d^2 y}{dt^2} = k y$', '$\\frac{dy}{dt} + y^2 = 0$'],
            correct: 0,
            explain: 'Tốc độ biến thiên tỉ lệ thuận với lượng hiện có: $\\frac{dy}{dt} = ky$, có nghiệm $y(t) = y_0 e^{kt}$.'
        },
        {
            q: '2. Nghiệm của phương trình vi phân $y\' = -0.05 y$ với điều kiện ban đầu $y(0) = 100$ là:',
            options: ['$y = 100 e^{-0.05 t}$', '$y = 100 e^{0.05 t}$', '$y = 100 - 0.05 t$', '$y = -0.05 t + C$'],
            correct: 0,
            explain: 'Phương trình phân ly: $y = C e^{-0.05 t}$. Do $y(0) = 100 \\implies C = 100$.'
        },
        {
            q: '3. Phương trình $y\' = 4$ có nghiệm thỏa mãn $y(1) = 10$ là:',
            options: ['$y = 4x + 6$', '$y = 4x + 10$', '$y = 4x$', '$y = 4x - 6$'],
            correct: 0,
            explain: '$y = 4x + C$. Thay $x = 1, y = 10 \\implies 4(1) + C = 10 \\implies C = 6$. Vậy $y = 4x + 6$.'
        },
        {
            q: '4. Biến đổi Laplace của hàm bước nhảy đơn vị Heaviside $u(t) = 1$ ($t \\ge 0$) là:',
            options: ['$\\frac{1}{s}$', '$1$', '$\\frac{1}{s^2}$', '$s$'],
            correct: 0,
            explain: '$\\mathcal{L}\\{1\\} = \\int_0^\\infty e^{-st} dt = \\frac{1}{s}$ (với $s > 0$).'
        },
        {
            q: '5. Cho phương trình cân bằng thị trường có giá $P(t)$ thỏa mãn $\\frac{dP}{dt} = -2(P - 50)$. Mức giá cân bằng dài hạn khi $t \\to +\\infty$ là:',
            options: ['$P = 50$', '$P = 0$', '$P = 100$', 'Vô cùng'],
            correct: 0,
            explain: 'Khi $t \\to \\infty$, $\\frac{dP}{dt} \\to 0 \\implies P - 50 = 0 \\implies P = 50$ (điểm cân bằng ổn định).'
        },
        {
            q: '6. Nghiệm của phương trình vi phân cấp hai $y\'\' = 0$ có dạng:',
            options: ['$y = C_1 x + C_2$', '$y = C_1 x^2$', '$y = C_1 e^x$', '$y = C$'],
            correct: 0,
            explain: 'Lấy tích phân hai lần liên tiếp: $y\' = C_1 \\implies y = C_1 x + C_2$.'
        },
        {
            q: '7. Chu kỳ dao động riêng $T$ của phương trình dao động điều hòa $y\'\' + 4y = 0$ bằng:',
            options: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$\\pi/2$'],
            correct: 0,
            explain: 'Tần số góc $\\omega = \\sqrt{4} = 2 \\implies T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2} = \\pi$.'
        },
        {
            q: '8. Biến đổi Laplace của hàm số dốc tuyến tính $f(t) = t$ ($t \\ge 0$) là:',
            options: ['$\\frac{1}{s^2}$', '$\\frac{1}{s}$', '$\\frac{2}{s^2}$', '$s^2$'],
            correct: 0,
            explain: '$\\mathcal{L}\\{t\\} = \\frac{1!}{s^{1+1}} = \\frac{1}{s^2}$.'
        },
        {
            q: '9. Nếu một chất phóng xạ có chu kỳ bán rã là $10$ năm thì hằng số phân rã $k$ trong mô hình $y\' = -ky$ thỏa mãn:',
            options: ['$e^{-10k} = 0.5$', '$e^{-10k} = 2$', '$10k = 0.5$', '$k = 0.5$'],
            correct: 0,
            explain: 'Sau $t = 10$ năm, khối lượng còn một nửa: $y(10) = y_0 e^{-10k} = 0.5 y_0 \\implies e^{-10k} = 0.5$.'
        },
        {
            q: '10. Tổng của chuỗi cấp số nhân lùi vô hạn $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$ bằng:',
            options: ['$2$', '$1.5$', '$3$', 'Phân kỳ'],
            correct: 0,
            explain: '$S = \\frac{a_1}{1 - q} = \\frac{1}{1 - 1/2} = 2$.'
        },
        {
            q: '11. Phương trình đặc trưng của $y\'\' + 3y\' + 2y = 0$ có nghiệm là:',
            options: ['$k = -1$ và $k = -2$', '$k = 1$ và $k = 2$', '$k = -1$ và $k = 2$', '$k = 0$ và $k = -3$'],
            correct: 0,
            explain: '$k^2 + 3k + 2 = 0 \\iff (k + 1)(k + 2) = 0 \\implies k_1 = -1, k_2 = -2$.'
        },
        {
            q: '12. Nghiệm tổng quát của phương trình $y\'\' + 3y\' + 2y = 0$ là:',
            options: ['$y = C_1 e^{-x} + C_2 e^{-2x}$', '$y = C_1 e^x + C_2 e^{2x}$', '$y = C_1 \\cos x + C_2 \\sin(2x)$', '$y = (C_1 + C_2 x)e^{-x}$'],
            correct: 0,
            explain: 'Tổ hợp tuyến tính của hai nghiệm cơ bản tương ứng với nghiệm thực phân biệt.'
        },
        {
            q: '13. Đạo hàm của hàm số $y = C e^{5x}$ là:',
            options: ['$5 C e^{5x}$', '$C e^{5x}$', '$\\frac{C}{5} e^{5x}$', '$5x C e^{5x}$'],
            correct: 0,
            explain: '$(C e^{5x})\' = C \\cdot (5x)\' e^{5x} = 5 C e^{5x}$.'
        },
        {
            q: '14. Trong phương trình dao động tắt dần $y\'\' + 2\\beta y\' + \\omega_0^2 y = 0$, đại lượng $\\beta$ được gọi là:',
            options: ['Hệ số cản (hệ số tắt dần)', 'Tần số góc riêng', 'Biên độ dao động', 'Pha ban đầu'],
            correct: 0,
            explain: 'Số hạng $2\\beta y\'$ biểu thị lực cản môi trường tỉ lệ thuận với vận tốc.'
        },
        {
            q: '15. Nghiệm của phương trình vi phân $y\' = y$ với $y(0) = 1$ là:',
            options: ['$y = e^x$', '$y = x + 1$', '$y = e^{-x}$', '$y = 1$'],
            correct: 0,
            explain: '$y = C e^x$. Do $y(0) = 1 \\implies C = 1 \\implies y = e^x$.'
        }
    ],

    // ========================================================
    // 15. GIẢI TÍCH III - MI1046 (CTTT: Differential Equations & Series - English 100%)[cite: 4]
    // ========================================================
    'MI1046': [
        {
            q: '1. The general solution of the separable differential equation $\\frac{dy}{dx} = 3x^2 y$ is:',
            options: ['$y = C e^{x^3}$', '$y = C e^{3x}$', '$y = x^3 + C$', '$y = C e^{x^2}$'],
            correct: 0,
            explain: 'Separating variables: $\\int \\frac{dy}{y} = \\int 3x^2 dx \\implies \\ln|y| = x^3 + C_1 \\implies y = C e^{x^3}$.'
        },
        {
            q: '2. The characteristic equation of the ODE $y\'\' - 4y\' + 4y = 0$ yields:',
            options: [
                'A repeated real root $r = 2$',
                'Distinct real roots $r = 2, -2$',
                'Complex conjugate roots $r = \\pm 2i$',
                'Distinct real roots $r = 0, 4$'
            ],
            correct: 0,
            explain: '$r^2 - 4r + 4 = 0 \\iff (r - 2)^2 = 0 \\implies r_1 = r_2 = 2$ (multiplicity 2).'
        },
        {
            q: '3. What is the Laplace transform of the sinusoidal function $f(t) = \\sin(2t)$?',
            options: ['$\\frac{2}{s^2 + 4}$', '$\\frac{s}{s^2 + 4}$', '$\\frac{2}{s + 2}$', '$\\frac{1}{s^2 + 4}$'],
            correct: 0,
            explain: 'Standard transform formula: $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$ with $\\omega = 2$.'
        },
        {
            q: '4. An integrating factor $I(x)$ for the first-order linear ODE $y\' + \\frac{2}{x} y = x$ ($x > 0$) is:',
            options: ['$x^2$', '$2x$', '$\\ln(x)$', '$e^{2x}$'],
            correct: 0,
            explain: '$I(x) = e^{\\int \\frac{2}{x} dx} = e^{2\\ln x} = e^{\\ln(x^2)} = x^2$.'
        },
        {
            q: '5. The Fourier series of an odd periodic function on $[-\\pi, \\pi]$ consists exclusively of:',
            options: ['Sine terms', 'Cosine terms', 'A constant term only', 'Exponential terms only'],
            correct: 0,
            explain: 'For an odd function, symmetry dictates $a_0 = 0$ and $a_n = 0$; only sine terms ($b_n$) remain.'
        },
        {
            q: '6. The inverse Laplace transform $\\mathcal{L}^{-1}\\left\\{\\frac{1}{s - 5}\\right\\}$ is given by:',
            options: ['$e^{5t}$', '$e^{-5t}$', '$5t$', '$\\sin(5t)$'],
            correct: 0,
            explain: 'Standard transform: $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s - a} \\implies \\mathcal{L}^{-1}\\left\\{\\frac{1}{s - 5}\\right\\} = e^{5t}$.'
        },
        {
            q: '7. The order of the differential equation $\\frac{d^2 y}{dt^2} + 5\\left(\\frac{dy}{dt}\\right)^3 + y = 0$ is:',
            options: ['$2$', '$3$', '$1$', '$5$'],
            correct: 0,
            explain: 'The order is determined by the highest derivative present in the equation, which is $\\frac{d^2 y}{dt^2}$ (order 2).'
        },
        {
            q: '8. If the characteristic roots of $y\'\' + b y\' + c y = 0$ are $r = 1 \\pm 3i$, the general solution is:',
            options: [
                '$y = e^t (C_1 \\cos(3t) + C_2 \\sin(3t))$',
                '$y = C_1 e^t + C_2 e^{3t}$',
                '$y = C_1 \\cos(3t) + C_2 \\sin(3t)$',
                '$y = e^{3t} (C_1 \\cos t + C_2 \\sin t)$'
            ],
            correct: 0,
            explain: 'For complex roots $\\alpha \\pm i\\beta$ with $\\alpha = 1, \\beta = 3$: $y = e^{\\alpha t}(C_1 \\cos(\\beta t) + C_2 \\sin(\\beta t))$.'
        },
        {
            q: '9. The radius of convergence $R$ of the geometric power series $\\sum_{n=0}^{\\infty} (2x)^n$ is:',
            options: ['$1/2$', '$2$', '$1$', '$\\infty$'],
            correct: 0,
            explain: 'Convergence requires $|2x| < 1 \\iff |x| < 1/2$. Thus $R = 1/2$.'
        },
        {
            q: '10. Using the Laplace transform, the differential equation $y\' + 3y = 0$ with $y(0) = 2$ transforms into:',
            options: ['$s Y(s) - 2 + 3 Y(s) = 0$', '$s Y(s) + 3 Y(s) = 0$', '$s Y(s) - 3 + 2 Y(s) = 0$', '$s^2 Y(s) - 2 = 0$'],
            correct: 0,
            explain: '$\\mathcal{L}\\{y\'\\} = s Y(s) - y(0) = s Y(s) - 2$. Adding $3Y(s)$ gives $(s + 3)Y(s) - 2 = 0$.'
        },
        {
            q: '11. Which ODE is exact (i.e., $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$)?',
            options: [
                '$(2x + y) dx + (x + 2y) dy = 0$',
                '$(2x - y) dx + (x + 2y) dy = 0$',
                '$y dx - x dy = 0$',
                '$x^2 dx + y^2 dy = 0$'
            ],
            correct: 0,
            explain: 'For $(2x + y)dx + (x + 2y)dy = 0$: $M_y = 1$ and $N_x = 1$. Since $M_y = N_x$, the equation is exact.'
        },
        {
            q: '12. What is the value of $\\mathcal{L}\\{t^3\\}$?',
            options: ['$\\frac{6}{s^4}$', '$\\frac{3}{s^4}$', '$\\frac{6}{s^3}$', '$\\frac{1}{s^4}$'],
            correct: 0,
            explain: '$\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}} \\implies \\mathcal{L}\\{t^3\\} = \\frac{3!}{s^4} = \\frac{6}{s^4}$.'
        },
        {
            q: '13. An equilibrium solution to the autonomous ODE $\\frac{dy}{dt} = y^2 - 4$ is:',
            options: ['$y = 2$ and $y = -2$', '$y = 4$ and $y = -4$', '$y = 0$', '$y = 2$ only'],
            correct: 0,
            explain: 'Equilibrium solutions occur where $\\frac{dy}{dt} = 0 \\iff y^2 - 4 = 0 \\implies y = \\pm 2$.'
        },
        {
            q: '14. The convolution property states that $\\mathcal{L}\\{(f * g)(t)\\}$ equals:',
            options: ['$F(s) \\cdot G(s)$', '$F(s) + G(s)$', '$\\frac{F(s)}{G(s)}$', '$\\int F(s) G(s) ds$'],
            correct: 0,
            explain: 'The Laplace transform turns a convolution integral in the time domain into a simple product in the $s$-domain.'
        },
        {
            q: '15. A second-order differential equation $y\'\' + P(x)y\' + Q(x)y = 0$ has how many linearly independent solutions in its fundamental set?',
            options: ['$2$', '$1$', '$3$', 'Infinitely many'],
            correct: 0,
            explain: 'The solution space of a second-order linear homogeneous ODE is exactly 2-dimensional.'
        }
    ]
};