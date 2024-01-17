package com.starshop.giringrim.option.item;


import com.starshop.giringrim.option.Option;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "item_tb")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "option_id")
    private Option option;


    @Builder
    public Item(String itemName, Option option){
        this.itemName = itemName;
        this.option = option;
    }

    public void updateItem(String itemName){
        this.itemName = itemName;
    }
}

