//﻿/*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
package randomstuff;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import static randomstuff.RandomStuff.*;

/**
 *
 * @author j.cho18
 */
public class NewJFrame extends javax.swing.JFrame {
    
    static boolean isPaused = false;
    static boolean isFinished = false;
    static final Object PAUSELCK = new Object();
    static boolean swt = false;

    /**
     * Creates new form NewJFrame
     */
    public NewJFrame() {
        initComponents();
    }
    
    public static List<Integer> FindP(int j, Object... n) {
        List<Integer> temp = new ArrayList<>();
        for (int i = 0; i < j; i++) {
            if (isPalindromeWithOnlyInt(i)) temp.add(i);
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
    }
    
    public static Object msT(double howMany, Command aFunc, int n, Object... p) throws InterruptedException {
        float a = 0;
        boolean isTrue = false;
        
        if (howMany < 1) {
            howMany = 1;
        }
        
//        if (jButton1.getText() == "Start") {
//            jButton1.setText("Restart");
//        }
        
        if ((boolean)arrCheck(0, p)[0]) {
            for (int j = 1; j < arrCheck(0, p).length; j++) {
                if ((boolean)p[(int)arrCheck(0, p)[j]]) isTrue = true;                
            }
        }
        
        if (!isTrue) new NewJFrame().setVisible(false);
        
        pl("Started measuring time...");
        
        
        for (double i = 1; i < howMany + 1; i++) {
                        
            float st = System.nanoTime();
            aFunc.execute(n, p);
            float ft = System.nanoTime();
            a += (ft - st);            

            if (isTrue) {
                abc.setText("Total elapsed time = "+String.format("%.5f", a/1e6f)+"ms");
                abd.setText("Average elapsed time = "+String.format("%.5f", a/(1e6f * i))+"ms");
                abe.setText("Progress - " + (int)i + " / " + (int)howMany);
                acc.setValue((int) (10000*i/howMany));
                acc.setString(String.format("%.2f", 100 * i / howMany) + "%");
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
            }            
            if (i == howMany) {
                isFinished = true;
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
                a = 0;
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

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        acc = new javax.swing.JProgressBar();
        abe = new javax.swing.JLabel();
        abc = new javax.swing.JLabel();
        abd = new javax.swing.JLabel();
        jCheckBox1 = new javax.swing.JCheckBox();
        jToggleButton1 = new javax.swing.JToggleButton();
        jButton1 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(153, 255, 255));
        setBounds(new java.awt.Rectangle(1, 1, 30, 30));
        setFocusable(false);

        acc.setBackground(new java.awt.Color(204, 0, 0));
        acc.setForeground(new java.awt.Color(255, 153, 0));
        acc.setMaximum(10000);
        acc.setBorder(null);
        acc.setBorderPainted(false);
        acc.setString("");
        acc.setStringPainted(true);

        abe.setText("Progess");

        abc.setForeground(new java.awt.Color(0, 0, 0));
        abc.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        abc.setText("Value");
        abc.setToolTipText("");
        abc.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        abc.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        abc.setMaximumSize(new java.awt.Dimension(300, 16));

        abd.setHorizontalAlignment(javax.swing.SwingConstants.LEFT);
        abd.setText("jLabel2");
        abd.setVerticalAlignment(javax.swing.SwingConstants.TOP);

        jCheckBox1.setText("Close when done");
        jCheckBox1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox1ActionPerformed(evt);
            }
        });

        jToggleButton1.setText("Pause");
        jToggleButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jToggleButton1ActionPerformed(evt);
            }
        });

        jButton1.setText("Start");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(2, 2, 2)
                        .addComponent(jCheckBox1)
                        .addGap(18, 18, 18)
                        .addComponent(jToggleButton1)
                        .addGap(6, 6, 6)
                        .addComponent(jButton1))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                            .addComponent(abd, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(abc, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(acc, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addGap(12, 12, 12)
                        .addComponent(abe)))
                .addContainerGap(62, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(12, 12, 12)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(acc, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(2, 2, 2)
                        .addComponent(abe)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(abc, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(abd)
                .addGap(13, 13, 13)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(jToggleButton1)
                        .addComponent(jCheckBox1))
                    .addComponent(jButton1))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jToggleButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jToggleButton1ActionPerformed
        // TODO add your handling code here:
        if(!isFinished) {
            synchronized(PAUSELCK) {
                PAUSELCK.notifyAll();
            }
        }
        isPaused = !isPaused;
    }//GEN-LAST:event_jToggleButton1ActionPerformed

    private void jCheckBox1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox1ActionPerformed
        // TODO add your handling code here:
        if (isFinished && jCheckBox1.isSelected()) {
            System.exit(0);
        }
    }//GEN-LAST:event_jCheckBox1ActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
        pl("つO.0っ");
        jButton1.setText("Restart");
        if (isPaused) {
            jToggleButton1.doClick();
        }
        synchronized(PAUSELCK) {
            PAUSELCK.notifyAll();
        }
        swt = true;
//        Thread.currentThread().interrupt();
//        initComponents();
//        try {
//            main(new String[] {"restart"});
//        } catch (InterruptedException | InvocationTargetException ex) {
//            Logger.getLogger(NewJFrame.class.getName()).log(Level.SEVERE, null, ex);
//        }
    }//GEN-LAST:event_jButton1ActionPerformed

    /**
     * @param args the command line arguments
     * @throws java.lang.InterruptedException
     * @throws java.lang.reflect.InvocationTargetException
     */
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
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(NewJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            new NewJFrame().setVisible(true);
        });
        
        try {
            msT(100, RandomStuff::FindP, 2000000, 1e6f, 374, "ms", 12525, 1e7d, false, false, false, "hellooooowwererr", true, "Oysterr");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private static javax.swing.JLabel abc;
    private static javax.swing.JLabel abd;
    private static javax.swing.JLabel abe;
    private static javax.swing.JProgressBar acc;
    private static javax.swing.JButton jButton1;
    private static javax.swing.JCheckBox jCheckBox1;
    private javax.swing.JToggleButton jToggleButton1;
    // End of variables declaration//GEN-END:variables
}
