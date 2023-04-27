export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
      };

      tickets: {
        Row: {
          assigned_to: string;
          category: string;
          created_at: string;
          id: number;
          priority: string;
          status: string;
          title: string;
        };
        Insert: {
          assigned_to?: string;
          category?: string;
          created_at?: string;
          id: number;
          priority?: string;
          status?: string;
          title?: string;
        };
        Update: {
          assigned_to?: string;
          category?: string;
          created_at?: string;
          id?: number;
          priority?: string;
          status?: string;
          title?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
