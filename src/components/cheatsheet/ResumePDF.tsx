"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Template } from "@/data/templateData";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

export const ResumePDF = ({ template }: { template: Template }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>{template.title}</Text>
      </View>
      {/* Render more template content here */}
      {template.data.map((item, index) => (
        <View style={styles.section} key={index}>
          <Text>
            {item.tag
              ? `${item.tag}: ${item.description}`
              : `${item.property}: ${item.description}`}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);
