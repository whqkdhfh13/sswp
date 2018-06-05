package randomstuff;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import javax.swing.UnsupportedLookAndFeelException;

public class NewJFrame extends javax.swing.JFrame {
    
// Initialize boolean variables and pause object
static boolean isFinished = false;
static boolean isStarted = false;
static boolean isPaused = false;
static boolean swt = false;
static final Object PAUSELCK = new Object();
static int howMany = 189;

// Initialize Swing GUI's own variables
public NewJFrame() {
    initComponents();
}

// <editor-fold defaultstate="collapsed" desc="This is my own functions">

public static void pl(Object a) {
    System.out.println(a);
}

public static List<Integer> FindP(int j, Object... n) {
    List<Integer> temp = new ArrayList<>();
    for (int i = 0; i < j; i++) {
	if (RandomStuff.isPalindromeWithOnlyInt(i)) temp.add(i);
    }
    if ((boolean)arrCheck(0, n)[0])
	    if ((boolean)n[(int)arrCheck(0, n)[1]])
		pl(String.format("There are %s palindromes below the number %s.", temp.size(), j));
    return temp;
}

public static Object[] arrCheck(int a, Object... x) {
    if (a > 5) {
	pl("arrCheck() function can only get a value upto 5.");
	throw new ArrayIndexOutOfBoundsException();
    }
    Object[] temp = new Object[5];
    for (int i = 0; i < 5; i++) {
	boolean tempNum = false;
	ArrayList<Object> tNums = new ArrayList<>();
	for (int j = 0; j < x.length; j++) {
	    if (x[j] instanceof Boolean && i == 0) {
		tempNum = true; tNums.add(j);
	    }
	    if (x[j] instanceof String && i == 1) {
		tempNum = true; tNums.add(j);
	    }
	    if (x[j] instanceof Integer && i == 2) {
		tempNum = true; tNums.add(j);
	    }
	    if (x[j] instanceof Double && i == 3) {
		tempNum = true; tNums.add(j);
	    }
	    if (x[j] instanceof Float && i == 4) {
		tempNum = true; tNums.add(j);
	    }
	}
	tNums.add(0, tempNum);
	temp[i] = tNums.toArray();
    }
    return (Object[])temp[a];
} // </editor-fold>

public static Object msT(double howMany, RandomStuff.Command aFunc, int n, Object... p) throws InterruptedException {
    float a = 0;
    boolean isTrue = false;
    String addedStr;
    

    if (howMany < 1) {
	howMany = 1;
    }

    if ((boolean)arrCheck(0, p)[0]) {
	for (int j = 1; j < arrCheck(0, p).length; j++) {
	    if ((boolean)p[(int)arrCheck(0, p)[j]]) isTrue = true;                
	}
    }

    if (!isTrue) new NewJFrame().setVisible(false);

    pl("Started measuring time...");
    
    // Prevent the error 
    TimeUnit.MILLISECONDS.sleep(200);

    for (double i = 0; i < howMany; i++) {

        switch ((int)i % 4) {
            default:
                addedStr = "● ";
                break;
            case 1:
                addedStr = "●● ";
                break;
            case 2:
                addedStr = "●●● ";
                break;
            case 3:
                addedStr = "●●●● ";
                break;
        }
                
        String progressStr = (int)i + " / " + (int)howMany + " - " + String.format("%.2f", 100 * i / howMany) + "%";
        
        if (!isStarted) {
            i = 0;
	    a = 0;
            isStarted = true;
            isPaused = true;
            progressStr = (int)i + " / " + (int)howMany + " - " + String.format("%.2f", 100 * i / howMany) + "%";
            abc.setText("Total elapsed time will be shown here...");
            abd.setText("Average elapsed time will be shown here...");
            abe.setText("◆ " + progressStr);
            acc.setValue(0);
            acc.setString("Waiting for user's input...");
        }
        
	if (isPaused) {
	    try {
		synchronized (PAUSELCK) {
		    PAUSELCK.wait();
		}
	    }
	    catch (InterruptedException e) {
		Thread.currentThread().interrupt();
	    }
	    isPaused = false;
	} 
	
	float st = System.nanoTime();
	aFunc.execute(n, p);
	float ft = System.nanoTime();
	a += (ft - st);    

        if (isPaused) {
            abe.setText(addedStr+ progressStr);
	    try {
		synchronized (PAUSELCK) {
		    PAUSELCK.wait();
		}
	    }
	    catch (InterruptedException e) {
		Thread.currentThread().interrupt();
	    }
	    isPaused = false;
	} 

	if (isTrue) {
	    abc.setText("Total elapsed time = "+String.format("%.5f", a/1e6f)+"ms");
	    abd.setText("Average elapsed time = "+String.format("%.5f", a/(1e6f * i))+"ms");
	    acc.setString("Running...");
	    acc.setValue((int) (10000*i/howMany));
	    abe.setText(addedStr + progressStr);
//            acc.setString(String.format("%.2f", 100 * i / howMany) + "% - " + (int)i + " / " + (int)howMany);
	}           

	if (i + 1 == howMany) {
	    isFinished = true;
	    acc.setString("Done!");
            abe.setText("◆ " + (int)howMany + " / " + (int)howMany + " - 100.00%");
	    if (jCheckBox1.isSelected()) {
		System.exit(0);
	    }
	    try {
		synchronized (PAUSELCK) {
		    PAUSELCK.wait();                        
		}
	    }
	    catch (InterruptedException e) {
		Thread.currentThread().interrupt();
	    }
	}     
	if (swt) {
	    i = 1;
	    swt = !swt;
	}
    }

    if ((boolean)arrCheck(1, p)[0]) {
	String tempS = "";
	for (int i = 1; i < arrCheck(1, p).length; i++) {
	    tempS += p[(int)arrCheck(1, p)[i]];
	}
	String[] tempArr = tempS.split("");
	for (String s : tempArr) {
	    if (s.equals("s"))
		return String.valueOf(a / (howMany * (float)p[(int)arrCheck(4, p)[1]]))+ (String)p[(int)arrCheck(1, p)[1]];
	}            
    }
    return a / (howMany * (float)p[(int)arrCheck(4, p)[1]]);
}


    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        abe = new javax.swing.JLabel();
        abc = new javax.swing.JLabel();
        acc = new javax.swing.JProgressBar();
        abd = new javax.swing.JLabel();
        jCheckBox1 = new javax.swing.JCheckBox();
        sb = new javax.swing.JButton();
        pb = new javax.swing.JButton();
        jSeparator1 = new javax.swing.JSeparator();
        jSeparator2 = new javax.swing.JSeparator();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(153, 255, 255));
        setBounds(new java.awt.Rectangle(1, 1, 30, 30));
        setResizable(false);
        setSize(new java.awt.Dimension(380, 180));

        jPanel1.setMaximumSize(new java.awt.Dimension(400, 200));
        jPanel1.setPreferredSize(new java.awt.Dimension(380, 152));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        abe.setHorizontalAlignment(javax.swing.SwingConstants.RIGHT);
        abe.setText("Prepared for " + (int)howMany + " rounds...");
        jPanel1.add(abe, new org.netbeans.lib.awtextra.AbsoluteConstraints(236, 6, 130, 19));

        abc.setForeground(new java.awt.Color(0, 0, 0));
        abc.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        abc.setText("Total elapsed time");
        abc.setToolTipText("");
        abc.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        abc.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        abc.setMaximumSize(new java.awt.Dimension(210, 16));
        abc.setMinimumSize(new java.awt.Dimension(180, 16));
        abc.setPreferredSize(new java.awt.Dimension(210, 16));
        jPanel1.add(abc, new org.netbeans.lib.awtextra.AbsoluteConstraints(18, 44, -1, -1));

        acc.setBackground(new java.awt.Color(15, 191, 186));
        acc.setForeground(new java.awt.Color(255, 153, 0));
        acc.setMaximum(10000);
        acc.setBorder(null);
        acc.setBorderPainted(false);
        acc.setRequestFocusEnabled(false);
        acc.setString("○ Waiting for user's input...");
        acc.setStringPainted(true);
        acc.setVerifyInputWhenFocusTarget(false);
        jPanel1.add(acc, new org.netbeans.lib.awtextra.AbsoluteConstraints(12, 6, 200, -1));

        abd.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        abd.setText("Average elapsed time");
        abd.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        abd.setMaximumSize(new java.awt.Dimension(210, 16));
        abd.setMinimumSize(new java.awt.Dimension(180, 16));
        abd.setPreferredSize(new java.awt.Dimension(210, 16));
        jPanel1.add(abd, new org.netbeans.lib.awtextra.AbsoluteConstraints(18, 66, -1, -1));

        jCheckBox1.setText("Close when done");
        jCheckBox1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox1ActionPerformed(evt);
            }
        });
        jPanel1.add(jCheckBox1, new org.netbeans.lib.awtextra.AbsoluteConstraints(259, 62, -1, -1));

        sb.setText("Start");
        sb.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                sbActionPerformed(evt);
            }
        });
        jPanel1.add(sb, new org.netbeans.lib.awtextra.AbsoluteConstraints(197, 88, 183, 64));

        pb.setForeground(new java.awt.Color(0, 0, 0));
        pb.setText("Pause");
        pb.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                pbActionPerformed(evt);
            }
        });
        jPanel1.add(pb, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 88, 192, 64));
        jPanel1.add(jSeparator1, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 28, 380, 10));

        jSeparator2.setOrientation(javax.swing.SwingConstants.VERTICAL);
        jPanel1.add(jSeparator2, new org.netbeans.lib.awtextra.AbsoluteConstraints(221, 0, 11, 28));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void pbActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_pbActionPerformed
        // TODO add your handling code here:
        if(isStarted && !isFinished) {
            isPaused = true;
            sb.setText("Resume");
            acc.setString("Waiting for user's input...");
        }
    }//GEN-LAST:event_pbActionPerformed

    private void sbActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_sbActionPerformed
        // TODO add your handling code here:
        pl("つO.0っ");
        if (!isStarted) {
            sb.setText("Restart");
        }

        if (isStarted && !isPaused){
            swt = true;
            isStarted = false;
            isFinished = false;
            sb.setText("Start");
        }

        if (isStarted && isPaused) {
            isPaused = false;
            sb.setText("Restart");
        }
        synchronized(PAUSELCK) {
            PAUSELCK.notifyAll();
        }
    }//GEN-LAST:event_sbActionPerformed

    private void jCheckBox1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jCheckBox1ActionPerformed

          // </editor-fold>
    
    public static void main(String... args) throws InterruptedException, InvocationTargetException {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Windows".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException | UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new NewJFrame().setVisible(true);	    
        });
        
        try {
            msT(howMany, RandomStuff::FindP, 2000000, 1e6f, 374, "ms", 12525, 1e7d, false, false, false, "hellooooowwererr", true, "Oysterr");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
    }
    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private static javax.swing.JLabel abc;
    private static javax.swing.JLabel abd;
    private static javax.swing.JLabel abe;
    private static javax.swing.JProgressBar acc;
    private static javax.swing.JCheckBox jCheckBox1;
    private static javax.swing.JPanel jPanel1;
    private javax.swing.JSeparator jSeparator1;
    private javax.swing.JSeparator jSeparator2;
    private static javax.swing.JButton pb;
    private static javax.swing.JButton sb;
    // End of variables declaration//GEN-END:variables
}


